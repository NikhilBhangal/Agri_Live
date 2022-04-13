package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="states")
public class States {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int Stateid;
	@Column
	String Statename;
	
	
	
	public States() {
		super();
		// TODO Auto-generated constructor stub
	}
	public States(int stateid, String statename) {
		super();
		Stateid = stateid;
		Statename = statename;
	}
	public States(String statename) {
		super();
		Statename = statename;
	}
	public int getStateid() {
		return Stateid;
	}
	public void setStateid(int stateid) {
		Stateid = stateid;
	}
	public String getStatename() {
		return Statename;
	}
	public void setStatename(String statename) {
		Statename = statename;
	}
	
	
}
