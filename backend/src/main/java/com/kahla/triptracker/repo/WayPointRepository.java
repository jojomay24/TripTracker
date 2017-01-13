package com.kahla.triptracker.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.kahla.triptracker.domain.WayPoint;

@RepositoryRestResource(collectionResourceRel = "waypoints", path = "waypoints")
public interface WayPointRepository extends MongoRepository<WayPoint, String> {

    List<WayPoint> findByUserId(@Param("userId") String userId);
    
	List<WayPoint> findByTripId(@Param("tripId") String tripId);

}
