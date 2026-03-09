import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPgotos } from './album-pgotos';

describe('AlbumPgotos', () => {
  let component: AlbumPgotos;
  let fixture: ComponentFixture<AlbumPgotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumPgotos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumPgotos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
