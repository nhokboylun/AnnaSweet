package com.annasweet.test.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.annasweet.test.model.CartItem;
import com.annasweet.test.model.Menu;
import com.annasweet.test.model.Order;
import com.annasweet.test.repository.OrderRepository;
import com.annasweet.test.repository.MenuRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
    private CartItemService cartItemService; 

    @Autowired
    private MenuRepository menuRepository;
    
    public Order createOrder(Order order) {
        // Save the order first to generate its ID
        Order savedOrder = orderRepository.save(order);
        System.out.println(order.toString());

        // Now, set the saved order to each cart item and save them
        for (CartItem cartItem : order.getCart()) {
            cartItem.setOrder(savedOrder);  // Associate cart item with the saved order
            cartItemService.saveCartItem(cartItem, savedOrder.getId());  // Save each cart item
        }

        return savedOrder;  // Return the order with associated cart items
    }

    public Optional<Order> checkOrderById(Long orderId) {
        // Fetch order by ID
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
    
        // If the order doesn't exist, return an empty Optional
        if (!optionalOrder.isPresent()) {
            return Optional.empty();
        }
    
        Order order = optionalOrder.get();
    
        // For each cart item, fetch the associated menu item
        for (CartItem cartItem : order.getCart()) {
            Optional<Menu> optionalMenuItem = menuRepository.findById(cartItem.getId());
            optionalMenuItem.ifPresent(menuItem -> {
                cartItem.setMenu(menuItem);  // Set the Menu item on the CartItem
            });
        }
    
        return Optional.of(order);
    }
}
