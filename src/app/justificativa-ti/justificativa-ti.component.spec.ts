import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificativaTiComponent } from './justificativa-ti.component';

describe('JustificativaTiComponent', () => {
  let component: JustificativaTiComponent;
  let fixture: ComponentFixture<JustificativaTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustificativaTiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustificativaTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
