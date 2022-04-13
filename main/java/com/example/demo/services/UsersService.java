package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Users;
import com.example.demo.repositories.UserRepository;

@Service
public class UsersService {

	@Autowired
	UserRepository urepo;
	
	public List<Users> All()
	{
		
		return urepo.findAll();
	}
	
	public Users saveUser(Users u)
	{
		return urepo.save(u);
	}
}
