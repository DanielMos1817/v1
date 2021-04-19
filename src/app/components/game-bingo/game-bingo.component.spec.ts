import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBingoComponent } from './game-bingo.component';

describe('GameBingoComponent', () => {
  let component: GameBingoComponent;
  let fixture: ComponentFixture<GameBingoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameBingoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
