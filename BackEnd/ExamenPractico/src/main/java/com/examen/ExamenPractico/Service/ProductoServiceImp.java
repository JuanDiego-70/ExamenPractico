/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.examen.ExamenPractico.Service;

import com.examen.ExamenPractico.Modelo.Producto;
import com.examen.ExamenPractico.Repository.ProductoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author cabal
 */
@Service
public class ProductoServiceImp implements ProductoService {

    @Autowired
    private ProductoRepository repositorio;

    @Override
    public List<Producto> listar() {
        return repositorio.findAll();
    }

    @Override
    public Producto listarId(int id) {
        return repositorio.findById(id).orElse(null);
    }

    @Override
    public Producto add(Producto p) {
        return repositorio.save(p);
    }

    @Override
    public Producto edit(Producto p) {
        return repositorio.save(p);
    }

    @Override
    public Producto delete(int id) {
        Producto p = repositorio.findById(id).orElse(null);
        if (p != null) {
            repositorio.delete(p);
        }
        return p;
    }

}
