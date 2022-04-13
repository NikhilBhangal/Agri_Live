package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.web.bind.annotation.RequestBody;

@Entity
@Table(name="dealer_com_publish")
public class CommodityPublish {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int pid;
	
	@Column
	double price;
	
	@Column
	int userid;
	
	@Column
	Date updationdate;
	
	@Column
	int catid;
	
	@Column
	int comid;

	public CommodityPublish() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CommodityPublish(int pid, double price, int userid, Date updationdate, int catid, int comid) {
		super();
		this.pid = pid;
		this.price = price;
		this.userid = userid;
		this.updationdate = updationdate;
		this.catid = catid;
		this.comid = comid;
	}

	public CommodityPublish(double price, int userid, int catid, int comid) {
		super();
		this.price = price;
		this.userid = userid;
		
		this.catid = catid;
		this.comid = comid;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public Date getUpdationdate() {
		return updationdate;
	}

	public void setUpdationdate(Date updationdate) {
		this.updationdate = updationdate;
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
