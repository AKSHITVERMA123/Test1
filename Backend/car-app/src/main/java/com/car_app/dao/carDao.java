package com.car_app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.car_app.entities.Car;

public interface carDao extends JpaRepository<Car, Integer>{

}
