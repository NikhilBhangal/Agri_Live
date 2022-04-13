package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.CommodityPublish;
import com.example.demo.repositories.PublishCommodityRepository;

@Service
public class PublishCommodityService {

	
	@Autowired
	PublishCommodityRepository prepo;
	
	public void InsertCommodity( double price,int userid,int catid,int comid) {
		prepo.savecommodity(price,userid,catid,comid);
	}
}
