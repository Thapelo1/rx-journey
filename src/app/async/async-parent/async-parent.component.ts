import { Component, OnInit } from '@angular/core';
import {combineLatest, of} from 'rxjs';

@Component({
  selector: 'app-async-parent',
  templateUrl: './async-parent.component.html',
  styleUrls: ['./async-parent.component.css']
})
export class AsyncParentComponent implements OnInit {

  currentPage$ = of(1);

  constructor() { }

  ngOnInit(): void {
  }

}
