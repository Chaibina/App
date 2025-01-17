import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoreComponent } from './list-core.component';

describe('ListCoreComponent', () => {
  let component: ListCoreComponent;
  let fixture: ComponentFixture<ListCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
