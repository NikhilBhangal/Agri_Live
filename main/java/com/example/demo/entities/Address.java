package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="address")
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int Addressid;
	@Column
	String Pincode;
	@Column
	String Houseno;
	@Column
	String Area;
	@OneToOne
	@JoinColumn(name="CITYID")
	Cities city;
	
	
	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Address(int addressid, String pincode, String houseno, String area, Cities city) {
		super();
		Addressid = addressid;
		Pincode = pincode;
		Houseno = houseno;
		Area = area;
		this.city = city;
	}


	public Address(String pincode, String houseno, String area, Cities city) {
		super();
		Pincode = pincode;
		Houseno = houseno;
		Area = area;
		this.city = city;
	}


	public int getAddressid() {
		return Addressid;
	}


	public void setAddressid(int addressid) {
		Addressid = addressid;
	}


	public String getPincode() {
		return Pincode;
	}


	public void setPincode(String pincode) {
		Pincode = pincode;
	}


	public String getHouseno() {
		return Houseno;
	}


	public void setHouseno(String houseno) {
		Houseno = houseno;
	}


	public String getArea() {
		return Area;
	}


	public void setArea(String area) {
		Area = area;
	}


	public Cities getCity() {
		return city;
	}


	public void setCity(Cities city) {
		this.city = city;
	}
	
	
}
