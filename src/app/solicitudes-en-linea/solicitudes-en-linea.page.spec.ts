import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudesEnLineaPage } from './solicitudes-en-linea.page';

describe('SolicitudesEnLineaPage', () => {
  let component: SolicitudesEnLineaPage;
  let fixture: ComponentFixture<SolicitudesEnLineaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolicitudesEnLineaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
