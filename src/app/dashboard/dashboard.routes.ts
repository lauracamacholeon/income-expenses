import { RouterModule, Routes } from '@angular/router';
import { StadisticComponent } from '../income-expenses/stadistic/stadistic.component';
import { IncomeExpensesComponent } from '../income-expenses/income-expenses.component';
import { DetailComponent } from '../income-expenses/detail/detail.component';

// le agrego aqui el export
export const dashboardRoutes: Routes = [
    { path: '', component: StadisticComponent },
    { path: 'income-expenses', component: IncomeExpensesComponent },
    { path: 'detail', component: DetailComponent },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

