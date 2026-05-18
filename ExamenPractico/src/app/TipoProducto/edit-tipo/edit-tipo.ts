import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TipoProducto } from '../../Modelo/TipoProducto';
import { ServiceTipo } from '../../Service/service-tipo';

@Component({
  selector: 'app-edit-tipo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-tipo.html',
  styleUrl: './edit-tipo.css',
})
export class EditTipo implements OnInit {

  tipoProducto: TipoProducto = {
    idTipo: 0,
    nombreTipo: ''
  };
  formValidacion: boolean = false;

  constructor(
    private serviceTipo: ServiceTipo,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const id = localStorage.getItem("idTipo");
    if (id) {
      this.serviceTipo.getProductoId(Number(id)).subscribe(data => {
        this.tipoProducto = data;
        this.cdr.detectChanges();
      });
    }
  }

  Actualizar(formulario: HTMLFormElement) {
    this.formValidacion = true;
    if (formulario.checkValidity() == false) {
      return;
    }
    this.serviceTipo.updateProducto(this.tipoProducto).subscribe(data => {
      this.formValidacion = false;
      this.router.navigate(["listar-tipos"]);
    });
  }

}
