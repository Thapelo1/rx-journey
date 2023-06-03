import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncParentComponent } from './async-parent.component';

describe('AsyncParentComponent', () => {
  let component: AsyncParentComponent;
  let fixture: ComponentFixture<AsyncParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
