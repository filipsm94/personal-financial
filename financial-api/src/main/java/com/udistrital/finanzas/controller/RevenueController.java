package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
import com.udistrital.finanzas.repository.RevenueExpenseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class RevenueController {
    private final RevenueExpenseRepository repository;

    RevenueController(RevenueExpenseRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/revenue/{id}")
    List<RevenueExpenseEntity> one(@PathVariable Long id) {
        return repository.findIdByClientIdAndType(id, "REVENUE");
    }

    @PostMapping("/revenue")
    RevenueExpenseEntity addRevenue(@RequestBody RevenueExpenseEntity revenue) {
        revenue.setType("REVENUE");
        return repository.save(revenue);
    }
}
