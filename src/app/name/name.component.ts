import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-name',
    template: `<h1  [ngClass]="className">{{name}}</h1>


    <div [ngSwitch]="age">
        <h2 *ngSwitchCase="20">You are young</h2>
        <h2 *ngSwitchCase="30">You are still young</h2>
        <h2 *ngSwitchCase="40">You are awesome</h2>
        <h2 *ngSwitchDefault>You rock</h2>
    </div>



        <input type="text" [(ngModel)]="name"/>

        <h3 [ngStyle]="obj">{{name}}</h3>


    <div *ngIf="true">NG IF Demo</div>

    
    <table border="1">
    <tr>
      <td>Value</td>
      <td>Index</td>
      <td>Odd</td>
      <td>Even</td>
      <td>First</td>
      <td>Last</td>
    </tr>
        <tr [class.blue]="o" [class.red]="e" *ngFor="let val of vals; let i=index; let o=odd;let e=even;let f=first;let l=last;">
            <td>
               {{val}}
            </td>
            <td>
                {{i}}
            </td>
            <td>
              {{o}}
            </td>
            <td>
                {{e}}
            </td>
            <td>
                {{f}}
            </td>
            <td>
                {{l}}
            </td>
        </tr>
        
    </table>
    
    `
})
export class NameComponent {
    @Input() name: string;

    className = "red blue";

    vals = [1, 2, 3, 4, 5, 6, 7];

    age: number = 80;

    obj = { 'background-color': 'red' };
    constructor() {
        // let age: number;

        // if (age == 20) console.log("You are young");
        // if (age == 30) console.log("You are still young");
        // if (age === 40) console.log("You are awesome");
        // else console.log("You rock");


        // switch (age) {
        //     case 20:
        //         console.log("You are young");
        //         break;
        //     case 30:
        //         console.log("You are still young");
        //         break;
        //     case 40:
        //         console.log("You are awesome");
        //         break;
        //     default:
        //         console.log("You rock");
        // }


    }


}