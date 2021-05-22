package com.udistrital.finanzas.repository;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.springframework.data.rest.core.annotation.RestResource;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class CustomerEntity {
    @Id
    long id;
    @Column
    String name;
    @Column
    String address;
    @Column
    String telephone;

}