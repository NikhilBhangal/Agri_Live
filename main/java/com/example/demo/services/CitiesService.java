package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Cities;
import com.example.demo.entities.States;
import com.example.demo.repositories.CityRepository;

@Service
public class CitiesService {

	@Autowired
	CityRepository crepo;
	
	public List<Cities> getCt(States stateid)
	{
		return crepo.getCT(stateid);
	}
	
	public Cities getCity(int id)
	{
		return crepo.findById(id).get();
	}
}
