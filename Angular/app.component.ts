/* App component is the root component of your project, every component will nested or comes under 
this component. */

// Component is a class under @angular/core package. (it is required to use Component decorator).

import { Component } from "@angular/core";

// @ symbol define as a decorate so @Component is an decorator 

/*Component must have three properties declaration i.e
1.selector = tag,
2.template or templateUrls = html code,
3.styles or styleUrls = css code,*/

@Component({
  //multiple ways of selector..
  // selector:'.app-root', // <div class="app-root"></div>
  // selector:'[app-root]', // <div app-root></div>
  selector:'app-root', // <app-root></app-root> (which is already created in index.html)

  //multiple ways to write html code (file or code)..
  templateUrl:'./app.component.html', // file
  /* template:`<div>
              This is Root Component !
            </div>`, // code */

  //multiple ways to write style code (file or code)..
  // styleUrls:'./app.component.scss', // file
  styles:[`div{
              color:blue;
            }`], // code
})

//AppComponent is a class because to add functionality like method variables or methods related to this component.
//export is used so we can access in app.module and in other component for reuse the functionality.

export class AppComponent{}