
import { NgModule } from '@angular/core';

import {SidebarModule} from 'primeng/sidebar';
import {OverlayPanelModule} from 'primeng/overlaypanel';

@NgModule({
  exports: [
    SidebarModule,
    OverlayPanelModule
  ],
  declarations: []
})
export class PrimeNgModule {}