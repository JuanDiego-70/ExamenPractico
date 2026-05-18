import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Service } from '../../Service/service';
import { Producto } from '../../Modelo/Producto';
import { TipoProducto } from '../../Modelo/TipoProducto';
import { ServiceTipo } from '../../Service/service-tipo';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit implements OnInit {

  producto: Producto = {
    idProducto: 0,
    nombre: '',
    cantidad: null as any,
    tipoProducto: new TipoProducto()
  };

  tipos: TipoProducto[] = [];

  formValidacion: boolean = false;

  constructor(
    private service: Service,
    private serviceTipo: ServiceTipo,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.serviceTipo.getTipoProducto().subscribe(data => {
      this.tipos = data;
      this.cdr.detectChanges();
    });

    const id = localStorage.getItem("idProducto");
    if (id) {
      this.service.getProductoId(Number(id)).subscribe(data => {
        this.producto = data;
        this.cdr.detectChanges();
      });
    }
  }

  Actualizar(formulario: HTMLFormElement) {
    this.formValidacion = true;
    if (formulario.checkValidity() == false || !this.producto.tipoProducto.idTipo) {
      return; 
    }
    this.service.updateProducto(this.producto).subscribe(data => {
      this.formValidacion = false;
      this.router.navigate(["listar"]);
    });
  }
}