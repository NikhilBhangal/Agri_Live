package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.StatesService;
import com.example.demo.services.UpdateMSPService;
import com.example.demo.entities.States;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class UpdateMSPController {

	@Autowired
	UpdateMSPService uservice;
	
	@PostMapping("/updatemsp")
	public int UpdateMSP(@RequestBody com.example.demo.entities.UpdateMSP u)
	{
		System.out.println(u.getMsp());
		System.out.println(u.getCommid());
		return uservice.UpdateMSP(u.getMsp(),u.getCommid());
	}
}
