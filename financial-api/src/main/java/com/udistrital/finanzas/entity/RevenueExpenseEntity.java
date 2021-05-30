package com.udistrital.finanzas.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class RevenueExpenseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @Column
    String name;
    @Column
    String type;
    @Column
    String typeRevenueExpense;
    @Column
    long amount;
    @Column
    @JsonFormat(pattern="yyyy-MM-dd")
    Date date;
    @Column
    long clientId;
}
