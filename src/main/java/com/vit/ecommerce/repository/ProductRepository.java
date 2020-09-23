package com.vit.ecommerce.repository;

import org.springframework.data.repository.CrudRepository;

import com.vit.ecommerce.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
