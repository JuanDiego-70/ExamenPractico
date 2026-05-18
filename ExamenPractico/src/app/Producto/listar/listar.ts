import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Service } from '../../Service/service';
import { Producto } from '../../Modelo/Producto';
import { Add } from '../add/add'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar',
  imports: [CommonModule, RouterModule, Add, FormsModule],
  templateUrl: './listar.html',
  styleUrl: './listar.css',
})
export class Listar implements OnInit {
  productos: Producto[] = [];
  productoFlitrado: Producto[] = [];
  textoBusqueda: string = '';

  mostrarVentana: boolean = false;
  mostrarEliminar: boolean = false;
  productoParaEliminar!: Producto;

  constructor(
    private service: Service,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.service.getProductos().subscribe(data => {
      this.productos = data;
      this.filtrarProductos();
      this.cdr.detectChanges();
    });
  }

  productoRegistrado() {
    this.cargarProductos();
    this.mostrarVentana = true;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.mostrarVentana = false;
      this.cdr.detectChanges();
    }, 3000);
  }

  Editar(producto: Producto): void {
    localStorage.setItem("idProducto", producto.idProducto.toString());
    this.router.navigate(["edit"]);
  }

  Delete(producto: Producto): void {
    this.productoParaEliminar = producto;
  }

  ConfirmarEliminar(): void {
    if (this.productoParaEliminar) {
      this.service.deleteProducto(this.productoParaEliminar).subscribe(data => {
        this.cargarProductos();
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

  filtrarProductos(): void {
    const texto = this.textoBusqueda.toLowerCase().trim();

    if (!texto) {
      this.productoFlitrado = this.productos;
    } else {
      this.productoFlitrado = this.productos.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.tipoProducto.nombreTipo.toLowerCase().includes(texto)

      );
    }

  }
}