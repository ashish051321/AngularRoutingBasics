import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingslistingComponent } from './settingslisting.component';

describe('SettingslistingComponent', () => {
  let component: SettingslistingComponent;
  let fixture: ComponentFixture<SettingslistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingslistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingslistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
