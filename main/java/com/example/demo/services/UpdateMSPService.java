package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.UpdateMSPRepository;

@Service
public class UpdateMSPService {
	
	@Autowired
	UpdateMSPRepository urepo;
	
	public int UpdateMSP(double msp,int comid) {
		return urepo.UpdateMSP(msp,comid);
	}
	

}
