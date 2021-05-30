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
public class ReportController {

    private final RevenueExpenseRepository repository;

    ReportController(RevenueExpenseRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/report/{id}/{dateI}/{dateF}")
    List<RevenueExpenseEntity> one1(@PathVariable Long id, @PathVariable String dateI, @PathVariable String dateF, @RequestParam(required = false) String typeRevenueExpense) {
        try {
            Date dI = new SimpleDateFormat("yyyy-MM-dd").parse(dateI);
            Date dF = new SimpleDateFormat("yyyy-MM-dd").parse(dateF);
            if (typeRevenueExpense != null && !typeRevenueExpense.equals("")) {
                return repository.findIdByDateBetweenAndClientIdAndTypeAndTypeRevenueExpense(dI, dF, id, "EXPENSE", typeRevenueExpense);
            } else {
                return repository.findIdByDateBetweenAndClientIdAndType(dI, dF, id, "EXPENSE");
            }
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }
}
