import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueAndExpenseComponent } from './revenue-and-expense.component';

describe('RevenueAndExpenseComponent', () => {
  let component: RevenueAndExpenseComponent;
  let fixture: ComponentFixture<RevenueAndExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueAndExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueAndExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
