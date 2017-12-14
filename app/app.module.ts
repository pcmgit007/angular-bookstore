import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app.routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './HomeComponent/home.component';
import { DashboardComponent } from './DashboardComponent/dashboard.component';
import { AboutComponent } from './AboutComponent/about.component';
import { ContactComponent } from './ContactComponent/contact.component';
import { PageNotFoundComponent } from './PageNotFoundComponent/pageNotFound.component';


@NgModule({
    imports: [BrowserModule, AppRouterModule],
    declarations: [AppComponent, HomeComponent, DashboardComponent,
                 AboutComponent, ContactComponent, PageNotFoundComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}