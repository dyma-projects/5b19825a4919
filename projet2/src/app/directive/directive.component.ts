import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  public number:string = 'number';
  public value:string = '';
  public value2:string = '';

  public texts:Array<{number}> = [];

  public status:boolean = true;

  changeValue():void{
    this.status = !this.status;
  }




  constructor() {

    this.texts.push({number: 'un'});
    this.texts.push({number: 'deux'});
    this.texts.push({number: 'trois'});

  }

  ngOnInit() {
  }

}
