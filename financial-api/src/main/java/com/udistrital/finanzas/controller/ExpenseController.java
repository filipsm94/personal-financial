package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
import com.udistrital.finanzas.repository.RevenueExpenseRepository;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class ExpenseController {

    private final RevenueExpenseRepository repository;

    ExpenseController(RevenueExpenseRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/expense/{id}")
    List<RevenueExpenseEntity> one(@PathVariable Long id) {
        return repository.findIdByClientIdAndType(id, "EXPENSE");
    }

    @PostMapping("/expense")
    RevenueExpenseEntity addUser(@RequestBody RevenueExpenseEntity expense) {
        expense.setType("EXPENSE");
        return repository.save(expense
        );
    }
}
