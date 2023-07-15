
// Déclaration des classes
class Plat {
    constructor(nom, description, prix, image) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.image = image;
    }
}






class Salade {
    constructor(nom, description, versions) {
        this.nom = nom;
        this.description = description;
        this.versions = versions;
    }
}

const versionsSalade = [
    { nom: "Poulet croustillant", prix: 15.90 },
    { nom: "Crevette Panées..", prix: 15.90 },
    { nom: "Bacon...................", prix: 14.50 }

];






class Vin {
    constructor(nom, description, versions){
        this.nom = nom;
        this.description = description;
        this.versions = versions;
    }
}

const versionsVinBlanc = [
    {nom: "DOMAINE TARIQUET CLASSIC....", prix: [4.90, 9.30, 17.80]},
    {nom: "DOMAINE DE JOY MOELLEUX - IGP GASCOGNE", prix: [ 5.50, 10.50, 19.90]},
    {nom: "CHARDONNAY IGP PAYS D'OC............", prix: [5.50, 10.50, 19.90]},
    {nom: "SAINT-VERAN DOMAINE DES TERRES SECRÈTES", prix: [6.90, 13.20,24.90]}
]
const versionsVinRouge = [
    {nom: "PINOT NOIR IGP <br> GASCOGNE", prix: [5.50, 10.50, 19.90]},
    {nom: "ST-NICOLAS DE <br> BOURGUEIL..", prix: [6.50, 12.30, 23.50]},
    {nom: "COTES DE BLAYE <br>.....................", prix: [6.50, 12.30, 23.50]}
    
]
const versionsVinRose = [
    {nom: "COTES DU LUBERON (ELEPHANT ROSE)", prix: [5.50, 10.50, 19.90]},
    {nom: "CÔTEAUX D'AIX EN PROVENCE<br>................", prix: [ 6.50, 12.30, 23.50]}
    
]
const versionsVinBulle = [
    {nom: "CHAMPAGNE - DOMAINE ADRIEN BERGERE", prix: [9.0,"", ""]}
    
]
const versionsBouteilleBlanc = [
    {nom: "DOMAINE TARIQUET CLASSIC", prix: 21.00},
    {nom: "DOMAINE DE JOY MOELLEUX - IGP GASCOGNE", prix: 24.00},
    {nom: "CHARDONNAY IGP PAYS D'OC............", prix:24.00},
    {nom: "SAINT-VERAN DOMAINE DES TERRES SECRÈTES", prix:34.00},
    {nom: "SANCERRE DOMAINE FRANCK MILLET", prix:42.00}
]
const versionsBouteilleRouge = [
    {nom: "PINOT NOIR IGP GASCOGNE", prix: 23.00},
    {nom: "COTE DU RHONE CHATEAU D'AQUERIA", prix: 25.00},
    {nom: "BORDEAUX COTES DE BLAYE GASCOGNE", prix: 26.00},
    {nom: "ST-NICOLAS DE BOURGUEIL..", prix: 27.00},
    {nom: "CROZES HERMITAGE DOMAINE LAURENT COMBIER", prix: 35.00},
    {nom: "GIVRY DOMAINE JOSEPH DROUHIN", prix: 38.00},
    {nom: "CHATEAU NEUF DU PAPE", prix: 54.00},
    {nom: "COTES ROTIE CHAMPIN LE SEIGNEUR", prix: 79.00}
    
]
const versionsBouteilleRose = [
    {nom: "COTES DU LUBERON (ELEPHANT ROSE)", prix:23.00},
    {nom: "CÔTEAUX D'AIX EN PROVENCE....", prix:27.00}
    
]
const versionsBouteilleBulle = [
    {nom: "CHAMPAGNE - DOMAINE ADRIEN BERGERE", prix: 55.0}
    
]






class Section {
    constructor(titre, plats) {
        this.titre = titre;
        this.plats = plats;
    }
}




class Carte {
    constructor(sections) {
        this.sections = sections;
    }
}





// fonction pour générer la carte
function genererContenuCarte(carte) {
    let contenuHTML = "<h1>NOTRE CARTE SUR PLACE</h1>";

    carte.sections.forEach(section => {
        const premierMot = section.titre.trim().split(" ")
        [0].toLowerCase();

        contenuHTML += `<section class="section-carte" id="${premierMot}">
                        <h2>${section.titre}</h2>`;

        section.plats.forEach(plat => {
            contenuHTML += `<div class="plat">
                        <h3>${plat.nom} </h3>`;

            if (plat.image) {
                contenuHTML += `<img src="${plat.image}" alt="${plat.nom}" class="news">`;
            }
            
            contenuHTML += `<p class="description">${plat.description}</p>`;

            if (plat.versions && plat.versions.length > 0) {
                contenuHTML += "<ul>";

                plat.versions.forEach(version => {
                    contenuHTML += `<li class="version">${version.nom}............<span class="prix0">${version.prix} €</span>  <span class="prixVin1">  ${version.prix[0]} €</span>  <span class="prixVin2"> / ${version.prix[1]} €</span>  <span class="prixVin3"> / ${version.prix[2]} €</span></li>`;
                });

                contenuHTML += "</ul>";
            } else {
                contenuHTML += `<p class="prix">..................................................... ${plat.prix} €</p>`;
            }

            contenuHTML += "</div>";
        });

        contenuHTML += "</section>";
    });

    return contenuHTML;
}







// Création des plats
const tortillaPlat = new Plat("TORTILLA CHILLI ET GUACAMOLE", "Chips de maïs, sauce guacamole.", 5.90);
const nachosPlat = new Plat("NACHOS, SAUCE CHEDDAR ET SALSA", "Chips de maïs, délicate sauce cheddar, jalapenos, poivron, coriandre, citron vert.", 8.90);
const chickenWingsPlat = new Plat("CHICKEN WINGS", "Ailes de poulet grillées et croustillantes, sauce BBQ (6 pièces).", 9.50,  "https://mamabetty.fr/media-source/source_image/New@2x.webp");
const mamaGumpShrimp = new Plat("MAMA GUMP SHRIMP", "Crevettes panées tempura, mayo épicée maison,  sauce BBQ (6 pièces)", 12.90);
const mixTapas = new Plat("MIX TAPAS", "onions rings, chicken wings, nachos chili & sauce BBQ, mini wraps feta-olives-basilic, pickles de legumes aigre doux", 19.50,  "https://mamabetty.fr/media-source/source_image/New@2x.webp");


const cesarPalace = new Salade("CÉSAR PALACE", "Salade romaine, tomate cerises, croûtons à l'ail, parmesan, sauce césar maison.", versionsSalade);
const pokeBowl = new Plat("POKE BOWL", "Riz au vinaigre, thon rouge mariné soja, edamame, ananas, carotte, concombre, radis, graine de sésame,coriandre, menthe, feuille de nori, vinaigrette japonnaise", 16.50);
const burrataWithLove = new Plat("BURRATA WITH LOVE", "Salade de jeune pousses, roquette, Burrata crémeuse, fraises, tomates cerises, tagliatelles de courgettes, basilic, oignons à l'italienne, vinaigrette fraise-basilic.", 15.90);


const gino = new Plat("GINO", "Carpaccio de boeuf et tartare, câpresn cébette, Grana Padano, pesto, roquette, frites fraîches Betty", 16.90);
const chicagoBall = new Plat("CHICAGO BALL", "Carpaccio de boeuf, Burrata crémeuse, câpre, cébette, pesto, roquette, frîtes fraîches Betty", 16.90);


const accompagnementFrite = new Plat("FRITES FRAICHES BETTY", "  (+ cheddar fondu, + 2€)<br> <span>En supplément:</span>", 4.00);
const legumes = new Plat("LÉGUMES DE SAISON À LA BRAISE", "<span>En supplément:</span> ", 4.00);
const macAndCheese = new Plat("MAC AND CHEESE", "gratin de Macaroni au cheddar<br> <span>En supplément:</span>", 4.00);
const mesclun = new Plat("MESCLUN", "mélange de jeune pousses<br><span>En supplément:</span>", 4.00);
const patateDouce = new Plat("PATATE DOUCE AU FOUR", 'sauce yaourt tandoori<br><span>En supplément:</span>', 4.00);


const smokyBbq = new Plat("SMOKY BBQ", "sauce barbecue fumée <br> <span>En supplément:</span>", 2.00);
const oldPepper = new Plat("OLD PEPPER", "sauce au poivre et whiskey<br> <span>En supplément:</span>", 2.00);
const blueStilton = new Plat("BLUE STILTON", "sauce au fromage bleu<br> <span>En supplément:</span>", 2.00);
const kingTarragon = new Plat("KING TARRAGON", "sauce béarnaise<br> <span>En supplément:</span>", 2.00);


const theSteakHache = new Plat("ZE STEAK HACHÉ", "Boeuf frais 100% Terroir dans la plus pure tradition. Avec oeuf à cheval et lard grillé", 13.90);
const authenticTartare = new Plat("AUTHENTIC TARTARE 180gr", "Tartare de boeuf charolais au couteau préparé par nos soins... Frites fraîches Betty et mesclun (vous pouvez le demander poêlé", 16.50);
const monstruousAuthenticTartare = new Plat("MONSTRUOUS AUTHENTIS TARTARE 550g", "Pareil que Authentic Tartare mais pour les balaises", 25.90);
const biggie = new Plat("Bavette Angus fondante et parfumée", "texture savoureuse avec ses échalottes confites", 18.50);
const spurs = new Plat("SPURS N°9 220gr", "Brochette de Rumsteack Angus mariné, poivrons de Padron, sauce chimichurri", 18.50);
const picanhaAngus = new Plat("PICANHA ANGUS 250gr", "Comment vous dire... c'est comme un magret... mais de boeuf!", 19.90);
const newYorkSteak = new Plat("NEW YORK STEAK 300gr", "Entrecote de boeuf au goût et à la texture remarquable dû à un élevage de qualité.", 25.90);
const tbonePorterhouseAngus = new Plat("T-BONE PORTERHOUSE ANGUS 500gr", "Viande exceptionnelle !!! Le préféré de Mister T... Pièce des plus délicate car elle associe la finesse du filet et la puissance du contre-filet.", 38.90);


const laurynHill = new Plat("LAURYN HILL", "Poulet laqué aux épices cajun, ananas et citron vert, frites fraîches Betty, coeur de salade sucrine, coriandre", 16.50);
const porkBrisket = new Plat("PORK BRISKET", "Pointe de poitrine de cochon marinée et confite pendant 12 heures ... Une cuisson lente donnant un fondant en bouche exceptionnel.", 16.90);
const heatWave = new Plat("HEAT WAVE", "Wings de poulet laquées avec une sauce thaï sweet chili, oignons cébette (10 pièces)", 16.50, "https://mamabetty.fr/media-source/source_image/New@2x.webp");
const pigBuddy = new Plat("PIG BUDDY", "Ribs de cochon caramélisés BBQ-cola. Bienvenue dans les contrées sauvages !", 18.50);
const ahTunaMatata = new Plat("AH TUNA MATATA", "Tataki de thon mi-cuit mariné soja et crôute de sésame, mousseline de patate douce au gingembre, salade thaî & cajou, coriandre, pamplemousse.", 18.90);
const fishNchips = new Plat("FISH N'CHIPS", "Filet de cabillaud pané, sauce tartare, frites fraîches Betty", 16.90);


const veggieBurger = new Plat("<span>VEGGIE BURGER</span>", "<span>Nos burgers sont également disponibles en version végétarienne, la viande est remplacée par un pané de mozzarella fondant</span>",0);
const mamaBettysRoyal = new Plat("MAMA BETTY'S ROYAL", "Bun, steak de boeuf Terroir, cheddar, lard grillé, sauce BBQ, moutarde au miel, tomate, salade romaine, pickles", 15.50);
const megaCheese = new Plat("MEGA CHEESE", "Bun, steak de boeuf Terroir, fromage double raclette, lard grillé, oignons caramélisés, sauce poivre, tomate", 16.50);
const littleItaly = new Plat("LITTLE ITALY", "Bun, steak de boeuf Terroir, feta, olives Kalamata, basilic, pastrami, concombre, tomate confite, sauce relish, salade romaine.", 15.90);
const thanosPowerShow = new Plat("THANOS POWER SHOW", "Rösti burger,Galettes de PdT, steak de boeuf Terroir, cheddar, jambon de pays crispy, oignons caramélisés, oeuf au plat, salade romaine.", 16.90);
const belizeBlueHole = new Plat("BELIZE BLUE HOLE", "Bun, steak de boeuf terroir, gorgonzola, coppa crispy, tartare de tomates, mayo épicée, roquette.", 15.90);
const redHot = new Plat("RED HOT", "Bun, filet de poulet corn flakes, sauce yaourt tandoori, guacamole, onion rings, poivron grillé, jalapenos, sauce betty.", 15.90);
const supSteak = new Plat("Tous nos burgers existent en version 'L' ","2 steaks, supp. par steak", 4.5);


const menuKids = new Plat("( -10 ans) CHEESEBURGER OU STEACK HACHÉ OU CRISPY CHICKEN + COMPOTE DE POMME OU GLACE 1 BOULE OU GLACE PUSH-UP", "1 accompagnement au choix",11.90);


const lemonPie = new Plat("LEMON PIE","Tarte citron supervitaminée, meringues cactus, coulis fraise, sorbet framboise.","", "https://mamabetty.fr/media-source/source_image/New@2x.webp");
const cheeseleader = new Plat("CHEESELEADER", "Le cheesecake New-Yorkais au fromage frais et compotée de myrtilles.","");
const americanDream = new Plat("AMERICAN DREAM","Brownie fondant au chocolat et Oréo, coulis de framboise, glace yaourt","","https://mamabetty.fr/media-source/source_image/New@2x.webp");
const willyWonkaCookie = new Plat("WILLY WONKA COOKIE", "Cookie mi-cuit aux pépites de chocolat, coeur caramel de beurre salé, glace vanille","");
const gourmetCoffee = new Plat("GOURMET COFFEE", "Mini baba au rhum et fruit du moment, Brownie choco, crème brûlée, Tartelette citron.", "","https://mamabetty.fr/media-source/source_image/New@2x.webp");
const milkshake = new Plat("MILKSHAKE", "Choisissez votre parfum de glace... Vanille, Fraise ou chocolat, chantilly et mini donut","");
const raspberryOldFashioned = new Plat("RASPBERRY OLD FASHIONED", "Glace fraise, glace pistache, glace vanille, biscuits amaretti, coulis fraise, chantilly","","https://mamabetty.fr/media-source/source_image/New@2x.webp");
const babyChou = new Plat("BABY'CHOU", "Glace vanille x2, glace caramel beurre salé, coulis caramel, chantilly, chouchous caramélisés","","https://mamabetty.fr/media-source/source_image/New@2x.webp");
const bettyBrownieIceCream = new Plat("BETTY BROWNIE ICE CREAM", "Glace vanille x2, glace chocolat noir, brownie fondant, cerises rôties, chantilly", "","https://mamabetty.fr/media-source/source_image/New@2x.webp");


const boules2 = new Plat("2 BOULES","Parfum aux choix: voir liste ci-dessous",4.90);
const boules3 = new Plat("3 BOULES", "Parfum aux choix: voir liste ci-dessous",6.90);
const parfum = new Salade("GLACES TRADITIONNELLES - SORBET :", "( Chocolat noir, Vanille, Fraise, Café, caramel beurre salé, pistache, yaourt ) -  ( Citron, Framboise, Cassis ) ", versionsSalade);
const suppChant = new Plat("SUPPLEMENT CHANTILLY"," ",1.50);


const babyDragon = new Plat("BABY DRAGON", "Rhum Captain Morgan, purée de mangue, sirop de gingembre,basilic frais, jus de lime, limonade", 9,0);
const bellaFragola = new Plat("BELLA FRAGOLA", "Campari, Prosecco, purée de fraise, citron vert", 8.50,"https://mamabetty.fr/media-source/source_image/New@2x.webp" );
const bellini = new Plat("BELLINI", "Prosecco, purée de framboise, menthe, citron vert", 8.50, "https://mamabetty.fr/media-source/source_image/New@2x.webp");
const aperolSpritz = new Plat("APEROL SPRITZ", "Aprérol, Prosecco, eau gazeuse, orange", 8.50);
const hugoSpritz = new Plat("HUGO SPRITZ", "Hugo spritz, liqueur de fleur de sureau, Prosecco, menthe, citron vert, eau gazeuse", 8.50);
const mojito = new Plat("MOJITO",  "Rhum Havana Club, menthe fraîche, citron vert, sucre, eau gazeuse", 9.0);
const mojitoFraise = new Plat("MOJITO FRAISE", "idem Mojito + purée de fraise", 9.50);
const bettySoft = new Plat("BETTY SANS ALCOOL", "", 6.50);


const astraBlonde = new Plat("ASTRA BLONDE", "............................................ 5,70€ - 8,30€","");
const brooklinLager = new Plat("BROOKLYN LAGER", "............................................ 6,30€ - 9,30€","");
const brooklinIpa = new Plat("BROOKLYN IPA", "............................................ 6,50€ - 9,50€", "");
const biereDuMoment = new Plat("BIÈRE ARTISANALE DU MOMENT", "............................................ 6,50€ - 9,50€", "");
const panacheMonaco = new Plat("PANACHE OU MONACO", "............................................ 5,70€ - 8,30€", "");
const picon = new Plat("PICON", "............................................ 6,30€ - 9,30€", "");

const soif = new Plat("SOIF", "BRASSERIE HOPPY ROAD À MAXEVILLE", 6.50);
const hazyRider = new Plat("HAZY RIDER IPA", "HOPPY ROAD", 6.50);
const hooper = new Plat("HOOPER BLANCHE", "HOOPY ROAD");
const cubanisto = new Plat("CUBANISTO", "", 6.50);
const locales = new Plat("LES LOCALES", "Selection Maltazar, demandez-nous", 6.50);


const cocas = new Plat("COCA COLA - COCA ZERA - COCA CHERRY", "33 cl", 3.90);
const fuzetea = new Plat("FUZETEA", "25 cl", 3.90);
const jusDeFruit = new Plat("JUS DE FRUIT 25 cl", "Fraise, pomme bio, orange bio, tomate, jus d'ananas.", 3.90);
const fanta = new Plat("FANTA", "25 cl", 3.90);
const orangina = new Plat("ORANGINA", "25 cl", 3.90);
const perrier = new Plat("PERRIER", "33 cl", 3.90);
const schweppes = new Plat("SCHWEPPES", "25 cl", 3.90);
const diabolo = new Plat("DIABOLO 20 cl", "", 3.90);
const vittel05 = new Plat("VITTEL - PERRIER", "50 cl", 3.90);
const vittel1 = new Plat("VITTEL - PERRIER", "100 cl", 5.50);


const kir = new Plat("KIR", "12 cl", 5.0);
const kirPet = new Plat("KIR PÉTILLANT", "12 cl", 5.50);
const prosecco = new Plat("PROSECCO", "12 cl", 5.50);
const martini = new Plat("MARTINI ROUGE - BLANC", "12 cl", 5.50);
const ricard = new Plat("RICARD", "2cl", 3.50);
const coupeChampagne = new Plat("COUPE DE CHAMPAGNE", "12 cl", 9.50);
const kirRoyal = new Plat("KIR ROYAL", "12 cl", 9.50);



const blancs = new Vin("BLANCS ","12cl / 25cl / 50cl",versionsVinBlanc);
const rouges = new Vin("ROUGES", "12cl / 25cl / 50cl",versionsVinRouge);
const roses = new Vin("ROSÉS", "12cl / 25cl / 50cl", versionsVinRose);
const bulles = new Vin("BULLES", "12cl", versionsVinBulle);


const bblancs = new Vin("BLANC", "", versionsBouteilleBlanc);
const brouges = new Vin("ROUGE", "", versionsBouteilleRouge);
const broses = new Vin("ROSÉ", "", versionsBouteilleRose);
const bbulles = new Vin("BULLE", "", versionsBouteilleBulle);


const comeToDaddy = new Plat("COME TO DADDY", "surpris !!", 4);
const bananaSplit = new Plat("BANANA SPLIT", "Crème de banane, rhum Havana Club, crème de cacao, vodka",4.00);
const screamingOrgasm = new Plat("SCREAMING ORGASM", "Bailey's, Amaretto, Kahlus", 4.50);
const chuckNorris = new Plat("CHUCK NORRIS", "Absinthe, rhum Captain Morgan, chartreuse Verte", 5.00);

const grant = new Plat("GRANT'S", "BLEND SCOTCH WHISKEY", 7.00);
const jackDaniel = new Plat("JACK DANIEL'S OLD N°7", "TENESSEE SOUR MASH", 9.00);
const aberlour = new Plat("ABERLOUR 10 ANS", "SINGLE MALT WHISKEY", 12.00 );
const glenlivet = new Plat("GLENLIVET 15 ANS", "SINGLE MALT WHISKEY", 12.00);


const havana = new Plat("HAVANA 'ESPECIAL'", "Rhum Havane", 7.00);
const havana7 = new Plat("HAVANA 7 ANS", "Rhum Havane", 8.00);
const diplomatico = new Plat("DIPLOMATICO", "Rhum Vénézuela", 9.00);
const donPapa = new Plat("DON PAPA", "Rhum Philippines", 9.00);
const angostura = new Plat("ANGOSTURA 1919", "Rhum trinidad & tobago", 9.00);
const centenario = new Plat("CENTENARIO 12 ANS", "Rhum costa rica", 12.00);
const zacapa = new Plat("ZAKAPA 23 ANS", "Rhum Guatemala", 13.00);
const cognac = new Plat("COGNAC VSOP", "", 8.00);
const mirabelle = new Plat("MIRABELLE / FRAMBOISE / POIRE WILLIAM'S", "", 8.00);
const chartreuse = new Plat("CHARTREUSE VERTE", "55°", 9.00);
const bailey = new Plat("BAILEY'S", "", 7.00);
const get = new Plat("GET 27 / GET 31", "", 7.00);
const amaretto = new Plat("AMARETTO", "", 6.00);


const cafe = new Plat("CAFE", "", 2.20);
const grandCafe = new Plat("GRAND CAFE", "", 3.90);
const cafeCreme = new Plat("CAFE CRÈME", "", 2.70);
const decafeine = new Plat("DÉCAFÉÏNE", "", 2.50);
const cappuccino = new Plat("CAPPUCCINO - MOUSSE DE LAIT OU CHANTILLY", "", 4.50);
const the = new Plat("THÉ - INFUSION", "", 3.80);
const irish = new Plat("IRISH COFFEE", "WHISKY 4cl", 8.50);








// création des sections
const tapasSection = new Section("TAPAS À PARTAGER... OU PAS!", [tortillaPlat, nachosPlat, chickenWingsPlat, mamaGumpShrimp, mixTapas]);
const saladeSection = new Section("SALADES", [cesarPalace, pokeBowl, burrataWithLove]);
const carpacciosSection = new Section("CARPACCIOS", [gino, chicagoBall]);
const accompagnementSection = new Section("ACCOMPAGNEMENTS ", [accompagnementFrite, legumes, macAndCheese, mesclun, patateDouce]);
const sauceMamaBettySection = new Section("SAUCE MAMA BETTY", [smokyBbq, oldPepper, blueStilton, kingTarragon]);
const leMeilleurDuBoeufSection = new Section("LE MEILLEUR DU BOEUF <br> accompagnement et sauce au choix", [theSteakHache, authenticTartare, monstruousAuthenticTartare, biggie, spurs, picanhaAngus, newYorkSteak, tbonePorterhouseAngus]);
const signatureSection = new Section("SIGNATURE", [laurynHill, porkBrisket, heatWave, pigBuddy, ahTunaMatata, fishNchips]);
const burgerSection = new Section("BURGERS <br> Tous les burgers sont élaborés avec un pain Bun Brioché et accompagnés de frites fraîche Betty",[veggieBurger, mamaBettysRoyal, megaCheese, littleItaly, thanosPowerShow, belizeBlueHole, redHot, supSteak]);
const menuKidsSection = new Section("MENU KIDS", [menuKids]);
const dessertSection = new Section("DESSERT", [lemonPie, cheeseleader, americanDream, willyWonkaCookie, gourmetCoffee, milkshake, raspberryOldFashioned, babyChou, bettyBrownieIceCream]);
const glaceSection = new Section("GLACES ET SORBETS", [boules2, boules3, parfum,suppChant]);
const cocktailSection = new Section("COCKTAILS",[babyDragon, bellaFragola, bellini, aperolSpritz, hugoSpritz, mojito, mojitoFraise, bettySoft]);
const pressionSection = new Section("PRESSIONS 33CL - 50CL", [astraBlonde, brooklinLager, brooklinIpa, biereDuMoment, panacheMonaco, picon]);
const biereSection = new Section("BIERES bouteilles 33 cl ", [soif, hazyRider, hooper, cubanisto, locales]);
const softSection = new Section("SOFTS", [cocas, fuzetea, jusDeFruit, fanta, orangina, perrier, schweppes, diabolo, vittel05, vittel1]);
const aperitifSection = new Section("APERITIFS", [kir, kirPet, prosecco, martini, ricard, coupeChampagne, kirRoyal]);
const vinsSection = new Section("VINS AU VERRE ET PICHET", [blancs, rouges, roses, bulles]);
const bouteillesSection = new Section("BOUTEILLES DE VIN", [bblancs, brouges, broses, bbulles]);
const ponyExpressSection = new Section("PONY EXPRESS", [comeToDaddy, bananaSplit, screamingOrgasm, chuckNorris]);
const whiskeySection = new Section("WHISKEY", [grant, jackDaniel, aberlour, glenlivet]);
const rhumSection = new Section("RHUM, EAU DE VIE ET LIQUEURS", [havana, havana7, diplomatico, donPapa, angostura, centenario, zacapa, cognac, mirabelle, chartreuse, bailey, get, amaretto]);
const boissonsSection = new Section("BOISSONS CHAUDES", [cafe, grandCafe, cafeCreme, decafeine, cappuccino, the, irish]);


// création de la carte
const carte = new Carte([tapasSection, saladeSection, carpacciosSection, accompagnementSection, sauceMamaBettySection, leMeilleurDuBoeufSection, 
    signatureSection, burgerSection, menuKidsSection, dessertSection, glaceSection, cocktailSection, pressionSection, biereSection, softSection, 
    aperitifSection, vinsSection, bouteillesSection, ponyExpressSection, whiskeySection, rhumSection, boissonsSection]);


// Génération du contenu de la carte et insertion dans la div #carte2023
const carteContainer = document.getElementById("carte2023");
carteContainer.innerHTML = genererContenuCarte(carte);


// Récupérer la section "MENU KIDS"
const sectionKids = document.querySelector("#menu");

// récupération du logo tarif menu kids
const image = document.createElement("img");
image.src = "https://mamabetty.fr/media-source/source_image/tarif_menu_kids@2x.webp";
image.alt = "Prix Menu Kids";

// Ajouter l'image à la section menu kids
const imageIsertion = sectionKids.querySelector("h2");

imageIsertion.insertAdjacentElement("afterend",image);





// récupération de la section dessert
const sectionDessert = document.querySelector("#dessert");

// récupération du logo tarif dessert
const image2 = document.createElement("img");
image2.src = "https://mamabetty.fr/media-source/source_image/tarif_dessert@2x.webp";
image2.classList = "prixDessert";
image2.alt = "Prix des desserts";
// ajouter l'image à la section dessert
const image2Insertion = sectionDessert.querySelector("h2");

image2Insertion.insertAdjacentElement("afterend",image2);


// recupération de la section pression
const sectionPression = document.querySelector("#pressions");
const sectionCocktails = document.querySelector("#cocktails");


// recupération du logo happy hour
const image3 = document.createElement("img");
image3.src = "https://mamabetty.fr/media-source/source_image/HAPPY_HOUR_1@2x.png";
image3.classList = "happyHour";
image3.alt = "pictogramme Happy hour";






// ajouter l'image aux sections pression et cocktails:
const image3Insersion = sectionPression.querySelector("h2");

image3Insersion.insertAdjacentElement("afterend",image3.cloneNode(true));

const image3Insertion2 = sectionCocktails.querySelector("h2");

image3Insertion2.insertAdjacentElement("afterend",image3.cloneNode(true));





// creation de l'ID
function genererId(nom){
    const premierMot = nom.trim().split(" ")[0].toLowerCase();
    return premierMot ;
}

// recupération des élément avec la classe plat
const elementsPlat = document.querySelectorAll(".plat");

// attribution de l'id pour les div avec la class .plat
elementsPlat.forEach((element) => {
    const nomPlatElement = element.querySelector("h3");

    if (nomPlatElement) {
        const nomPlat = nomPlatElement.textContent.trim();
        const idPlat = genererId(nomPlat);
        element.id = idPlat;
    
    }
});
