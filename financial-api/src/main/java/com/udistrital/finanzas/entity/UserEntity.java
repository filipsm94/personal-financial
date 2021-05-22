package com.udistrital.finanzas.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class UserEntity {
    @Id
    long clientId;
    @Column
    String name;
    @Column
    String email;
}
