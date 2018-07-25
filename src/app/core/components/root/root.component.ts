import { IComponentOptions } from 'angular';

export class Root implements IComponentOptions {
    static selector = 'root';
    static template = '<div ui-view></div>';
}
