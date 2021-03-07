import { Component, OnInit } from '@angular/core';
import { Concours } from './concours/concours';
import { ConcoursService } from './concours.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public Concours: Concours[];
  public editConcours: Concours;
  public deleteConcours: Concours;
  
  constructor(private concoursService: ConcoursService){}

  ngOnInit() {
    this.getConcours();
   }
  
   public getConcours(): void {
    this.concoursService.getConcours().subscribe(
      (response: Concours[]) => {
        this.Concours = response;
        console.log(this.Concours);
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
  public onUpdateConcours(concours: Concours): void {
    this.concoursService.updateConcours(concours).subscribe(
      (response: Concours) => {
        console.log(response);
        this.getConcours();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
 
  public onDeleteConcours(Id: number): void {
    this.concoursService.deleteConcours(Id).subscribe(
      (response: void) => {
        console.log(response);
        this.getConcours();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public searchConcours(key: string): void {
    console.log(key);
    const results: Concours[] = [];
    for (const concours of this.Concours) {
      if (concours.nameConcours.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || concours.descriptionConcours.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       {
        results.push(concours);
      }
    }
    this.Concours = results;
    if (results.length === 0 || !key) {
      this.getConcours();
    }
  }





}










