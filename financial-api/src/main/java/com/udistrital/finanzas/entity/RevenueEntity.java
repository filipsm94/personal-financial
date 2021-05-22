package com.udistrital.finanzas.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class RevenueEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @Column
    String name;
    @Column
    String type;
    @Column
    String typeRevenue;
    @Column
    long amount;
    @Column
    Date date;
    @Column
    long clientId;
}
