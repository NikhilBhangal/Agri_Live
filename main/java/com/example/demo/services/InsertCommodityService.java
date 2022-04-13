package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.InsertCommodityRepository;

@Service 
public class InsertCommodityService {

	@Autowired
	InsertCommodityRepository irepo;
	
	public void InsertCommodity(int catid, String comname) {
		  irepo.InsertNewCommodity(catid,comname);
	}
}
