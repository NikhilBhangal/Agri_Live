package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Users")
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int Userid;
	@Column
	String Role;
	@Column
	String Email;
	@Column
	String mobile;
	@Column
	String Password;
	@Column
	String Fname;
	@Column
	String Lname;
	@Column
	String Answer;
	@OneToOne
	@JoinColumn(name="QID")
	Questions question;		
	@OneToOne
	@JoinColumn(name="ADDRESSID")
	Address address;
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Users(int userid, String role, String email, String mobile, String password, String fname, String lname,
			String answer, Questions question, Address address) {
		super();
		Userid = userid;
		Role = role;
		Email = email;
		this.mobile = mobile;
		Password = password;
		Fname = fname;
		Lname = lname;
		Answer = answer;
		this.question = question;
		this.address = address;
	}
	public Users(String role, String email, String mobile, String password, String fname, String lname, String answer,
			Questions question, Address address) {
		super();
		Role = role;
		Email = email;
		this.mobile = mobile;
		Password = password;
		Fname = fname;
		Lname = lname;
		Answer = answer;
		this.question = question;
		this.address = address;
	}
	public int getUserid() {
		return Userid;
	}
	public void setUserid(int userid) {
		Userid = userid;
	}
	public String getRole() {
		return Role;
	}
	public void setRole(String role) {
		Role = role;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getFname() {
		return Fname;
	}
	public void setFname(String fname) {
		Fname = fname;
	}
	public String getLname() {
		return Lname;
	}
	public void setLname(String lname) {
		Lname = lname;
	}
	public String getAnswer() {
		return Answer;
	}
	public void setAnswer(String answer) {
		Answer = answer;
	}
	public Questions getQuestion() {
		return question;
	}
	public void setQuestion(Questions question) {
		this.question = question;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	
	
	
	

}
