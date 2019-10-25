(function() {
    
    var devoirDAO = null;

    var initialiser = function initialiser() {
        window.addEventListener("hashchange", naviguer);
        devoirDAO = new DevoirDAO();
        naviguer();
    };

    var naviguer = function() {
        var hash = window.location.hash;

        if(!hash) {
            var listeDevoirDonnee = devoirDAO.lister();
            var listeDevoirVue = new ListeDevoirVue(listeDevoirDonnee);
            listeDevoirVue.afficher();
        }
    }

    initialiser();
})();