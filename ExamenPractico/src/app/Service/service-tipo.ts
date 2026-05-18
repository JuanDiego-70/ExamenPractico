import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoProducto } from '../Modelo/TipoProducto';

@Injectable({
  providedIn: 'root',
})
export class ServiceTipo {
  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/ExamenPractico/tipos';

  getTipoProducto() {
    return this.http.get<TipoProducto[]>(this.Url);
  }

  add(tipoProducto: TipoProducto) {
    return this.http.post<TipoProducto>(this.Url, tipoProducto);
  }

  getProductoId(id: number) {
    return this.http.get<TipoProducto>(this.Url + "/" + id);
  }

  updateProducto(tipoProducto: TipoProducto) {
    return this.http.put<TipoProducto>(this.Url + "/" + tipoProducto.idTipo, tipoProducto);
  }

  deleteProducto(tipoProducto: TipoProducto) {
      return this.http.delete<TipoProducto>(this.Url + "/" + tipoProducto.idTipo);
    }
}
