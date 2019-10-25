var DevoirDAO = function() {
    var listeDevoir = [
        new Devoir("nom0", "matiere0", "description0", 0),
        new Devoir("nom1", "matiere1", "description1", 1),
        new Devoir("nom2", "matiere2", "description2", 2)
    ];

    this.lister = function() {
        return listeDevoir;
    }

    this.ajouter = function(devoir) {
        devoir.id = listeDevoir.length;
        listeDevoir.push(devoir);
    }
}