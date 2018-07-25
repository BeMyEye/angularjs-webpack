import './polyfills';
import './vendor';

import './global.scss';

// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Application Modules
 */
import { moduleName as contactsModule } from './app/contacts/contacts.module';
import { moduleName as coreModule } from './app/core/core.module';

export const moduleName =
  angular.module('app', [
    coreModule,
    contactsModule
  ])
    .name;
