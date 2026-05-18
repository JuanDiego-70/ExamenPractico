/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.examen.ExamenPractico.Repository;

import com.examen.ExamenPractico.Modelo.TipoProducto;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.Repository;

/**
 *
 * @author cabal
 */
public interface TipoProductoRepository extends Repository<TipoProducto, Integer>{
    List<TipoProducto> findAll(); 
    Optional<TipoProducto> findById(int idProducto);
    TipoProducto save(TipoProducto t);
    void delete(TipoProducto t);
}
