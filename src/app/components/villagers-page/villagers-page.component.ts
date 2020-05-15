import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Villager } from '../../models/villager';

@Component({
  selector: 'app-villagers-page',
  templateUrl: './villagers-page.component.html',
  styleUrls: ['./villagers-page.component.scss']
})
export class VillagersPageComponent implements OnInit {

  public filteredVillagers: Villager[];
  public page: number = 1;
  private villagers: Villager[];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.getVillagers().subscribe((villagers) => {
      this.villagers = villagers;
      this.filteredVillagers = villagers.slice(0, 12);
    });
  }

  changePage(page: number): void {

  }

}
