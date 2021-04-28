import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltHomePageRoutingModule } from './alt-home-routing.module';

import { AltHomePage } from './alt-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltHomePageRoutingModule
  ],
  declarations: [AltHomePage]
})
export class AltHomePageModule {}
