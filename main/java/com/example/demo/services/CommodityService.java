package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.entities.Cities;
import com.example.demo.entities.Commodity;
import com.example.demo.entities.States;
import com.example.demo.repositories.CommodityRepository;

@Service
public class CommodityService {

	@Autowired
	CommodityRepository crepo;
	public List<Commodity> getcom(Category catid)
	{
		return crepo.getComnodity(catid);
	}
	
	public Commodity getCommodity(int id)
	{
		return crepo.findById(id).get();
	}
}
