import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Modelo/Producto';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}


  Url = 'http://localhost:8080/ExamenPractico/productos';

  getProductos() {
    return this.http.get<Producto[]>(this.Url);
  }

  add(producto: Producto) {
    return this.http.post<Producto>(this.Url, producto);
  }

  getProductoId(id: number) {
    return this.http.get<Producto>(this.Url + "/" + id);
  }

  updateProducto(producto: Producto) {
    return this.http.put<Producto>(this.Url + "/" + producto.idProducto, producto);
  }

  deleteProducto(producto: Producto) {
    return this.http.delete<Producto>(this.Url + "/" + producto.idProducto);
  }

}