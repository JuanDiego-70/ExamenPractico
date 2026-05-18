import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoProducto } from '../../Modelo/TipoProducto';
import { ServiceTipo } from '../../Service/service-tipo';

@Component({
  selector: 'app-add-tipo',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-tipo.html',
  styleUrl: './add-tipo.css',
})
export class AddTipo implements OnInit {
  @Output() tipoProductoGuardado = new EventEmitter<void>();

  tipoProducto: TipoProducto = {
    idTipo: 0,
    nombreTipo: ''
  };

  formValidacion: boolean = false;

  constructor(
    private serviceTipo: ServiceTipo,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }

  Guardar(formulario: HTMLFormElement) {
    this.formValidacion = true;
    if (formulario.checkValidity() == false) {
      return;
    }
    this.serviceTipo.add(this.tipoProducto).subscribe(data => {
      const modalElement = document.getElementById('modalAddTipoProducto');
      if (modalElement) {
        const bootstrap = (window as any).bootstrap;
        if (bootstrap) {
          const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
          modalInstance.hide();
        }
      }
      this.tipoProductoGuardado.emit();
      this.formValidacion = false;
      this.tipoProducto = { idTipo: 0, nombreTipo: '' };
    });
  }


}
