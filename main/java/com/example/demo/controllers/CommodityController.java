package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.entities.Cities;
import com.example.demo.entities.Commodity;
import com.example.demo.entities.States;
import com.example.demo.repositories.CityRepository;
import com.example.demo.services.CategoryService;
import com.example.demo.services.CommodityService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class CommodityController {
	
	@Autowired 
	CategoryService cservice1;
	
	@Autowired
	CommodityService comservice;
	
	
	@GetMapping("/allcommodity")
	public List<Commodity> allCities(@RequestParam("catid") int cid)
	{
		Category s = cservice1.getCategory1(cid);
		return comservice.getcom(s);
	}
}
