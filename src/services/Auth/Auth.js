import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: `${process.env.AUTH0_DOMAIN}`,
    clientID: `${process.env.AUTH0_CLIENTID}`,
    redirectUri: `${process.env.AUTH0_REDIRECT_URI}`,
    audience: `${process.env.AUTH0_AUDIENCE}`,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    localStorage.setItem('last_page', window.location.href);
    this.auth0.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    this.getProfile(function(err, userData) {
      localStorage.setItem('user_data', JSON.stringify(userData));

      // navigate to the last visited route
      let previous_url = localStorage.getItem('last_page') || '/';
      window.location.href = previous_url;
    });
  }

  getSession() {
    return {
      'access_token': localStorage.getItem('access_token'),
      'id_token': localStorage.getItem('id_token'),
      'expires_at': localStorage.getItem('expires_at'),
      'user_data': localStorage.getItem('user_data')
    }
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_data');
    localStorage.removeItem('last_page');
    // navigate to the home route
    window.location.href = '/';
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time

    let expiresAt = localStorage.getItem('expires_at');
    if(expiresAt) {
      return new Date().getTime() < expiresAt;
    } else {
      return false;
    }
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  getIdToken() {
    return localStorage.getItem('id_token');
  }

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    let idToken = this.getIdToken();

    this.auth0.client.userInfo(accessToken, (err, profile) => {
      var auth0Manage = new auth0.Management({
        domain: `${process.env.AUTH0_DOMAIN}`,
        token: idToken
      });

      auth0Manage.getUser(profile.sub, (err, userData) => {
        cb(err, userData);
      });

    });

  }
}
