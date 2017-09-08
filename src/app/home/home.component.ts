import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `<h1>Home Page</h1> 

                <button [disabled]="disableBtn" (click)="onClick()">My Button</button>

                <input type="text" [(ngModel)]="myProperty"/>
                <h4 [class.red]="disableBtn">{{myProperty}}</h4>

                <h3> {{1+2}}</h3>
                <h3>{{'Mujib'+' ' +'Rahman'}}

                <h5>{{myProperty?'true':'false'}}</h5>

                <h3 [style.border]="disableBtn?'1px solid black':'none'">{{myFun()}}</h3>
                
                <select (change)="onChange()">
                    <optgroup>
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                    </optgroup>
                </select>              
                `
})
export class HomeComponent {

    disableBtn: boolean = true;

    myProperty: string = "Hello Angular";

    onClick() {
        console.log("Button is clicked");
    }

    onChange() {
        console.log("Value changed!!");
    }

    myFun(): string {
        //1sec.no side effects
        return "Hello World";
    }

}