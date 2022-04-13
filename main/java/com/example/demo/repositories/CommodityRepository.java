package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Category;
import com.example.demo.entities.Cities;
import com.example.demo.entities.Commodity;
import com.example.demo.entities.States;

@Repository
public interface CommodityRepository extends JpaRepository<Commodity, Integer> {

	@Query(value="select c from Commodity c where category = ?1")
	public List<Commodity> getComnodity(Category catid);
}
