package com.example.demo.entities;

public class InsertCommodity {

	int catid;
	String comname;
	public InsertCommodity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public InsertCommodity(int catid, String comname) {
		super();
		this.catid = catid;
		this.comname = comname;
	}
	public int getCatid() {
		return catid;
	}
	public void setCatid(int catid) {
		this.catid = catid;
	}
	public String getComname() {
		return comname;
	}
	public void setComname(String comname) {
		this.comname = comname;
	}
	
}
