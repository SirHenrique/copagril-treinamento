import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorSolicitanteComponent } from './setor-solicitante.component';

describe('SetorSolicitanteComponent', () => {
  let component: SetorSolicitanteComponent;
  let fixture: ComponentFixture<SetorSolicitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetorSolicitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetorSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
