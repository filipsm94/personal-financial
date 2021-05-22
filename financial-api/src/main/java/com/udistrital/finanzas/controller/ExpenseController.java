package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.ExpenseEntity;
import com.udistrital.finanzas.repository.ExpenseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ExpenseController {

    private final ExpenseRepository repository;

    ExpenseController(ExpenseRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/expense/{id}")
    List<ExpenseEntity> one(@PathVariable Long id) {
        return repository.findIdByClientId(id);
    }

    @PostMapping("/expense")
    ExpenseEntity addUser(@RequestBody ExpenseEntity expense) {
        return repository.save(expense);
    }
}
