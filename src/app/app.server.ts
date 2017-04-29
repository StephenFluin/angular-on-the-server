
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';


@NgModule({
  imports: [
	  ServerModule,
	  AppModule
  ],
  bootstrap: [
	  AppComponent
  ],
  providers: [
	//   { provide: NgModuleFactoryLoader, useClass: ServerRouterLoader }
  ]
})
export class AppServerModule {}
