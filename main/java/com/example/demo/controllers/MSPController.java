package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.MSP;
import com.example.demo.services.MSPService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class MSPController {

	@Autowired
	MSPService mservice;
	
	@GetMapping("getMSP")
	public MSP GetMSP(@RequestParam("comid") int comid) {
		return mservice.getMSP(comid);
	}
}
