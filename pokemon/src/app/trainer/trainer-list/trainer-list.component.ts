import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { dataTrainers } from '../dataTrainers';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<Trainer> = [];
  selected: Boolean = false;
  selectedTrainer!: Trainer;

  constructor(private trainerService:TrainerService, private router: Router) {}

  getTrainersList(): Array<Trainer> {
    return dataTrainers;
  }

  ngOnInit() {
    this.trainers = this.getTrainersList();
  }

  onSelected(trainer: Trainer) {
    this.selected = true;
    this.selectedTrainer = trainer;
  }

  numeroPokemones(): number {
    const pokemones = this.trainers.reduce((acc, trainer) => acc + trainer.pokemons.length, 0);
    return pokemones;
  }
}
