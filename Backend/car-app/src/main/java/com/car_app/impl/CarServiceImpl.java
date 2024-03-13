package com.car_app.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.car_app.dto.CarDto;
import com.car_app.entities.Car;
import com.car_app.mapper.CarMapper;
import com.car_app.repository.CarRepository;
import com.car_app.service.CarService;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CarServiceImpl implements CarService {

@Autowired
private CarRepository carRepository;

    public CarServiceImpl(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public CarDto createCar(CarDto carDto) {
        Car car= CarMapper.mapToCar(carDto);
        Car savedCar=carRepository.save(car);

        return CarMapper.mapToCarDto(savedCar);
    }

    @Override
    public CarDto getCarById(int id) {
        Car car = carRepository
                .findById(id)
                .orElseThrow(() -> new  RuntimeException("Account does not exist"));
        return CarMapper.mapToCarDto(car);
    }

    @Override
    public CarDto addCost(int id, double amount) {
        Car car = carRepository
                .findById(id)
                .orElseThrow(() -> new  RuntimeException("Account does not exist"));

        double total = car.getCost()+amount;
        car.setCost(total);
        Car savedCar = carRepository.save(car);
        return CarMapper.mapToCarDto(savedCar);
    }

    @Override
    public void deleteCar(int id) {
        Car car = carRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Account does not exist"));

        carRepository.deleteById(id);
    }


    @Override
    public CarDto dropCost(int id, double amount) {
            Car car = carRepository
                    .findById(id)
                    .orElseThrow(() -> new RuntimeException("Account does not exist"));

            if(car.getCost() < amount){
                throw new RuntimeException("Insufficient amount");
            }

            double total= car.getCost()- amount;
            car.setCost(total);
            Car savedAccount = carRepository.save(car);

            return CarMapper.mapToCarDto(savedAccount);
        }

    @Override
    public List<CarDto> getAllCars() {
        List<Car> cars = carRepository.findAll();
        return cars.stream().map((car) -> CarMapper.mapToCarDto(car))
                .collect(Collectors.toList());
    }
}