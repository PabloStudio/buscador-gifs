// Importaciones
import { NgModule } from '@angular/core';

// Importaciones de PrimeNG.
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';

// Decorador.
@NgModule({
  declarations: [], // Declaraciones.
  exports: // Exportaciones.
  [
    ButtonModule,
    SidebarModule,
    InputTextModule,
    DialogModule,
    SelectButtonModule,
    TooltipModule
  ]
})

// Clase
export class PrimeModule {}
