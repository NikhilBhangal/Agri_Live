package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Cities;
import com.example.demo.entities.States;
import com.example.demo.services.CitiesService;
import com.example.demo.services.StatesService;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class CitiesController {

	@Autowired
	CitiesService cservice;
	
	@Autowired
	StatesService sservice;
	
	//@PostMapping("/allcities")
	@GetMapping("/allcities")
	public List<Cities> allCities(@RequestParam("stateid") int sid)
	{
		States s = sservice.getState(sid);
		return cservice.getCt(s);
	}
	
	
}
