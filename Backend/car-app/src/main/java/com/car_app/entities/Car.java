package com.car_app.entities;

import javax.persistence.*;

@Table(name="cars")
@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "carId")
    private int id; 

    @Column(name = "car_Name")
    private String carName;
    private  String carType;
    private  String carFuelType;
    private  Integer  buildYear;
    private double encapRating;
    private  double mileage;
    private int length;
    private double cost;
    private int topSpeed;
    private int torque;
    private int bootspace;
    
    
    public Car() {
    	
	}

	public Car(int id, String carName, String carType, String carFuelType, Integer buildYear, double encapRating,
			double mileage, int length, double cost, int topSpeed, int torque, int bootspace) {
		super();
		this.id = id;
		this.carName = carName;
		this.carType = carType;
		this.carFuelType = carFuelType;
		this.buildYear = buildYear;
		this.encapRating = encapRating;
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
	public double getEncapRating() {
		return encapRating;
	}
	public void setEncapRating(double encapRating) {
		this.encapRating = encapRating;
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

	@Override
	public String toString() {
		return "Car [id=" + id + ", carName=" + carName + ", carType=" + carType + ", carFuelType=" + carFuelType
				+ ", buildYear=" + buildYear + ", encapRating=" + encapRating + ", mileage=" + mileage + ", length="
				+ length + ", cost=" + cost + ", topSpeed=" + topSpeed + ", torque=" + torque + ", bootspace="
				+ bootspace + "]";
	}
}
