import { Component } from "@angular/core";

@Component({
    selector: "app-home",
    template: `
                <h2>{{msg}}</h2>
                <p>This is our Home Component</p>
             `,
    styles: ['h2{color:red}']
})

export class HomeComponent{
    public msg = ' Welcome to Angular 10';
}