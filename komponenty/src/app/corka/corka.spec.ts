import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corka } from './corka';

describe('Corka', () => {
  let component: Corka;
  let fixture: ComponentFixture<Corka>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corka]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corka);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
