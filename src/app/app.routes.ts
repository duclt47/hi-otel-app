import { Routes,RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { WellcomeComponent } from './component/wellcome/wellcome.component';
// import { createUserComponent } from './component/createUser/createUser.component';
// import { viewUserComponent } from './component/viewUserList/viewUserList.component';

const routing: Routes =[
    // {path:'teo', component:WellcomeComponent}
    // {path:'createUser', component:createUserComponent},
    // {path:'viewUserList',component:viewUserComponent}
]
export const appRoutes = RouterModule.forRoot(routing)