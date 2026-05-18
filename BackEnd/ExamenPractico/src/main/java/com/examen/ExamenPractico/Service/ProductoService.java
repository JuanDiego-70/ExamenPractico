/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.examen.ExamenPractico.Service;

import com.examen.ExamenPractico.Modelo.Producto;
import java.util.List;

/**
 *
 * @author cabal
 */
public interface ProductoService {
    public List<Producto> listar();
    public Producto listarId(int id);
    public Producto add(Producto p);
    public Producto edit(Producto p);
    public Producto delete(int id);
}
