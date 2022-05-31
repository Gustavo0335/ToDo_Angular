import { Component, OnInit  } from '@angular/core';
import{ GlobalComponent } from './global-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public num3?:number;
  public num1?:number = -1;
  public num2?:number;

   FuncaoOperador(operador: string) 
      {
        GlobalComponent.ops = operador;
        if (GlobalComponent.ops == 'C'){
          this.num3 = 0;
          this.num1 = -1;
          this.num2 = 0;
        }
      }

       FuncaoNumeros(value : number) 
      {
        
        if (this.num1 == -1)
        this.num1 = value;
        else
        this.num2 = value;
        
        switch(GlobalComponent.ops){
          case '*': 
          this.num3 = this.num1! * this.num2!;
          break;

          case '+' :
            this.num3 = (+this.num1! + +this.num2!);
          break;

          case '-' :
            this.num3 = this.num1! - this.num2!;
          break;

          case '/' :
            this.num3 = this.num1! / this.num2!;
          break;

          case ',' :
            this.num3 = +this.num1! + +(this.num2!/10).toFixed(2);
          break;
        }
        if (this.num3 != null)
        this.num1 = this.num3;
      }
}
