import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateBlock } from './state-block';

describe('StateBlock', () => {
  let component: StateBlock;
  let fixture: ComponentFixture<StateBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(StateBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
