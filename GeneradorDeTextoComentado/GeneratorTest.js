window.onload = function(){
    //recojo los elementos que voy a utilizar
    var sp = document.getElementsByTagName("span")
    var ul = document.getElementsByTagName("ul");

    //console.log(sp, ul[0]);
   
    //console.log(sp[0]);
    //@m Aqui creo los elementos que voy a insertar junto a su contenido y a sus atributos
    for(var i = 0; i<= sp.length - 1; i++){
      //creo 'li'
        var li = document.createElement("li")
        //@d aqui le doy una clase de bootstrap para la presentacion
        li.setAttribute("class","list-group-item list-group-item-secondary");
        //creo los 'a'
        var a = document.createElement("a");
        //console.log(sp[i].textContent);
        //@a creo el contenido tipo texto de cada 'a' a partir de los 'spans'
        var t = document.createTextNode(sp[i].textContent);
        //inserto el texto
        a.appendChild(t);
        //inserto el enlace y el atributo 'href'
        //!CUIDADO, t es un objeto textNode, tenemos que utilizar nodeValue, sinó dará error 
        a.setAttribute("href","https://dle.rae.es/"+t.nodeValue);
        //inserto cada elemento 'a' en los 'li'
        li.appendChild(a);
        //inserto cada 'li' en los 'ul'
        ul[0].appendChild(li);
    }
    //console.log(document.getElementsByTagName("a"));
    //console.log(ul[0])
    

    //@m aqui doy a los 'a' la clase 'popup' y recojo el evento para generarlas
      if(!document.getElementsByTagName)
          return false;

            var enlaces = document.getElementsByTagName("a");
            //console.log(enlaces);
              for(var i = 0; i < enlaces.length; i++){
                enlaces[i].setAttribute("class","popup");
                      enlaces[i].onclick = function (){
                          popup(this.getAttribute("href"));
                         return false;
                     }
                  }
    }
   //@m esta funcion genera los 'popup'
     function popup(winURL){
         //window.close();
         var random = Math.floor((Math.random()*100)+ 1);
         window.open(winURL,"popup"+random,"width=720","height=480");
     }