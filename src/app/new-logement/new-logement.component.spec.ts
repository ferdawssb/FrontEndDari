import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLogementComponent } from './new-logement.component';

describe('NewLogementComponent', () => {
  let component: NewLogementComponent;
  let fixture: ComponentFixture<NewLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLogementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
