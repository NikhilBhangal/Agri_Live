package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.SearchCommodityRepository;

@Service
public class SearchCommodityService {

	@Autowired
	SearchCommodityRepository srepo;
	
	public List<String[]> searchCommodity(int catid,int comid,int cityid,int stateid){
		return srepo.seachCommodity(catid, comid,cityid,stateid);
	}
}
