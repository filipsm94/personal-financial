package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
import com.udistrital.finanzas.repository.ExpenseRepository;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;

import java.util.Date;
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

    @GetMapping("/expense/{id}/{re}/{dateI}/{dateF}")
    List<RevenueExpenseEntity> one1(@PathVariable Long id, @PathVariable String re, @PathVariable String dateI, @PathVariable String dateF) {
        try {
            Date dI = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(dateI + " 00:00:00");
            Date dF = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(dateF + " 00:00:00");
            return repository.findIdByDateBetweenAndClientIdAndTypeRevenueExpense(dI, dF, id, re);
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }

    @PostMapping("/expense")
    RevenueExpenseEntity addUser(@RequestBody RevenueExpenseEntity expense) {
        return repository.save(expense);
    }
}
