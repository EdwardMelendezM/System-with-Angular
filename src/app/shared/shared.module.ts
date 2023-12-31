import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import {  ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalSmallComponent } from './components/modal-small/modal-small.component';
import { FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import {CustomPipe} from "../pipes/custom.pipe";



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    ModalComponent,
    ModalSmallComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxEditorModule,

  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    SearchBoxComponent,
    ModalComponent
  ]
})
export class SharedModule { }
