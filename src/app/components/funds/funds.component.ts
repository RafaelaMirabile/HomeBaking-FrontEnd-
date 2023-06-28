import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { getTransactions, postCashFlow } from 'src/app/services/API/API';
import { TransactionsInputs } from 'src/app/data-Types/data-types.module';

export interface TransactionData {
  userId: string;
  value: number;
  type: string;
  description: string;
  transactionId: string;
}

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css'],
})
export class FundsComponent {
  Roles: any = ['Admin', 'Author', 'Reader'];
  displayedColumns: string[] = ['id', 'description', 'value'];
  dataSource!: MatTableDataSource<TransactionData>;
  transactionsDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  rowID: string | undefined;
  rowProgress: number | undefined;
  rowName: string | undefined;
  description: string | undefined;
  value: string | undefined;

  constructor(public dialog: MatDialog) {
    this.userTransactions();
  }

  selectRow(templateRef: TemplateRef<any>, row: TransactionData) {
    this.rowProgress = row.value;
    this.rowName = row.type;
    this.rowID = row.description;
    const dialogRef = this.dialog.open(templateRef, {
      height: '200px',
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle any actions after the dialog is closed
    });
  }

  userTransactions() {
    const locallyStoredUserId = localStorage.getItem('userId');
    const locallyStoredUserToken = localStorage.getItem('userToken');
    getTransactions()
      .then((res) => {
        this.dataSource = new MatTableDataSource<TransactionData>(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deposit() {
    const body: TransactionsInputs = {
      value: this.value || '',
      type: 'inflow',
      description: this.description || '',
    };
    postCashFlow(body)
      .then((res) => {
        console.log(res.data);
        console.log('update table');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  withDraw() {
    const body: TransactionsInputs = {
      value: this.value || '',
      type: 'outflow',
      description: 'Withdraw',
    };
    postCashFlow(body)
      .then((res) => {
        console.log(res.data);
        console.log('withdraw table');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateRecord(row: TransactionData) {
    alert(row.transactionId);
  }
}
