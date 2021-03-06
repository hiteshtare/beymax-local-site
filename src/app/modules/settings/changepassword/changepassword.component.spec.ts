import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/primeng';

import { APP_CONFIG, AppConfig } from './../../../shared/config/app.config';
import { NotifyService } from './../../../shared/services/notify.service';
import { ChangepasswordService } from './changepassword.service';
import { ChangepasswordComponent } from './changepassword.component';

describe('ChangepasswordComponent', () => {
  let component: ChangepasswordComponent;
  let fixture: ComponentFixture<ChangepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangepasswordComponent],
      imports: [BrowserAnimationsModule, FormsModule, HttpModule, PanelModule, ReactiveFormsModule],
      providers: [ChangepasswordService, NotifyService, { provide: APP_CONFIG, useValue: AppConfig }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
