package com.example.demo.entities;


public class UpdateMSP {

	int catid;
	int commid;
	double msp;
	public UpdateMSP(int catid, int commid, double msp) {
		super();
		this.catid = catid;
		this.commid = commid;
		this.msp = msp;
	}
	public UpdateMSP() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getCatid() {
		return catid;
	}
	public void setCatid(int catid) {
		this.catid = catid;
	}
	public int getCommid() {
		return commid;
	}
	public void setCommid(int commid) {
		this.commid = commid;
	}
	public double getMsp() {
		return msp;
	}
	public void setMsp(double msp) {
		this.msp = msp;
	}
	
	
	
}
