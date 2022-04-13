package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.States;
import com.example.demo.repositories.StateRepository;

@Service
public class StatesService {
	
	@Autowired
	StateRepository srepo;
	
	public List<States> allStates()
	{
		return srepo.findAll();
	}
	
	public States getState(int sid)
	{
		return srepo.findById(sid).get();
	}
}
