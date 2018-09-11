import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOneCategoryComponent } from './read-one-category.component';

describe('ReadOneCategoryComponent', () => {
  let component: ReadOneCategoryComponent;
  let fixture: ComponentFixture<ReadOneCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOneCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOneCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
