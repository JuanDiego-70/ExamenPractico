import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipo } from './edit-tipo';

describe('EditTipo', () => {
  let component: EditTipo;
  let fixture: ComponentFixture<EditTipo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTipo],
    }).compileComponents();

    fixture = TestBed.createComponent(EditTipo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
