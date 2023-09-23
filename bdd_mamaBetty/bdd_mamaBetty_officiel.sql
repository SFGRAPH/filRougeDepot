DROP DATABASE IF EXISTS bdd_mamaBetty_officiel;

CREATE DATABASE if NOT EXISTS bdd_mamaBetty_officiel;

USE bdd_mamaBetty_officiel;

-- création des éléments du stystème de réservation

CREATE TABLE `clients` (
    `cli_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cli_nom` VARCHAR(50) NOT NULL,
    `cli_prenom` VARCHAR(50) NOT NULL,
    `cli_mail` VARCHAR(100) NOT NULL,
    `cli_phone` VARCHAR(15) NOT NULL
);

CREATE TABLE `tables` (
    `tab_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `tab_capacity` INT,
    `tab_disponibility` VARCHAR(100)
);

CREATE TABLE `reservation` (
    `res_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `res_cli_id` INT,
    `res_tab_id` INT,
    `res_date` DATE,
    `res_heure` TIME,
    `res_nombreCouverts` INT,
    `res_preference` VARCHAR(20),
    `res_etat` VARCHAR(20),
    FOREIGN KEY (`res_cli_id`) REFERENCES `clients`(`cli_id`),
    FOREIGN KEY (`res_tab_id`) REFERENCES `tables`(`tab_id`)
);

-- création des éléments du système Newsletter 

CREATE TABLE `abonnes` (
    `abo_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `abo_nom` VARCHAR(50) NOT NULL,
    `abo_prenom` VARCHAR(50) NOT NULL,
    `abo_mail` VARCHAR(100) NOT NULL,
    `abo_dateInscription` DATE

);

CREATE TABLE `newsletter` (
    `new_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `new_titre` VARCHAR(100) NOT NULL,
    `new_contenu` VARCHAR(255) NOT NULL,
    `new_dateEnvoi` DATE
);

CREATE TABLE `listeEnvoi` (
    `lis_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `new_id` INT,
    FOREIGN KEY(`new_id`) REFERENCES `newsletter`(`new_id`)
);

CREATE TABLE `abonnesListe` (
    `abo_id` INT,
    `lis_id` INT,
    FOREIGN KEY (`abo_id`) REFERENCES `abonnes`(`abo_id`),
    FOREIGN KEY (`lis_id`) REFERENCES `listeEnvoi`(`lis_id`)
);

-- création des éléments du menu

CREATE TABLE `menu` (
    `men_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `men_nom` VARCHAR(255) NOT NULL,
    `men_description` VARCHAR(255) NOT NULL
);

CREATE TABLE `categorie` (
    `cat_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cat_men_id` INT NOT NULL,
    `cat_nom` VARCHAR(255) NOT NULL,
    FOREIGN KEY (`cat_men_id`) REFERENCES `menu`(`men_id`)
);

CREATE TABLE `plat` (
    `pla_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `pla_cat_id` INT,
    `pla_image` VARCHAR(255),
    `pla_nom` VARCHAR(255) ,
    `pla_description` TEXT,
    `pla_prix` DECIMAL(5,2),
    `pla_prix2` DECIMAL(5,2),
    `pla_prix3` DECIMAL(5,2),
    FOREIGN KEY (`pla_cat_id`) REFERENCES `categorie`(`cat_id`)
);

CREATE TABLE `versionPlat` (
    `ver_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `ver_pla_id` INT NOT NULL,
    `ver_image` VARCHAR(255),
    `ver_declinaison` VARCHAR(50),
    `ver_prix` DECIMAL(5,2),
    FOREIGN KEY (`ver_pla_id`) REFERENCES `plat`(`pla_id`)
);


CREATE TABLE `roles` (
    `rol_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `rol_superAdmin` VARCHAR(50),
    `rol_administrateur` VARCHAR(50),
    `rol_abonne` VARCHAR(50)
);


CREATE TABLE `administrateur` (
    `adm_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `adm_nom` VARCHAR(255),
    `adm_identifiant` VARCHAR(50),
    `adm_login` VARCHAR(50),
    FOREIGN KEY (`adm_rol_id`) REFERENCES `roles`(`rol_id`)
    );