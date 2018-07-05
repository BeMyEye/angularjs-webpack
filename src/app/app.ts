import * as angular from 'angular';
import './polyfills';

import '../style/app.css';

const app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  };
};

class AppCtrl {

  url = 'https://github.com/preboot/angular-webpack';

  constructor() {
    //
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
