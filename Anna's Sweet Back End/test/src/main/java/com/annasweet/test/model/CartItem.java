package com.annasweet.test.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "cart_items")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "cart_item_id")
    private Long cartItemId;
    
    @Column(name = "menu_id")
    private Long id;
    
    private int quantity;

    @ManyToOne
    @JoinColumn(name="menu_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Menu menu;

    @ManyToOne
    private Order order; 

  // Getter and setter methods

    public Menu getMenu() {
        return menu;
    }

    public void setMenu(Menu menu) {
        this.menu = menu;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
    
    @Override
    public String toString() {
    return "CartItem{" +
            "id=" + id +
            ", quantity=" + quantity +
            ", orderID=" + (order != null ? order.getId() : "null") +
            '}';
    }

}
