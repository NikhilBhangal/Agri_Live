package com.example.demo.entities;

public class SaveCommodity {

	int userid;
	
	int category;
	
	int commodity;
	
	double price;
	
	

	public SaveCommodity() {
		super();
		// TODO Auto-generated constructor stub
	}



	public SaveCommodity(int userid, int category, int commodity, double price) {
		super();
		this.userid = userid;
		this.category = category;
		this.commodity = commodity;
		this.price = price;
	}



	public int getUserid() {
		return userid;
	}



	public void setUserid(int userid) {
		this.userid = userid;
	}



	public int getCategory() {
		return category;
	}



	public void setCategory(int category) {
		this.category = category;
	}



	public int getCommodity() {
		return commodity;
	}



	public void setCommodity(int commodity) {
		this.commodity = commodity;
	}



	public double getPrice() {
		return price;
	}



	public void setPrice(double price) {
		this.price = price;
	}
	
	
	
}
