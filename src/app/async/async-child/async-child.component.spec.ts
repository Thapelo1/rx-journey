import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncChildComponent } from './async-child.component';

describe('AsyncChildComponent', () => {
  let component: AsyncChildComponent;
  let fixture: ComponentFixture<AsyncChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
