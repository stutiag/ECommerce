package com.vit.ecommerce.repository;

import org.springframework.data.repository.CrudRepository;

import com.vit.ecommerce.model.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {
}
