import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styles: [],
})
export class OverviewCardComponent implements OnInit {
  @Input() socialMedia: 'facebook' | 'instagram' | 'twitter' | 'youtube' | '' =
    '';
  @Input() title: string = '';
  @Input() stats: string = '';
  @Input() variation: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
