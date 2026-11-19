import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajUcznia } from './dodaj-ucznia';

describe('DodajUcznia', () => {
  let component: DodajUcznia;
  let fixture: ComponentFixture<DodajUcznia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DodajUcznia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajUcznia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
