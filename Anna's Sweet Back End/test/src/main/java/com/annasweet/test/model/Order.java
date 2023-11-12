package com.annasweet.test.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<CartItem> cart = new ArrayList<>();

    @Column(name = "username")
    private String username;
    
    @Column(name = "name")
    private String name;

    private String phone;
    private String address;
    private String storePickup = "false";
    private BigDecimal subTotal;
    @Column(name = "cart_total")
    private String cartTotal;
    

    // Default constructor
    public Order() {}

    // Parameterized constructor
    public Order(List<CartItem> cart, String username, String name, String phone, 
                 String address, String storePickup, BigDecimal subTotal, String cartTotal) {
        this.cart = cart;
        this.username = username;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.storePickup = storePickup;
        this.subTotal = subTotal;
        this.cartTotal = cartTotal;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<CartItem> getCart() {
        return cart;
    }

    public void setCart(List<CartItem> cart) {
        this.cart = cart;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String isStorePickup() {
        return storePickup;
    }

    public void setStorePickup(String storePickup) {
        this.storePickup = storePickup;
    }

    public BigDecimal getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(BigDecimal subTotal) {
        this.subTotal = subTotal;
    }

    public String getCartTotal() {
        return cartTotal;
    }

    public void setCartTotal(String cartTotal) {
        this.cartTotal = cartTotal;
    }

    @Override
public String toString() {
    StringBuilder cartItemsStr = new StringBuilder();
    for (CartItem item : cart) {
        cartItemsStr.append(item.toString()).append("\n"); // Assuming CartItem has a meaningful toString method.
    }

    return "Order {" +
           "\n\tId: " + id +
           ",\n\tCart Items: " + (cart.isEmpty() ? "None" : "\n" + cartItemsStr) +
           ",\n\tUsername: " + username +
           ",\n\tName: " + name +
           ",\n\tPhone: " + phone +
           ",\n\tAddress: " + address +
           ",\n\tStore Pickup: " + storePickup +
           ",\n\tSub Total: " + subTotal +
           ",\n\tCart Total: " + cartTotal +
           "\n}";
}

}