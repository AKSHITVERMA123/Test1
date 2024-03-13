package com.car_app.dto;


//import lombok.AllArgsConstructor;
//import lombok.Data;

//@Data
//@AllArgsConstructor
public class CarDto {
	
    private int id;
    private String carName;
    private  String carType;
    private  String carFuelType;
    private  Integer buildYear;
    private double ncapRating;
    private  double mileage;
    private int length;
    private double cost;
    private int topSpeed;
    private int torque;
    private int bootspace;
    
	public CarDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CarDto(int id, String carName, String carType, String carFuelType, Integer buildYear, double ncapRating,
			double mileage, int length, double cost, int topSpeed, int torque, int bootspace) {
		super();
		this.id = id;
		this.carName = carName;
		this.carType = carType;
		this.carFuelType = carFuelType;
		this.buildYear = buildYear;
		this.ncapRating = ncapRating;
		this.mileage = mileage;
		this.length = length;
		this.cost = cost;
		this.topSpeed = topSpeed;
		this.torque = torque;
		this.bootspace = bootspace;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCarName() {
		return carName;
	}

	public void setCarName(String carName) {
		this.carName = carName;
	}

	public String getCarType() {
		return carType;
	}

	public void setCarType(String carType) {
		this.carType = carType;
	}

	public String getCarFuelType() {
		return carFuelType;
	}

	public void setCarFuelType(String carFuelType) {
		this.carFuelType = carFuelType;
	}

	public Integer getBuildYear() {
		return buildYear;
	}

	public void setBuildYear(Integer buildYear) {
		this.buildYear = buildYear;
	}

	public double getNcapRating() {
		return ncapRating;
	}

	public void setNcapRating(double ncapRating) {
		this.ncapRating = ncapRating;
	}

	public double getMileage() {
		return mileage;
	}

	public void setMileage(double mileage) {
		this.mileage = mileage;
	}

	public int getLength() {
		return length;
	}

	public void setLength(int length) {
		this.length = length;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public int getTopSpeed() {
		return topSpeed;
	}

	public void setTopSpeed(int topSpeed) {
		this.topSpeed = topSpeed;
	}

	public int getTorque() {
		return torque;
	}

	public void setTorque(int torque) {
		this.torque = torque;
	}

	public int getBootspace() {
		return bootspace;
	}

	public void setBootspace(int bootspace) {
		this.bootspace = bootspace;
	}
    
    
}
