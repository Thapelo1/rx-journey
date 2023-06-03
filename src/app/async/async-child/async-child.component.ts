import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-async-child',
  templateUrl: './async-child.component.html',
  styleUrls: ['./async-child.component.css']
})
export class AsyncChildComponent implements OnInit {

  @Input() currentPage = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
