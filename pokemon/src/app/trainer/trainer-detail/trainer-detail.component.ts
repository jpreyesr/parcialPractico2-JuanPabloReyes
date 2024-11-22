import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  trainer: Trainer | null = null;
  constructor(private trainerService:TrainerService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const trainerId = this.route.snapshot.paramMap.get('id');
    if (trainerId) {
      this.getTrainerDetail(trainerId);
    }
  }

  // Consulta el detalle del entrenador por ID
  getTrainerDetail(id: string): void {
    this.trainerService.getTrainerDetail().subscribe((data) => {
      this.trainer = data;
    });
  }
}

