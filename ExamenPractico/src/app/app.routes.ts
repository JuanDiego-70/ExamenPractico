import { Routes } from '@angular/router';
import { Listar } from './Producto/listar/listar';
import { Add } from './Producto/add/add';
import { Edit } from './Producto/edit/edit';
import { ListarTipo } from './TipoProducto/listar-tipo/listar-tipo';
import { AddTipo } from './TipoProducto/add-tipo/add-tipo';
import { EditTipo } from './TipoProducto/edit-tipo/edit-tipo';

export const routes: Routes = [
  { path: 'listar', component: Listar },
  { path: 'add', component: Add },
  { path: 'edit', component: Edit },

  { path: 'listar-tipos', component: ListarTipo },
  { path: 'add-tipos', component: AddTipo },
  { path: 'edit-tipos', component: EditTipo },

  { path: '', component: Listar }

];