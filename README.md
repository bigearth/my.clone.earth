# React app for my.clone.earth

Based on [react-starter-kit](https://github.com/kriasoft/react-starter-kit).

## How to run locally

### Prerequisites

1. install [yarn](https://yarnpkg.com/en/)
  * `npm install yarn -g`
2. Install [nvm](https://github.com/creationix/nvm)
3. `nvm install "6.9.4"`

### Steps to run locally

1. Clone the repo
  * `git clone git@github.com:bigearth/my.clone.earth.git`
2. `cd my.clone.earth/`
3. Use the version of node specified in our `.nvmrc`
  * `nvm use`
4. Install the deps listed in `package.json`
  * `yarn install`
5. `yarn start` (automatically opens http://localhost:3001/ in your default browser)

All relevant files are in the src/ directory. Make the codez!

## Adding routes

1. Add the route to the `children` array in `/routes/index.js`
  ```js
  {
    path: '/users',
    load: () => import(/* webpackChunkName: 'users' */ './users'),
  },
  ```
2. Create a new directory in the `routes/` directory which matches your newly created route
  * In the new directory add an index.js and a .js and .css file which match your new route.
  * `routes/users/index.js`
  * `routes/users/Users.js`
  * `routes/users/Users.css`
