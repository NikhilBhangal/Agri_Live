CREATE DATABASE  IF NOT EXISTS `demo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `demo`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: demo
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `ADDRESSID` int NOT NULL AUTO_INCREMENT,
  `PINCODE` varchar(40) NOT NULL,
  `HOUSENO` int NOT NULL,
  `AREA` varchar(60) DEFAULT NULL,
  `CITYID` int DEFAULT NULL,
  PRIMARY KEY (`ADDRESSID`),
  KEY `CITY_ID` (`CITYID`),
  CONSTRAINT `CITY_ID` FOREIGN KEY (`CITYID`) REFERENCES `cities` (`CITYID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'443101',167,'MALEGAON PR.MALKAPUR  ',41),(2,'394210',25,'SARASWATI SCHOOL  ',20),(3,'41545',11,'ndnd',42),(4,'41545',11,'ndnd',39),(5,'443101',10,'Malkapur',42),(6,'443101',10,'Malkapur',42),(7,'443101',10,'Malkapur',42),(8,'443101',10,'Malkapur',42),(9,'443101',10,'Malkapur',42),(10,'443101',10,'Malkapur',42),(11,'443101',10,'Malkapur',42),(12,'443101',10,'Malkapur',32),(13,'443101',5,'Malkapur',19),(14,'443101',5,'Malkapur',19),(15,'443101',5,'Malkapur',19),(16,'443101',5,'Malkapur',19),(17,'443101',5,'Malkapur',19),(18,'443101',5,'Malkapur',19),(19,'458124',8,'Gandhinagar',28),(20,'458254',7,'Gandhinagar',37),(21,'458254',7,'Gandhinagar',37),(22,'121512',1,'Gandhinagar',37),(23,'443101',10,'Malkapur',41),(24,'443101',10,'Gandhinagar',40),(25,'443101',10,'Malkapur',31),(26,'443101',10,'Malkapur',40),(27,'443101',10,'Malkapur',40),(28,'443101',10,'Malkapur',40);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `CATID` int NOT NULL AUTO_INCREMENT,
  `CATNAME` varchar(50) NOT NULL,
  PRIMARY KEY (`CATID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'FRUITS'),(3,'CERELS'),(5,'COMMERCIAL CROPS'),(6,'PULSES'),(7,'OIL SEEDS');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `CITYID` int NOT NULL AUTO_INCREMENT,
  `CITYNAME` varchar(40) NOT NULL,
  `STATEID` int DEFAULT NULL,
  PRIMARY KEY (`CITYID`),
  KEY `STATE_ID` (`STATEID`),
  CONSTRAINT `STATE_ID` FOREIGN KEY (`STATEID`) REFERENCES `states` (`STATEID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'AMARAVATI',1),(2,'GUNTUR',1),(3,'KURNOOL',1),(4,'ITANAGAR',2),(5,'CHANGLANG',2),(6,'WEST SIANG',2),(7,'DISPUR',3),(8,'JORHAT',3),(9,'KAMRUP',3),(10,'PATNA',4),(11,'KAIMUR',4),(12,'DARBHANGA',4),(13,'RAIPUR',5),(14,'BALOD',5),(15,'GARIABAND',5),(16,'PANAJI',6),(17,'MARGO',6),(18,'CALANJUTE',6),(19,'GANDHINAGAR',7),(20,'SURAT',7),(21,'AHMEDABAD',7),(22,'CHANDIGARH',8),(23,'ROHTAK',8),(24,'PANIPAT',8),(25,'SHIMLA',9),(26,'BILASPUR',9),(27,'CHAMBA',9),(28,'RANCHI',10),(29,'DHANBAD',10),(30,'KHUNTI',10),(31,'BENGALURU',11),(32,'BIDAR',11),(33,'BELAGAVI',11),(34,'THIRUVANANTHAPURAM',12),(35,'KANUR',12),(36,'KOLAMB',12),(37,'BHOPAL',13),(38,'INDORE',13),(39,'BURHANPUR',13),(40,'MUMBAI',14),(41,'PUNE',14),(42,'NAGPUR',14),(43,'IMPHAL',15),(44,'UKHRUL',15),(45,'THOUBAL',15),(46,'SHILLONG',16),(47,'NONGSTOIN',16),(48,'MAWKYRWET',16),(49,'AIZAWL',17),(50,'MAMIT',17),(51,'LAWNGTLAI',17),(52,'KOHIMA',18),(53,'PEREN',18),(54,'LONGLENG',18),(55,'BHUBANESWAR',19),(56,'ANGUL',19),(57,'CUTTACK',19),(58,'CHANDIGARH',20),(59,'PATIYALA',20),(60,'JALANDAR',20),(61,'JAIPUR',21),(62,'AJMER',21),(63,'ALWAR',21),(64,'GANGTOK',22),(65,'GYALSHING',22),(66,'MANGAL',22),(67,'CHENNAI',23),(68,'COIMBATORE',23),(69,'KARUL',23),(70,'HYDRABAD',24),(71,'MEDAK',24),(72,'NIZAMBAD',24),(73,'AGARTALA',25),(74,'KHOWAI',25),(75,'DHALAI',25),(76,'AAGRA',26),(77,'ALIGARH',26),(78,'LUCKNOW',26),(79,'DEHRADUN',27),(80,'HARIDWAR',27),(81,'KOLKATA',28),(82,'NADIA',28),(83,'MALDA',28),(84,'PAURI',27);
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commodity`
--

DROP TABLE IF EXISTS `commodity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commodity` (
  `COMID` int NOT NULL AUTO_INCREMENT,
  `COMNAME` varchar(50) NOT NULL,
  `CATID` int DEFAULT NULL,
  `image` longblob,
  PRIMARY KEY (`COMID`),
  KEY `CAT_ID` (`CATID`),
  CONSTRAINT `CAT_ID` FOREIGN KEY (`CATID`) REFERENCES `categories` (`CATID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commodity`
--

LOCK TABLES `commodity` WRITE;
/*!40000 ALTER TABLE `commodity` DISABLE KEYS */;
INSERT INTO `commodity` VALUES (1,'MANGO',1,NULL),(2,'TOMATO',NULL,NULL),(3,'APPLE',1,NULL),(4,'GRAPE',1,NULL),(5,'COTTON',5,NULL),(6,'PAPAYA',1,NULL),(7,'PINAPPLE',1,NULL),(8,'BANANA',1,NULL),(9,'WHEAT',3,NULL),(10,'BARLEY',3,NULL),(11,'JAWAR',3,NULL),(12,'BAJRA',3,NULL),(13,'RAGI',3,NULL),(14,'PADDY',3,NULL),(15,'COPRA',5,NULL),(16,'JUTE',5,NULL),(17,'SUGARCANE',5,NULL),(18,'TUR',6,NULL),(19,'MOONG',6,NULL),(20,'URAD',6,NULL),(21,'MASUR',6,NULL),(22,'CHANA',6,NULL),(23,'MUSTURD',7,NULL),(24,'GROUND NUT',7,NULL),(25,'SUNFLOWER',7,NULL),(26,'SESAMUM',7,NULL),(27,'NIGERSED',7,NULL),(28,'SAFFLOWER',7,NULL),(29,'SUNFLOWER',7,NULL),(33,'Farmer',1,NULL),(34,'Kela',1,NULL);
/*!40000 ALTER TABLE `commodity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dealer_com_publish`
--

DROP TABLE IF EXISTS `dealer_com_publish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dealer_com_publish` (
  `PID` int NOT NULL AUTO_INCREMENT,
  `PRICE` decimal(10,2) NOT NULL,
  `UPDATIONDATE` date DEFAULT (curdate()),
  `USERID` int DEFAULT NULL,
  `CATID` int DEFAULT NULL,
  `COMID` int DEFAULT NULL,
  PRIMARY KEY (`PID`),
  KEY `USER_ID` (`USERID`),
  KEY `CAT1_ID` (`CATID`),
  KEY `COM1_ID` (`COMID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dealer_com_publish`
--

LOCK TABLES `dealer_com_publish` WRITE;
/*!40000 ALTER TABLE `dealer_com_publish` DISABLE KEYS */;
INSERT INTO `dealer_com_publish` VALUES (4,100.00,'2022-04-02',1,2,2),(5,800.00,'2022-04-02',2,1,1),(6,188888.00,'2022-04-03',2,5,4),(7,184818.00,'2022-04-03',2,5,4),(8,148484.00,'2022-04-03',2,5,4),(9,1684885.00,'2022-04-03',2,5,4),(10,1200000.00,'2022-04-03',2,5,5),(11,1515841.00,'2022-04-04',3,1,1),(12,125454.00,'2022-04-04',4,1,1),(13,11000.00,'2022-04-04',0,5,15),(14,0.00,'2022-04-04',2,5,0),(15,2020.00,'2022-04-04',2,3,9),(16,45884.00,'2022-04-04',2,3,0),(17,151.00,'2022-04-04',2,1,0),(18,151.00,'2022-04-04',2,1,0),(19,5.00,'2022-04-04',2,1,0);
/*!40000 ALTER TABLE `dealer_com_publish` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `msp`
--

DROP TABLE IF EXISTS `msp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `msp` (
  `MSPID` int NOT NULL AUTO_INCREMENT,
  `MSP` int NOT NULL,
  `UPDATIONDATE` date DEFAULT (curdate()),
  `COMID` int DEFAULT NULL,
  PRIMARY KEY (`MSPID`),
  KEY `COM_ID` (`COMID`),
  CONSTRAINT `COM_ID` FOREIGN KEY (`COMID`) REFERENCES `commodity` (`COMID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `msp`
--

LOCK TABLES `msp` WRITE;
/*!40000 ALTER TABLE `msp` DISABLE KEYS */;
INSERT INTO `msp` VALUES (1,700,'2022-03-26',2),(2,800,'2022-04-09',1),(3,5000,'2022-04-02',3),(4,1000,'2022-04-02',4),(5,9000,'2022-04-09',5),(6,2000,'2022-04-04',6),(7,1500,'2022-04-04',7),(8,2500,'2022-04-04',8),(9,2015,'2022-04-04',9),(10,1635,'2022-04-04',10),(11,2738,'2022-04-04',11),(12,2250,'2022-04-04',12),(13,3377,'2022-04-04',13),(14,1940,'2022-04-04',14),(15,10335,'2022-04-04',15),(16,4500,'2022-04-04',16),(17,290,'2022-04-04',17),(18,6300,'2022-04-04',18),(19,7275,'2022-04-04',19),(20,6300,'2022-04-04',20),(21,5500,'2022-04-04',21),(22,5230,'2022-04-04',22),(23,5050,'2022-04-04',23),(24,5550,'2022-04-04',24),(25,6015,'2022-04-04',25),(26,7307,'2022-04-04',26),(27,6390,'2022-04-04',27),(28,5441,'2022-04-04',28),(29,3950,'2022-04-04',29);
/*!40000 ALTER TABLE `msp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pictures`
--

DROP TABLE IF EXISTS `pictures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pictures` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `image` blob,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pictures`
--

LOCK TABLES `pictures` WRITE;
/*!40000 ALTER TABLE `pictures` DISABLE KEYS */;
INSERT INTO `pictures` VALUES (1,NULL);
/*!40000 ALTER TABLE `pictures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `QID` int NOT NULL AUTO_INCREMENT,
  `QUESTION` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`QID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'WHO IS YOUR FAVOURITE SPORTS PLAYER ? '),(2,'IN WHICH CITY YOU WERE BORN ? '),(3,'WHAT IS YOUR FAVOURITE DISH ? '),(4,'WHAT IS YOUR FATHER\'S NAME ?'),(5,'WHICH IS YOUR FAVOURITE CITY ?'),(6,'WHAT IS YOUR FAVOURITE COLOR ?');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `RATINGID` int NOT NULL AUTO_INCREMENT,
  `RATING` int NOT NULL,
  `COMMENT` varchar(50) DEFAULT NULL,
  `RDATE` date DEFAULT (curdate()),
  `FARMERID` int DEFAULT NULL,
  `DEALERID` int DEFAULT NULL,
  PRIMARY KEY (`RATINGID`),
  KEY `FARMER_ID` (`FARMERID`),
  KEY `DEALER_ID` (`DEALERID`),
  CONSTRAINT `DEALER_ID` FOREIGN KEY (`DEALERID`) REFERENCES `users` (`USERID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FARMER_ID` FOREIGN KEY (`FARMERID`) REFERENCES `users` (`USERID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `STATEID` int NOT NULL AUTO_INCREMENT,
  `STATENAME` varchar(40) NOT NULL,
  PRIMARY KEY (`STATEID`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (1,' ANDHRA PRADESH'),(2,'ARUNACHAL PRADESH'),(3,' ASSAM\n'),(4,' BIHAR'),(5,' CHATTISGARH '),(6,' GOA '),(7,' GUJARAT'),(8,' HARYANA'),(9,' HIMACHAL PRADESH '),(10,' JHARKHAND '),(11,' KARNATAKA'),(12,' KERALA '),(13,' MADHYA PRADESH'),(14,' MAHARASHTRA '),(15,' MANIPUR'),(16,' MEGHALAYA'),(17,' MIZORAM'),(18,' NAGALAND'),(19,' ODISHA'),(20,' PUNJAB'),(21,' RAJASTHAN'),(22,' SIKKIM'),(23,' TAMIL NADU'),(24,' TELANGANA'),(25,' TRIPURA'),(26,' UTTAR PRADESH'),(27,' UTTARAKHAND'),(28,' WEST BENGAL');
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `USERID` int NOT NULL AUTO_INCREMENT,
  `ROLE` varchar(40) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `MOBILE` varchar(10) DEFAULT NULL,
  `PASSWORD` varchar(40) NOT NULL,
  `FNAME` varchar(40) NOT NULL,
  `LNAME` varchar(40) NOT NULL,
  `ANSWER` varchar(50) NOT NULL,
  `QID` int DEFAULT NULL,
  `ADDRESSID` int DEFAULT NULL,
  PRIMARY KEY (`USERID`),
  UNIQUE KEY `EMAIL` (`EMAIL`),
  UNIQUE KEY `MOBILE` (`MOBILE`),
  KEY `Q_ID` (`QID`),
  KEY `ADDRESS_ID` (`ADDRESSID`),
  CONSTRAINT `ADDRESS_ID` FOREIGN KEY (`ADDRESSID`) REFERENCES `address` (`ADDRESSID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Q_ID` FOREIGN KEY (`QID`) REFERENCES `questions` (`QID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'ADMIN','NISHIKETWADILE@GMAIL.COM','8668857735','Nikhil@512','NISHIKET','WADILE','BLUE',6,2),(3,'DEALER','PRATIKLAVHALE@GMAIL.COM','9527323566','NIKHIL','PRATIK','LAVHALE','SACHIN',1,1),(4,'DEALER','SHUBHAMBHASKARWAR@GMAIL.COM','1234567890','NIKHIL123Shubham','SHUBHAM','BHASKARWAR','GREEN',6,1),(8,'FARMER','bhangalenikhil@gmail.com','9527323565','Nikhil','Nikhil','Bhangale','Kolhadi',2,7),(10,'FARMER','bhangalenikhil10@gmail.com','9527323569','Nikhil','Nikhil','Bhangale','Kolhadi',2,9),(11,'FARMER','bhangalenikhil101@gmail.com','9527323561','Nikhil','Nikhil','Bhangale','Kolhadi',2,10),(12,'FARMER','bhangalenikhil1011@gmail.com','9527323557','Nikhil','Nikhil','Bhangale','Kolhadi',2,11),(13,'FARMER','bhangalenikhil901@gmail.com','8830919274','Nikhil555@','Nikhil','Bhangale','Kolhadi',2,12),(14,'FARMER','agrilive22@gmail.com','9527124589','Nikhil555@','Agri','Live','pink',6,18),(20,'FARMER','nishiketawadile@gmail.com','8862020514','Nikhil555@','Nashiket','Wadile','Anil',4,24),(22,'FARMER','bhangalenikhil90@gmail.com','8830919277','Nikhil555@','Nikhil','Bhangale','Laxman',4,26),(24,'FARMER','pratiklavhale10@gmail.com','8830919272','Pratik@123','pRATIK','LAVHALE','aa',4,28);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-12 22:18:39
