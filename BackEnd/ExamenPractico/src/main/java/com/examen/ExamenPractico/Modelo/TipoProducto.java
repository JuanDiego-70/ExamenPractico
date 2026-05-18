/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.examen.ExamenPractico.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnore; 
import jakarta.persistence.*;
import java.util.List;

/**
 *
 * @author cabal
 */

@Entity
@Table(name = "tipos_producto")
public class TipoProducto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tipo")
    private int idTipo;

    @Column(name = "nombre_tipo", nullable = false, length = 50)
    private String nombreTipo;

    @JsonIgnore
    @OneToMany(mappedBy = "tipoProducto", cascade = CascadeType.ALL)
    private List<Producto> productos;

    public int getIdTipo() {
        return idTipo;
    }

    public void setIdTipo(int idTipo) {
        this.idTipo = idTipo;
    }

    public String getNombreTipo() {
        return nombreTipo;
    }

    public void setNombreTipo(String nombreTipo) {
        this.nombreTipo = nombreTipo;
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }
}
