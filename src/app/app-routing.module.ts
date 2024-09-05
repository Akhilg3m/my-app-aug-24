import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { AuthenticationGuard } from './authentication.guard';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
    {path:'home',component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'directives-pipes', component: DirectivesPipesComponent},
    {path:'employees', component: EmployeesComponent},
    {path:'vehicles', component: VehiclesComponent},
    {path:'create-vehicle', component: CreateVehicleComponent},
    {path:'view-vehicle/:id', component:ViewVehicleComponent},
    {path:'edit-vehicle/:id', component: CreateVehicleComponent},
    {path:'create-user', component: CreateUserComponent},
    {path:'parent', component:ParentComponent},
    {path:'sibling', component: SiblingComponent},
    {path:'',component:WelcomeComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
