import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {

  // O output deixa este atributo exposto para o component pai pegar
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()
  
  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = '';

  // Rodadas do jogo
  public rodada: number = 0
  public rodadaFrase !: Frase;

  // barra de progresso
  public progresso: number = 0

  public tentativas: number = 3;

  constructor() {
    this.atualizaRodada()
    //this.rodadaFrase = this.frases[this.rodada]  
    //console.log(this.frases)
  }
  ngOnInit(): void {}


  ngOnDestroy(): void {
    console.log("component panel going destructed")
  }

  // Eu quero atualizar a resposta do formulari
  // vou criar uma funlção pra fazer o tratamento
  // das entradas do usuário 
  public atualizaResposta(resposta: Event): void {
    // O to-way-binding funciona assim
    this.resposta = (<HTMLInputElement>resposta.target).value
    console.log(resposta)
  }

  // Evento de clique do botão
  public recuperaValorDigitado(): void {
    
    //console.log(this.tentativas)
    
    if(this.rodadaFrase.frasePtBr == this.resposta){
      //alert("Tradução correta!")
      this.rodada++
      // Controle da barra de progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      //console.log(this.progresso)
      // Atualiza a rodada de frases

      //
      if (this.rodada === 4){
        this.encerrarJogo.emit('Vitória!')
      }

      this.atualizaRodada()
      //this.rodadaFrase = this.frases[this.rodada]       
      // Limpando a rodada de frases
      //console.log(this.resposta)
      //this.resposta = ''
      //console.log(this.resposta)      
    } else {
      // diminuir a variável tentativas
      this.tentativas--
      
      if(this.tentativas === -1) {
        this.encerrarJogo.emit("Derrota!")
      }

      console.log(this.tentativas)
      
    }
  }

  

  public atualizaRodada(){
    //defini a rodada da frase com base em uma lógica
    this.rodadaFrase = this.frases[this.rodada] 
    //Limpa a rodada
    this.resposta = '' 
  }

}
