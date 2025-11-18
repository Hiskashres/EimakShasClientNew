import { Routes } from '@angular/router';
import { UserFormComponent } from './users/user-form/user-form';
import { UserListComponent } from './users/user-list/user-list';
// import { WelcomePageComponent } from './welcome-page/welcome-page';
import { MasechtaListComponent } from './masechtas/masechta-list/masechta-list';

export const routes: Routes = [
    // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    // { path: 'welcome', component: WelcomePageComponent},
    { path: 'users/:userId/dafim', component: MasechtaListComponent, data: {mode: 'selectDafim'}},
    { path: 'users/add', component: UserFormComponent },
    { path: 'users', component: UserListComponent },
    { path: 'masechtas', component: MasechtaListComponent }
];
