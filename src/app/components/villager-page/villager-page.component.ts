import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import { Villager } from '../../models/villager';

@Component({
  selector: 'app-villager-page',
  templateUrl: './villager-page.component.html',
  styleUrls: ['./villager-page.component.scss']
})
export class VillagerPageComponent implements OnInit {

  public villager: Villager;

  constructor(
    public route: ActivatedRoute,
    public dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.name) {
        this.dataService.getVillager(params.name).subscribe((villager) => {
          this.villager = villager;
        });
      } else {
        // no villager to search for
      }
    });

  }

}
