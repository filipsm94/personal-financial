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
public class RevenueController {
    private final RevenueExpenseRepository repository;

    RevenueController(RevenueExpenseRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/revenue/{id}")
    List<RevenueExpenseEntity> getRevenue(@RequestHeader(value="Authorization") String authorization,@PathVariable Long id) {
        return repository.findIdByClientIdAndType(id, "REVENUE");
    }

    @PostMapping("/revenue")
    RevenueExpenseEntity postRevenue(@RequestHeader(value="Authorization") String authorization,@RequestBody RevenueExpenseEntity revenue) {
        revenue.setType("REVENUE");
        return repository.save(revenue);
    }

    @DeleteMapping("/revenue/{id}")
    void deleteRevenue(@RequestHeader(value="Authorization") String authorization,@PathVariable Long id){
        repository.deleteById(id);
    }

    @PutMapping("/revenue")
    RevenueExpenseEntity putRevenue(@RequestHeader(value="Authorization") String authorization,@RequestBody RevenueExpenseEntity revenue) {
        revenue.setType("REVENUE");
        return repository.save(revenue);
    }

    @GetMapping("/revenue/{id}/{dateI}/{dateF}")
    List<RevenueExpenseEntity> reportRevenue(@RequestHeader(value="Authorization") String authorization,@PathVariable Long id, @PathVariable String dateI, @PathVariable String dateF, @RequestParam(required = false) String typeRevenueExpense) {
        try {
            Date dI = new SimpleDateFormat("yyyy-MM-dd").parse(dateI);
            Date dF = new SimpleDateFormat("yyyy-MM-dd").parse(dateF);
            if (typeRevenueExpense != null && !typeRevenueExpense.equals("")) {
                return repository.findIdByDateBetweenAndClientIdAndTypeAndTypeRevenueExpense(dI, dF, id, "REVENUE", typeRevenueExpense);
            } else {
                return repository.findIdByDateBetweenAndClientIdAndType(dI, dF, id, "REVENUE");
            }
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }
}
