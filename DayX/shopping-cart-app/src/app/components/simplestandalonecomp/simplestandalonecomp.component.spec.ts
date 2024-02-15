import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplestandalonecompComponent } from './simplestandalonecomp.component';

describe('SimplestandalonecompComponent', () => {
  let component: SimplestandalonecompComponent;
  let fixture: ComponentFixture<SimplestandalonecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplestandalonecompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimplestandalonecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
