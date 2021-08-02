import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevinfoComponent } from './devinfo.component';

describe('DevinfoComponent', () => {
  let component: DevinfoComponent;
  let fixture: ComponentFixture<DevinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
