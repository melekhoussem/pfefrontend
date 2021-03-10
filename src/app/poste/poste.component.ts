import { PosteService } from "./../poste.service";
import { Poste } from "./poste";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { NgForm } from '@angular/forms';



@Component({
  selector: "app-poste",
  templateUrl: "./poste.component.html",
  styleUrls: ["./poste.component.css"]
})
export class PosteComponent implements OnInit {
  public poste:Poste[];
  public deletePoste: Poste;
  public updatePoste: Poste;

  constructor(private posteService: PosteService,
    private router: Router) {}

    ngOnInit() {
      this.getPoste();
    }
  
    public getPoste(): void {
      this.posteService.getPoste().subscribe(
        (response: Poste[]) => {
          this.poste = response;
          console.log(this.poste);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public onAddPoste(addForm: NgForm): void {
      document.getElementById('add-poste-form').click();
      this.posteService.addPoste(addForm.value).subscribe(
        (response: Poste) => {
          console.log(response);
          this.getPoste();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }




    public searchPoste(key: string): void {
      console.log(key);
      const results: Poste[] = [];
      for (const poste of this.poste) {
        if (poste.nomPoste.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
          results.push(poste);
        }
      }
      this.poste = results;
      if (results.length === 0 || !key) {
        this.getPoste();
      }
    }










    public onDeletePoste(idPoste: number): void {
      console.log(idPoste);
      this.posteService.deletePoste(idPoste).subscribe(
        (response: void) => {
          console.log(response);
          this.getPoste();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }


    public onUpdatePoste(poste: Poste): void {
      this.posteService.updatePoste(poste).subscribe(
        (response: Poste) => {
          console.log(response);
          this.getPoste();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public onOpenModal(poste: Poste, mode: string): void {
          const container = document.getElementById('main-container');
          const button = document.createElement('button');
          button.type = 'button';
          button.style.display = 'none';
          button.setAttribute('data-toggle', 'modal');
          if (mode === 'add') {
            button.setAttribute('data-target', '#addPosteModal');
          }
          if (mode === 'edit') {
            this.updatePoste = poste;
            button.setAttribute('data-target', '#updatePosteModal');
          }
          if (mode === 'delete') {
            this.deletePoste = poste;
            button.setAttribute('data-target', '#deletePosteModal');
          }
          if (container !== null) {
            container.appendChild(button);
        
          
          button.click();
        } 
      }



    
    
       
        
  
}

  





