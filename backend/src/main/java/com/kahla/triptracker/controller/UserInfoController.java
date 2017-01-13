package com.kahla.triptracker.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kahla.triptracker.domain.Trip;
import com.kahla.triptracker.domain.TripStatus;
import com.kahla.triptracker.domain.UserInfo;
import com.kahla.triptracker.repo.TripRepository;

@RestController
public class UserInfoController {
    
    @Autowired
    private TripRepository tripRepo;

    @RequestMapping(method = GET, path = "/userinfos/{userId}")
    public UserInfo getUserInfo(@PathVariable("userId") String userId) {
        UserInfo userInfo = new UserInfo();
        List<Trip> trips = tripRepo.findByUserId(userId);

        userInfo.setUserId(userId);
        userInfo.setCurrentlyTracking(anyStartedTrip(trips));
        userInfo.setCurrentTrip(getStartedTrip(trips));
        
        return userInfo;
    }

    private boolean anyStartedTrip(List<Trip> trips) {
        return trips.stream().anyMatch( trip -> trip.getTripStatus() == TripStatus.STARTED );
    }
    
    private Trip getStartedTrip(List<Trip> trips) {
        return trips.stream()
                .filter(x -> x.getTripStatus() == TripStatus.STARTED)
                .findFirst().orElse(null);
    }
}
