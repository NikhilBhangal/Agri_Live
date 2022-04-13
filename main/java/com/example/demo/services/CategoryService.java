package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.entities.States;
import com.example.demo.repositories.CategoryRepository;



@Service
public class CategoryService {
	@Autowired
	CategoryRepository crepo;

	public List<Category> getCategory(){
	return	crepo.findAll();
	}
	
	public Category getCategory1(int cid)
	{
		return crepo.findById(cid).get();
	}
}
