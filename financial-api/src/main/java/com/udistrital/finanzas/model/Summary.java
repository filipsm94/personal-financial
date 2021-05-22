package com.udistrital.finanzas.model;


import com.udistrital.finanzas.entity.RevenueExpenseEntity;

import java.util.List;

public class Summary {

    long totalRevenue;
    long totalExpense;
    List<RevenueExpenseEntity> listRevenueExpense;
    List<MonthlySummary> monthlySummary;

    public List<RevenueExpenseEntity> getListRevenueExpense() {
        return listRevenueExpense;
    }

    public void setListRevenueExpense(List<RevenueExpenseEntity> listRevenueExpense) {
        this.listRevenueExpense = listRevenueExpense;
    }

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

    public List<MonthlySummary> getMonthlySummary() {
        return monthlySummary;
    }

    public void setMonthlySummary(List<MonthlySummary> monthlySummary) {
        this.monthlySummary = monthlySummary;
    }
}
