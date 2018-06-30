import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExelUtilsComponent } from './exel-utils.component';

describe('ExelUtilsComponent', () => {
  let component: ExelUtilsComponent;
  let fixture: ComponentFixture<ExelUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExelUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExelUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
