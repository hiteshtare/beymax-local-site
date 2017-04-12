import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { APP_CONFIG, AppConfig } from './../../../shared/config/app.config';
import { RoomService } from './../room.service';
import { InputSwitchModule, SliderModule } from 'primeng/primeng';

import { Room1Component } from './room1.component';

describe('Room1Component', () => {
  let component: Room1Component;
  let fixture: ComponentFixture<Room1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Room1Component],
      imports: [BrowserModule, FormsModule, HttpModule, InputSwitchModule, SliderModule],
      providers: [RoomService, { provide: APP_CONFIG, useValue: AppConfig }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
