// En caso de que la capital de un pais no tenga valor (ya sea por que no existe), este Pipe se encargara de que devuelva algun valor leible para el usuario.

// Importaciones.
import { Pipe, PipeTransform } from "@angular/core";

// Decorador.
@Pipe({
    name: "valornulo"
})

// Clase.
export class ValorNulo implements PipeTransform
{
    transform ( valor: string ): string 
    {
        if ( valor == undefined) 
        {
            return valor = "Sin valor";
        } 
        else
        {
            return valor;
        }
    }
}