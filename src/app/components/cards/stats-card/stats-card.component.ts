import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styles: [],
})
export class StatsCardComponent implements OnInit {
  @Input() socialMedia: 'facebook' | 'instagram' | 'twitter' | 'youtube' | '' =
    '';
  @Input() followers: string = '';
  @Input() statsToday: number = 0;
  @Input() username: string = '';
  Math: Math = Math;

  constructor() {}

  ngOnInit(): void {}
}
