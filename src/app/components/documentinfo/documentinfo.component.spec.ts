import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentinfoComponent } from './documentinfo.component';

describe('DocumentinfoComponent', () => {
  let component: DocumentinfoComponent;
  let fixture: ComponentFixture<DocumentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
