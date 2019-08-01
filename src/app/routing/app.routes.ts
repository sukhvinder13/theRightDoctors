import { Routes } from "@angular/router";
import { FormComponent } from '../component/form/form.component';
import { MediaComponent} from '../component/media/media.component'
import { TableComponent } from '../component/table/table.component'
import { AppComponent } from '../app.component';
import { LoginComponent } from '../component/login/login.component';
import { DisplayRecordsComponent } from '../component/display-records/display-records.component';

export const appRoutes:Routes=[
    { path: '', pathMatch: 'full', redirectTo: 'login'},
    { path:'login',component: LoginComponent},
    {path:"home",component:AppComponent},
    {path:"form",component:AppComponent,children:[{
        path:'',component:FormComponent
    }]},
    {path:"media",component:AppComponent,children:[{
        path:'',component:MediaComponent
    }]},
    {path:"table",component:AppComponent,children:[{
        path:'',component:TableComponent
    }]},
    {path:"displayRecords",component:AppComponent,children:[{
        path:'',component:DisplayRecordsComponent
    }]}
]