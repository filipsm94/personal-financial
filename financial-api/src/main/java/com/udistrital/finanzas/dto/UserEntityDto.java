package com.udistrital.finanzas.dto;

import org.jetbrains.annotations.Contract;

import javax.persistence.Column;
import javax.persistence.Id;

public class UserEntityDto extends Object {

    long clientId;
    String name;
    String email;
    String jwt;

    public UserEntityDto() {
    }

    public long getClientId() {
        return clientId;
    }

    public void setClientId(long clientId) {
        this.clientId = clientId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
