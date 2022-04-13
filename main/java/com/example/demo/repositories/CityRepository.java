package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Cities;
import com.example.demo.entities.States;

@Repository
public interface CityRepository extends JpaRepository< Cities,Integer> {

	@Query(value="select c from Cities c where state = ?1")
	//@Query(value="Select * from cities c inner join states s on c.stateid=s.stateid where s.stateid = ?1", nativeQuery = true)
	public List<Cities> getCT(States stateid);
	
}
