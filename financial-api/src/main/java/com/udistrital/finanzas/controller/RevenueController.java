package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.RevenueEntity;
import com.udistrital.finanzas.repository.RevenueRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RevenueController {
    private final RevenueRepository repository;

    RevenueController(RevenueRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/revenue/{id}")
    List<RevenueEntity> one(@PathVariable Long id) {
        return repository.findIdByClientId(id);
    }

    @PostMapping("/revenue")
    RevenueEntity addRevenue(@RequestBody RevenueEntity revenue) {
        return repository.save(revenue);
    }
}
