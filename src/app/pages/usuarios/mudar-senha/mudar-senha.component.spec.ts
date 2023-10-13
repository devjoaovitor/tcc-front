import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosUsuarioComponent } from './mudar-senha.component';

describe('DadosUsuarioComponent', () => {
  let component: DadosUsuarioComponent;
  let fixture: ComponentFixture<DadosUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosUsuarioComponent]
    });
    fixture = TestBed.createComponent(DadosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
