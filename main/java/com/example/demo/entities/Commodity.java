package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="commodity")
public class Commodity {

	@Id
	@Column(name="comid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int comid;
	@Column
	String comname;
	
	@Lob
	Byte[] image;
	
	@ManyToOne
	@JoinColumn(name="catid")
	Category category;
	public Commodity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Commodity(int comid, String comname, Byte[] image, Category category) {
		super();
		this.comid = comid;
		this.comname = comname;
		this.image = image;
		this.category = category;
	}
	public Commodity(String comname, Byte[] image, Category category) {
		super();
		this.comname = comname;
		this.image = image;
		this.category = category;
	}
	public int getComid() {
		return comid;
	}
	public void setComid(int comid) {
		this.comid = comid;
	}
	public String getComname() {
		return comname;
	}
	public void setComname(String comname) {
		this.comname = comname;
	}
	public Byte[] getImage() {
		return image;
	}
	public void setImage(Byte[] image) {
		this.image = image;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	
	
}
