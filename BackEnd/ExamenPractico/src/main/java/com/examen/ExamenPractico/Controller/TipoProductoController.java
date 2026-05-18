/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.examen.ExamenPractico.Controller;

import com.examen.ExamenPractico.Modelo.TipoProducto;
import com.examen.ExamenPractico.Service.TipoProductoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author cabal
 */
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/tipos")
public class TipoProductoController {
    
    @Autowired
    private TipoProductoService service;

    @GetMapping
    public List<TipoProducto> listar() {
        return service.listar();
    }

    @PostMapping
    public TipoProducto agregar(@RequestBody TipoProducto t) {
        return service.add(t);
    }

    @GetMapping(path = {"/{id}"})
    public TipoProducto listarId(@PathVariable("id") int id) {
        return service.listarId(id);
    }


    @PutMapping(path = {"/{id}"})
    public TipoProducto editar(@RequestBody TipoProducto t, @PathVariable("id") int id) {
        t.setIdTipo(id); 
        return service.edit(t);
    }

    @DeleteMapping(path = {"/{id}"})
    public TipoProducto eliminar(@PathVariable("id") int id) {
        return service.delete(id);
    }
    
}
