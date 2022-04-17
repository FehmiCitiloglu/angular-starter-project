import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-directives',
  templateUrl: './assignment-directives.component.html',
  styleUrls: ['./assignment-directives.component.css']
})
export class AssignmentDirectivesComponent implements OnInit {
  showParagraph = false
  buttonLogs: string[] = []
  constructor() { }

  toggleParagraph() {
    this.buttonLogs.push(new Date().getTime().toString())
    this.showParagraph = !this.showParagraph
  }
  ngOnInit(): void {
  }

}
