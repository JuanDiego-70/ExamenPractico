/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.examen.ExamenPractico.Service;

import com.examen.ExamenPractico.Modelo.TipoProducto;
import java.util.List;

/**
 *
 * @author cabal
 */
public interface TipoProductoService {

    public List<TipoProducto> listar();
    public TipoProducto listarId(int id);
    public TipoProducto add(TipoProducto t);
    public TipoProducto edit(TipoProducto t);
    public TipoProducto delete(int id);
    
}
