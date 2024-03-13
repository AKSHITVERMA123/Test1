package com.car_app.service;

import java.util.List;

import com.car_app.dto.CarDto;

public interface CarService {
    CarDto createCar(CarDto carDto);

    CarDto getCarById(int id);

    CarDto addCost(int id,double amount);

    void deleteCar(int id);

    CarDto dropCost(int id,double amount);

    List<CarDto> getAllCars();





}
