import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produkt } from './produkt';

describe('Produkt', () => {
  let component: Produkt;
  let fixture: ComponentFixture<Produkt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Produkt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Produkt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
