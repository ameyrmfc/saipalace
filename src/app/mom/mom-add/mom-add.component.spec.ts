import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomAddComponent } from './mom-add.component';

describe('MomAddComponent', () => {
  let component: MomAddComponent;
  let fixture: ComponentFixture<MomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
