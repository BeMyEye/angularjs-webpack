import { ILocationProvider } from 'angular';

export const configuration = ($locationProvider: ILocationProvider) => {
  'ngInject';
  $locationProvider.hashPrefix('');
};
