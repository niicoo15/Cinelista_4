package com.example.cinelista.controller;

import com.example.cinelista.model.Estadistica;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class EstadisticasController {

    @GetMapping("/estadisticas")
    public String mostrarEstadisticas() {
        return "estadisticas";
    }

    @GetMapping("/api/estadisticas")
    @ResponseBody
    public List<Estadistica> obtenerEstadisticas() {
        List<Estadistica> lista = new ArrayList<>();
        lista.add(new Estadistica(1L, "Interstellar", "Ciencia Ficcion", 701800000L, 9));
        lista.add(new Estadistica(2L, "Avatar", "Ciencia Ficcion", 2923000000L, 8));
        lista.add(new Estadistica(3L, "El Caballero Oscuro", "Accion", 1006000000L, 9));
        lista.add(new Estadistica(4L, "Del Reves 2", "Animacion", 1698000000L, 8));
        return lista;
    }
}