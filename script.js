//alert('coucou tout le monde') // commentaire
var name = "RAKOTONANAHARY Joseph"
var longueur = 45
var largeur = 145
//alert('la surface de ce rectangle vaut ' + (longueur*largeur)) // concaténation
var surface = longueur * largeur
var chaine = 'la surface de ce rectangle vaut '
var text = chaine + surface
chaine = chaine.toUpperCase()
text = chaine + surface
//alert(text)
var tab = [longueur, text, true, 25.89]
// length qui nous renvoie la taille de notre tableau
//alert("la taille du tableau = " + tab.length)

//alert(tab[2])
const moyen = 14.00001

if(moyen < 10) {
    alert("médiocre, fais des efforts")
}
else if(moyen < 12 && moyen >= 10) {  // [10, 12[
    alert('passable')
}
else if(moyen < 14 && moyen >= 12) {
    alert('assez bien')
}
else if(moyen < 16 && moyen >= 14) {
    alert('bien')
}
else {
    alert('très bien')
}

var i = 1
var arret = 999
var tabNumb = []

for(i; i <= arret; i = i + 1) {
    //console.log(i)
    tabNumb.push(i)
}
//console.log(tabNumb)

// pon veut supprimer le 5em élément du tableau

var temp = []

/*for(i = 0 ; i < tabNumb.length; i = i + 1) {
    //console.log(i)
    if(i !== 4) {
        temp.push(tabNumb[i])
    }
}*/
//console.log(tabNumb.length)
j = 0
while (j < tabNumb.length) {
    
    if(j !== 9) { // on veut pas afficher le 10em élément
        temp.push(tabNumb[j])
    }
    j++
}

//console.log(temp)

//tabNumb = tabNumb.filter(item => item != 5)
console.log(temp)


