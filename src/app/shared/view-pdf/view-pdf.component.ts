import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.scss']
})
export class ViewPdfComponent implements OnInit {

  pdfSrc: string="";

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pdfSrc = "https://firebasestorage.googleapis.com/v0/b/saipalace-c8f59.appspot.com/o/momdetails%2F1628940996522.pdf?alt=media&token=98877477-ed89-4c36-b84a-5a68773f87d0"//params.url
      console.log(this.pdfSrc)
      if(this.pdfSrc === ""){
        this.router.navigate(['/momlist'])
      }
    }
    );
  }

}
