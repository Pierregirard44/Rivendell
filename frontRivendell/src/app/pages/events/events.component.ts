import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events = [
    { title: 'Event 1', date: '2024-08-01', location: 'Location 1', description: 'Description 1' },
    { title: 'Event 2', date: '2024-08-02', location: 'Location 2', description: 'Description 2' },
    { title: 'Event 3', date: '2024-08-03', location: 'Location 3', description: 'Description 3' },
    { title: 'Event 4', date: '2024-08-04', location: 'Location 4', description: 'Description 4' },
    { title: 'Event 5', date: '2024-08-05', location: 'Location 5', description: 'Description 5' },
    { title: 'Event 6', date: '2024-08-06', location: 'Location 6', description: 'Description 6' },
    { title: 'Event 7', date: '2024-08-07', location: 'Location 7', description: 'Description 7' },
    { title: 'Event 8', date: '2024-08-08', location: 'Location 8', description: 'Description 8' },
    { title: 'Event 9', date: '2024-08-09', location: 'Location 9', description: 'Description 9' },
    { title: 'Event 10', date: '2024-08-10', location: 'Location 10', description: 'Description 10' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
