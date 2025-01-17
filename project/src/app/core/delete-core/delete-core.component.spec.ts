import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCoreComponent } from './delete-core.component';

describe('DeleteCoreComponent', () => {
  let component: DeleteCoreComponent;
  let fixture: ComponentFixture<DeleteCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
