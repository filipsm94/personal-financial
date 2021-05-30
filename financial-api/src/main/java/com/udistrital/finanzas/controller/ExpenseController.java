package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
import com.udistrital.finanzas.repository.RevenueExpenseRepository;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


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

    @GetMapping("/expense/{id}/{dateI}/{dateF}")
    List<RevenueExpenseEntity> one1(@PathVariable Long id, @PathVariable String dateI, @PathVariable String dateF,@RequestParam(required = false) String typeRevenueExpense) {
        try {
            Date dI = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(dateI + " 00:00:00");
            Date dF = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(dateF + " 00:00:00");
            if(typeRevenueExpense !=null && typeRevenueExpense.equals("")){
                return repository.findIdByDateBetweenAndClientIdAndTypeAndTypeRevenueExpense(dI, dF, id, "EXPENSE", typeRevenueExpense);
            }else{
                return repository.findIdByDateBetweenAndClientIdAndType(dI, dF, id, "EXPENSE");
            }
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }

    @PostMapping("/expense")
    RevenueExpenseEntity addUser(@RequestBody RevenueExpenseEntity expense) {
        expense.setType("EXPENSE");
        return repository.save(expense
        );
    }
}
