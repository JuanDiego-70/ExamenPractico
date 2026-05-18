/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.examen.ExamenPractico.Service;

import com.examen.ExamenPractico.Modelo.TipoProducto;
import com.examen.ExamenPractico.Repository.TipoProductoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author cabal
 */
@Service
public class TipoProductoServiceImp implements TipoProductoService {

    @Autowired
    private TipoProductoRepository repositorio;

    @Override
    public List<TipoProducto> listar() {
        return repositorio.findAll();
    }

    @Override
    public TipoProducto listarId(int id) {
        return repositorio.findById(id).orElse(null);
    }

    @Override
    public TipoProducto add(TipoProducto t) {
        return repositorio.save(t);
    }

    @Override
    public TipoProducto edit(TipoProducto t) {
        return repositorio.save(t);
    }

    @Override
    public TipoProducto delete(int id) {
        TipoProducto t = repositorio.findById(id).orElse(null);
        if (t != null) {
            repositorio.delete(t);
        }
        return t;
    }

}
