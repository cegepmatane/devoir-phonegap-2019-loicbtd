var ListeDevoirVue = (function() {
    pageListeDevoir = document.getElementById("page-liste-devoir").innerHTML;

    return function(listeDevoirDonnee) {
        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageListeDevoir;
            
            var listeDevoir = document.getElementById("liste-devoir");

            var textLi="";

            for (const numeroDevoir in listeDevoirDonnee) {
               textLi += '<li class="collection-item avatar">' +
               '<a href="#devoir/' + listeDevoirDonnee[numeroDevoir].id + '">' + 
            //    '<img srcp="ressource/image/img_book.png" alt="" class="circle">' +
               '<span class="title">' + listeDevoirDonnee[numeroDevoir].nom + '</span>' +
               '<p>' + listeDevoirDonnee[numeroDevoir].matiere + '</p>' +
               '</a>' +
               '<a class="secondary-content" href="#modifier-devoir/' + listeDevoirDonnee[numeroDevoir].id + '">' +
               '<i class="far fa-edit"></i>' +
               '</a>' + 
               "</li>";
            }
            listeDevoir.innerHTML = textLi;
        }
    }
})();