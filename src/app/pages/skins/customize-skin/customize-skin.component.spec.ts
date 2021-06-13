import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeSkinComponent } from './customize-skin.component';

describe('CustomizeSkinComponent', () => {
  let component: CustomizeSkinComponent;
  let fixture: ComponentFixture<CustomizeSkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeSkinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
