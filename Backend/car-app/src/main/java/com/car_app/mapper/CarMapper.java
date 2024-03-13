package com.car_app.mapper;

import com.car_app.dto.CarDto;
import com.car_app.entities.Car;

public class CarMapper {
    public  static Car mapToCar(CarDto carDto){
        Car car=new Car(
                carDto.getId(),
                carDto.getCarName(),
                carDto.getCarType(),
                carDto.getCarFuelType(),
                carDto.getBuildYear(),
                carDto.getNcapRating(),
                carDto.getMileage(),
                carDto.getLength(),
                carDto.getCost(),
                carDto.getTopSpeed(),
                carDto.getTorque(),
                carDto.getBootspace()
        );
        return car;
    }
    public  static CarDto mapToCarDto(Car car){
        CarDto carDto = new CarDto(
                car.getId(),
                car.getCarName(),
                car.getCarType(),
                car.getCarFuelType(),
                car.getBuildYear(),
                car.getEncapRating(),
                car.getMileage(),
                car.getLength(),
                car.getCost(),
                car.getTopSpeed(),
                car.getTorque(),
                car.getBootspace()
        );
        return carDto;
    }

}
