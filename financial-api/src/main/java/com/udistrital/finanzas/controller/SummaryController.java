package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
import com.udistrital.finanzas.model.Summary;
import com.udistrital.finanzas.repository.RevenueExpenseRepository;
import com.udistrital.finanzas.util.SummaryUtil;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("finanzas")
public class SummaryController {

    private final RevenueExpenseRepository revenueExpenseRepository;

    SummaryController(RevenueExpenseRepository revenueExpenseRepository) {
        this.revenueExpenseRepository = revenueExpenseRepository;
    }

    @GetMapping("/summary/{id}")
    Summary getSummary(@RequestHeader(value="Authorization") String authorization,@PathVariable Long id) {
        List<RevenueExpenseEntity> listRevenueExpense = revenueExpenseRepository.findIdByClientIdOrderByDateAsc(id);
        return SummaryUtil.convertData(listRevenueExpense);
    }
}
