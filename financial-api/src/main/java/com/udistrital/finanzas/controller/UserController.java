package com.udistrital.finanzas.controller;

import com.udistrital.finanzas.dto.UserEntityDto;
import com.udistrital.finanzas.entity.UserEntity;
import com.udistrital.finanzas.repository.UserRepository;
import com.udistrital.finanzas.util.SecurityUtil;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("finanzas")
public class UserController {

    private final UserRepository repository;

    UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/user/{id}")
    Optional<UserEntityDto> getUser(@PathVariable Long id) {
        Optional<UserEntity> ue = repository.findById(id);
        System.out.println(ue);

        String token = SecurityUtil.getToken(ue.get().getName());
        System.out.println(token);
        UserEntityDto ued = new UserEntityDto();
        ued.setClientId(ue.get().getClientId());
        ued.setName(ue.get().getName());
        ued.setEmail(ue.get().getEmail());
        ued.setJwt(token);
        Optional<UserEntityDto> nameOptional = Optional.of(ued);

        return nameOptional;
    }

    @PostMapping("/user")
    UserEntity postUser(@RequestHeader(value="Authorization") String authorization,@RequestBody UserEntity user) {
        return repository.save(user);
    }


}
