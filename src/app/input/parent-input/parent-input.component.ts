import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent-input.component.html',
  styleUrls: ['./parent-input.component.scss']
})
export class ParentInputComponent implements OnInit {
  listStudent = [
    {id: 1, name: 'Ha'}, {id: 2, name: 'Tung'}, {id: 3, name: 'Long'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
