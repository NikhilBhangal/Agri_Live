package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.SearchCommodity;
import com.example.demo.entities.Users;

@Repository
public interface SearchCommodityRepository extends JpaRepository<Users, Integer> {

	//@Query(value="Select fname,lname from users u inner join dealer_com_publish d on u.userid=d.userid where d.catid=?1 and d.comid=?2",nativeQuery = true)
	//@Query(value="Select fname,lname from users u inner join dealer_com_publish d on u.userid=d.userid inner join address a on u.addressid=a.addressid inner join cities c on a.cityid=c.cityid inner join states s on c.stateid=s.stateid where d.catid=?1 and d.comid=?2 and c.cityid=?3 and s.stateid=?4",nativeQuery = true)
//@Query(value = "Select fname,lname,email,mobile from users u inner join dealer_com_publish d inner join address a inner join cities c inner join states s on u.userid=d.userid and u.addressid=a.addressid and a.cityid=c.cityid and c.stateid=s.stateid where d.catid=?1 and d.comid=?2  and c.cityid=?3 and s.stateid=?4",nativeQuery = true)

	@Query(value = "Select fname,lname,email,mobile,d.price,a.area,a.pincode,com.comname from users u inner join dealer_com_publish d inner join address a inner join cities c inner join states s  inner join commodity com on d.comid=com.comid and  u.userid=d.userid and u.addressid=a.addressid and a.cityid=c.cityid and c.stateid=s.stateid where d.catid=?1 and d.comid=?2  and c.cityid=?3 and s.stateid=?4",nativeQuery = true)
	public List<String[]> seachCommodity(int catid,int comid,int cityid,int stateid);
    
}
