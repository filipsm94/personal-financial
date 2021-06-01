package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
import com.udistrital.finanzas.repository.RevenueExpenseRepository;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("finanzas")
public class ExpenseController {

    private final RevenueExpenseRepository repository;

    ExpenseController(RevenueExpenseRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/expense/{id}")
    List<RevenueExpenseEntity> getExpense(@RequestHeader(value="Authorization") String authorization,@PathVariable Long id) {
        return repository.findIdByClientIdAndType(id, "EXPENSE");
    }

    @PostMapping("/expense")
    RevenueExpenseEntity postExpense(@RequestHeader(value="Authorization") String authorization,@RequestBody RevenueExpenseEntity expense) {
        expense.setType("EXPENSE");
        return repository.save(expense);
    }

    @DeleteMapping("/expense/{id}")
    void deleteExpense(@RequestHeader(value="Authorization") String authorization,@PathVariable Long id){
        repository.deleteById(id);
    }

    @PutMapping("/expense")
    RevenueExpenseEntity putExpense(@RequestHeader(value="Authorization") String authorization,@RequestBody RevenueExpenseEntity expense) {
        expense.setType("EXPENSE");
        return repository.save(expense);
    }

    @GetMapping("/expense/{id}/{dateI}/{dateF}")
    List<RevenueExpenseEntity> reportExpense(@RequestHeader(value="Authorization") String authorization,@PathVariable Long id, @PathVariable String dateI, @PathVariable String dateF, @RequestParam(required = false) String typeRevenueExpense) {
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
