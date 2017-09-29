# Atomic Fuel
This package contains all of the front end library code for Atomic Jolt apps. It includes all front end code that was previosly in the `client/libs` directory.

## Installation
You should install atomic fuel into each individual app, not in the client directory. Just add as a regular dependency.

`yarn add atomic-fuel`

## Usage
All of the code is found in the libs folder which has the following structure
```
libs/
-- actions
-- api
-- constants
-- dev
-- loaders
-- middleware
-- reducers
-- store
```
If you wanted to use, for example, `libs/store/configure_store.js` you would write the following:
```Javascript
import configureStore from 'atomic-fuel/libs/configure_store.js';
```