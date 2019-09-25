var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var resultWordCount = "Veuillez saisir du texte";
  var resultPrixtotal = "";
  res.render('index', { resultWordCount, resultPrixtotal, resultatTirage });
});

var resultPrixtotal = 0
var resultWordCount = "";
var prixTotal = 0;
var resultatTirage = "";

router.post('/challenge1', function(req, res, next) {

// ############# CHALLENGE 1 #############
  body = "";
  body = req.body.text

  var countWord = function(text) {
    text = body.split(" ")
    nbMots = text.length;
    return "Ce texte contient " + nbMots + " mots"
  }

  resultWordCount = countWord(body);

  res.render('index', { resultWordCount, resultPrixtotal, resultatTirage });
});



router.post('/challenge2', function(req, res, next) {
var typeTaxMonPanier = req.body.typeTax
console.log(typeTaxMonPanier);

  // ############# CHALLENGE 2 #############

  var monPanierPerso = [
    {nom: "pull", prix : 80, quantite: 1},
    {nom: "tshirt", prix : 23, quantite: 3},
    {nom: "bermuda", prix : 34, quantite: 2}
  ]

  var calculPrixPanier = function(panier, tax) {
    var prixTotal = 0;
    for (var i = 0 ; i < panier.length ; i++) {
      var prixTotalParArticle = panier[i].prix * panier[i].quantite;
      prixTotal = prixTotal + prixTotalParArticle
    }
    console.log("affichage prix total avant if tax " + prixTotal);
    console.log("log tax dans la fonction " + tax);
    if (tax == "HT") {
      prixTotal = prixTotal * 0.833
    }
    return "Le prix total du panier est de " + prixTotal + " euros"
  }
  resultPrixtotal = calculPrixPanier(monPanierPerso, typeTaxMonPanier);

  res.render('index', { resultWordCount, resultPrixtotal, resultatTirage });
});


router.post('/challenge3', function(req, res, next) {
  var nombreChoisi = req.body.nombreChoisi
  console.log(nombreChoisi);


  res.render('index', { resultWordCount, resultPrixtotal, resultatTirage });
});

module.exports = router;
