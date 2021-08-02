import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersinfoComponent } from './managersinfo.component';

describe('ManagersinfoComponent', () => {
  let component: ManagersinfoComponent;
  let fixture: ComponentFixture<ManagersinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagersinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
