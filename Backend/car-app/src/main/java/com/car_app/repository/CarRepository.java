package com.car_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.car_app.entities.Car;

public interface CarRepository extends JpaRepository<Car,Integer> {
}
