import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { renderModuleFactory } from '@angular/platform-server';
import { AppModuleNgFactory } from './app/app.module.ngfactory';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppModuleNgFactory }
// AppModuleNgFactory
