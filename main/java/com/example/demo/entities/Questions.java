package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "questions")
public class Questions {
	
	@Id
	@Column(name="QID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int Qid;
	@Column(name="QUESTION")
	String Question;
	
	public Questions() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Questions(int qid, String question) {
		super();
		Qid = qid;
		Question = question;
		
	}
	public Questions(String question) {
		super();
		Question = question;
		
	}
	public int getQid() {
		return Qid;
	}
	public void setQid(int qid) {
		Qid = qid;
	}
	public String getQuestion() {
		return Question;
	}
	public void setQuestion(String question) {
		Question = question;
	}
	
	
}
