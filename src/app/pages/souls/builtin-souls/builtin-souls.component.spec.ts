import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinSoulsComponent } from './builtin-souls.component';

describe('BuiltinSoulsComponent', () => {
  let component: BuiltinSoulsComponent;
  let fixture: ComponentFixture<BuiltinSoulsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltinSoulsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltinSoulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
