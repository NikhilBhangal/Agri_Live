package com.example.demo.entities;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="categories")
public class Category {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int catid;
	
	@Column
	String catname;

	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Category(int catid, String catname) {
		super();
		this.catid = catid;
		this.catname = catname;
	}

	public Category(String catname) {
		super();
		this.catname = catname;
	}

	public int getCatid() {
		return catid;
	}

	public void setCatid(int catid) {
		this.catid = catid;
	}

	public String getCatname() {
		return catname;
	}

	public void setCatname(String catname) {
		this.catname = catname;
	}

	
}
