package com.kahla.triptracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kahla.triptracker.domain.SearchParams;
import com.kahla.triptracker.domain.Trip;
import com.kahla.triptracker.repo.TripRepository;

@RestController
@RequestMapping(path="/search")
public class SearchController {
    
    @Autowired
    private TripRepository tripRepo;
    
    @RequestMapping(method = RequestMethod.POST, path = "/findTrips")
    public List<Trip> findTrip(@RequestBody SearchParams params, Model model) {
        return tripRepo.findByUserId(params.getUserId());
    }

}
