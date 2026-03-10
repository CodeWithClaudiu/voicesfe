import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsertPost } from './form-insert-post';

describe('FormInsertPost', () => {
  let component: FormInsertPost;
  let fixture: ComponentFixture<FormInsertPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInsertPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInsertPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
