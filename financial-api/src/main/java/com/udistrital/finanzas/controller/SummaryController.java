package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
import com.udistrital.finanzas.model.Summary;
import com.udistrital.finanzas.repository.RevenueExpenseRepository;
import com.udistrital.finanzas.util.SummaryUtil;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class SummaryController {

    private final RevenueExpenseRepository revenueExpenseRepository;

    SummaryController(RevenueExpenseRepository revenueExpenseRepository) {
        this.revenueExpenseRepository = revenueExpenseRepository;
    }

    @GetMapping("/summary/{id}")
    Summary one(@PathVariable Long id) {
        List<RevenueExpenseEntity> listRevenueExpense = revenueExpenseRepository.findIdByClientId(id);
        return SummaryUtil.convertData(listRevenueExpense);
    }
}
