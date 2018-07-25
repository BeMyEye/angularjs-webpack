import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';
import { App } from './components/app/app.component';

export const routing = ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
  'ngInject';
  $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      component: App.selector
    });

  $urlRouterProvider.otherwise('/app/contact');
};
