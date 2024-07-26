import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
      this.events = [
        {
          id: 1,
          title: 'Soirée jeux de société',
          date: '2021-08-15',
          location: 'Rivendell',
          description: 'Venez nombreux pour une soirée jeux de société !',
          image: 'https://via.placeholder.com/150',
          participant: 'Pierre et Brad',
        },
        {
          id: 2,
          title: 'Soirée jeux de société',
          date: '2021-08-15',
          location: 'Rivendell',
          description: 'Venez nombreux pour une soirée jeux de société !',
          image: 'https://via.placeholder.com/150',
          participant: 'Pierre et Brad',
        },
        {
          id: 3,
          title: 'Soirée jeux de société',
          date: '2021-08-15',
          location: 'Rivendell',
          description: 'Venez nombreux pour une soirée jeux de société !',
          image: 'https://via.placeholder.com/150',
          participant: 'Pierre et Brad',
        },
        {
          id: 4,
          title: 'Soirée jeux de société',
          date: '2021-08-15',
          location: 'Rivendell',
          description: 'Venez nombreux pour une soirée jeux de société !',
          image: 'https://via.placeholder.com/150',
          participant: 'Pierre et Brad',
        },
        {
          id: 5,
          title: 'Soirée jeux de société',
          date: '2021-08-15',
          location: 'Rivendell',
          description: 'Venez nombreux pour une soirée jeux de société !',
          image: 'https://via.placeholder.com/150',
          participant: 'Pierre et Brad',
        }
      ];
    // this.eventService.getEvents().subscribe(
    //   (data) => {
    //     this.events = data;
    //   },
    //   (error) => {
    //     console.error('Erreur lors du chargement des événements:', error);
    //   }
    // );
  }
}
