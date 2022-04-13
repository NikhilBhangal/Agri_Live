package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Questions;
import com.example.demo.repositories.QuestionsRepository;

@Service
public class QuestionsService {

	@Autowired
	QuestionsRepository qrepo;
	
	
	public List<Questions> getQuestions()
	{
		List<Questions> l =qrepo.findAll();
		System.out.println(l.get(0));
		return l;
	}
	
	public Questions getQuestion(int id)
	{
		return qrepo.findById(id).get();
	}
}
