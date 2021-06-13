import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinSkinsComponent } from './builtin-skins.component';

describe('BuiltinSkinsComponent', () => {
  let component: BuiltinSkinsComponent;
  let fixture: ComponentFixture<BuiltinSkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltinSkinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltinSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
