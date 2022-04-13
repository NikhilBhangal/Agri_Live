package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.SearchCommodityService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class SearchCommodityController {

	@Autowired
	SearchCommodityService sservice;
	
	@PostMapping("/search")
	public List<String[]> SeachCommodity(@RequestParam("catid") int catid,@RequestParam("comid") int comid,@RequestParam("cityid")int cityid,@RequestParam("stateid")int stateid){

System.out.println(catid);
System.out.println(comid);
System.out.println(cityid);
System.out.println(stateid);
		return sservice.searchCommodity(catid, comid,cityid,stateid);
		
	}
}
