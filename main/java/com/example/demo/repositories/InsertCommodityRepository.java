package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Commodity;

@Transactional
@Repository
public interface InsertCommodityRepository extends JpaRepository<Commodity, Integer> {
    
	@Modifying
	@Query(value = "insert into COMMODITY (comname,catid) values (?2,?1)",nativeQuery = true)
	public void InsertNewCommodity(int catid, String comname) ;
		
	
	
}
