package com.udistrital.finanzas.repository;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController {

    private final CustomerRepository repository;

    CustomerController(CustomerRepository repository) {
        this.repository = repository;
    }


    @GetMapping("/customers")
    List<CustomerEntity> all() {
        return repository.findAll();
    }
}
