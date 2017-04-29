import 'zone.js/dist/zone-node';
import * as functions from 'firebase-functions';
import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import { AppServerModule } from './app/app.server';
import { AppServerModuleNgFactory } from './app/app.server.ngfactory';

enableProdMode();

function handleRequest(request:functions.Request, response:functions.Response):void {
  renderModuleFactory(AppServerModuleNgFactory, {url: request.url, document: '<html><body><app-root></app-root></body></html>'})
  .then(moduleText => {
    response.send(moduleText);
  })
  .catch(err => {
    response.set('Cache-Control', 'public, max-age=30, s-maxage=60');
    response.writeHead(500);
    response.end();
  })
}

export const render = functions.https.onRequest(handleRequest);
