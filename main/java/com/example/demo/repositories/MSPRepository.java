package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Commodity;
import com.example.demo.entities.MSP;

@Repository
public interface MSPRepository extends JpaRepository<MSP, Integer>{

}
