package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Users;

@Repository
public interface ForgotPasswordRepository extends JpaRepository<Users, Integer> {
@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "Update users set password=?1 where email=?2 and qid=?3 and answer=?4 ",nativeQuery = true)
	public int setForgotPassword(String pwd,String email,int qid,String ans);
		
	
}
