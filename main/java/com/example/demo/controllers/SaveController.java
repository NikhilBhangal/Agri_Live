package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;
import com.example.demo.entities.Cities;
import com.example.demo.entities.Farmer;
import com.example.demo.entities.Questions;
import com.example.demo.entities.Users;
import com.example.demo.services.AddressService;
import com.example.demo.services.CitiesService;
import com.example.demo.services.QuestionsService;
import com.example.demo.services.UsersService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class SaveController {

	@Autowired
	CitiesService cservice;
	
	@Autowired
	QuestionsService qservice;
	
	@Autowired
	UsersService uservice;
	
	@Autowired
	AddressService aservice;
	
	@Autowired
	JavaMailSender sender;
	
	
	@PostMapping("/savedata")
	public Users saveFarmer(@RequestBody Farmer f)
	
	{
		Cities c = cservice.getCity(f.getCityid());
		Address add = new Address(f.getPincode(), f.getHouse(), f.getArea(),c);
		Address aInserted = aservice.saveAddress(add);
		Questions q = qservice.getQuestion(f.getQid());
		Users u = new Users(f.getRole(), f.getEmail(), f.getMobile(), f.getPassword(), f.getFname(), f.getLname(), f.getAnswer(), q, aInserted);
		SimpleMailMessage mailMsg=new SimpleMailMessage();
		mailMsg.setFrom("agrilive22@gmail.com");
		mailMsg.setTo(u.getEmail());
		mailMsg.setSubject("Registration Mail");
		mailMsg.setText("Congratulation Your Registration is Successful on AgriLive System\n"+"Your Password Is : "+u.getPassword()+" plz don't Share With AnyOne\n Thanks For Registration");
		//mailMsg.setText("Your Password Is : "+u.getPassword()+"plz don't Share With AnyOne");
	//	mailMsg.setText("Thanks For Registration");
		sender.send(mailMsg);
		return uservice.saveUser(u);
	}
}
