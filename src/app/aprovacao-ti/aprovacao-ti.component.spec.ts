import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovacaoTiComponent } from './aprovacao-ti.component';

describe('AprovacaoTiComponent', () => {
  let component: AprovacaoTiComponent;
  let fixture: ComponentFixture<AprovacaoTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovacaoTiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprovacaoTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
