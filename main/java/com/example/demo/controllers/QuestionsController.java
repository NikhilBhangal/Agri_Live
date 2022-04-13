package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Questions;
import com.example.demo.services.QuestionsService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class QuestionsController {
	
	@Autowired
	QuestionsService qservice;
	
	@GetMapping("/allquestions")
	public List<Questions> allQuestions()
	{
		return qservice.getQuestions();
	}

}
