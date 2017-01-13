package com.kahla.triptracker.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.kahla.triptracker.domain.Trip;

@RepositoryRestResource(collectionResourceRel = "trips", path = "trips")
public interface TripRepository extends MongoRepository<Trip, String> {

    List<Trip> findByName(@Param("name") String name);
	
    List<Trip> findByUserId(@Param("userId") String name);

}
