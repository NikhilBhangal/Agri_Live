package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ForgotPassword;
import com.example.demo.services.ForgotPasswordService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class ForgotPasswordController {

	@Autowired
	ForgotPasswordService fservice;
	
	@PostMapping("/forgotpassword")
	public int setForgotPassword(@RequestBody ForgotPassword f) {
		System.out.println(f.getPwd());
		System.out.println(f.getEmail());
		System.out.println(f.getQid());
		System.out.println(f.getAns());
		return fservice.SetForgotPassword(f.getPwd(),f.getEmail(),f.getQid(),f.getAns());
	}

	
}
