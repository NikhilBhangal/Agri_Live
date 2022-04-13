package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.ForgotPasswordRepository;

@Service
public class ForgotPasswordService {

	@Autowired
	ForgotPasswordRepository frepo;
	
	public int SetForgotPassword(String pwd,String email,int qid,String ans) {
	return	frepo.setForgotPassword(pwd, email, qid, ans);
	}
}
