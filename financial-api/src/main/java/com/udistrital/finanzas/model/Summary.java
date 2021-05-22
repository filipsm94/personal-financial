package com.udistrital.finanzas.model;


import com.udistrital.finanzas.entity.ExpenseEntity;

import java.util.List;

public class Summary {

    long totalRevenue;
    long totalExpense;
    List<ExpenseEntity> listExpense;
    List<MonthlySummary> monthlySummary;

    public long getTotalRevenue() {
        return totalRevenue;
    }

    public void setTotalRevenue(long totalRevenue) {
        this.totalRevenue = totalRevenue;
    }

    public long getTotalExpense() {
        return totalExpense;
    }

    public void setTotalExpense(long totalExpense) {
        this.totalExpense = totalExpense;
    }

    public List<ExpenseEntity> getListExpense() {
        return listExpense;
    }

    public void setListExpense(List<ExpenseEntity> listExpense) {
        this.listExpense = listExpense;
    }

    public List<MonthlySummary> getMonthlySummary() {
        return monthlySummary;
    }

    public void setMonthlySummary(List<MonthlySummary> monthlySummary) {
        this.monthlySummary = monthlySummary;
    }
}
