import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSellerTemplateComponent } from './add-seller-template.component';

describe('AddSellerTemplateComponent', () => {
  let component: AddSellerTemplateComponent;
  let fixture: ComponentFixture<AddSellerTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSellerTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSellerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
