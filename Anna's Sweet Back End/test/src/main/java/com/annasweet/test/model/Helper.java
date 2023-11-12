package com.annasweet.test.model;

public class Helper {

    private String email;
    private String subject;
    private String message;

    // Default constructor
    public Helper() {}

    // Parameterized constructor
    public Helper(String email, String subject, String message) {
        this.email = email;
        this.subject = subject;
        this.message = message;
    }

    // Getters
    public String getEmail() {
        return email;
    }

    public String getSubject() {
        return subject;
    }

    public String getMessage() {
        return message;
    }

    // Setters
    public void setEmail(String email) {
        this.email = email;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "Received message. We will handle your issue soon.";
    }
}
