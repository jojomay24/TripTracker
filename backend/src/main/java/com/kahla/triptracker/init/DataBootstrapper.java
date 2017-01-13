package com.kahla.triptracker.init;

import static org.springframework.util.CollectionUtils.arrayToList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import com.google.common.base.Joiner;
import com.google.common.collect.Lists;
import com.kahla.triptracker.domain.Coordinates;
import com.kahla.triptracker.domain.Trip;
import com.kahla.triptracker.domain.TripStatus;
import com.kahla.triptracker.domain.WayPoint;
import com.kahla.triptracker.repo.TripRepository;
import com.kahla.triptracker.repo.WayPointRepository;


@Service
public class DataBootstrapper implements InitializingBean {
    
    private final Logger log = LoggerFactory.getLogger(DataBootstrapper.class);
    
    @Autowired
    TripRepository tripRepo;
    
    @Autowired
    WayPointRepository wayPointRepo;
    
    @Autowired Environment env; 
    
    @Override
    @Transactional()
    public void afterPropertiesSet() throws Exception {
        String[] activeProfiles = env.getActiveProfiles();
        validateStage(activeProfiles);
        log.info("\n###################################################"
                + "\nActive Profiles: " +  Joiner.on(" , ").join(activeProfiles)
                + "\n###################################################\n");
        
        
        log.info("Truncating data ...");
        tripRepo.deleteAll();
        wayPointRepo.deleteAll();
        
        log.info("Bootstrapping data...");
        Trip trip = createTrip();
        tripRepo.save(trip);
        WayPoint wayPoint = createWayPoint(trip);
        wayPointRepo.save(wayPoint);
        log.info("...Bootstrapping completed");
    }

    private void validateStage(String[] activeProfiles) {
        if (!(CollectionUtils.containsAny(arrayToList(activeProfiles), Lists.newArrayList("dev", "prod")))) {
            log.error("Could not find any stage profile (dev, prod) ... Assuming Dev!");
        }
        
        return;
    }

    private WayPoint createWayPoint(Trip trip) {
        WayPoint wayPoint = new WayPoint();
        wayPoint.setTripId(trip.getId());
        wayPoint.setUserId("testUserId");
        wayPoint.setCoordinates(new Coordinates(1111d, 2222d));
        return wayPoint;
    }

    private Trip createTrip() {
        Trip trip = new Trip();
        trip.setDescription("testDescription");
        trip.setName("testName");
        trip.setTripStatus(TripStatus.STOPPED);
        trip.setUserId("testUserId");
        return trip;
    }

}
