-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: english_school
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `Classes`
--

DROP TABLE IF EXISTS `Classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Classes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date_start` date DEFAULT NULL,
  `teacher_id` int NOT NULL,
  `level_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `teacher_id` (`teacher_id`),
  KEY `level_id` (`level_id`),
  CONSTRAINT `Classes_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `People` (`id`),
  CONSTRAINT `Classes_ibfk_2` FOREIGN KEY (`level_id`) REFERENCES `Levels` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Classes`
--

LOCK TABLES `Classes` WRITE;
/*!40000 ALTER TABLE `Classes` DISABLE KEYS */;
INSERT INTO `Classes` VALUES (5,'2020-02-01',6,1,'2023-01-31 11:07:18','2023-01-31 11:07:18',NULL),(6,'2020-02-01',5,2,'2023-01-31 11:07:18','2023-01-31 11:07:18',NULL),(7,'2020-02-01',6,3,'2023-01-31 11:07:18','2023-01-31 11:07:18',NULL),(8,'2020-07-01',6,3,'2023-01-31 11:07:18','2023-01-31 11:07:18',NULL),(9,'2020-02-01',6,1,'2023-01-31 11:07:48','2023-01-31 11:07:48',NULL),(10,'2020-02-01',5,2,'2023-01-31 11:07:48','2023-01-31 11:07:48',NULL),(11,'2020-02-01',6,3,'2023-01-31 11:07:48','2023-01-31 11:07:48',NULL),(13,'2020-02-01',6,1,'2023-01-31 11:17:15','2023-01-31 11:17:15',NULL),(14,'2020-02-01',5,2,'2023-01-31 11:17:15','2023-01-31 11:17:15',NULL),(15,'2020-02-01',6,3,'2023-01-31 11:17:15','2023-01-31 11:17:15',NULL),(16,'2020-07-01',6,3,'2023-01-31 11:17:15','2023-01-31 11:17:15',NULL),(17,'2023-03-01',17,2,'2023-01-31 12:24:29','2023-01-31 12:34:55',NULL),(18,'2023-03-01',17,2,'2023-01-31 12:30:34','2023-01-31 13:16:09',NULL);
/*!40000 ALTER TABLE `Classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Enrollments`
--

DROP TABLE IF EXISTS `Enrollments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Enrollments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  `student_id` int NOT NULL,
  `class_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  KEY `class_id` (`class_id`),
  CONSTRAINT `Enrollments_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `People` (`id`),
  CONSTRAINT `Enrollments_ibfk_2` FOREIGN KEY (`class_id`) REFERENCES `Classes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Enrollments`
--

LOCK TABLES `Enrollments` WRITE;
/*!40000 ALTER TABLE `Enrollments` DISABLE KEYS */;
INSERT INTO `Enrollments` VALUES (14,'confirmado',2,5,'2023-01-31 11:17:15','2023-01-31 11:17:15',NULL),(15,'confirmado',3,6,'2023-01-31 11:17:15','2023-01-31 11:17:15',NULL),(16,'confirmado',4,7,'2023-01-31 11:17:15','2023-01-31 11:17:15',NULL),(17,'cancelado',1,6,'2023-01-31 11:17:15','2023-01-31 11:17:15',NULL),(18,'confirmado',2,6,'2023-01-31 11:17:15','2023-01-31 13:52:56',NULL),(19,'pendente',8,5,'2023-01-31 13:54:38','2023-01-31 13:55:14',NULL);
/*!40000 ALTER TABLE `Enrollments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Levels`
--

DROP TABLE IF EXISTS `Levels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Levels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `level_description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Levels`
--

LOCK TABLES `Levels` WRITE;
/*!40000 ALTER TABLE `Levels` DISABLE KEYS */;
INSERT INTO `Levels` VALUES (1,'básico','2023-01-31 11:07:03','2023-01-31 11:07:03',NULL),(2,'intermediário','2023-01-31 11:07:03','2023-01-31 11:07:03',NULL),(3,'avançado','2023-01-31 11:07:03','2023-01-31 11:07:03',NULL);
/*!40000 ALTER TABLE `Levels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `People`
--

DROP TABLE IF EXISTS `People`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `People` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `People`
--

LOCK TABLES `People` WRITE;
/*!40000 ALTER TABLE `People` DISABLE KEYS */;
INSERT INTO `People` VALUES (1,'John Doe',1,'john@email.com','estudate','2023-01-31 11:07:03','2023-01-31 11:07:03',NULL),(2,'Ana Maria',1,'ana@email.com','estudate','2023-01-31 11:07:03','2023-01-31 11:07:03',NULL),(3,'Luis Fernando',0,'luis@email.com','estudate','2023-01-31 11:07:03','2023-02-06 11:58:09',NULL),(4,'Rafaela Balerine',1,'rafabalerine@alura.com','docente','2023-01-31 11:07:03','2023-01-31 11:07:03',NULL),(5,'John Doe',1,'john@email.com','estudate','2023-01-31 11:07:18','2023-01-31 11:07:18',NULL),(6,'Ana Maria',1,'ana@email.com','estudate','2023-01-31 11:07:18','2023-01-31 11:07:18',NULL),(7,'Luis Fernando',0,'luis@email.com','estudate','2023-01-31 11:07:18','2023-02-06 11:58:40',NULL),(8,'Rafaela Balerine',0,'rafabalerine@alura.com','docente','2023-01-31 11:07:18','2023-02-06 11:58:17',NULL),(17,'Luana',0,'luana@email.com','docente','2023-01-31 12:21:25','2023-01-31 12:21:25',NULL),(18,'Julia',0,'julia@gmail.com','estudande','2023-02-06 12:28:57','2023-02-06 12:28:57',NULL);
/*!40000 ALTER TABLE `People` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20230118165313-create-people.js'),('20230130115711-create-level.js'),('20230130115856-create-class.js'),('20230130120108-create-enrollment.js'),('202302011013-addcolumn-class.js'),('202302011013-addcolumn-enrollment.js'),('202302011013-addcolumn-level.js'),('202302011013-addcolumn-people.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-07 15:18:09
