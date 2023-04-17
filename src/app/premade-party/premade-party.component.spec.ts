import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremadePartyComponent } from './premade-party.component';

describe('PremadePartyComponent', () => {
  let component: PremadePartyComponent;
  let fixture: ComponentFixture<PremadePartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremadePartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremadePartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
