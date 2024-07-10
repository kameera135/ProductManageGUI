import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingCircleComponent } from './waiting-circle.component';

describe('WaitingCircleComponent', () => {
  let component: WaitingCircleComponent;
  let fixture: ComponentFixture<WaitingCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaitingCircleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaitingCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
