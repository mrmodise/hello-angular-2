/* Import the libraries to work with. see https://angular.io/docs/ts/latest/api for more info */ 
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/* First component, each component has three things:
decorator (has info about the controller) with the @ symbol, a view (template) and 
the controller part the JS that adds functionality to the view*/
@Component({
	selector: 'app',
	template: '<h1>Hello Mr Modise</h1>'
})

// our class to bootstrap the application
export class AppComponent{}

// bootstrapping our application
bootstrap(AppComponent);