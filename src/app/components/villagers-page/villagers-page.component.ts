import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Villager } from '../../models/villager';
import { PAGE_OPTIONS } from '../../models/constants';
import { getRange } from '../helpers';

@Component({
  selector: 'app-villagers-page',
  templateUrl: './villagers-page.component.html',
  styleUrls: ['./villagers-page.component.scss']
})
export class VillagersPageComponent implements OnInit {

  public filteredVillagers: Villager[];
  public villagers: Villager[];
  public page: number = 1;
  public number: number = 16;
  public PAGE_OPTIONS = PAGE_OPTIONS;

  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit(): void {
    this.dataService.getVillagers().subscribe((villagers) => {
      this.villagers = villagers.sort((a, b) => a.name.localeCompare(b.name));
      this.filteredVillagers = this.villagers.slice(0, this.number);
    }); 
  }

  public changePage(page: number): void {
    this.page = page;
    let lastResult = this.page * this.number;
    this.filteredVillagers = this.villagers.slice(lastResult - this.number, lastResult);
  }

  public changeNumber(number): void {
    if (number === 'all') {
      this.number = this.villagers.length;
    } else {
      this.number = number;
    }
    this.changePage(1);
  }

  public getRelevantPages(): number[] {
    let n = Math.ceil(this.villagers.length / this.number);
    let p = this.page;
    if (n <= 5) {
      return getRange(1, n);
    }
    else if (p < 3) {
      return getRange(1, 5);
    }
    else if (p > n-2) {
      return getRange(n-4, n);
    }
    else {
      return getRange(p-2, p+2);
    }
  }

}
