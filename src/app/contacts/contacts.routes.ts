import { IStateProvider } from 'angular-ui-router';
import { AddContactContainer } from './containers/add-contact/add-contact.container';

export const routing = ($stateProvider: IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('add-contact', {
      parent: 'app',
      url: '/contact/add',
      component: AddContactContainer.selector
    })

    .state('contacts', {
      parent: 'app',
      url: '/contact',
      template: '<contacts></contacts>'
    });
};
