package com.vit.ecommerce;

import com.vit.ecommerce.model.Product;
import com.vit.ecommerce.service.ProductService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EcommerceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EcommerceApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(ProductService productService) {
        return args -> {
            productService.save(new Product(1L, "Shirt", 899.00, "assets/images/shirt.jpg"));
            productService.save(new Product(2L, "Polo T-Shirt", 799.00, "assets/images/tshirt.jpg"));
            productService.save(new Product(3L, "Collar Top", 599.00, "assets/images/collartop.jpg"));
            productService.save(new Product(4L, "Men's Hoodie", 2000.00, "assets/images/hoodie.jpg"));
            productService.save(new Product(5L, "Jeans", 999.00, "assets/images/jeans.png"));
            productService.save(new Product(6L, "Leather Jacket", 1500.00, "assets/images/leatherjacket.png"));
            productService.save(new Product(7L, "Pyjama Set", 499.00, "assets/images/pyjamaset.jpg"));
        };
    }
}
