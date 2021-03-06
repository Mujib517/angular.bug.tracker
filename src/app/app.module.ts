import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NameComponent } from './name/name.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, NameComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }