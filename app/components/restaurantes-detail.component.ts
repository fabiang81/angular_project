import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurante";

@Component({
    selector: "restaurantes-detail",
    templateUrl: "app/view/restaurantes-detail.html",
    providers: [RestauranteService]
})

export class RestauranteDetailComponent implements OnInit{
    public restaurante:Restaurante;
    public errorMessage:string;
    public loading;

    constructor(private _restauranteService:RestauranteService,
                private _routeParams:RouteParams){

    }

    ngOnInit() {
        this.getRestaurante();
    }

    getRestaurante(){
        let id = this._routeParams.get("id");

        this._restauranteService.getRestaurante(id)
            .subscribe(
                result=>{
                    this.restaurante = result;
                    if(this.restaurante == null){
                        alert("No result found");
                    }
                    this.loading='hide';                 
                },
                error=>{
                    this.errorMessage = <any>error;
                    if(this.errorMessage!=null){
                        console.log(this.errorMessage);
                        alert("Request error");
                    }
                }
            )
    }

}