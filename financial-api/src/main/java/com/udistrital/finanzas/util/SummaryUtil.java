package com.udistrital.finanzas.util;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
import com.udistrital.finanzas.model.MonthlySummary;
import com.udistrital.finanzas.model.Summary;

import java.util.*;

public class SummaryUtil {

    public static Summary convertData(List<RevenueExpenseEntity> listRevenueExpense){
        long totalRevenue = 0;
        long totalExpense = 0;
        Summary summary = new Summary();
        List<MonthlySummary> listMonthly = new ArrayList<>();
        HashMap<String, MonthlySummary> summaryMonth = new HashMap<String, MonthlySummary>();

        for (RevenueExpenseEntity r : listRevenueExpense) {
            Calendar cal = Calendar.getInstance();
            cal.setTime(r.getDate());
            int mesActual = cal.get(Calendar.MONTH);
            String month = mesActual+"";
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

        TreeMap<String, MonthlySummary> tm=new  TreeMap<String, MonthlySummary> (summaryMonth);

        Iterator it = tm.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry) it.next();
            MonthlySummary aux = (MonthlySummary) pair.getValue();
            aux.setMonth(convertMonth(Integer.parseInt(aux.getMonth())));
            listMonthly.add(aux);
            it.remove();

        }

        summary.setTotalExpense(totalExpense);
        summary.setTotalRevenue(totalRevenue);
        summary.setMonthlySummary(listMonthly);
        summary.setListRevenueExpense(listRevenueExpense);

        return summary;
    }

    public static String convertMonth(int month) {
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
