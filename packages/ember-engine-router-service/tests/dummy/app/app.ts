import Application from '@ember/application';

import loadInitializers from 'ember-load-initializers';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Resolver from 'ember-resolver';

import config from './config/environment';

export default class DummyApp extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(DummyApp, config.modulePrefix);
