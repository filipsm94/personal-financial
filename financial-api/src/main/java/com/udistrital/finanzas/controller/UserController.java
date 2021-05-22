package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.entity.UserEntity;
import com.udistrital.finanzas.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    private final UserRepository repository;

    UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/user/{id}")
    Optional<UserEntity> one(@PathVariable Long id) {
        return repository.findById(id);
    }

    @PostMapping("/user")
    UserEntity addUser(@RequestBody UserEntity user) {
        return repository.save(user);
    }
}
