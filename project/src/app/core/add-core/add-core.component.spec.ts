import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoreComponent } from './add-core.component';

describe('AddCoreComponent', () => {
  let component: AddCoreComponent;
  let fixture: ComponentFixture<AddCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
