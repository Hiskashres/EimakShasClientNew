import { Routes } from '@angular/router';
import { UserFormComponent } from './users/user-form/user-form';
import { UserListComponent } from './users/user-list/user-list';
// import { WelcomePageComponent } from './welcome-page/welcome-page';
import { MasechtaListComponent } from './masechtas/masechta-list/masechta-list';
import { YomHashasMain } from './yom-hashas/yom-hashas-main/yom-hashas-main';
import { YomHashasControlPanel } from './yom-hashas/yom-hashas-control-panel/yom-hashas-control-panel';
import { Component } from '@angular/core';
import { YomHashasSettings } from './yom-hashas/yom-hashas-settings/yom-hashas-settings';
import { YomHashasDafimList } from './yom-hashas/yom-hashas-dafim-list/yom-hashas-dafim-list';
import { YomHashasAddDafim } from './yom-hashas/yom-hashas-add-dafim/yom-hashas-add-dafim';
import { SelectDafim } from './masechtas/select-dafim/select-dafim';
import { AssignDafim } from './users/assign-dafim/assign-dafim';

export const routes: Routes = [
    // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    // { path: 'welcome', component: WelcomePageComponent},
    { path: 'users/:userId/dafim', component: AssignDafim, children: [{path: '', component: SelectDafim }] },
    { path: 'users/add', component: UserFormComponent },
    { path: 'users', component: UserListComponent },
    { path: 'masechtas', component: MasechtaListComponent },
    { path: 'yom-hashas', component: YomHashasMain },
    { path: 'yom-hashas/control-panel', component: YomHashasControlPanel, children: [{path: '', component: YomHashasDafimList }] },
    { path: 'yom-hashas/control-panel/add-dafim', component: YomHashasAddDafim, children: [{path: '', component: SelectDafim }] },
    { path: 'yom-hashas/control-panel/settings', component: YomHashasSettings }
];
