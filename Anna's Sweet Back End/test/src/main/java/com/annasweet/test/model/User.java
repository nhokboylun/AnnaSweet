package com.annasweet.test.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; // Auto-generated unique identifier

    private String username; // Assumed to be unique, but not the primary key
    private String password;
    private String firstname;
    private String lastname;
    @JsonProperty("phone")
    private String phonenumber;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User(){}
    

    // Constructor to initialize fields
    public User(String username, String password, String firstname, String lastname, String phonenumber) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
    }

    // Getters and setters for each field

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname(){
        return firstname;
    }

    public String getLastname(){
        return lastname;
    }

    public String getPhonenumber(){
        return phonenumber;
    }

    public void setFirstname(String firstname){
        this.firstname = firstname;
    }

    public void setLastname(String lastname){
        this.lastname = lastname;
    }

    public void setPhonenumber(String phonenumber){
        this.phonenumber = phonenumber;
    }

    @Override
    public String toString(){
        return "Successful";
    }
}
