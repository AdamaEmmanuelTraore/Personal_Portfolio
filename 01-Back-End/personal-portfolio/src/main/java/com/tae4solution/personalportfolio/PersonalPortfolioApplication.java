package com.tae4solution.personalportfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.tae4solution.personalportfolio")
public class PersonalPortfolioApplication {

	public static void main(String[] args) {
		SpringApplication.run(PersonalPortfolioApplication.class, args);
	}

}
