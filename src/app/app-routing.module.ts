import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from  './main/main.component'
import { AddpersonComponent } from './addperson/addperson.component'
import { EditpersonComponent} from './editperson/editperson.component'

const routes: Routes = [{
  path: '',
  redirectTo: '/main',
  pathMatch: 'full' 
},
{
  path: 'main',
  component: MainComponent
},
{
  path: 'addperson',
  component: AddpersonComponent
},
{
  path: 'editperson/:id',
  component: EditpersonComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
