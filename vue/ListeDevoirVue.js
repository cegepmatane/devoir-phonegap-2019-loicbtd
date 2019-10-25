var ListeDevoirVue = (function() {
    pageListeDevoir = document.getElementById("page-liste-devoir").innerHTML;

    return function(listeDevoirDonnee) {
        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageListeDevoir;
            
            var listeDevoir = document.getElementById("liste-devoir");

            var textLi="";
            for (const numeroDevoir in listeDevoirDonnee) {
               textLi += '<li><a href="#devoir/' + listeDevoirDonnee[numeroDevoir].id + '">' +
               listeDevoirDonnee[numeroDevoir].nom +
               "</a>" + " " +
               '<a href="#modifier-devoir/' + listeDevoirDonnee[numeroDevoir].id + '">' +
               "modifier" +
               "</a></li>";
            }
            listeDevoir.innerHTML = textLi;
        }
    }
})();