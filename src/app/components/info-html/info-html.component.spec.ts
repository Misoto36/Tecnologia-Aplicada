import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHtmlComponent } from './info-html.component';

describe('InfoHtmlComponent', () => {
  let component: InfoHtmlComponent;
  let fixture: ComponentFixture<InfoHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoHtmlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
