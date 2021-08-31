import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  @Input() registro!:Tarefa;

  constructor() { }

  ngOnInit(): void {
  }

}
