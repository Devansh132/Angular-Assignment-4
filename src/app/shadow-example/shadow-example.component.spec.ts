import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShadowExampleComponent } from './shadow-example.component';

describe('ShadowExampleComponent', () => {
  let component: ShadowExampleComponent;
  let fixture: ComponentFixture<ShadowExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShadowExampleComponent]
    });
    fixture = TestBed.createComponent(ShadowExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
