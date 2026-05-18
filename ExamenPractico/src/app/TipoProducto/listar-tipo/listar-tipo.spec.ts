import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipo } from './listar-tipo';

describe('ListarTipo', () => {
  let component: ListarTipo;
  let fixture: ComponentFixture<ListarTipo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTipo],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarTipo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
