/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.examen.ExamenPractico.Repository;

import com.examen.ExamenPractico.Modelo.Producto;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.Repository;

/**
 *
 * @author cabal
 */
public interface ProductoRepository extends Repository<Producto, Integer>{
    
    List<Producto> findAll(); 
    Optional<Producto> findById(int idProducto);
    Producto save(Producto p);
    void delete(Producto p);
    
    
    
}
