import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landlord',
  templateUrl: './landlord.component.html',
  styleUrls: ['./landlord.component.css']
})
export class LandlordComponent implements OnInit {
  title = 'Landlord';
  constructor() { }

  ngOnInit(): void {
  }

}
