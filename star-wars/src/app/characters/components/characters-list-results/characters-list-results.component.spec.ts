import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListResultsComponent } from './characters-list-results.component';

describe('CharactersListResultsComponent', () => {
  let component: CharactersListResultsComponent;
  let fixture: ComponentFixture<CharactersListResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersListResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersListResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
