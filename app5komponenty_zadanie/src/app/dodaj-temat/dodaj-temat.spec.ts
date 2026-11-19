import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajTemat } from './dodaj-temat';

describe('DodajTemat', () => {
  let component: DodajTemat;
  let fixture: ComponentFixture<DodajTemat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DodajTemat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajTemat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
