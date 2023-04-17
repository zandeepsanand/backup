import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoasterPlayerComponent } from './roaster-player.component';

describe('RoasterPlayerComponent', () => {
  let component: RoasterPlayerComponent;
  let fixture: ComponentFixture<RoasterPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoasterPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoasterPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
