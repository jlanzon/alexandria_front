import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadersinfoComponent } from './readersinfo.component';

describe('ReadersinfoComponent', () => {
  let component: ReadersinfoComponent;
  let fixture: ComponentFixture<ReadersinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadersinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadersinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
