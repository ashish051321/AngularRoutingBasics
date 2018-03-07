import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionlistingComponent } from './questionlisting.component';

describe('QuestionlistingComponent', () => {
  let component: QuestionlistingComponent;
  let fixture: ComponentFixture<QuestionlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
