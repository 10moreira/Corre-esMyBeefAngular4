import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoListComponent } from './simulacao-list.component';

describe('SimulacaoListComponent', () => {
  let component: SimulacaoListComponent;
  let fixture: ComponentFixture<SimulacaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulacaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
