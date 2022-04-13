package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.MSP;
import com.example.demo.repositories.MSPRepository;

@Service
public class MSPService {

	@Autowired
	MSPRepository mrepo;
	
	public List<MSP> getMSP1(){
		return mrepo.findAll();
	}
	
	public MSP getMSP(int comid) {
		return mrepo.findById(comid).get();
	}
}
