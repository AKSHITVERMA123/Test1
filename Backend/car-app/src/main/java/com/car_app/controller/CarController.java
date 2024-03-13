package com.car_app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.car_app.dto.CarDto;
import com.car_app.service.CarService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cars")
public class CarController {
    private CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }
    // ADD CAR REST API
    @PostMapping
    public ResponseEntity<CarDto> addCar(@RequestBody CarDto carDto){
        return new ResponseEntity<>(carService.createCar(carDto), HttpStatus.CREATED);
    }

    // GET CAR REST API
    @GetMapping("/{id}")
    public ResponseEntity<CarDto> getCarById(@PathVariable int id)
    {
        CarDto carDto=carService.getCarById(id);
        return ResponseEntity.ok(carDto);
    }

    //ADD COST REST API
    @PutMapping("/{id}/add_cost")
    public ResponseEntity<CarDto> addCost(@PathVariable int id,
                                           @RequestBody Map<String,Double> request){
        Double amount = request.get("amount");
        CarDto carDto=carService.addCost(id,amount);
        return ResponseEntity.ok(carDto);
    }
    //DROP COST REST API
    @PutMapping("/{id}/drop_cost")
    public ResponseEntity<CarDto> dropCost(@PathVariable int id,
                                               @RequestBody Map<String,Double> request){
        Double amount =request.get("amount");
        CarDto carDto= carService.dropCost(id,amount);
        return ResponseEntity.ok(carDto);
    }

    // GET ALL CARS REST API
    @GetMapping
    public ResponseEntity<List<CarDto>> getAllCars(){
        List<CarDto> accounts=carService.getAllCars();
        return ResponseEntity.ok(accounts);
    }

    //DELETE CAR REST API
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable int id){
        carService.deleteCar(id);
        return ResponseEntity.ok("Car is deleted Successfully!");
    }

}
