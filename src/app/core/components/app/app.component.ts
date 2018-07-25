import { IComponentOptions } from 'angular';

export class App implements IComponentOptions {
    static selector = 'app';
    static template = '<div class="app" ui-view></div>';
}
