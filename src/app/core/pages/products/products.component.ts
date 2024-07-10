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

  @Output() mobileMenuButtonClicked = new EventEmitter();

  loadingInProgress: boolean = false;
  totalDataCount: number = 0;
  selectedPage: number = 1;
  selectedPageSize: number = 20;

  viewProductTableOptions: tableOptions = new tableOptions();

  constructor(private router: Router) {}

  viewBookingHeadArray = [
    { Head: 'No.', FieldName: 'index', ColumnType: 'Data', AllowSort: false },
    {
      Head: 'Facility Name',
      FieldName: 'facilityName',
      ColumnType: 'Data',
      AllowSort: true,
    },
    {
      Head: 'Event Name',
      FieldName: 'eventName',
      ColumnType: 'Data',
      AllowSort: true,
    },
    {
      Head: 'Date & Time',
      FieldName: 'dateTime',
      ColumnType: 'Data',
      AllowSort: true,
    },
    // {
    //   Head: 'Status',
    //   FieldName: 'status',
    //   ColumnType: 'Status',
    //   AllowSort: false,
    // },
    { Head: '', FieldName: '', ColumnType: 'Action', AllowSort: false },
  ];

  viewBookingDataArray = [
    {
      index: 1,
      facilityName: 'Facility 01',
      eventName: 'Event 01',
      dateTime: '11 June 2024',
      status: 'Pending',
      isRejecteableOrApprovableRecord: true,
    },
    {
      index: 2,
      facilityName: 'Facility 02',
      eventName: 'Event 02',
      dateTime: '11 June 2024',
      status: 'Pending',
      isRejecteableOrApprovableRecord: true,
    },
    {
      index: 3,
      facilityName: 'Facility 03',
      eventName: 'Event 03',
      dateTime: '11 June 2024',
      status: 'Pending',
      isRejecteableOrApprovableRecord: true,
    },
    {
      index: 4,
      facilityName: 'Facility 04',
      eventName: 'Event 04',
      dateTime: '11 June 2024',
      status: 'Pending',
      isRejecteableOrApprovableRecord: true,
    },
    {
      index: 5,
      facilityName: 'Facility 05',
      eventName: 'Event 05',
      dateTime: '11 June 2024',
      status: 'Pending',
      isRejecteableOrApprovableRecord: true,
    },
    {
      index: 6,
      facilityName: 'Facility 06',
      eventName: 'Event 06',
      dateTime: '11 June 2024',
      status: 'Pending',
      isRejecteableOrApprovableRecord: true,
    },
    {
      index: 7,
      facilityName: 'Facility 07',
      eventName: 'Event 07',
      dateTime: '11 June 2024',
      status: 'Pending',
      isRejecteableOrApprovableRecord: true,
    },
    {
      index: 8,
      facilityName: 'Facility 08',
      eventName: 'Event 08',
      dateTime: '11 June 2024',
      status: 'Pending',
      isRejecteableOrApprovableRecord: true,
    },
    {
      index: 9,
      facilityName: 'Facility 09',
      eventName: 'Event 09',
      dateTime: '11 June 2024',
      status: 'Pending',
      isRejecteableOrApprovableRecord: true,
    },
    {
      index: 10,
      facilityName: 'Facility 10',
      eventName: 'Event 10',
      dateTime: '11 June 2024',
      status: 'Pending',
      isRejecteableOrApprovableRecord: true,
    },
  ];

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
