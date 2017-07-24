import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurante";

@Component({
    selector: "restaurantes-list",
    templateUrl: "app/view/restaurantes-list.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [RestauranteService]
})

export class RestaurantesListComponent implements OnInit{

    public titulo: string = "Listado de restaurantes: ";
    public restaurantes:Restaurante[];
    public errorMessage:string;
    public loading;

    constructor(private _restauranteService:RestauranteService){

    }

    ngOnInit() {
        this.loading='show';
        this.getRestaurantes();
    }

    getRestaurantes(){
        //let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
        //box_restaurantes.style.visibility = "visible";

        this._restauranteService.getRestaurantes()
            .subscribe(
                result=>{
                    this.restaurantes = result._embedded.restaurant;
                    if(this.restaurantes == null){
                        alert("No results found");
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
            );
    }

}