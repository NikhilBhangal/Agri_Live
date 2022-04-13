package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.CommodityPublish;
import com.example.demo.entities.SaveCommodity;
import com.example.demo.services.PublishCommodityService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class PublishCommodityController {

	@Autowired
	PublishCommodityService pservice;
	
	@PostMapping("/saveCommodity")
	public void saveCommodity(@RequestBody SaveCommodity s )
	{
	//	CommodityPublish c=new CommodityPublish(s.getPrice(),s.getUserid(),s.getCategory(),s.getCommodity());
	    pservice.InsertCommodity(s.getPrice(),s.getUserid(),s.getCategory(),s.getCommodity());
	}
}
