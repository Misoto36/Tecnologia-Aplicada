import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksPageComponent } from './frameworks-page.component';

describe('FrameworksPageComponent', () => {
  let component: FrameworksPageComponent;
  let fixture: ComponentFixture<FrameworksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworksPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrameworksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
