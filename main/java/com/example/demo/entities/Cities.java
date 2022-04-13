package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="cities")
public class Cities {
	@Id
	@Column(name="CITYID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int Cityid;
	@Column
	String Cityname;
	@ManyToOne
	@JoinColumn(name="STATEID")
	States state;
	
	
	public Cities() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Cities(int cityid, String cityname, States state) {
		super();
		Cityid = cityid;
		Cityname = cityname;
		this.state = state;
	}


	public Cities(String cityname, States state) {
		super();
		Cityname = cityname;
		this.state = state;
	}


	public int getCityid() {
		return Cityid;
	}


	public void setCityid(int cityid) {
		Cityid = cityid;
	}


	public String getCityname() {
		return Cityname;
	}


	public void setCityname(String cityname) {
		Cityname = cityname;
	}


	public States getState() {
		return state;
	}


	public void setState(States state) {
		this.state = state;
	}
	
	
}
