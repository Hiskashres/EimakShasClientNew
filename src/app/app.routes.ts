import { Routes } from '@angular/router';
import { UserFormComponent } from './users/user-form/user-form';

export const routes: Routes = [
    { path: '', redirectTo: 'addUser', pathMatch: 'full' },
    { path: 'addUser', component: UserFormComponent}
];
