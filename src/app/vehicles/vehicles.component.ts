import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  public vehicles:any = [];
  public term:string = "";

  public column:string = "";
  public order:string = "";

  constructor(private _vehicleService:VehicleService, private router:Router){

    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

  }

  sort(){

    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )

  }

  

  filter(){

    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )

  }

  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully!!!!");
        location.reload();
      },
      (err:any)=>{
        alert("deletion failed");
      }
    )
  }

  view(id:string){
    // this.router.navigate(['view-vehicle'])
    this.router.navigateByUrl("/dashboard/view-vehicle/"+id);
  }


  edit(id:string){
    this.router.navigateByUrl("/dashboard/edit-vehicle/"+id)
  }
  


}
