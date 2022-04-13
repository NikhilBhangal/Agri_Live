package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.MSP;
@Transactional
@Repository
public interface UpdateMSPRepository extends JpaRepository<MSP, Integer> {
	
@Modifying	
@Query(value = "Update MSP set MSP=?1,UPDATIONDATE=curdate() where comid=?2 ",nativeQuery = true)	
public int UpdateMSP(double msp,int comid);
}
