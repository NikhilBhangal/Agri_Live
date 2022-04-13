package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.InsertCommodityService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class InsertCommodityController {

	@Autowired
	InsertCommodityService iservice;
	
	@PostMapping("/insertCommodity")
	public void InsertCommodity(@RequestBody com.example.demo.entities.InsertCommodity i) {
		System.out.println(i.getCatid());
		System.out.println(i.getComname());
		iservice.InsertCommodity(i.getCatid(), i.getComname());
	}
}
