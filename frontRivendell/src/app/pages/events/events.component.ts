import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events = [
    {
      "title": "Conférence sur l'Intelligence Artificielle",
      "date": "2024-08-01",
      "location": "Auditorium de la Tech University",
      "description": "Une conférence approfondie sur les dernières avancées en intelligence artificielle avec des experts renommés du domaine."
    },
    {
      "title": "Atelier de Photographie Numérique",
      "date": "2024-08-02",
      "location": "Studio Photo Créatif, Paris",
      "description": "Atelier pratique pour améliorer vos compétences en photographie numérique avec des séances en extérieur et des critiques constructives."
    },
    {
      "title": "Concert de Jazz en Plein Air",
      "date": "2024-08-03",
      "location": "Parc des Expositions, Lyon",
      "description": "Concert de jazz en plein air avec des performances de groupes locaux et internationaux. Apportez vos chaises et pique-niques !"
    },
    {
      "title": "Séminaire sur la Gestion de Projet Agile",
      "date": "2024-08-04",
      "location": "Salle de Conférences B, Hôtel Mercure",
      "description": "Séminaire pour les professionnels sur les meilleures pratiques de gestion de projet agile et les outils modernes pour optimiser les équipes."
    },
    {
      "title": "Fête de la Gastronomie Locale",
      "date": "2024-08-05",
      "location": "Place de la République, Bordeaux",
      "description": "Un festival de gastronomie mettant en avant des chefs locaux et des spécialités régionales. Dégustations, ateliers et animations pour toute la famille."
    },
    {
      "title": "Exposition d'Art Contemporain",
      "date": "2024-08-06",
      "location": "Musée d'Art Moderne, Lille",
      "description": "Exposition mettant en avant des œuvres d'art contemporain de jeunes artistes émergents. Découvrez des pièces uniques et innovantes."
    },
    {
      "title": "Marathon de Paris",
      "date": "2024-08-07",
      "location": "Centre-ville de Paris",
      "description": "Participez au célèbre marathon de Paris avec des parcours adaptés pour les coureurs de tous niveaux. Inscription en ligne disponible."
    },
    {
      "title": "Festival de Musique Électronique",
      "date": "2024-08-08",
      "location": "Parc des Princes, Marseille",
      "description": "Festival de musique électronique avec des DJ de renommée internationale et des installations visuelles époustouflantes. Billets en prévente."
    },
    {
      "title": "Journée Portes Ouvertes au Musée de l'Histoire",
      "date": "2024-08-09",
      "location": "Musée de l'Histoire, Nantes",
      "description": "Venez découvrir les nouvelles expositions et participer à des visites guidées gratuites lors de notre journée portes ouvertes."
    },
    {
      "title": "Séance de Yoga en Matinée",
      "date": "2024-08-10",
      "location": "Jardin des Plantes, Toulouse",
      "description": "Séance de yoga en plein air pour tous les niveaux. Apportez votre tapis et commencez la journée en pleine forme avec des instructions de professionnels."
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
