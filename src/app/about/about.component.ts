import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  // openTab(tabName: string, event: Event) {
  //   console.log("Tab Clicked:", tabName); // Debugging log

  //   const target = event.currentTarget as HTMLElement | null;
  //   if (!target) return; 

  //   // Remove 'active-link' from all tabs
  //   document.querySelectorAll(".tab-link").forEach(tab => {
  //       tab.classList.remove("active-link");
  //   });

  //   // Remove 'active-tab' from all content sections
  //   document.querySelectorAll(".tab-contents").forEach(content => {
  //       content.classList.remove("active-tab");
  //   });

  //   // Add 'active-link' to the clicked tab
  //   target.classList.add("active-link");

  //   // Debugging: Check if tab content exists
  //   const contentElement = document.getElementById(tabName);
  //   console.log("Content Element:", contentElement); 

  //   // Show the selected tab content
  //   if (contentElement) {
  //       contentElement.classList.add("active-tab");
  //   } else {
  //       console.error("No element found with ID:", tabName);
  //   }
  // }


  selectedTab: string = 'skills'; // Default tab
  openTab: string = 'skills'

  getUnderlinePosition(): string {
    switch (this.selectedTab) {
      case 'skills': return '0%';
      case 'experience': return '33.3%';
      case 'education': return '66.6%';
      default: return '0%';
    }

}
}
