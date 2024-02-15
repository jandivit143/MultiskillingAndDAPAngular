import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemopipesComponent } from './demopipes.component';

describe('DemopipesComponent', () => {
  let component: DemopipesComponent;
  let fixture: ComponentFixture<DemopipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemopipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemopipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
