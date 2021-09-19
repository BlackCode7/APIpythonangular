import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})

export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas!: number;
  // Property Binding - controlando a imagem dos corações
  // O property bindings controla os compamentes html
  // Aqui é o array de corações para usar no ngFor
  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ] 

  constructor() { 
    console.log(this.coracoes)
    //console.log("tentativas recebidas do painel!", this.tentativas)
  }
  // executa este method quando os valores são passados de pai 
  // filho e vice versa, quando valores são inseridos e alterados
  // este method entra em ação
  ngOnChanges(): void {   
    
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas

      // 3 - 2 = 1

      this.coracoes[indice - 1].cheio = false;
    }
    console.log("tentativas recebidas do painel!", this.tentativas)
  }

  ngOnInit(): void {
    console.log("tentativas recebidas do painel!", this.tentativas)
  }

}
