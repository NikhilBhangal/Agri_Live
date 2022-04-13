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
@Table(name="msp")
public class MSP {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int mspid;
	@Column
	int msp;
	
	@OneToOne
	@JoinColumn(name="COMID")
	Commodity commodity;

	public MSP() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MSP(int mspid, int msp, Commodity commodity) {
		super();
		this.mspid = mspid;
		this.msp = msp;
		this.commodity = commodity;
	}

	public MSP(int msp, Commodity commodity) {
		super();
		this.msp = msp;
		this.commodity = commodity;
	}

	public int getMspid() {
		return mspid;
	}

	public void setMspid(int mspid) {
		this.mspid = mspid;
	}

	public int getMsp() {
		return msp;
	}

	public void setMsp(int msp) {
		this.msp = msp;
	}

	public Commodity getCommodity() {
		return commodity;
	}

	public void setCommodity(Commodity commodity) {
		this.commodity = commodity;
	}

	
	
	

}
