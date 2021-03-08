
import { ConcoursService } from "./../concours.service";
import { Concours } from "./concours";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { NgForm } from '@angular/forms';


@Component({
  selector: "app-concours",
  templateUrl: "./concours.component.html",
  styleUrls: ["./concours.component.css"]
})
export class ConcoursComponent implements OnInit {
  public concours:Concours[];
  public deleteConcours: Concours;

  constructor(private concoursService: ConcoursService,
    private router: Router) {}

    ngOnInit() {
      this.getConcours();
    }
  
    public getConcours(): void {
      this.concoursService.getConcours().subscribe(
        (response: Concours[]) => {
          this.concours = response;
          console.log(this.concours);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public onAddConcours(addForm: NgForm): void {
      document.getElementById('add-concours-form').click();
      this.concoursService.addConcours(addForm.value).subscribe(
        (response: Concours) => {
          console.log(response);
          this.getConcours();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }















    public onDeleteConcours(idConcours: number): void {
      this.concoursService.deleteConcours(idConcours).subscribe(
        (response: void) => {
          console.log(response);
          this.getConcours();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }


    public onOpenModal(concours: Concours, mode: string): void {
          const container = document.getElementById('main-container');
          const button = document.createElement('button');
          button.type = 'button';
          button.style.display = 'none';
          button.setAttribute('data-toggle', 'modal');
          if (mode === 'add') {
            button.setAttribute('data-target', '#addConcoursModal');
          }
          if (mode === 'delete') {
            this.deleteConcours = concours;
            button.setAttribute('data-target', '#deleteConcoursModal');
          }
          if (container !== null) {
            container.appendChild(button);
        
          
          button.click();
        } 
      }
    
    
       
        
  
}

  




