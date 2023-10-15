import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoMensagemComponent } from './sucesso-mensagem.component';

describe('SucessoMensagemComponent', () => {
  let component: SucessoMensagemComponent;
  let fixture: ComponentFixture<SucessoMensagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucessoMensagemComponent]
    });
    fixture = TestBed.createComponent(SucessoMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
