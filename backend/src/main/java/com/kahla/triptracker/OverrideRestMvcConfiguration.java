package com.kahla.triptracker;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

import com.kahla.triptracker.domain.Trip;

@Configuration
public class OverrideRestMvcConfiguration extends RepositoryRestMvcConfiguration {
    
    @Override
    protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Trip.class);
    }


}
