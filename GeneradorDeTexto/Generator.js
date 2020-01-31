window.onload = function(){
    //var parrafos = document.getElementsByTagName("p");
    //console.log(parrafos);
    //console.log(parrafos[0].childNodes[1]);
    //var nodes = parrafos[0].childNodes;
    //console.log(nodes);

    var sp = document.getElementsByTagName("span")
    var ul = document.getElementsByTagName("ul");

    // for(var i = 0 ; i <= nodes.length -1 ; i++){
    //     if (nodes[i].localName == "span"){
    //             sp.push(nodes[i])
    //     }
    // }
    //console.log(sp, ul[0]);
   
    //console.log(sp[0]);
    
    for(var i = 0; i<= sp.length - 1; i++){
        var li = document.createElement("li")
        li.setAttribute("class","list-group-item list-group-item-secondary");
        var a = document.createElement("a");
        a.setAttribute("target","_blank");
        //console.log(sp[i].textContent);
        var t = document.createTextNode(sp[i].textContent);
        a.appendChild(t);
        a.setAttribute("href","https://dle.rae.es/"+t.nodeValue);
        li.appendChild(a);
        ul[0].appendChild(li);
    }
    //console.log(document.getElementsByTagName("a"));
    //console.log(ul[0])
    
    //  if(!document.getElementsByTagName)
    //      return false;

            //var enlaces = document.getElementsByTagName("a");
            //console.log(enlaces);
    //          for(var i = 0; i < enlaces.length; i++){
    //            enlaces[i].setAttribute("class","popup");
    //                  enlaces[i].onclick = function (){
    //                      popup(this.getAttribute("href"));
    //                     return false;
    //                  }
    //              }
    }
   
    // function popup(winURL){
    //     window.close();
    //     window.open(winURL,"popup","width=720","height=480");
    // }