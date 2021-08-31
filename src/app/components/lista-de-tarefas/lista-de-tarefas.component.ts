import { Component, OnInit } from '@angular/core';
import { Prioridade, Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

  tarefas:Tarefa[] = [
    {feita:false,
    descricao: 'Levar o cachorro ao veterinário',
    prioridade:Prioridade.Média},
    {feita:false,
    descricao: 'Tomar remédio às 20h00',
    prioridade: Prioridade.Alta},
    {feita:false,
    descricao: 'Estudar Javascript',
    prioridade: Prioridade.Alta}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
