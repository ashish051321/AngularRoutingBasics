import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizlistingComponent } from './quizlisting.component';

describe('QuizlistingComponent', () => {
  let component: QuizlistingComponent;
  let fixture: ComponentFixture<QuizlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
