import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecamybeefComponent } from './conhecamybeef.component';

describe('ConhecamybeefComponent', () => {
  let component: ConhecamybeefComponent;
  let fixture: ComponentFixture<ConhecamybeefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConhecamybeefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConhecamybeefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
