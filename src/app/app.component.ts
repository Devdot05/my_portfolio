import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import AOS from 'aos'
import { WorkComponent } from "./work/work.component";
import { ResumeComponent } from "./resume/resume.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, AboutComponent, WorkComponent, ResumeComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   ngOnInit(){
    AOS.init();
   }
}
