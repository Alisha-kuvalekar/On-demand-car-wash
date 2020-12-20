import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomerdashboardComponent } from './customerdashboard.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomerdashboardComponent', () => {
  let component: CustomerdashboardComponent;
  let fixture: ComponentFixture<CustomerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule],
      declarations: [ CustomerdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
