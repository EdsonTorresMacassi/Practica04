import { Injectable } from '@angular/core';
import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  lista:Alumno[] = [
    {"id":1,"nombres":"Beale","apellidos":"Muldrew","fechaNacimiento":"6/25/2023","direccion":"18th Floor","correo":"bmuldrew0@amazon.de","telefono":"450-906-6694"},
    {"id":2,"nombres":"Emilia","apellidos":"Taree","fechaNacimiento":"9/16/2023","direccion":"6th Floor","correo":"etaree1@over-blog.com","telefono":"436-453-6820"},
    {"id":3,"nombres":"Berny","apellidos":"Mewitt","fechaNacimiento":"1/13/2023","direccion":"PO Box 71684","correo":"bmewitt2@tmall.com","telefono":"225-562-5703"},
    {"id":4,"nombres":"Hedvige","apellidos":"Clougher","fechaNacimiento":"3/16/2023","direccion":"PO Box 71381","correo":"hclougher3@psu.edu","telefono":"539-699-5768"},
    {"id":5,"nombres":"Daile","apellidos":"Haswall","fechaNacimiento":"1/29/2023","direccion":"Room 1000","correo":"dhaswall4@studiopress.com","telefono":"586-491-6417"},
    {"id":6,"nombres":"Dion","apellidos":"Ducarne","fechaNacimiento":"7/7/2023","direccion":"Apt 939","correo":"dducarne5@netlog.com","telefono":"476-745-2524"},
    {"id":7,"nombres":"Jerrold","apellidos":"McCurt","fechaNacimiento":"3/26/2023","direccion":"Suite 76","correo":"jmccurt6@ebay.co.uk","telefono":"296-440-6106"},
    {"id":8,"nombres":"Benedicto","apellidos":"Stango","fechaNacimiento":"3/28/2023","direccion":"Room 35","correo":"bstango7@last.fm","telefono":"555-465-2264"},
    {"id":9,"nombres":"Cesar","apellidos":"Widdop","fechaNacimiento":"4/8/2023","direccion":"17th Floor","correo":"cwiddop8@pen.io","telefono":"691-234-2075"},
    {"id":10,"nombres":"Benedict","apellidos":"Roney","fechaNacimiento":"6/13/2023","direccion":"Apt 12","correo":"broney9@fastcompany.com","telefono":"918-524-8150"},
    {"id":11,"nombres":"Bobbee","apellidos":"Greally","fechaNacimiento":"7/19/2023","direccion":"Room 956","correo":"bgreallya@abc.net.au","telefono":"632-837-4073"},
    {"id":12,"nombres":"Miguelita","apellidos":"Ryves","fechaNacimiento":"11/8/2022","direccion":"Suite 86","correo":"mryvesb@booking.com","telefono":"559-110-3306"},
    {"id":13,"nombres":"Silvano","apellidos":"Tunuy","fechaNacimiento":"4/27/2023","direccion":"Room 530","correo":"stunuyc@google.co.jp","telefono":"389-720-5976"},
    {"id":14,"nombres":"Don","apellidos":"Baillie","fechaNacimiento":"11/8/2022","direccion":"20th Floor","correo":"dbaillied@dropbox.com","telefono":"490-987-3367"},
    {"id":15,"nombres":"Hallsy","apellidos":"Schankel","fechaNacimiento":"6/12/2023","direccion":"12th Floor","correo":"hschankele@statcounter.com","telefono":"689-755-1451"}
  ]

  constructor() { }

  agregar(alumno: Alumno) {
    this.lista.push(alumno);
  }
}
