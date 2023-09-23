const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Récupérez le contenu HTML de la page
const html = `
                        <li class="nom"><span>PINOT NOIR</span><br>....................................5,50 € / 10,50 €
                            / 19,90€</li>
                        <li class="descr">ST-Nicolas de Bourgueil - IGP Côte de Gascogne</li>
                        <li><br></li>
                        <li class="nom"><span>CÔTES DE BLAY</span><br>...................................&thinsp;6,50 €
                            / 12,30 € /
                            23,50 €</li>
                        <li class="descr"> "EXPRESSION" Domaine Taluau - Bordeaux</li>
                        <li><br></li>
                        <li class="nom"><span>CHÂTEAU LA CASSAGNE-BOUTET
                            </span><br>...................................6,50 € /
                            12,30 € / 23,50 €</li>

                        <li class="nom"> <span>CÔTE DU LUBERON</span><br>...................................5,50 € /
                            10,80 € / 19,90 € </li>
                        <li class="descr">"Eléphant Rose" - Domaine Perrin</li>
                        <li><br></li>
                        <li class="nom"> <span>CÔTEAUX D'AIX EN
                                PROVENCE</span><br>..................................6,50 € / 12,30 € / 23,50 € </li>
                        <li class="descr">"Eléphant Rose" - Domaine Perrin</li>
    
                        <li class="nom">
                            <span>CHAMPAGNE</span><br>...............................................................9,00
                            €
                        </li>
                        <li class="descr">Domaine Adrien BERGERE</li><li class="nom"><span>DOMAINE DU TARIQUET</span><br>......................................4,90 €
                            / 9,30 € / 17,80 €</li>
                        <li class="descr">"Classic"</li>
                        <li><br></li>
                        <li class="nom"><span>DOMAINE DE JOY </span><br>....................................5,50 € /
                            10,50 € / 19,90€</li>
                        <li class="descr">MOELLEUX-IGP GASCOGNE</li>
                        <li><br></li>
                        <li class="nom"><span>CHARDONNET</span><br>...................................5,50 € / 10,50 € /
                            19,90 €</li>
                        <li class="descr">IGP PAYS D OC</li>
                        <li><br></li>
                        <li class="nom"><span>SAINT-VERAN</span><br>....................................6,90 €/ 13,20 €
                            / 24,90 €
                        </li>
                        <li class="descr">Domaine des Terres Secrètes</li>`;

// Utilisez JSDOM pour analyser le HTML
const dom = new JSDOM(html);

// Récupérez les éléments liés aux plats
const plats = dom.window.document.querySelectorAll('li.nom');

// Fonction pour échapper les caractères spéciaux SQL
function escapeSqlString(value) {
    return value.replace(/'/g, "''");
}

// Créez une chaîne SQL pour les instructions INSERT
let sqlStatements = '';

// Itérez à travers les plats et créez les instructions SQL
plats.forEach((plat, index) => {
    const nom = escapeSqlString(plat.querySelector('span').textContent.trim());
    const descr = escapeSqlString(plat.nextElementSibling.textContent.trim());
    const image = 'NULL';
    const prix = "'";
    const categorieId = '17';


    const sql = `INSERT INTO 'plat' VALUES (${index + 100}, ${categorieId},${image}, '${nom}', '${descr}', '${prix});\n`;
    sqlStatements += sql;
});

fs.writeFileSync('bdd_mamaBetty_officiel_alimentation8.sql', sqlStatements, 'utf-8');

console.log('Les instructions SQL ont été écrites dans le fichier bdd_mamaBetty_officiel_alimentation8.sql');