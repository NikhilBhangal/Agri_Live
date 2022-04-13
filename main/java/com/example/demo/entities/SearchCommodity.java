package com.example.demo.entities;

import javax.persistence.Entity;


public class SearchCommodity {

	   int userid;
	   
	   int stateid;
	   
	   int cityid;
	   
	   int catid;
	   
	   int comid;

	public SearchCommodity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SearchCommodity(int userid, int stateid, int cityid, int catid, int comid) {
		super();
		this.userid = userid;
		this.stateid = stateid;
		this.cityid = cityid;
		this.catid = catid;
		this.comid = comid;
	}

	public SearchCommodity(int stateid, int cityid, int catid, int comid) {
		super();
		this.stateid = stateid;
		this.cityid = cityid;
		this.catid = catid;
		this.comid = comid;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public int getStateid() {
		return stateid;
	}

	public void setStateid(int stateid) {
		this.stateid = stateid;
	}

	public int getCityid() {
		return cityid;
	}

	public void setCityid(int cityid) {
		this.cityid = cityid;
	}

	public int getCatid() {
		return catid;
	}

	public void setCatid(int catid) {
		this.catid = catid;
	}

	public int getComid() {
		return comid;
	}

	public void setComid(int comid) {
		this.comid = comid;
	}
	   
	   
	   
}
