import { Component,Input } from '@angular/core';

@Component({
    selector: 'app-name',
    template: '<h1>{{name}}</h1>'
})
export class NameComponent {
    @Input() name: string;
}