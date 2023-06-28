import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach'
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
];

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css'],
})
export class FundsComponent {
  Roles: any = ['Admin', 'Author', 'Reader'];
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;
  transactionsDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  rowID: string | undefined;

  constructor(public dialog: MatDialog) {
    const users = Array.from({ length: 100 }, (_, k) => this.createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
    /* this.userTransactions();*/
  }

  selectRow(templateRef: TemplateRef<any>, row: UserData) {
    this.rowID = row.id;
    const dialogRef = this.dialog.open(templateRef, {
      height: '200px',
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle any actions after the dialog is closed
    });
  }

  /*userTransactions() {
    const locallyStoredUserName = localStorage.getItem('userName');
    const locallyStoredUserId = localStorage.getItem('userId');
    const locallyStoredUserToken = localStorage.getItem('userToken');
    getTransactions(locallyStoredUserToken, locallyStoredUserId)
      .then((res) => {
        console.log(res);
        this.transactionsDetails = res;
      })
      .catch((error) => {
        console.log(error);
      });
      const res = [
        { id: '1', name: 'User 1', progress: '50', fruit: 'kiwi' },
        { id: '2', name: 'User 2', progress: '75', fruit: 'blueberry' },
        { id: '3', name: 'User 3', progress: '30', fruit: 'pineapple' },
      ];
      this.transactionsDetails = res;
  }*/

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteRecord(row: UserData) {
    alert(row.id);
  }

  updateRecord(row: UserData) {
    alert(row.id);
  }

  private createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
    }

  }
}
