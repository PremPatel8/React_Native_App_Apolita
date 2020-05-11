-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: apolita
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `announcements`
--

DROP TABLE IF EXISTS `announcements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `announcements` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` tinytext NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcements`
--

LOCK TABLES `announcements` WRITE;
/*!40000 ALTER TABLE `announcements` DISABLE KEYS */;
INSERT INTO `announcements` VALUES (2,'Added new course','New course has been added and can be viewed on dashboard. This is the course on social media importance in community management','2020-05-10 19:36:47','2020-05-10 19:36:47'),(3,'Email me regarding questions on course1','Regarding the course1. Students can now send an email with any queries related the course','2020-05-10 19:38:59','2020-05-10 19:38:59'),(4,'Updates in office hours timings','I will be available during 10 AM till 2 PM for any discussions','2020-05-10 19:40:56','2020-05-10 19:40:56'),(5,'Out of office during this week','I will be out of office on Tuesday next week','2020-05-10 19:41:51','2020-05-10 19:41:51'),(6,'Looking for recommendations on new courses','Students with any specific recommendations about the topics can email me. I will try to create a course on that topic.','2020-05-10 19:43:06','2020-05-10 19:43:06'),(7,'New Announcement ','Hello students','2020-05-11 02:55:49','2020-05-11 02:55:49'),(8,'Major announcement','New course coming up','2020-05-11 02:59:51','2020-05-11 02:59:51'),(9,'Test Scores','Test scores published','2020-05-11 03:37:26','2020-05-11 03:37:26'),(10,'Submit assignment ','Please submit your papers','2020-05-11 03:42:32','2020-05-11 03:42:32'),(11,'Apolita consulting','Adding a new announcement','2020-05-11 03:44:45','2020-05-11 03:44:45');
/*!40000 ALTER TABLE `announcements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `courses` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` tinytext NOT NULL,
  `description` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'Introduction to Community Managers','This course will provide a summary about Community managers and their importance for the businesses','course1',NULL,'2020-05-10 19:29:16','2020-05-10 19:29:16'),(2,'Introduction to Community Management and social media','This course will provide details about opportunities, community management and importance of social media','course2',NULL,'2020-05-10 19:30:33','2020-05-10 19:30:33'),(4,'Social media marketing','The Social Media Marketing Specialization is designed to achieve two objectives. It gives you the social analytics tools, and training to help you become an influencer on social media. The course also gives you the knowledge and resources to build a complete social media marketing strategy ? from consumer insights to final justification metrics.','course3',NULL,'2020-05-11 00:01:18','2020-05-11 00:01:18');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roles` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN','2020-04-28 20:36:26','2020-04-28 20:36:26'),(2,'STUDENT','2020-04-28 20:36:43','2020-04-28 20:36:43');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `phonenumber` varchar(25) DEFAULT NULL,
  `country` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `role_id` int(20) unsigned DEFAULT '2',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Apolita','Consulting','apolitaconsulting@apolita.com','apolita','Female','1234567890','United States','Texas','Arlington',1,'2020-05-10 06:21:10','2020-05-10 06:21:10'),(11,'Rahul','Tevatia','rtevatia@gmail.com','r123','male','6822453754','United States','Texas','Arlington',2,'2020-05-10 20:04:05','2020-05-10 20:04:05'),(12,'Megha','Vijendra','megha27996@gmail.com','megha123','female','4694639670','USA','Texas','Arlington ',2,'2020-05-10 22:53:56','2020-05-10 22:53:56'),(13,'Rahul','Tevatia','rtevatia@live.com','r123','male','6824527854','United States','Texas','Arlington',2,'2020-05-11 00:05:45','2020-05-11 01:19:32'),(14,'Apolita','Apolita','apolita@apolita.com','apolita','female','354279645','United States','New york','New york city',2,'2020-05-11 00:53:00','2020-05-11 00:53:00');
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

-- Dump completed on 2020-05-10 23:53:06
