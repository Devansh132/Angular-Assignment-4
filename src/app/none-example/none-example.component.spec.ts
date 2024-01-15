import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneExampleComponent } from './none-example.component';

describe('NoneExampleComponent', () => {
  let component: NoneExampleComponent;
  let fixture: ComponentFixture<NoneExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoneExampleComponent]
    });
    fixture = TestBed.createComponent(NoneExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
