import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerModelComponent } from './add-customer-model.component';

describe('AddCustomerModelComponent', () => {
  let component: AddCustomerModelComponent;
  let fixture: ComponentFixture<AddCustomerModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustomerModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
