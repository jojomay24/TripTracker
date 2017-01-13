package com.kahla.triptracker.domain;

public class Coordinates {
    
    public Coordinates() {
    }
    
    public Coordinates(Double longitude, Double latitude) {
        this.setLongitude(longitude);
        this.setLatitude(latitude);
    }
    
    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    private Double longitude;
    
    private Double latitude;

}
