package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String location;
    private String date;
    private String description;
    private Long createdBy;

    // Parameterized constructor
    public Event(Long id, String name, String location, String date, String description, Long createdBy) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.date = date;
        this.description = description;
        this.createdBy = createdBy;
    }

    // Default constructor (required by JPA)
    public Event() {
    }

    // Getter for id
    public Long getId() {
        return id;
    }

    // Setter for id
    public void setId(Long id) {
        this.id = id;
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name
    public void setName(String name) {
        this.name = name;
    }

    // Getter for location
    public String getLocation() {
        return location;
    }

    // Setter for location
    public void setLocation(String location) {
        this.location = location;
    }

    // Getter for date
    public String getDate() {
        return date;
    }

    // Setter for date
    public void setDate(String date) {
        this.date = date;
    }

    // Getter for description
    public String getDescription() {
        return description;
    }

    // Setter for description
    public void setDescription(String description) {
        this.description = description;
    }

    // Getter for createdBy
    public Long getCreatedBy() {
        return createdBy;
    }

    // Setter for createdBy
    public void setCreatedBy(Long createdBy) {
        this.createdBy = createdBy;
    }
}