import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremadePartyNewComponent } from './premade-party-new.component';

describe('PremadePartyNewComponent', () => {
  let component: PremadePartyNewComponent;
  let fixture: ComponentFixture<PremadePartyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremadePartyNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremadePartyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
