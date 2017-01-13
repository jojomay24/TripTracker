package com.kahla.triptracker.domain;


public class UserInfo {
    
    private String userId;
    
    private String name="someUserName";
    
    private Boolean currentlyTracking=true;
    
    private Trip currentTrip = new Trip();

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getCurrentlyTracking() {
        return currentlyTracking;
    }

    public void setCurrentlyTracking(Boolean currentlyTracking) {
        this.currentlyTracking = currentlyTracking;
    }

    public Trip getCurrentTrip() {
        return currentTrip;
    }

    public void setCurrentTrip(Trip currentTrip) {
        this.currentTrip = currentTrip;
    }

}
