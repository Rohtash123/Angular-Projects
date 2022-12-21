import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditViaPopupComponent } from './edit-via-popup.component';

describe('EditViaPopupComponent', () => {
  let component: EditViaPopupComponent;
  let fixture: ComponentFixture<EditViaPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditViaPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditViaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
