package com.annasweet.test.service;

import com.annasweet.test.model.CartItem;
import com.annasweet.test.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartItemService {
    
    @Autowired
    private CartItemRepository cartItemRepository;


    public CartItem saveCartItem(CartItem cartItem, Long orderId) {

        return cartItemRepository.save(cartItem);
    }
}
