-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 30, 2023 at 11:05 AM
-- Server version: 8.0.32-0ubuntu0.22.04.2
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `learn-code-path`
--
DROP TABLE IF EXISTS failed_jobs;
DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS online_courses;
DROP TABLE IF EXISTS instructors;
DROP TABLE IF EXISTS subscriptions;
DROP TABLE IF EXISTS bootcamps;
DROP TABLE IF EXISTS migrations;
DROP TABLE IF EXISTS model_has_permissions;
DROP TABLE IF EXISTS model_has_roles;
DROP TABLE IF EXISTS password_reset_tokens;
DROP TABLE IF EXISTS role_has_permissions;
DROP TABLE IF EXISTS permissions;
DROP TABLE IF EXISTS personal_access_tokens;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS personal_datas;
DROP TABLE IF EXISTS roles;

-- --------------------------------------------------------

--
-- Table structure for table `bootcamps`
--

CREATE TABLE `bootcamps` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startDatetime` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `endDatetime` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bootcamps`
--

INSERT INTO `bootcamps` (`id`, `title`, `startDatetime`, `endDatetime`, `duration`, `location`, `description`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Iniciación en la programación con Java y MySQL', '2023-06-09T08:00', '2023-06-09T18:30', '2 semana(s)', 'Barcelona', 'Únase a \"Iniciación en la programación con Java y MySQL\" y sumérjase en el mundo de la programación. Aprenda los fundamentos de la programación en Java, incluyendo sintaxis, tipos de datos y principios orientados a objetos. Explore MySQL para una gestión eficaz de los datos. Con la orientación de expertos y ejercicios prácticos, obtendrá una base sólida en Java y MySQL. Comience hoy mismo su viaje por la programación con este completo curso.', 'java-course.jpg', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(2, 'Laravel 9 y Next.js Full-stack', '2023-06-28T08:00', '2023-06-28T18:00', '4 semana(s)', 'Barcelona', 'Únete a Laravel 9 y Next.js Full-stack Bootcamp y domina el arte de construir aplicaciones web de vanguardia. Explore las potentes capacidades de backend de Laravel, incluyendo enrutamiento, gestión de bases de datos y autenticación, mientras aprovecha Next.js para crear interfaces frontend ultrarrápidas y SEO-friendly. Con proyectos prácticos y la orientación de expertos, obtendrá las habilidades necesarias para sobresalir en el desarrollo full-stack. Acelera tu carrera y crea aplicaciones web impactantes con este bootcamp inmersivo.', 'laravel-course.jpg', '2023-05-30 09:03:48', '2023-05-30 09:03:48');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `instructors`
--

CREATE TABLE `instructors` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `instructors`
--

INSERT INTO `instructors` (`id`, `name`, `job_title`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Camilo Rojas Bravo', 'Ingeniero especializado en matemática ofrece clases en línea', 'https://img-c.udemycdn.com/user/100x100/220346454_b34a_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(2, 'Marco Mendoza +80.000 Estudiantes', 'Ingeniero en Sistemas,  Téc en Informatica y Autodidacta', 'https://img-c.udemycdn.com/user/100x100/29704198_3497_4.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3, 'Gabriel Moroni', 'Software Architect', 'https://img-c.udemycdn.com/user/100x100/38090922_7290_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4, 'Javier Finance', 'Elaboración de contenido de valor', 'https://img-c.udemycdn.com/user/100x100/75001262_fe18_3.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5, 'Cristian David Henao Hoyos', 'Ing de Sistemas y Computación, Desarrollador y Youtuber!', 'https://img-c.udemycdn.com/user/100x100/37156208_920b.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(6, 'Manuel Sánchez', 'Programador Web', 'https://img-c.udemycdn.com/user/100x100/214422362_9998_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(7, 'FapCod YT', 'Desarrollador', 'https://img-c.udemycdn.com/user/100x100/33584710_2657_6.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(8, 'Héctor Uriel Pérez', 'Microsoft MVP', 'https://img-c.udemycdn.com/user/100x100/1693564_c4e4.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(9, 'Cesar Colina Desarrollo Web', 'Full Stack Developer', 'https://img-c.udemycdn.com/user/100x100/66897322_735e_3.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(10, 'Alain Nicolás Tello', 'Ing. en Sistemas Computacionales, certificado en Android', 'https://img-c.udemycdn.com/user/100x100/27459168_62a8.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(11, 'Alvaro Chirou • 1.700.000+ Enrollments Worldwide', 'Digital Technology Teacher', 'https://img-c.udemycdn.com/user/100x100/24645730_b501_5.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(12, 'Renan Dias', '• Animalangs Language School - 79.000+ Students', 'https://img-c.udemycdn.com/user/100x100/60718410_ed9f_4.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(13, 'Edgar Herrera Casas', 'Ingeniero en Sistemas', 'https://img-c.udemycdn.com/user/100x100/124570762_fff1.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(14, 'Cursea.me Online', 'Profesor', 'https://img-c.udemycdn.com/user/100x100/84711342_e402.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(15, 'Vladimir Rodríguez', 'Programador, técnico. Orador. Master PNL. Empresario. Coach.', 'https://img-c.udemycdn.com/user/100x100/33362268_6b93_3.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(16, 'Diego Velazquez', 'Senior Product Designer', 'https://img-c.udemycdn.com/user/100x100/40557036_dab0_4.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(17, 'Rodrigo Díaz Academia PLC', 'Automation and Control Engineer', 'https://img-c.udemycdn.com/user/100x100/133900478_d765_6.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(18, 'Enrique Munguía', 'Software Engineer at Google', 'https://img-c.udemycdn.com/user/100x100/13153412_0bb9_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(19, 'Jose Antonio Lozano de Paz', 'Instructor Sales', 'https://img-c.udemycdn.com/user/100x100/224353158_ec1c.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(20, 'Federico Rodriguez', 'Experto en sistemas de crecimiento', 'https://img-c.udemycdn.com/user/100x100/33907546_34e5_5.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(21, 'Javier Gomez', 'MBA, MOS®, MCP®, CAPM®, Data Analyst', 'https://img-c.udemycdn.com/user/100x100/22313124_a5bd.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(22, 'Ale Sánchez Medina', 'Ingeniero Informático', 'https://img-c.udemycdn.com/user/100x100/28857004_82ac_4.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(23, 'Fernando Vicente', 'Desarrollador freelance', 'https://img-c.udemycdn.com/user/100x100/136014477_c591.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(24, 'Felix Lucas', 'Web and Videogame Developer', 'https://img-c.udemycdn.com/user/100x100/23316730_6555.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(25, 'Mercedes Arruiz', 'Coach de Empoderamiento', 'https://img-c.udemycdn.com/user/100x100/38404980_f841_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(26, 'Alejandra Fernandez', 'Scientifico', 'https://img-c.udemycdn.com/user/100x100/229934208_cb06_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(27, 'Victor Freire Casal', 'Apoyando el emprendimiento', 'https://img-c.udemycdn.com/user/100x100/212162368_4165_4.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(28, 'Víctor Ramos', 'TI Sistemas', 'https://img-c.udemycdn.com/user/100x100/49981774_8bfe_4.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(29, 'Luis orlando muñoz bueno', 'programador y desarrollador web', 'https://img-c.udemycdn.com/user/100x100/29112826_617b.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(30, 'Cyn Perazzo', 'Autora. Coach de vida especializada en autoconocimiento', 'https://img-c.udemycdn.com/user/100x100/29222278_f49d_3.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(31, 'Javier Cañas', 'Sr. Product Designer', 'https://img-c.udemycdn.com/user/100x100/37526024_0001_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(32, 'Portal Ingeniería | +90.000 Students', 'Engineer | Ingeniero', 'https://img-c.udemycdn.com/user/100x100/146148308_2995_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(33, 'Allan Montero', 'Especialista en Informática', 'https://img-c.udemycdn.com/user/100x100/90165766_7657_6.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(34, 'Agustin Navarro Galdon', 'Frontend & Backend Developer || +150.000 estudiantes online', 'https://img-c.udemycdn.com/user/100x100/30747612_55e6_3.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(35, 'Manuel Pallarés', 'Arquitecto + Diseñador Editorial', 'https://img-c.udemycdn.com/user/100x100/133974250_25d3_5.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(36, 'La Clase De Coreano  Korean Class', 'Academia De Idioma Coreano', 'https://img-c.udemycdn.com/user/100x100/10246794_afd3.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(37, 'Joan Amengual | AWS Certified & Senior Blockchain Professional', 'Full Stack Engineer', 'https://img-c.udemycdn.com/user/100x100/101256082_9479_24.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(38, 'Jesus Manuel Barrios', 'Arquitecto Cloud', 'https://img-c.udemycdn.com/user/100x100/74177064_8242.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(39, 'Enrique Oriol', 'SW Engineer & entrepreneur', 'https://img-c.udemycdn.com/user/100x100/23892516_b9f0.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(40, 'Yury Zavaleta', 'Ingeniero en Sistemas', 'https://img-c.udemycdn.com/user/100x100/103363905_7e32.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(41, 'United Fitness Center', 'Coach', 'https://img-c.udemycdn.com/user/100x100/78928380_3393_3.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(42, 'Sergio Alejandro Pérez Gabriel', 'Ingeniero en Computación', 'https://img-c.udemycdn.com/user/100x100/49260754_e719_3.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(43, 'Carlos Javier Moreno Gomez', 'Msc. Mechanical Eng., Electronics Eng. & professor', 'https://img-c.udemycdn.com/user/100x100/38506542_3966_14.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(44, 'Héctor Costa Guzmán', 'Especialista en Python', 'https://img-c.udemycdn.com/user/100x100/5223502_d606_4.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(45, 'Víctor Robles', 'Desarrollador web', 'https://img-c.udemycdn.com/user/100x100/16661812_b24c.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(46, 'Mywebstudies .com', 'Analista', 'https://img-c.udemycdn.com/user/100x100/127721772_7eec.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(47, 'Jordan Alexander', 'Ingenierio en Tecnologías de la Información', 'https://img-c.udemycdn.com/user/100x100/74235878_66e3_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(48, 'Red System Studio', 'Ingeniero de sistemas, Desarrollador de aplicaciones móviles', 'https://img-c.udemycdn.com/user/100x100/30149584_dd12_9.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(49, 'Nacho Cabanes', 'Ingeniero Software y profesor de Programación', 'https://img-c.udemycdn.com/user/100x100/99021308_56d4.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(50, 'Andres Rojas', 'Desarrollador Python', 'https://img-c.udemycdn.com/user/100x100/179812618_8f52_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(51, 'Juan Fernando Urrego', 'Diseñador Visual y Desarrollador Web', 'https://img-c.udemycdn.com/user/100x100/19669210_5242_41.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(52, 'HispaFight BJJ & MMA', 'BJJ - MMA - Grappling - Boxeo - K1 - Defensa Personal', 'https://img-c.udemycdn.com/user/100x100/122984092_1b74_3.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(53, 'Joaquin Pujols', 'Technology Lover | Infrastructure Engineer | DevOps | AWS', 'https://img-c.udemycdn.com/user/100x100/10862562_7f30_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(54, 'Juan Pablo De la torre Valdez', 'Creador de Código Con Juan - Aprende Con Proyectos Reales', 'https://img-c.udemycdn.com/user/100x100/4748648_5109_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(55, 'Horacio Meza', 'Ingeniero en Sistemas Computacionales', 'https://img-c.udemycdn.com/user/100x100/33931860_bf20.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(56, 'Renato Jesús Yacolca Neyra', 'Fundador del Canal Programación Fácil, SEO y Marketing', 'https://img-c.udemycdn.com/user/100x100/68383616_a513_3.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(57, 'Carlos Martínez', 'Educador Social', 'https://img-c.udemycdn.com/user/100x100/198520104_3e73_2.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(58, 'Daniel Rodes Encarna Sanchez', 'Fundadores y directores de la escuela  internacional Lemat', 'https://img-c.udemycdn.com/user/100x100/214169910_e22b_4.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(59, 'Pablo Tilotta - +170k students', 'Analista Programador Experto - 31 años de carrera', 'https://img-c.udemycdn.com/user/100x100/47688736_6ea3.jpg', '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(60, 'Javier González', 'Product designer and UX mentor', 'https://img-c.udemycdn.com/user/100x100/80575_637e_2.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(61, 'Tito Figueroa', 'Conferencista Internacional', 'https://img-c.udemycdn.com/user/100x100/37386804_03fc_2.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(62, 'Alejandro Lora', 'Software Developer', 'https://img-c.udemycdn.com/user/100x100/1600758_0072_4.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(63, 'Tawoc Educación', 'Academia Online', 'https://img-c.udemycdn.com/user/100x100/53628100_adf2_7.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(64, 'Jorge Luis García Coello', 'Fullstack Developer - Instructor en Aprendible.com', 'https://img-c.udemycdn.com/user/100x100/941906_df05.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(65, 'Ariel Quintero', 'Profesor, Programador y Especialista en Excel', 'https://img-c.udemycdn.com/user/100x100/50910214_600d.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(66, 'Juan Diego Morales del Corral', 'Software Developer', 'https://img-c.udemycdn.com/user/100x100/27816308_4e08_2.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(67, 'Pedro Daniel Alcalá Rojas', 'Científico de datos || 70.000 estudiantes online', 'https://img-c.udemycdn.com/user/100x100/38434392_ade7_15.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(68, 'Martin Frias', 'Founder of Coldd Security', 'https://img-c.udemycdn.com/user/100x100/101365204_9d62_5.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(69, 'Martin Rojas', 'Creator of Digital Content', 'https://img-c.udemycdn.com/user/100x100/158243074_63bf.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(70, 'Carlos Adrian Soto Botero', 'Arquitecto de Soluciones', 'https://img-c.udemycdn.com/user/100x100/114222728_f2e8_7.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(71, 'Carlos Arturo Esparza', 'Desarrollador Web y Fundador de FalconMasters', 'https://img-c.udemycdn.com/user/100x100/2904600_950b_3.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(72, 'Jonny David Lezcano Algarin', 'Ingeniero de Software', 'https://img-c.udemycdn.com/user/100x100/51143004_fccc.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(73, 'Maria Leticia Ditrani', 'Asesora en Marketing Digital - Creadora de Educreativa', 'https://img-c.udemycdn.com/user/100x100/114347950_ec57_5.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(74, 'Homero Raúl Vargas Cruz', 'Ingeniero en Sistemas', 'https://img-c.udemycdn.com/user/100x100/148317400_ea28.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(75, 'Julie Guaglianono', 'Language Instructors', 'https://img-c.udemycdn.com/user/100x100/168412720_843c_2.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(76, 'Diego Perez Bernadet', 'Economista, MBA', 'https://img-c.udemycdn.com/user/100x100/129446264_edcc.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(77, 'Santiago Hernández', 'Experto en Ciberseguridad e Inteligencia Artificial', 'https://img-c.udemycdn.com/user/100x100/43210112_41c0.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(78, 'Sergio Granell', 'Didáctico de la nutrición', 'https://img-c.udemycdn.com/user/100x100/31313818_710b_3.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(79, 'José Manuel De Aquino', 'Security Researcher', 'https://img-c.udemycdn.com/user/100x100/55454600_5b24_2.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(80, 'Carlos Alfaro', 'Desarrollador de Software', 'https://img-c.udemycdn.com/user/100x100/77226948_8825.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(81, 'Manuel García', 'Estudiante de Ingeniería Informática', 'https://img-c.udemycdn.com/user/100x100/23060768_3a3a.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(82, 'Agustín Dighiero', 'Contador público. Master en Marketing Digital & Ecommerce.', 'https://img-c.udemycdn.com/user/100x100/36241236_2c8a_3.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(83, 'Guillermo Saez Yandiola (TailorSheet)', 'Fundador de TailorSheet.com', 'https://img-c.udemycdn.com/user/100x100/145267016_77f9_2.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(84, 'Juan José. Descailleaux', 'Ing. Industrial y Master en Ingeniería Industrial', 'https://img-c.udemycdn.com/user/100x100/78302872_c524.jpg', '2023-05-30 09:04:27', '2023-05-30 09:04:27');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2023_04_12_071022_create_personal_datas_table', 1),
(5, '2023_04_12_071553_create_users_table', 1),
(6, '2023_04_12_073100_create_instructors_table', 1),
(7, '2023_04_12_073200_create_online_courses_table', 1),
(8, '2023_04_12_073718_create_purchases_table', 1),
(9, '2023_05_17_203222_create_bootcamps_table', 1),
(10, '2023_05_17_203843_create_subscriptions_table', 1),
(11, '2023_05_19_080204_create_permission_tables', 1);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(1, 'App\\Models\\User', 2),
(2, 'App\\Models\\User', 3),
(2, 'App\\Models\\User', 4),
(2, 'App\\Models\\User', 5),
(2, 'App\\Models\\User', 6),
(2, 'App\\Models\\User', 7),
(2, 'App\\Models\\User', 8),
(2, 'App\\Models\\User', 9),
(2, 'App\\Models\\User', 10),
(2, 'App\\Models\\User', 11),
(2, 'App\\Models\\User', 12);

-- --------------------------------------------------------

--
-- Table structure for table `online_courses`
--

CREATE TABLE `online_courses` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `headline` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `rating` int DEFAULT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `instructor_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `online_courses`
--

INSERT INTO `online_courses` (`id`, `title`, `headline`, `price`, `rating`, `img`, `instructor_id`, `created_at`, `updated_at`) VALUES
(310112, 'Introducción a la Programación con Pseudocódigo en español', 'Un curso creado para enseñarte los fundamentos de la programación comunes en todos los lenguajes.', '3.95', 5, 'https://img-c.udemycdn.com/course/480x270/310112_d848_15.jpg', 44, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(456302, 'acoreanate curso coreano 1 online  para topik', 'La mejor opción para aprender coreano en el lugar y el tiempo que quieras, podrás prepararte paraTOPIK en curso coreano ', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/456302_7730_6.jpg', 36, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(600884, 'UX Design: Conceptos básicos para principiantes', 'Descubre qué es la Experiencia de Usuario y qué técnicas te ofrece para que  tu proyecto web o aplicación sea un éxito.', '14.00', 4, 'https://img-c.udemycdn.com/course/480x270/600884_5bd4.jpg', 60, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(749262, 'Curso de maquetación web de lo básico a lo avanzado', 'Aprende a maquetar sitios web de una manera fácil y efectiva en los lenguajes HTML5 y CSS3', '2.00', 3, 'https://img-c.udemycdn.com/course/480x270/749262_08d8_6.jpg', 51, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(772508, 'Fundamentos de C# para Principiantes', 'Conviértete en desarrollador de software aprendiendo a programar con C#', '23.00', 5, 'https://img-c.udemycdn.com/course/480x270/772508_b68d_4.jpg', 18, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(1094878, 'Autoconocimiento desde Cero', 'Inicia el viaje más importante de tu vida a través de tu autoconocimiento', '25.99', 5, 'https://img-c.udemycdn.com/course/480x270/1094878_4870_3.jpg', 30, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(1104380, 'Aprende a crear tu primer sitio web con Laravel', 'Curso introductorio a Laravel PHP', '2.00', 4, 'https://img-c.udemycdn.com/course/480x270/1104380_304c_6.jpg', 64, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(1143108, 'Ingeniería del Software: Fundamentos de UML usando Papyrus', 'Curso de UML - Aprende los fundamentos de UML con Eclipse Papyrus', '4.99', 3, 'https://img-c.udemycdn.com/course/480x270/1143108_e6b1.jpg', 81, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(1245526, 'Android: Fundamentos para crear tus primeras apps de calidad', 'Fundamentos de Java y Android para crear aplicaciones funcionales con calidad. SQLite/DBFlow, Glide, Butterknife y más.', '26.00', 3, 'https://img-c.udemycdn.com/course/480x270/1245526_0e0f_4.jpg', 10, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(1289352, 'Creación de Videojuegos en Unreal Engine para principiantes', 'Aprende a crear un videojuego 3D desde cero utilizando el Unreal Engine 4 con blueprints sin necesidad de codificar.', '18.00', 3, 'https://img-c.udemycdn.com/course/480x270/1289352_dc78_3.jpg', 55, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(1317138, 'Fotografia Movil: Iníciate y aprende las bases', 'Iníciate en la fotografía digital usando el móvil. Luego, continúa con el móvil o con una cámara, tú decides.', '17.95', 3, 'https://img-c.udemycdn.com/course/480x270/1317138_7fcb.jpg', 22, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(1392960, 'Inteligencia Emocional', 'Eleva tu Coeficiente Emocional y Progresa en la vida como Nunca Antes', '31.00', 5, 'https://img-c.udemycdn.com/course/480x270/1392960_8845_2.jpg', 61, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(1513292, 'Fundamentos de Programación, Algoritmos en java y JavaScript', 'Aprende a programar con practicas desde cero, pasando del seudocodigo y diagramas de flujo a un lenguaje de programación', '18.00', 5, 'https://img-c.udemycdn.com/course/480x270/1513292_9a09_7.jpg', 5, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(1743488, 'SQL - Curso completo de Bases de Datos - de 0 a Avanzado', 'Bases de Datos, MySQL, teoría y práctica, Lenguaje SQL completo, Base de datos MySQL, Diagrama EER, AWS RDS, Cloud', '1.00', 3, 'https://img-c.udemycdn.com/course/480x270/1743488_e3df_7.jpg', 59, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(1756340, 'React - La Guía Completa: Hooks Context Redux MERN +15 Apps', 'Aprende React: Hooks, State, MERN, Next.js, Remix Run, Redux, Tailwind CSS, Prisma y mucho más - CREANDO +15 APPS REALES', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/1756340_0543_5.jpg', 54, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(2039484, 'Blender la guía completa para novatos', 'Aprende a realizar proyectos en Blender sin conocimientos previos y mejora tus habilidades en producción 3D', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/2039484_05d1_6.jpg', 51, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(2217820, 'NestJS: Node + Typescript al estilo Angular para crear APIS', 'INTRODUCCIÓN: APIs con TypeScript como si estuvieras en Angular. Crea Servicios Web API como un PRO. Aprende desde cero.', '5.95', 4, 'https://img-c.udemycdn.com/course/480x270/2217820_28c1_3.jpg', 62, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(2292651, 'Mindfulness para crear Hábitos', '8 técnicas para crear hábitos saludables usando Mindfulness', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/2292651_c383_2.jpg', 25, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(2348096, 'Curso Base sobre Nutrición y Entrenamiento', 'Información esencial sobre nutrición', '84.00', 3, 'https://img-c.udemycdn.com/course/480x270/2348096_b829.jpg', 78, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(2357486, 'Inicia en la  Programacion: Primer Paso : Git y Terminal', 'Herramientas necesarias para Aprender a programar: Git, Terminal y Visual Studio code. Curso de inicio en Programacion', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/2357486_e795.jpg', 9, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(2367340, '¡Business Intelligence para todos!', 'Introducción al mundo del Business Intelligence aplicado a las empresas utilizando Power BI, Qlik sense y Tableau.', '12.95', 3, 'https://img-c.udemycdn.com/course/480x270/2367340_7321_5.jpg', 67, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(2369118, 'Curso Excel y Power BI – Análisis y Visualización de Datos', 'Curso Power BI y Excel - Ejercicios Tablas dinámicas y gráficos en Excel - Reportes y dashboards en Microsoft Power BI.', '2.00', 3, 'https://img-c.udemycdn.com/course/480x270/2369118_fcb4.jpg', 21, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(2432892, 'Máster en Seguridad Informática. Curso completo de Hacking.', 'Aprenderás desde nivel principiante (no necesitas conocimientos previos) hasta avanzado. Te acompañaré paso a paso. 2022', '24.00', 4, 'https://img-c.udemycdn.com/course/480x270/2432892_0ee7_3.jpg', 63, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(2493858, 'Fundamentos de Angular', '¿Acabas de llegar a Angular? Este es el curso que necesitas para perderle el miedo y empezar a trabajar con Angular.', '12.00', 5, 'https://img-c.udemycdn.com/course/480x270/2493858_4bda.jpg', 39, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(2500242, 'Taller de creación de Backdoors con Python - Parte 1', '[+] ¡ APRENDE A CREAR TUS PROPIAS HERRAMIENTAS DE ACCESO REMOTO !', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/2500242_f191.jpg', 79, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(2525406, 'Kali Linux. Seguridad Informática. Pentesting. Hacking. 2023', 'Aplica Seguridad informática, realiza Pentesting de la mano del Hacking, con herramientas de Kali Linux. Año 2023.', '19.00', 5, 'https://img-c.udemycdn.com/course/480x270/2525406_cea5_5.jpg', 11, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(2661342, 'React JS: La biblioteca de JS creada por Facebook', 'Aprende paso a paso que es React Js, los Hooks, Componentes, Props, Navegación con React Router Dom, y mucho mas...', '56.00', 5, 'https://img-c.udemycdn.com/course/480x270/2661342_4f49_6.jpg', 34, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(2722404, 'Machine Learning y Data Science: Curso Completo con Python', 'Aprende Machine Learning y Data Science con Python, ¡conviértete en un experto en Machine Learning con Python!', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/2722404_d971_10.jpg', 77, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(2743330, 'Diseño UX: experiencia de usuario UX/UI + Figma 2023', 'Aprende, conoce y aplica técnicas de User Experience Design y Design Thinking - Curso UX UI Design + Diseño Web y Mobile', '6.00', 4, 'https://img-c.udemycdn.com/course/480x270/2743330_4509_8.jpg', 31, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(2851124, 'C# para Principiantes: .NET Winforms (escritorio) + SQL CRUD', 'Aprende C# Windows Forms', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/2851124_b8a3.jpg', 3, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(2904068, 'Curso de CSS3, Flexbox y CSS Grid Layout | Básico y rápido', 'Aprende CSS 3, CSS Flexbox y Grid Layout y da tus primeros pasos en la maquetación web. Dale estilos a tus páginas web.', '77.00', 3, 'https://img-c.udemycdn.com/course/480x270/2904068_4961.jpg', 45, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3073448, 'Curso Básico de Canva 2023: Crea Diseños Gráficos Desde Cero', 'Domina Canva y crea diseños y piezas gráficas desde cero, de forma fácil y simple, sin saber de diseño gráfico.', '75.95', 3, 'https://img-c.udemycdn.com/course/480x270/3073448_11d8_2.jpg', 56, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3084390, 'Curso Completo de Git y Github para principiantes', 'Aprende Git desde cero', '1.00', 5, 'https://img-c.udemycdn.com/course/480x270/3084390_88e2_2.jpg', 7, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3187212, 'Microsoft Power BI - Introducción a Power Query Editor', 'Curso de Power BI - Fundamentos de Power Query y ETL. Transforma datos de Excel y visualízalos en un dashboard', '25.00', 4, 'https://img-c.udemycdn.com/course/480x270/3187212_45f8.jpg', 21, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3201160, 'Crea una página web moderna con HTML CSS Y JAVASCRIPT', 'Aprende a crear una página web con HTML5 CSS3 y Javacript, [Adaptable a dispositivos móviles]', '23.99', 3, 'https://img-c.udemycdn.com/course/480x270/3201160_e33c_2.jpg', 47, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3255310, 'Oratoria y Comunicación Efectiva con PNL', 'Cómo comunicar eficazmente en todos los ámbitos', '10.99', 4, 'https://img-c.udemycdn.com/course/480x270/3255310_10f2_5.jpg', 15, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3260568, 'Curso de Windows 10 Para Principiantes', 'Aprende a sacarle el mayor provecho a tu computadora Y mejorar tu productividad', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/3260568_bf70_7.jpg', 33, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3294068, 'Figma tutorial - Diseña una página web con Figma 2022', 'Aprende a diseñar una página web atractiva con Figma', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/3294068_93e5_5.jpg', 16, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3427346, 'Curso gratuito de Oracle SQL', 'Curso básico de programación Sql para Oracle', '82.95', 5, 'https://img-c.udemycdn.com/course/480x270/3427346_32e9_2.jpg', 46, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(3693410, 'Todo sobre el Entrenamiento de Hipertrofia...', 'Las mejores estrategias de ganancia muscular estarán en tus manos', '1.00', 4, 'https://img-c.udemycdn.com/course/480x270/3693410_5eae_2.jpg', 41, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3696178, 'Entrenamiento especializado en Mujeres', 'Enfocado a ganancia de Fuerza', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/3696178_b5fa_2.jpg', 41, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3732812, 'Ingeniería Electrónica: Introducción', 'Iniciate en esta aventura de la revolucion 4.0 con el primer curso', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/3732812_36c3_3.jpg', 43, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3763082, 'Curso gratuito de Nutrición y Dietética', 'Aprende a cuidar tu salud', '69.00', 5, 'https://img-c.udemycdn.com/course/480x270/3763082_4faa.jpg', 46, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3778016, 'Google Cloud Platform - Fundamentos Laboratorios y Practicas', 'Usa la mejor solución empresarial donde tienes todo lo que necesitas, en un solo lugar, con respaldo de la marca Google.', '1.00', 5, 'https://img-c.udemycdn.com/course/480x270/3778016_d99a.jpg', 11, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(3800620, 'DevOps con Docker, Jenkins, Kubernetes, git, GitFlow CI y CD', 'Inicia tu carrera DevOps de manera práctica, aprende Docker, pipelines, jenkins, orquestar servicios en kubernetes y más', '67.00', 5, 'https://img-c.udemycdn.com/course/480x270/3800620_36a8_4.jpg', 70, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(3947230, 'AppSheet 2023 - Curso inicial', 'Aprende a crear tus Apps paso a paso con todos los puntos fundamentales', '9.00', 5, 'https://img-c.udemycdn.com/course/480x270/3947230_ecb4_2.jpg', 83, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(3951350, 'Contabilidad para principiantes', 'Curso introductorio a la contabilidad. Presentaremos la contabilidad, el libro diario y balances.', '9.99', 5, 'https://img-c.udemycdn.com/course/480x270/3951350_8d77.jpg', 82, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(3984974, 'Scrum Master y Product Owner Certificación Año 2023', 'Todo para Certificarte de Manera Exitosa en cualquiera de las principales Certificadoras Internacionales de Scrum', '19.00', 4, 'https://img-c.udemycdn.com/course/480x270/3984974_3475.jpg', 63, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(3998104, 'Introducción a entornos Cloud. Formas de uso y ventajas', 'Introdúcete en el mundo Cloud (Nube) aprendiendo cuales son sus ventajas y principales plataformas de servicios.', '95.99', 3, 'https://img-c.udemycdn.com/course/480x270/3998104_f132.jpg', 11, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4016196, 'Procesamiento de texto profesional con Word, Writer y Docs', 'Todo lo que el mercado laboral exige y mucho más: domina los procesadores de texto más usados de la industria.', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/4016196_6d09_3.jpg', 15, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4177000, '(GRATIS) Ethical Hacking Curso Introductiorio Usando Kali', 'Aprenda a como asegurar su maquina para empezar aprender conceptos de cyberseguridad o ethical hacking.', '18.00', 4, 'https://img-c.udemycdn.com/course/480x270/4177000_a38d_2.jpg', 53, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4188680, 'Aprende Lógica de Programación (Básico)', 'Los fundamentos para un buen programador', '81.00', 3, 'https://img-c.udemycdn.com/course/480x270/4188680_4371_2.jpg', 42, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4214062, 'Curso de Inglés GRATIS para principiantes', '¡100% GRATIS! Esta es la forma más sencilla y eficaz de empezar a hablar Inglés.', '16.00', 3, 'https://img-c.udemycdn.com/course/480x270/4214062_fb71_3.jpg', 75, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(4263710, 'Curso PHP Proyecto web usuarios y roles Patron mvc', 'en este curso aprenderas a desarrollar una aplicacion de gestion de usuarios y roles', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/4263710_a74d_2.jpg', 29, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4441068, 'Chino en 5 palabras - Curso 1 | De cero a principiante (A1)', 'Aprende la fonética, la pronunciación, el PinYin y la escritura de los carácteres chinos', '2.00', 4, 'https://img-c.udemycdn.com/course/480x270/4441068_ea94.jpg', 12, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4468626, 'Guía definitiva para crecer en Instagram', 'Aprenderás los 5 pasos fundamentales para crecer en Instagram. Las estrategias más avanzadas de Marketing Digital.', '17.99', 3, 'https://img-c.udemycdn.com/course/480x270/4468626_f747_3.jpg', 20, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4503912, 'Liderazgo: un modelo para el ÉXITO en todos los ámbitos', 'Conviértete en alguien que aporta valor y logra construir lo necesario para alcanzar el éxito personal y profesional.', '5.99', 5, 'https://img-c.udemycdn.com/course/480x270/4503912_8097_4.jpg', 15, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4542042, 'Lo básico de C#', 'Aprende los fundamentos de la programación de computadoras, usando C#', '2.00', 5, 'https://img-c.udemycdn.com/course/480x270/4542042_063c.jpg', 49, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4568420, 'Strapi v4: De cero a Experto', 'Aprende Strapi desde cero para crear tu propia API REST y tu administrador de aplicaciones', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/4568420_52eb_2.jpg', 34, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(4577996, 'Hacking Ético: Pentesting Basico en Android Con Metasploit', 'Aprende los Conceptos Básicos del Pentesting y Hacking en  Sistemas Android Con Metasploit', '10.99', 5, 'https://img-c.udemycdn.com/course/480x270/4577996_17e4_2.jpg', 2, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4583476, 'Curso de PHP y MySQL desde cero', 'Curso de PHP y MySQL desde CERO: aprende a gestionar bases de datos MySQL con el lenguaje PHP', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/4583476_ed5d_2.jpg', 80, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(4609034, 'Fundamentos de Blockchain: Tecnología, Criptomonedas y NFTs', '¡Aprende los elementos clave de la tecnología Blockchain: Bitcoin, Ethereum, Smart Contracts, Tokens NFT y mucho más!', '39.00', 4, 'https://img-c.udemycdn.com/course/480x270/4609034_897d_6.jpg', 37, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4616344, 'Ejercicios Resueltos de Programación en Shell Script Linux', 'Aprende Shell Script de una forma práctica y divertida', '10.95', 5, 'https://img-c.udemycdn.com/course/480x270/4616344_6633.jpg', 14, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4641460, 'Virtualización con VirtualBox (Enfocada a la ciberseguridad)', 'Este curso gratuito de Coldd Security te servirá para exprimir al máximo el uso de este hipervisor de tipo 2.', '14.00', 4, 'https://img-c.udemycdn.com/course/480x270/4641460_6056.jpg', 68, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(4660638, 'Azure Devops para Todos', 'Curso Práctico Introductorio a Azure Devops', '46.00', 3, 'https://img-c.udemycdn.com/course/480x270/4660638_faaa_2.jpg', 38, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4661946, 'Más de 200 trucos de la consola de GNU/Linux y Shell Script', 'Descubra el potencial de la consola de GNU/Linux y aprenda a automatizar procesos mediante Shell Script.', '10.00', 5, 'https://img-c.udemycdn.com/course/480x270/4661946_52b3.jpg', 23, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4685584, 'Curso de Diseño gráfico en Canva', 'Aprende desde cero a utilizar Canva y a crear diseños para redes sociales', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/4685584_1cde_2.jpg', 8, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4712048, 'Modelamiento de Procesos usando el estándar BPMN', 'Cómo entender el funcionamiento de una empresa utilizando para documentarlo el estándar BPMN', '5.99', 4, 'https://img-c.udemycdn.com/course/480x270/4712048_8982.jpg', 84, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(4716250, 'Principios de Economia y Mercados', 'Domina los principios necesarios de economía y mercado de capitales', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/4716250_92c4_3.jpg', 76, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(4735480, 'COACHING Iniciación - El Mejor curso GRATIS para ser coach', 'La metodología realista de coaching que no te enseñan en casi ninguna escuela', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/4735480_b368_2.jpg', 57, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4736326, 'CRUD básico usando FastAPI', '¡Aprende a crear un CRUD con FastAPI!', '39.99', 5, 'https://img-c.udemycdn.com/course/480x270/4736326_1110.jpg', 50, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4747144, 'Aprende a editar gameplays para youtube', 'Edicion en Premiere Pro', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/4747144_ff69.jpg', 69, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(4779604, 'Excel Completo: Fórmulas, Tablas Dinámicas y más..', 'Desde principiante hasta avanzado', '46.00', 3, 'https://img-c.udemycdn.com/course/480x270/4779604_f7f0_5.jpg', 65, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(4783354, 'Curso Completo de AWS Certified Cloud Practitioner - Español', 'Aprende Cloud Computing | Prepárate para el examen de AWS Certified Cloud Practitioner CLF-C01 | ¡Con examen incluido!', '5.95', 4, 'https://img-c.udemycdn.com/course/480x270/4783354_4d9d_8.jpg', 37, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4796052, 'Programación estructurada desde CERO: 4 lenguajes en 1 curso', 'C++, Java, Pascal y JavaScript - Las bases más solidas de la programación estructurada', '19.99', 3, 'https://img-c.udemycdn.com/course/480x270/4796052_bb64_2.jpg', 15, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4956660, 'Curso PLC SIEMENS TIA PORTAL niveles básico e Intermedio Pt1', 'Curso basico intermedio de programación PLC con software TIA Portal Siemens, distinto a cualquier otro que hayas tomado', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/4956660_bed6_4.jpg', 17, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(4998416, 'Introducción a la creación de Azure Virtual Machines', 'Crea maquinas virtuales Linux y Windows utilizando el Portal de Azure.', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/4998416_76b2.jpg', 66, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(5000448, 'Aprende Lenguaje C y C++ de CERO a EXPERTO', 'Aprende a programar en C y C++ sin ningún conocimiento previo', '72.95', 5, 'https://img-c.udemycdn.com/course/480x270/5000448_fcf0.jpg', 32, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5014542, 'Reconocimiento de texto con Android Studio y Google ML', 'Diseña y desarrolla una aplicación para reconocer texto desde una imagen con Android Studio y Machine Learning [Java]', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/5014542_4b4f_4.jpg', 48, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5016332, 'Crea una Pokédex con React.js y TypeScript', '¡Aprender y practica React.js con este divertido curso!', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/5016332_090b_2.jpg', 6, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(5028210, 'Tarot Marsella Lemat gratuito', '22 arcanos y 4 ases. por Daniel Rodes y Encarna Sanchez de la escuela internacional Lemat.', '35.00', 3, 'https://img-c.udemycdn.com/course/480x270/5028210_58be_2.jpg', 58, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5035658, 'Aprende Figma para Programadores haciendo un Portfolio Web', '¡Da tus primeros pasos en el diseño web con este curso gratuito apto para principiantes!', '40.00', 5, 'https://img-c.udemycdn.com/course/480x270/5035658_46a8_3.jpg', 6, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(5046092, 'Curso de Trading Algorítmico con Python', 'Con ejemplos prácticos y códigos.', '10.00', 3, 'https://img-c.udemycdn.com/course/480x270/5046092_799c_8.jpg', 4, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5100716, 'Javascript: El Curso Completo, Práctico y desde Cero', 'Aprende a programar en Javascript desde cero con el curso mas completo de todos.', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/5100716_97ab.jpg', 71, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(5114102, 'Crea un juego de Plataformas 3D con Unreal Engine 5', 'Aprende a crear un juego pequeño pero muy completo con Unreal Engine 5', '97.95', 5, 'https://img-c.udemycdn.com/course/480x270/5114102_c590.jpg', 24, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5121854, 'Sketchup course. Building a strong foundations', 'Learn to think as Sketchup does. Break the ice wall and start using this amazing software', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/5121854_4f56_3.jpg', 35, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5121900, 'Gestión de Redes Sociales - Community Manager & Social Media', 'Aprende a gestionar redes sociales de manera profesional', '2.99', 4, 'https://img-c.udemycdn.com/course/480x270/5121900_4dc5_2.jpg', 73, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(5125842, 'Introducción a la Ciberseguridad', 'Identifica las principales amenazas en el ciberespacio, comprendiendo los fundamentos de la ciberseguridad.', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/5125842_b9bc.jpg', 40, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5147672, '¡CURSO PRINCIPIANTE con QWIK en español!', '¡Familiarízate con este revolucionario framework de JavaScript!', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/5147672_2bb1.jpg', 6, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5181288, 'Vende más con ChatGPT: Domina la revolución - Básico', 'Vende más con ChatGPT: Domina la tecnología que revolucionará tu estrategia comercial y te hará marcar la diferencia', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/5181288_b26f_3.jpg', 19, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5181290, 'Certificación Fundamentos de Scrum', 'Certificación Fundamentos de Scrum', '14.95', 3, 'https://img-c.udemycdn.com/course/480x270/5181290_543f_2.jpg', 13, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5205496, 'ChatGPT en la educación', 'Aprovecha esta nueva herramienta', '99.00', 5, 'https://img-c.udemycdn.com/course/480x270/5205496_e780_3.jpg', 1, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5206962, 'Aprende HTML5 y CSS3 de CERO a EXPERTO', 'Aprende HTML y CSS sin ningún conocimiento previo', '56.00', 4, 'https://img-c.udemycdn.com/course/480x270/5206962_8bf4.jpg', 32, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(5215168, 'Desarrollo de paquetes de PHP & Laravel 10', 'Crea paquetes reutilizables y robustos', '14.00', 4, 'https://img-c.udemycdn.com/course/480x270/5215168_2d2a_2.jpg', 74, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(5228474, 'Curso de Hacking Etico: El Ransomware en Android y Windows.', 'Aprende a Ejecutar Ataques con Ransomware y como Mitigarlos, y Comprende cómo Funciona el Malware más Letal del Mundo.', '60.99', 5, 'https://img-c.udemycdn.com/course/480x270/5228474_d75e_4.jpg', 2, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5239422, 'BJJ | Drills para Jiu Jitsu Brasileño en español', 'Drills de BJJ en solitario y en pareja para mejorar tu movilidad', '11.00', 5, 'https://img-c.udemycdn.com/course/480x270/5239422_6927_3.jpg', 52, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5302182, 'El curso completo WordPress para debutar', '¡El tutorial WordPress definitivo para los principiantes!', '2.00', 3, 'https://img-c.udemycdn.com/course/480x270/5302182_180d_2.jpg', 26, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5302326, 'Liderazgo y Comunicación Efectiva con el Modelo DISC', 'Desarrolla tus Habilidades para Liderar y Comunicar de Manera Efectiva, Adaptándote a las Preferencias de los demás', '14.99', 3, 'https://img-c.udemycdn.com/course/480x270/5302326_df63.jpg', 27, '2023-05-30 09:04:26', '2023-05-30 09:04:26'),
(5334648, 'GCP ACE Practice Test - 60 Questions - FREE - [English/2023]', 'With a great number of questions (60+ questions) split over 2 exams to try your knowledge.', '10.00', 5, 'https://img-c.udemycdn.com/course/480x270/5334648_bb96.jpg', 72, '2023-05-30 09:04:27', '2023-05-30 09:04:27'),
(5339742, 'Proceso CRUD (C Sharp y Oracle Database)', 'CRUD (C Sharp y Oracle Database)', '18.95', 5, 'https://img-c.udemycdn.com/course/480x270/5339742_c30a.jpg', 28, '2023-05-30 09:04:26', '2023-05-30 09:04:26');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_datas`
--

CREATE TABLE `personal_datas` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `surname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_datas`
--

INSERT INTO `personal_datas` (`id`, `name`, `surname`, `birthday`, `location`, `img`, `created_at`, `updated_at`) VALUES
(1, 'Víctor', 'Muñoz Calzada', '1994-05-13', 'Barcelona', 'img', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(2, 'Mostafa', 'Abdedlillah', '1996-04-30', 'Barcelona', 'img', '2023-05-30 09:03:48', '2023-05-30 09:03:48');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `online_course_id` bigint UNSIGNED NOT NULL,
  `purchase_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'api', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(2, 'user', 'api', '2023-05-30 09:03:48', '2023-05-30 09:03:48');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `bootcamp_id` bigint UNSIGNED NOT NULL,
  `subscription_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_data_id` bigint UNSIGNED DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `personal_data_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'victor', '$2y$10$G7v2WfkWYDeu2Img952CAumb37Bil.eOOZANUGZZlmJD9/ZfrgL4.', 'victor@gmail.com', 1, 'v8fI7Mk42B', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(2, 'mosta', '$2y$10$Xxh/GWs2a6X3QyceST4siutEekqi6LAR6sRO0Ef/atN9U40Mn4rJ.', 'mosta@gmail.com', 2, 'fnzd7I3odd', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(3, 'Emma D\'Amore', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'susie75@example.com', NULL, 'DRjar4jFKA', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(4, 'Dr. Junior Schowalter', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'mara13@example.org', NULL, 'AZFFrsv9oX', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(5, 'Prof. Zackery Greenfelder III', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'norberto43@example.net', NULL, 'mgItCt7rYU', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(6, 'Ava Wilkinson', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'rsipes@example.org', NULL, 'd9fjGlQaQi', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(7, 'Porter Wehner', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'nwill@example.org', NULL, 'kizPnXDdQ0', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(8, 'Felipe Medhurst', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'emosciski@example.org', NULL, 'tZohaN99xV', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(9, 'Delbert Braun', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ohermiston@example.net', NULL, '1lW9JftCuB', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(10, 'Glenda Metz', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'kavon.bernier@example.org', NULL, 'L4826qWyCr', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(11, 'Melissa Bernhard', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ryan.irma@example.org', NULL, '6NMdJPrQ5G', '2023-05-30 09:03:48', '2023-05-30 09:03:48'),
(12, 'Prof. Ardith Fisher II', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'brown.garfield@example.net', NULL, '0ObAk5WmZi', '2023-05-30 09:03:48', '2023-05-30 09:03:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bootcamps`
--
ALTER TABLE `bootcamps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `instructors`
--
ALTER TABLE `instructors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `online_courses`
--
ALTER TABLE `online_courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `online_courses_instructor_id_foreign` (`instructor_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `personal_datas`
--
ALTER TABLE `personal_datas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchases_user_id_foreign` (`user_id`),
  ADD KEY `purchases_online_course_id_foreign` (`online_course_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subscriptions_user_id_foreign` (`user_id`),
  ADD KEY `subscriptions_bootcamp_id_foreign` (`bootcamp_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_personal_data_id_foreign` (`personal_data_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bootcamps`
--
ALTER TABLE `bootcamps`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `instructors`
--
ALTER TABLE `instructors`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `online_courses`
--
ALTER TABLE `online_courses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5339743;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_datas`
--
ALTER TABLE `personal_datas`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `online_courses`
--
ALTER TABLE `online_courses`
  ADD CONSTRAINT `online_courses_instructor_id_foreign` FOREIGN KEY (`instructor_id`) REFERENCES `instructors` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_online_course_id_foreign` FOREIGN KEY (`online_course_id`) REFERENCES `online_courses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `purchases_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD CONSTRAINT `subscriptions_bootcamp_id_foreign` FOREIGN KEY (`bootcamp_id`) REFERENCES `bootcamps` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `subscriptions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_personal_data_id_foreign` FOREIGN KEY (`personal_data_id`) REFERENCES `personal_datas` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
