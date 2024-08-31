import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-pipes',
  templateUrl: './directives-pipes.component.html',
  styleUrls: ['./directives-pipes.component.css']
})
export class DirectivesPipesComponent {

  public ages:number[] = [10,20,30,40,50];

  public states:string[] = ["Telangana", "Andhra", "Karnataka", "Kerala"];

  public users:any = [
    {name:'a', age:10, phone:9494, marks:80},
    {name:'b', age:15, phone:8494, marks:40},
    {name:'c', age:40, phone:7494, marks:20},
    {name:'d', age:50, phone:6494, marks:-33},
  ]

  public today:any = new Date();

}
