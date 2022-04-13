package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Category;
import com.example.demo.entities.Commodity;
import com.example.demo.entities.CommodityPublish;

@Transactional
@Repository
public interface PublishCommodityRepository extends JpaRepository<CommodityPublish, Integer> {
	@Modifying
	@Query(value="Insert into dealer_com_publish  (price,userid,catid,comid) values (?1,?2,?3,?4)",nativeQuery = true)
	public void savecommodity(double price,int userid,int catid,int comid);

}
