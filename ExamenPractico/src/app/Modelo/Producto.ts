import { TipoProducto } from "./TipoProducto";

export class Producto {
  idProducto!: number; 
  nombre!: string;
  cantidad!: number;
  tipoProducto!: TipoProducto;
}