import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltHomePage } from './alt-home.page';

describe('AltHomePage', () => {
  let component: AltHomePage;
  let fixture: ComponentFixture<AltHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
