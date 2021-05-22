package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
import com.udistrital.finanzas.repository.ExpenseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ExpenseController {

    private final ExpenseRepository repository;

    ExpenseController(ExpenseRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/expense/{id}")
    List<RevenueExpenseEntity> one(@PathVariable Long id) {
        return repository.findIdByClientId(id);
    }

    @PostMapping("/expense")
    RevenueExpenseEntity addUser(@RequestBody RevenueExpenseEntity expense) {
        return repository.save(expense);
    }
}
