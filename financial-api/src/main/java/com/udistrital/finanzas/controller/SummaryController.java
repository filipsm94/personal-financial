package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.ExpenseEntity;
import com.udistrital.finanzas.entity.RevenueEntity;
import com.udistrital.finanzas.model.MonthlySummary;
import com.udistrital.finanzas.model.Summary;
import com.udistrital.finanzas.repository.ExpenseRepository;
import com.udistrital.finanzas.repository.RevenueRepository;
import com.udistrital.finanzas.util.SummaryAux;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;


@RestController
public class SummaryController {


    private final RevenueRepository revenueRepository;

    private final ExpenseRepository expenseRepository;

    SummaryController(RevenueRepository revenueRepository, ExpenseRepository expenseRepository) {
        this.revenueRepository = revenueRepository;
        this.expenseRepository = expenseRepository;

    }

    @GetMapping("/summary/{id}")
    Summary one(@PathVariable Long id) {
        return summaryData(id);
    }

    private Summary summaryData(Long id) {
        List<RevenueEntity> listRevenue = revenueRepository.findIdByClientId(id);
        List<ExpenseEntity> listExpense = expenseRepository.findIdByClientId(id);
        long totalRevenue =0;
        long totalExpense =0;
        List<MonthlySummary> listMonthly = new ArrayList<>();
        HashMap<Integer, SummaryAux> summaryMonth = new HashMap<Integer, SummaryAux>();
        Summary summary = new Summary();

        for(RevenueEntity r: listRevenue){
            SummaryAux sum = summaryMonth.get(r.getDate().getMonth());
            if(sum != null){
                sum.setRevenue(sum.getRevenue() + r.getAmount());
            }else{
                sum = new SummaryAux();
                sum.setRevenue(0);
            }
            summaryMonth.put(r.getDate().getMonth(),sum);
            totalRevenue = totalRevenue + r.getAmount();
        }
        for(ExpenseEntity e: listExpense){
            SummaryAux sum = summaryMonth.get(e.getDate().getMonth());
            if(sum != null){
                sum.setExpense(sum.getExpense() + e.getAmount());
            }else{
                sum = new SummaryAux();
                sum.setExpense(0);
            }
            summaryMonth.put(e.getDate().getMonth(),sum);
            totalExpense = totalExpense + e.getAmount();
        }


        Iterator it = summaryMonth.entrySet().iterator();
        while (it.hasNext()) {
            MonthlySummary monthlySummary = new MonthlySummary();
            Map.Entry pair = (Map.Entry)it.next();
            int mes = Integer.parseInt(pair.getKey().toString());
            SummaryAux valor= (SummaryAux) pair.getValue();
            monthlySummary.setRevenue(valor.getRevenue());
            monthlySummary.setExpense(valor.getExpense());
            monthlySummary.setMonth(""+mes);
            it.remove();
            listMonthly.add(monthlySummary);
        }

        summary.setTotalExpense(totalExpense);
        summary.setTotalRevenue(totalRevenue);
        summary.setMonthlySummary(listMonthly);
        summary.setListExpense(listExpense);

        return summary;
    }
}
