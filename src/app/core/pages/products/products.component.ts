import { Component, EventEmitter, Output } from '@angular/core';
import { TableComponent } from '../../../shared/components/table/table.component';
import { tableOptions } from '../../../shared/models/tableOptions';
import { NavigationExtras, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WaitingCircleComponent } from '../../../shared/components/waiting-circle/waiting-circle.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [WaitingCircleComponent,TableComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products: any;
loadProducts() {
throw new Error('Method not implemented.');
}
nextPage() {
throw new Error('Method not implemented.');
}
previousPage() {
throw new Error('Method not implemented.');
}
toggleProductStatus(_t51: any) {
throw new Error('Method not implemented.');
}
changeSorting(arg0: any) {
throw new Error('Method not implemented.');
}

  @Output() mobileMenuButtonClicked = new EventEmitter();

  loadingInProgress: boolean = false;
  totalDataCount: number = 0;
  selectedPage: number = 1;
  selectedPageSize: number = 20;

  viewProductTableOptions: tableOptions = new tableOptions();

  currentPage = 1;
  pageSize = 12; // Adjust this for the desired number of products per page
  sortBy = 'Name';
  ascending = true;
  totalCount = 0;
  

  constructor(private router: Router) {}


  ngOnInit(): void{
    this.viewProductTableOptions.allowCheckbox = true;
    this.viewProductTableOptions.allowToViewButton = true;
  }

  windowScroll() {
    const body = document.body;
    const documentElement = document.documentElement;

    if (body && documentElement) {
      if (body.scrollTop > 100 || documentElement.scrollTop > 100) {
        const backToTopElement = document.getElementById("back-to-top") as HTMLElement;
        if (backToTopElement) {
          backToTopElement.style.display = "block";
        }

        const pageTopbarElement = document.getElementById('page-topbar');
        if (pageTopbarElement) {
          pageTopbarElement.classList.add('topbar-shadow');
        }
      } else {
        const backToTopElement = document.getElementById("back-to-top") as HTMLElement;
        if (backToTopElement) {
          backToTopElement.style.display = "none";
        }

        const pageTopbarElement = document.getElementById('page-topbar');
        if (pageTopbarElement) {
          pageTopbarElement.classList.remove('topbar-shadow');
        }
      }
    }
  }

  //Toggle the menu bar when having mobile screen
  toggleMobileMenu(event: any) {
    document.querySelector('.hamburger-icon')?.classList.toggle('open')
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  fallbackImage(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/images/user1.png';
  }

  get profileImage() {

    const fullName = 'John Doe'

    return `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}`;
  }
  
  logout(): void {
    localStorage.clear();
    // Clear session storage
    sessionStorage.clear();

    // Redirect to the login page without adding the logout action to the browser's history
    const navigationExtras: NavigationExtras = {
      skipLocationChange: false
    };

    this.router.navigate(['/login'], navigationExtras);
  }

}
