import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoAlojamientosComponent } from './alojamiento/listado-alojamientos/listado-alojamientos.component';
import { FormularioAlojamientosComponent } from './alojamiento/formulario-alojamientos/formulario-alojamientos.component';
import { ListadoHabitacionesComponent } from './habitaciones/listado-habitaciones/listado-habitaciones.component';
import { FormularioHabitacionesComponent } from './habitaciones/formulario-habitaciones/formulario-habitaciones.component';
import { ListadoUsuariosComponent } from './usuarios/listado-usuarios/listado-usuarios.component';
import { FormularioUsuariosComponent } from './usuarios/formulario-usuarios/formulario-usuarios.component';



@NgModule({
  declarations: [
    ListadoAlojamientosComponent,
    FormularioAlojamientosComponent,
    ListadoHabitacionesComponent,
    FormularioHabitacionesComponent,
    ListadoUsuariosComponent,
    FormularioUsuariosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
