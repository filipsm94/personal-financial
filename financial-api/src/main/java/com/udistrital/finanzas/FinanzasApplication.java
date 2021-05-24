package com.udistrital.finanzas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.TimeZone;

@SpringBootApplication
public class FinanzasApplication {

	@PostConstruct
	void started() {
		TimeZone.setDefault(TimeZone.getTimeZone("TimeZone"));
	}

	public static void main(String[] args) {
		SpringApplication.run(FinanzasApplication.class, args);
	}

}
