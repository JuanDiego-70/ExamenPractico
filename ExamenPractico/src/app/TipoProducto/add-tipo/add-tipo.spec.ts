import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipo } from './add-tipo';

describe('AddTipo', () => {
  let component: AddTipo;
  let fixture: ComponentFixture<AddTipo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTipo],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTipo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
