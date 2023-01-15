import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOrderSelectionDetailsComponent } from './dialog-order-selection-details.component';

describe('DialogOrderSelectionDetailsComponent', () => {
  let component: DialogOrderSelectionDetailsComponent;
  let fixture: ComponentFixture<DialogOrderSelectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOrderSelectionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOrderSelectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
