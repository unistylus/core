import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoulComponent } from './add-soul.component';

describe('AddSoulComponent', () => {
  let component: AddSoulComponent;
  let fixture: ComponentFixture<AddSoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSoulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
