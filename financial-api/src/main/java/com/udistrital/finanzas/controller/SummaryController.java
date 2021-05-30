package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
import com.udistrital.finanzas.model.MonthlySummary;
import com.udistrital.finanzas.model.Summary;
import com.udistrital.finanzas.repository.RevenueExpenseRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;


@RestController
public class SummaryController {


    private final RevenueExpenseRepository revenueExpenseRepository;

    SummaryController(RevenueExpenseRepository revenueExpenseRepository) {
        this.revenueExpenseRepository = revenueExpenseRepository;

    }

    @GetMapping("/summary/{id}")
    Summary one(@PathVariable Long id) {
        return summaryData(id);
    }

    private Summary summaryData(Long id) {
        List<RevenueExpenseEntity> listRevenueExpense = revenueExpenseRepository.findIdByClientId(id);
        long totalRevenue = 0;
        long totalExpense = 0;
        Summary summary = new Summary();
        List<MonthlySummary> listMonthly = new ArrayList<>();
        HashMap<String, MonthlySummary> summaryMonth = new HashMap<String, MonthlySummary>();

        for (RevenueExpenseEntity r : listRevenueExpense) {
            String month = convertMonth(r.getDate().getMonth());
            MonthlySummary sum = summaryMonth.get(month);
            if (sum != null) {
                if (r.getType().equals("REVENUE")) {
                    sum.setRevenue(sum.getRevenue() + r.getAmount());
                    totalRevenue = totalRevenue + r.getAmount();
                } else if (r.getType().equals("EXPENSE")) {
                    sum.setExpense(sum.getExpense() + r.getAmount());
                    totalExpense = totalExpense + r.getAmount();
                }
            } else {
                sum = new MonthlySummary();
                if (r.getType().equals("REVENUE")) {
                    sum.setRevenue(r.getAmount());
                    totalRevenue = totalRevenue + r.getAmount();
                } else if (r.getType().equals("EXPENSE")) {
                    sum.setExpense(r.getAmount());
                    totalExpense = totalExpense + r.getAmount();
                }
            }
            sum.setMonth(month);
            summaryMonth.put(month, sum);
        }


        Iterator it = summaryMonth.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry) it.next();
            listMonthly.add((MonthlySummary) pair.getValue());
            it.remove();

        }

        summary.setTotalExpense(totalExpense);
        summary.setTotalRevenue(totalRevenue);
        summary.setMonthlySummary(listMonthly);
        summary.setListRevenueExpense(listRevenueExpense);

        return summary;
    }

    public String convertMonth(int month) {
        switch (month) {
            case 0:
                return "Enero";
            case 1:
                return "Febrero";
            case 2:
                return "Marzo";
            case 3:
                return "Abril";
            case 4:
                return "Mayo";
            case 5:
                return "Junio";
            case 6:
                return "Julio";
            case 7:
                return "Agosto";
            case 8:
                return "Septiembre";
            case 9:
                return "Octubre";
            case 10:
                return "Noviembre";
            case 11:
                return "Diciembre";
            default:
                return "";
        }
    }
}
