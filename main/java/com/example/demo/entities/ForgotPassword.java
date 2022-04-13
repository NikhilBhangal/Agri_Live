package com.example.demo.entities;

public class ForgotPassword {

	String email;
	String pwd;
	int qid;
	String ans;
	public ForgotPassword() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ForgotPassword(String email, String pwd, int qid, String ans) {
		super();
		this.email = email;
		this.pwd = pwd;
		this.qid = qid;
		this.ans = ans;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
	}
	public String getAns() {
		return ans;
	}
	public void setAns(String ans) {
		this.ans = ans;
	}
	
	
}
