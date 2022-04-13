package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Users;
import com.example.demo.repositories.UserRepository;
import com.example.demo.services.UsersService;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class UsersController {
	
	
	@Autowired
	UsersService uservice;
	
	@GetMapping("/all")
	public List<Users> getAll()
	{
		return uservice.All();
	}
	
	//@GetMapping("/login")
	@PostMapping("/login")
	//public String Login(@RequestParam("email") String email, @RequestParam("pass") String pwd)
	public Users Login(@RequestParam("email") String email, @RequestParam("pass") String pwd)
	{
		List<Users> l =  uservice.All();
		
		boolean flag = false;
		for(Users u : l)
		{
			
			//if(email==u.getEmail() && pwd==u.getPassword())
			if(email.equalsIgnoreCase(u.getEmail() ) && pwd.equalsIgnoreCase(u.getPassword()) )
			{
				flag = true;
				return  (Users)u;
			}
			//else return (Users)u; 
		}
		/*if(flag == true)
		{
			return l;
		}
		else
			return l;*/
		Users u = new Users();
		return u;
		
	}

}
