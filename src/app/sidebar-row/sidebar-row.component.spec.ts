import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRowComponent } from './sidebar-row.component';

describe('SidebarRowComponent', () => {
  let component: SidebarRowComponent;
  let fixture: ComponentFixture<SidebarRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
