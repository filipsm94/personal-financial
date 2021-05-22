package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
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
    List<RevenueExpenseEntity> one(@PathVariable Long id) {
        return repository.findIdByClientId(id);
    }

    @PostMapping("/revenue")
    RevenueExpenseEntity addRevenue(@RequestBody RevenueExpenseEntity revenue) {
        return repository.save(revenue);
    }
}
