import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductModelComponent } from './add-product-model.component';

describe('AddProductModelComponent', () => {
  let component: AddProductModelComponent;
  let fixture: ComponentFixture<AddProductModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
