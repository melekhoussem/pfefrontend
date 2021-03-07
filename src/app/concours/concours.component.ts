
import { ConcoursService } from "./../concours.service";
import { Concours } from "./concours";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-concours",
  templateUrl: "./concours.component.html",
  styleUrls: ["./concours.component.css"]
})
export class ConcoursComponent implements OnInit {
  public concours:Concours[];

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

    public onDeleteConcours(ConcoursId: number): void {
      this.concoursService.deleteConcours(ConcoursId).subscribe(
        (response: void) => {
          console.log(response);
          this.getConcours();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    
  

}

  















