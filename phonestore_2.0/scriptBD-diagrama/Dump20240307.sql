CREATE DATABASE  IF NOT EXISTS `phonestore` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `phonestore`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: phonestore
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `colores`
--

DROP TABLE IF EXISTS `colores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colores` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_producto_color` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_producto_color` (`id_producto_color`),
  CONSTRAINT `colores_ibfk_1` FOREIGN KEY (`id_producto_color`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colores`
--

LOCK TABLES `colores` WRITE;
/*!40000 ALTER TABLE `colores` DISABLE KEYS */;
/*!40000 ALTER TABLE `colores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios_productos`
--

DROP TABLE IF EXISTS `comentarios_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios_productos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_Usuario_comentario` int unsigned NOT NULL,
  `id_Producto_comntario` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Usuario_comentario` (`id_Usuario_comentario`),
  KEY `id_Producto_comntario` (`id_Producto_comntario`),
  CONSTRAINT `comentarios_productos_ibfk_1` FOREIGN KEY (`id_Usuario_comentario`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `comentarios_productos_ibfk_2` FOREIGN KEY (`id_Producto_comntario`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios_productos`
--

LOCK TABLES `comentarios_productos` WRITE;
/*!40000 ALTER TABLE `comentarios_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentarios_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entidad_de_usuarios`
--

DROP TABLE IF EXISTS `entidad_de_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entidad_de_usuarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `rol` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entidad_de_usuarios`
--

LOCK TABLES `entidad_de_usuarios` WRITE;
/*!40000 ALTER TABLE `entidad_de_usuarios` DISABLE KEYS */;
INSERT INTO `entidad_de_usuarios` VALUES (1,'USER'),(2,'ADMIN'),(3,'USER'),(4,'USER');
/*!40000 ALTER TABLE `entidad_de_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes_productos`
--

DROP TABLE IF EXISTS `imagenes_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes_productos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `url_de_imagen` varchar(255) NOT NULL,
  `id_producto_imagen` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_producto_imagen` (`id_producto_imagen`),
  CONSTRAINT `imagenes_productos_ibfk_1` FOREIGN KEY (`id_producto_imagen`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes_productos`
--

LOCK TABLES `imagenes_productos` WRITE;
/*!40000 ALTER TABLE `imagenes_productos` DISABLE KEYS */;
INSERT INTO `imagenes_productos` VALUES (7,'1709694416036_img_.webp',14),(8,'1709694416037_img_.webp',14),(9,'1709694416037_img_.webp',14),(10,'1709694980268_img_.webp',15),(11,'1709694980269_img_.webp',15),(12,'1709694980269_img_.webp',15),(13,'1709695320551_img_.webp',16),(14,'1709695320553_img_.webp',16),(15,'1709695320553_img_.webp',16),(16,'1709695401596_img_.webp',17),(17,'1709695401597_img_.webp',17),(18,'1709695616085_img_.webp',18),(19,'1709695616085_img_.webp',18),(20,'1709695680719_img_.webp',19),(21,'1709695680720_img_.webp',19),(22,'1709695680720_img_.webp',19),(23,'1709695766737_img_.webp',20),(24,'1709695766739_img_.webp',20);
/*!40000 ALTER TABLE `imagenes_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `marca` varchar(255) NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `precio` decimal(10,0) unsigned NOT NULL,
  `almacenamiento` int NOT NULL,
  `ram` int NOT NULL,
  `so` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (14,'Samsung','s23',1000000,128,8,'android','tremendo celu'),(15,'Motorola','razr40',900000,128,8,'android','se dobla '),(16,'Iphone','iphone 13',1000000,128,8,'ios','la manzana'),(17,'Samsung','a20',120000,64,4,'android','nunca falla'),(18,'Motorola','edge 40 neo',500000,128,8,'android','motorola '),(19,'Samsung','a54',400000,4,8,'android','samsung '),(20,'Iphone','iphone 11',1000000,128,8,'ios','iphonee');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20240302212936-create-entidad-de-usuario.js'),('20240302213021-create-usuario.js'),('20240302213034-create-producto.js'),('20240302213048-create-ventas.js'),('20240302213049-create-imagenes-producto.js'),('20240302213050-create-colores.js'),('20240302213051-create-comentarios-productos.js'),('20240302213237-create-tabla-colores-productos-imagenes.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tabla_colores_productos_imagenes`
--

DROP TABLE IF EXISTS `tabla_colores_productos_imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabla_colores_productos_imagenes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_producto` int unsigned NOT NULL,
  `id_colores` int unsigned NOT NULL,
  `id_imagenes` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_producto` (`id_producto`),
  KEY `id_colores` (`id_colores`),
  KEY `id_imagenes` (`id_imagenes`),
  CONSTRAINT `tabla_colores_productos_imagenes_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`),
  CONSTRAINT `tabla_colores_productos_imagenes_ibfk_2` FOREIGN KEY (`id_colores`) REFERENCES `colores` (`id`),
  CONSTRAINT `tabla_colores_productos_imagenes_ibfk_3` FOREIGN KEY (`id_imagenes`) REFERENCES `imagenes_productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabla_colores_productos_imagenes`
--

LOCK TABLES `tabla_colores_productos_imagenes` WRITE;
/*!40000 ALTER TABLE `tabla_colores_productos_imagenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `tabla_colores_productos_imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_historial_compras` int DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `direccion` text,
  `telefono` int DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `imagen_usuario` varchar(255) NOT NULL,
  `id_entidad_usuario` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_entidad_usuario` (`id_entidad_usuario`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_entidad_usuario`) REFERENCES `entidad_de_usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,1,'pedro','sanchez','asdasdasd',123456,'pedro@gmail.com','12345','photo',1),(2,2,'william','sacaca','asdasdasd',123456555,'william@gmail.com','$2a$10$txP/RKIWZbgOG9y0l5UIDOvu96Ouvtqg.YK6zwzgsGWG6FKXEJKoq','1709643524948_img_.jpg',2),(3,3,'Aliw','Doepppt','asdasdasdhh',12345655,'asd@gasd.com','12345','photo',3),(4,4,'Alaa','Doe','asdasdasd',123456,'asd@gasd.com','12345','photo',4),(5,NULL,'juan','perez',NULL,NULL,'juanperez@gmail.com','$2a$10$Pl412cw68CnahG2Nai7aZe619BAexoVhLkrC389pgdtAjC.nObO8G','predeterminado.webp',2),(6,NULL,'wil','ppppp',NULL,NULL,'wil@gmail.com','$2a$10$pU3pP16weqTF.0eCcyJQx.xOesAOXi6HNZ1NLvzHtja39jkQs41le','predeterminado.webp',2);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_Usuario_venta` int unsigned NOT NULL,
  `id_producto_venta` int unsigned NOT NULL,
  `fecha_de_venta` datetime NOT NULL,
  `medio_de_pago` varchar(255) NOT NULL,
  `cantidad` int unsigned NOT NULL,
  `precio_unitario` decimal(10,0) NOT NULL,
  `total` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_Usuario_venta` (`id_Usuario_venta`),
  KEY `id_producto_venta` (`id_producto_venta`),
  CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`id_Usuario_venta`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`id_producto_venta`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'phonestore'
--

--
-- Dumping routines for database 'phonestore'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-07 19:42:21
