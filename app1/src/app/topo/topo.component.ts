import { Component } from '@angular/core';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    // posso passar mais de um estilo depois da vírgula
    styleUrls: ['./topo.component.css']
})


// definindo a classes
export class TopoComponent{
    // DataBindings
    public titulo: string = 'String interpolation'
}
    


