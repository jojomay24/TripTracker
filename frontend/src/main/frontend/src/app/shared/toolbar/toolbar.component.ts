import { Component, OnInit } from '@angular/core';
import {CurrentTripPublisherService} from '../services/current-trip-publisher.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public currentTripPublisherService:CurrentTripPublisherService) {
  }

}
