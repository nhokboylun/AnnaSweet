package com.annasweet.test.controller;


import java.util.Map;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.annasweet.test.model.User;
import com.annasweet.test.model.Helper;
import com.annasweet.test.model.Menu;
import com.annasweet.test.model.Order;
import com.annasweet.test.service.MenuService;
import com.annasweet.test.service.OrderService;
import com.annasweet.test.service.UserService;

@RestController
@CrossOrigin(origins = {"https://annasweet.netlify.app/", "http://localhost:5173"})
public class mainController {
    @PostMapping("/contactHelp")
    public ResponseEntity<Map<String, String>> receiveUserData(@RequestBody Helper user) {
        Map<String, String> response = new HashMap<>();
        response.put("message", user.toString());
        return ResponseEntity.ok(response);
    }

    @Autowired
    private UserService userService;
    @Autowired
    private MenuService menuService;
    @Autowired
    private OrderService orderService;

    @PostMapping("/addUser")
    public ResponseEntity<Map<String, String>> createUser(@RequestBody User user) {
        boolean validUsername = userService.validUsername(user);
        Map<String, String> response = new HashMap<>();
        if (validUsername) {
            userService.saveUser(user);
            response.put("status", "success");
            response.put("message", "Register successfully");
            return ResponseEntity.ok(response);
        } else {
            response.put("status", "failure");
            response.put("message", "Username has been used.");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
    }

    @PostMapping("/validatePassword")
    public ResponseEntity<Map<String, String>>  validatePassword(@RequestBody User login){
        Map<String, String> response = new HashMap<>();
        boolean isAuthenticated = userService.authenticateUser(login.getUsername(), login.getPassword());

        if (isAuthenticated) {
            response.put("status", "success");
            response.put("message", "Authentication successfully");
            return ResponseEntity.ok(response);
        } else {
            response.put("status", "failure");
            response.put("message", "Invalid username or password.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @PostMapping("/getMenu")
    public ResponseEntity<List<Menu>> getAllMenu() {
        List<Menu> menus = menuService.getMenu();
        return ResponseEntity.ok(menus);
    }

    @PostMapping("/order/createOrder")
    public ResponseEntity<Map<String, String>> createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.createOrder(order);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Order created successfully, order id is:" + savedOrder.getId());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/order/{id}")
    public Order getOrderById(@PathVariable Long id) {
        return orderService.checkOrderById(id).orElse(null);
    }
}
