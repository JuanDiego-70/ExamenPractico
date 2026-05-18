import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Service } from '../../Service/service';
import { Producto } from '../../Modelo/Producto';
import { TipoProducto } from '../../Modelo/TipoProducto';
import { ServiceTipo } from '../../Service/service-tipo';

@Component({
  selector: 'app-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add implements OnInit {

  @Output() productoGuardado = new EventEmitter<void>();

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
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.serviceTipo.getTipoProducto().subscribe(data => {
      this.tipos = data;
      this.cdr.detectChanges();
    });
  }

  Guardar(formulario: HTMLFormElement) {
    this.formValidacion = true;
    if (formulario.checkValidity() == false || !this.producto.tipoProducto.idTipo) {
      return;
    }
    this.service.add(this.producto).subscribe(data => {
      const modalElement = document.getElementById('modalAddProducto');
      if(modalElement){
        const bootstrap = (window as any).bootstrap;
        if(bootstrap){
          const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
          modalInstance.hide();
        }
      }
      this.productoGuardado.emit();
      this.formValidacion = false;
      this.producto = { idProducto: 0, nombre: '', cantidad: null as any, tipoProducto: new TipoProducto() };
    });
  }
}