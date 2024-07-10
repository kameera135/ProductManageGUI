import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WaitingCircleComponent } from '../waiting-circle/waiting-circle.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [WaitingCircleComponent, CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() dataTableOptions: any;
  @Input() loadingInProgress: boolean = false;
  @Input() headArray: any[] = [];
  @Input() dataArray: any[] = [];
  @Input() displayPagination: boolean = true;
  @Input() selectedPageSize: number = 10;
  @Input() pageSizeArray: any[] = [10, 20, 30];
  @Input() selectedPage: number = 1;

  @Output() onRowDoubleClick = new EventEmitter();
  @Output() onSort = new EventEmitter();

  allowCheckBoxes: boolean = true;
  allowToView: boolean = false;

  noDataFound: boolean = false;
  isBulkSelected: boolean = false;
  bulkActivateAllowed: boolean = false;

  currentSortedColumn: string = '';
  currentSortedOrder: string = '';

  selectedItemArray: any[] = [];

  ngOnInit():void{
    if (
      this.dataArray == undefined ||
      this.dataArray == null ||
      this.dataArray.length == 0
    )
      this.noDataFound = true;

    this.setTableOptions();

    //If number of rows per table if pagination is disabled
    if (!this.displayPagination) {
      this.selectedPageSize = 10000000;
    }
  }

  setTableOptions(){
    
    if(this.dataTableOptions != undefined && this.dataTableOptions != null){

      this.allowCheckBoxes = this.dataTableOptions.allowCheckBoxes;
      this.allowToView = this.dataTableOptions.allowToViewButton;
    }
  }

  bulckSelectChange() {
    if (
      this.dataArray != undefined &&
      this.dataArray != null &&
      this.dataArray.length > 0
    ) {
      if (this.isBulkSelected) {
        for (let entry of this.dataArray) {
          if (entry.isRejecteableOrApprovableRecord) {
            entry.selectedRec = true;
          }
        }
      } else {
        for (let entry of this.dataArray) {
          entry.selectedRec = false;
        }
      }
      this.loadSelectedRecords();
    }
  }

  loadSelectedRecords() {
    this.selectedItemArray = [];

    for (let entry of this.dataArray) {
      if (entry.selectedRec) {
        this.selectedItemArray.push(entry);
      }
    }
  }

  sortData(column: string, order: string) {
    this.currentSortedColumn = column;
    this.currentSortedOrder = order;
    this.onSort.emit([column, order]);
  }

  //This method handles the row double click function. Will emmit the relavant data row
  LoadDataOnRowDoubleClick(row: any) {
    this.onRowDoubleClick.emit(row);
  }

  //Emit datamodel on checkbox select
  changeStatus() {
    //Filter selected items only here

    this.loadSelectedRecords();

    this.ActivateBulkActionButton();
  }

  //This method activate deactivate bulk action buttons based on selected records
  ActivateBulkActionButton(): void {
    if (
      this.selectedItemArray != undefined &&
      this.selectedItemArray != null &&
      this.selectedItemArray.length > 0
    ) {
      this.bulkActivateAllowed = true;
    } else {
      this.bulkActivateAllowed = false;
    }
  }
}
