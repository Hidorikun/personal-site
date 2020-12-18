import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutMeCardComponent } from './about-me-card/about-me-card.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ChessComponent } from './chess/chess.component'
import { ProfileComponent } from './profile/profile.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    AboutMeCardComponent,
    ChessComponent,
    ProjectListComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
