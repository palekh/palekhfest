CREATE DATABASE IF NOT EXISTS bitchbuild;
SET NAMES 'utf8';
USE bitchbuild;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS Hero;
DROP TABLE IF EXISTS Role;
DROP TABLE IF EXISTS PrimaryAttribute;
DROP TABLE IF EXISTS Side;
DROP TABLE IF EXISTS AttackType;
DROP TABLE IF EXISTS RolesOfHero;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE `Hero` (
    `ID` int NOT NULL AUTO_INCREMENT,
    `Title` varchar(30) NOT NULL,
    `IconPath` varchar(50),
    `PrimaryAttributeId` int NOT NULL,
    `SideId` int NOT NULL,
    `AttackTypeId` int NOT NULL,
    PRIMARY KEY (`ID`)
);

ALTER TABLE `Hero` ADD CONSTRAINT `Hero_fk0` FOREIGN KEY (`PrimaryAttributeId`) REFERENCES `PrimaryAttribute`(`Id`);
ALTER TABLE `Hero` ADD CONSTRAINT `Hero_fk1` FOREIGN KEY (`SideId`) REFERENCES `Side`(`Id`);
ALTER TABLE `Hero` ADD CONSTRAINT `Hero_fk2` FOREIGN KEY (`AttackTypeId`) REFERENCES `AttackType`(`Id`);

CREATE TABLE `Role` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Title` varchar(15) NOT NULL,
    PRIMARY KEY (`Id`)
);


CREATE TABLE `PrimaryAttribute` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Title` varchar(15) NOT NULL,
    PRIMARY KEY (`Id`)
);


CREATE TABLE `Side` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Title` varchar(7) NOT NULL,
    PRIMARY KEY (`Id`)
);


CREATE TABLE `AttackType` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Title` varchar(6) NOT NULL,
    PRIMARY KEY (`Id`)
);


CREATE TABLE `RolesOfHero` (
    `RoleId` int NOT NULL,
    `HeroId` int NOT NULL,
    PRIMARY KEY (`RoleId`,`HeroId`)
);

ALTER TABLE `RolesOfHero` ADD CONSTRAINT `RolesOfHero_fk0` FOREIGN KEY (`RoleId`) REFERENCES `Role`(`Id`);
ALTER TABLE `RolesOfHero` ADD CONSTRAINT `RolesOfHero_fk1` FOREIGN KEY (`HeroId`) REFERENCES `Hero`(`ID`);


INSERT INTO `Role` (`Title`) VALUES
    ('Carry'),
    ('Disabler'),
    ('Lane Support'),
    ('Initiator'),
    ('Jungler'),
    ('Support'),
    ('Durable'),
    ('Nuker'),
    ('Pusher'),
    ('Escape');

INSERT INTO `PrimaryAttribute` (`Title`) VALUES
    ('Strength'),
    ('Agility'),
    ('Intelligence');

INSERT INTO `Side` (`Title`) VALUES
    ('Radiant'),
    ('Dire');

INSERT INTO `AttackType` (`Title`) VALUES
    ('Melee'),
    ('Ranged');

INSERT INTO `Hero` (`Title`, `PrimaryAttributeId`, `SideId`, `AttackTypeId`) VALUES
    ('Earthshaker',1,1,1),
    ('Sven',1,1,1),
    ('Tiny',1,1,1),
    ('Kunkka',1,1,1),
    ('Beastmaster',1,1,1),
    ('Dragon Knight',1,1,1),
    ('Clockwerk',1,1,1),
    ('Omniknight',1,1,1),
    ('Huskar',1,1,2),
    ('Alchemist',1,1,1),
    ('Brewmaster',1,1,1),
    ('Treant Protector',1,1,1),
    ('Io',1,1,2),
    ('Centaur Warrunner',1,1,1),
    ('Timbersaw',1,1,1),
    ('Bristleback',1,1,1),
    ('Tusk',1,1,1),
    ('Elder Titan',1,1,1),
    ('Legion Commander',1,1,1),
    ('Earth Spirit',1,1,1),
    ('Phoenix',1,1,2),
    ('Axe',1,2,1),
    ('Pudge',1,2,1),
    ('Sand King',1,2,1),
    ('Slardar',1,2,1),
    ('Tidehunter',1,2,1),
    ('Wraith King',1,2,1),
    ('Lifestealer',1,2,1),
    ('Night Stalker',1,2,1),
    ('Doom',1,2,1),
    ('Spirit Breaker',1,2,1),
    ('Lycan',1,2,1),
    ('Chaos Knight',1,2,1),
    ('Undying',1,2,1),
    ('Magnus',1,2,1),
    ('Abaddon',1,2,1),
    ('Anti-mage',2,1,1),
    ('Drow Ranger',2,1,2),
    ('Juggernaut',2,1,1),
    ('Mirana',2,1,2),
    ('Morphling',2,1,2),
    ('Phantom Lancer',2,1,1),
    ('Vengeful Spirit',2,1,2),
    ('Riki',2,1,1),
    ('Sniper',2,1,2),
    ('Templar Assassin',2,1,2),
    ('Luna',2,1,2),
    ('Bounty Hunter',2,1,1),
    ('Ursa',2,1,1),
    ('Gyrocopter',2,1,2),
    ('Lone Druid',2,1,2),
    ('Naga Siren',2,1,1),
    ('Troll Warlord',2,1,2),
    ('Ember Spirit',2,1,1),
    ('Bloodseeker',2,2,1),
    ('Shadow Fiend',2,2,2),
    ('Razor',2,2,2),
    ('Venomancer',2,2,2),
    ('Faceless Void',2,2,1),
    ('Phantom Assassin',2,2,1),
    ('Viper',2,2,2),
    ('Clinkz',2,2,2),
    ('Broodmother',2,2,1),
    ('Weaver',2,2,2),
    ('Spectre',2,2,1),
    ('Meepo',2,2,1),
    ('Nyx Assassin',2,2,1),
    ('Slark',2,2,1),
    ('Medusa',2,2,2),
    ('Terrorblade',2,2,1),
    ('Crystal Maiden',3,1,2),
    ('Puck',3,1,2),
    ('Storm Spirit',3,1,2),
    ('Windranger',3,1,2),
    ('Zeus',3,1,2),
    ('Lina',3,1,2),
    ('Shadow Shaman',3,1,2),
    ('Tinker',3,1,2),
    ('Nature''s Prophet',3,1,2),
    ('Enchantress',3,1,2),
    ('Jakiro',3,1,2),
    ('Chen',3,1,2),
    ('Silencer',3,1,2),
    ('Ogre Magi',3,1,1),
    ('Rubick',3,1,2),
    ('Disruptor',3,1,2),
    ('Keeper of the Light',3,1,2),
    ('Skywrath Mage',3,1,2),
    ('Oracle',3,1,2),
    ('Techies',3,1,2),
    ('Bane',3,2,2),
    ('Lich',3,2,2),
    ('Lion',3,2,2),
    ('Witch Doctor',3,2,2),
    ('Enigma',3,2,2),
    ('Necrophos',3,2,2),
    ('Warlock',3,2,2),
    ('Queen of Pain',3,2,2),
    ('Death Prophet',3,2,2),
    ('Pugna',3,2,2),
    ('Dazzle',3,2,2),
    ('Leshrac',3,2,2),
    ('Dark Seer',3,2,1),
    ('Batrider',3,2,2),
    ('Ancient Apparition',3,2,2),
    ('Invoker',3,2,2),
    ('Outworld Devourer',3,2,2),
    ('Shadow Demon',3,2,2),
    ('Visage',3,2,2),
    ('Winter Wyvern',3,2,2);

INSERT INTO `RolesOfHero` (`HeroId`,`RoleId`) VALUES
    (1,4),(1,2),(1,6),(1,3),
    (2,2),(2,4),(2,1),(2,6),
    (3,2),(3,8),(3,4),(3,7),
    (4,2),(4,4),(4,1),(4,7),
    (5,4),(5,2),(5,7),
    (6,1),(6,7),(6,2),(6,9),
    (7,4),(7,7),
    (8,7),(8,3),(8,6),
    (9,1),(9,4),(9,7),
    (10,7),(10,1),(10,2),
    (11,1),(11,7),(11,4),(11,9),
    (12,7),(12,4),(12,3),(12,2),
    (13,6),(13,3),(13,8),
    (14,7),(14,2),(14,4),
    (15,7),(15,8),(15,10),
    (16,7),(16,4),(16,2),
    (17,4),(17,7),
    (18,4),(18,7),
    (19,1),(19,7),
    (20,1),(20,8),
    (21,4),(21,2),(21,8),
    (22,7),(22,4),(22,2),(22,5),
    (23,7),(23,2),
    (24,4),(24,2),(24,8),
    (25,1),(25,7),(25,2),(25,4),
    (26,4),(26,7),(26,2),(26,6),
    (27,7),(27,1),(27,2),
    (28,1),(28,7),(28,5),(28,10),
    (29,7),(29,4),
    (30,7),(30,1),(30,8),
    (31,7),(31,1),(31,4),(31,2),
    (32,1),(32,5),(32,9),(32,7),
    (33,1),(33,2),(33,7),(33,9),
    (34,7),(34,9),(34,2),(34,4),
    (35,4),(35,2),(35,8),(35,1),
    (36,7),(36,6),(36,1),
    (37,1),(37,10),
    (38,1),
    (39,1),(39,9),
    (40,1),(40,8),(40,2),(40,10),
    (41,1),(41,10),(41,4),(41,8),
    (42,1),(42,10),(42,9),
    (43,6),(43,2),(43,3),(43,4),
    (44,1),(44,10),
    (45,1),
    (46,1),(46,10),
    (47,1),(47,8),
    (48,1),(48,10),(48,8),
    (49,1),(49,5),(49,7),
    (50,2),(50,4),(50,8),
    (51,1),(51,7),(51,9),(51,5),
    (52,1),(52,2),(52,9),(52,10),
    (53,1),
    (54,1),(54,8),
    (55,1),(55,5),
    (56,1),(56,8),
    (57,1),(57,7),(57,8),
    (58,6),(58,8),(58,4),(58,9),
    (59,1),(59,4),(59,2),(59,10),
    (60,1),(60,10),
    (61,1),(61,7),
    (62,1),(62,10),
    (63,9),(63,1),(63,10),
    (64,1),(64,10),
    (65,1),(65,7),
    (66,1),(66,2),(66,4),
    (67,2),(67,8),
    (68,10),
    (69,1),
    (70,1),
    (71,6),(71,2),(71,8),(71,3),
    (72,4),(72,8),(72,2),(72,10),
    (73,1),(73,4),(73,10),(73,2),
    (74,2),(74,8),(74,6),(74,10),
    (75,8),(75,6),
    (76,8),(76,2),(76,6),
    (77,9),(77,2),(77,8),(77,6),
    (78,8),(78,9),
    (79,5),(79,9),(79,1),(79,10),
    (80,6),(80,9),(80,7),(80,5),
    (81,8),(81,9),(81,3),(81,2),
    (82,6),(82,5),(82,9),
    (83,6),(83,1),(83,4),
    (84,8),(84,2),(84,7),
    (85,2),(85,8),
    (86,8),(86,6),(86,4),(86,2),
    (87,8),(87,6),(87,3),
    (88,8),(88,6),
    (89,6),(89,3),(89,8),
    (90,8),(90,9),
    (91,2),(91,8),(91,6),
    (92,6),(92,3),(92,8),
    (93,2),(93,8),(93,3),(93,6),
    (94,6),(94,2),
    (95,2),(95,4),(95,5),(95,9),
    (96,1),(96,7),
    (97,4),(97,6),(97,3),(97,2),
    (98,8),(98,10),(98,1),
    (99,9),(99,8),(99,7),
    (100,8),(100,9),(100,6),
    (101,6),(101,3),
    (102,8),(102,9),(102,2),(102,6),
    (103,4),(103,8),(103,10),
    (104,4),(104,2),(104,8),(104,10),
    (105,6),(105,2),
    (106,1),(106,8),(106,4),(106,10),
    (107,1),
    (108,6),(108,2),(108,8),
    (109,8),(109,7),(109,2),
    (110,6),(110,8);
