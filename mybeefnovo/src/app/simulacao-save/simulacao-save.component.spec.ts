import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoSaveComponent } from './simulacao-save.component';

describe('SimulacaoSaveComponent', () => {
  let component: SimulacaoSaveComponent;
  let fixture: ComponentFixture<SimulacaoSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulacaoSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
