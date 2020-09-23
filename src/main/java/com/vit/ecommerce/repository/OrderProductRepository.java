package com.vit.ecommerce.repository;

import org.springframework.data.repository.CrudRepository;

import com.vit.ecommerce.model.OrderProduct;
import com.vit.ecommerce.model.OrderProductPK;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}
