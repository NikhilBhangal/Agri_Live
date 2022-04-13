package com.example.demo.entities;

public class Farmer {

	String fname;
	String lname;
	String role;
	String email;
	String password;
	String area;
	int cityid;
	String pincode;
	States state;
	String house;
	String mobile;
	//String question;
	int qid;
	String answer;
	public Farmer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Farmer(String fname, String lname, String role, String email, String password, String area, int cityid,
			String pincode, States state, String house, String mobile, int qid, String answer) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.role = role;
		this.email = email;
		this.password = password;
		this.area = area;
		this.cityid = cityid;
		this.pincode = pincode;
		this.state = state;
		this.house = house;
		this.mobile = mobile;
		this.qid = qid;
		this.answer = answer;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public int getCityid() {
		return cityid;
	}
	public void setCityid(int cityid) {
		this.cityid = cityid;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public States getState() {
		return state;
	}
	public void setState(States state) {
		this.state = state;
	}
	public String getHouse() {
		return house;
	}
	public void setHouse(String house) {
		this.house = house;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	
	
}
