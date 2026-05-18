import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TipoProducto } from '../../Modelo/TipoProducto';
import { ServiceTipo } from '../../Service/service-tipo';
import { AddTipo } from '../add-tipo/add-tipo';

@Component({
  selector: 'app-listar-tipo',
  imports: [CommonModule, RouterModule, AddTipo],
  templateUrl: './listar-tipo.html',
  styleUrl: './listar-tipo.css',
})
export class ListarTipo implements OnInit {
  tiposProductos: TipoProducto[] = [];

  mostrarVentana: boolean = false;
  mostrarEliminar: boolean = false;
  tiposProductoEliminar!: TipoProducto;

  constructor(
    private service: ServiceTipo,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.cargarTiposProductos();
  }

  cargarTiposProductos() {
    this.service.getTipoProducto().subscribe(data => {
      this.tiposProductos = data;
      this.cdr.detectChanges();
    })
  }

  tiposProductoRegistrado() {
    this.cargarTiposProductos();
    this.mostrarVentana = true;
    this.cdr.detectChanges();
  }

  Editar(tipoProducto: TipoProducto): void {
    localStorage.setItem("idTipo", tipoProducto.idTipo.toString());
    this.router.navigate(["edit-tipos"]);
  }

  Delete(tipoProducto: TipoProducto): void {
    this.tiposProductoEliminar = tipoProducto;
  }

  ConfirmarEliminar(): void {
    if (this.tiposProductoEliminar) {
      this.service.deleteProducto(this.tiposProductoEliminar).subscribe(data => {
        this.cargarTiposProductos();
        this.mostrarEliminar = true;
        this.cdr.detectChanges();

        const modalElement = document.getElementById('modalConfirmarEliminar');
        if (modalElement) {
          const bootstrap = (window as any).bootstrap;
          if (bootstrap) {
            const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
            modalInstance.hide();
          }
        }

        setTimeout(() => {
          this.mostrarEliminar = false;
          this.cdr.detectChanges();
        }, 3000);
      });
    }
  }


}
