var filters = document.getElementsByClassName("filter"); // haal alle filter knoppen op

for (var i = 0; i < filters.length; i++) { // loop door alle knoppen heen
    filters[i].onclick = function () { // geef aan iedere knop een actie mee als je er op klikt
        var state = this.classList.toggle('active'); // geeft de filter knop een extra class active of haal die weg als die er is en set variable state de waarde of het is toegevoegd of wegghaald: true of false
        var articles = document.getElementsByClassName(this.dataset.filter) // haal alle verhalen op die de class hebben van de ingedrukt knop
        for (var i = 0; i < articles.length; i++) { // loop door al die verhalen heen
            if (state) { // als de knop is ingedrukt
                articles[i].classList.add('hidden') // voeg aan het verhaal de class hidden
            } else { // alse de knop word uitgezet
                articles[i].classList.remove('hidden') // haal de hidden class weer weg
            }
        }
    };
};