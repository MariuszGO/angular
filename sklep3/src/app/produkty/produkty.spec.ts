import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produkty } from './produkty';

describe('Produkty', () => {
  let component: Produkty;
  let fixture: ComponentFixture<Produkty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Produkty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Produkty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
