import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import { AppServerModule } from './app/app.server';
import { AppServerModuleNgFactory } from './app/app.server.ngfactory';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.log(AppServerModuleNgFactory)

export { AppServerModuleNgFactory }
// AppModuleNgFactory
