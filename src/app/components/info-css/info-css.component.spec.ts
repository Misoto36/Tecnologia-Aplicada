import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCssComponent } from './info-css.component';

describe('InfoCssComponent', () => {
  let component: InfoCssComponent;
  let fixture: ComponentFixture<InfoCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
