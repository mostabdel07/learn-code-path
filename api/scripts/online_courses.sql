-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 28-05-2023 a las 00:14:01
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `learn-code-path`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bootcamps`
--

CREATE TABLE `bootcamps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `startDatetime` varchar(255) NOT NULL,
  `endDatetime` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `bootcamps`
--

INSERT INTO `bootcamps` VALUES(1, 'Iniciación en la programación con Java y MySQL', '2023-06-09T13:00', '2023-06-09T14:30', '2 semana(s)', 'Barcelona', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempore aliquid voluptate natus. Odio iste perspiciatis vitae harum! Atque itaque officiis consequatur doloremque, fugit odio est minus voluptates magni beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempore aliquid voluptate natus. Odio iste perspiciatis vitae harum! Atque itaque officiis consequatur doloremque, fugit odio est minus voluptates magni beatae! odio est minus voluptates magni beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'https://ts-production.imgix.net/images/088e397f-8949-42ad-a09c-631d611fd773.jpg?auto=compress,format&w=800&h=450', '2023-05-27 20:12:47', '2023-05-27 20:12:47');
INSERT INTO `bootcamps` VALUES(2, 'Laravel 9 y Next.js Full-stack', '2023-05-28T13:00', '2023-05-28T14:30', '4 semana(s)', 'Barcelona', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempore aliquid voluptate natus. Odio iste perspiciatis vitae harum! Atque itaque officiis consequatur doloremque, fugit odio est minus voluptates magni beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempore aliquid voluptate natus. Odio iste perspiciatis vitae harum! Atque itaque officiis consequatur doloremque, fugit odio est minus voluptates magni beatae! odio est minus voluptates magni beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'https://reffect.co.jp/wp-content/uploads/2022/03/Laravel9_-next_js-1024x585.png', '2023-05-27 20:12:47', '2023-05-27 20:12:47');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instructors`
--

CREATE TABLE `instructors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `instructors`
--

INSERT INTO `instructors` VALUES(1, 'Felix Lucas', 'Web and Videogame Developer', '2023-05-27 20:13:10', '2023-05-27 20:13:10');
INSERT INTO `instructors` VALUES(2, 'Nicolas Schurmann', 'Ingeniero e instructor de software', '2023-05-27 20:13:10', '2023-05-27 20:13:10');
INSERT INTO `instructors` VALUES(3, 'Cristian David Henao Hoyos', 'Ing de Sistemas y Computación, Desarrollador y Youtuber!', '2023-05-27 20:13:10', '2023-05-27 20:13:10');
INSERT INTO `instructors` VALUES(4, 'Héctor Costa Guzmán', 'Especialista en Python', '2023-05-27 20:13:10', '2023-05-27 20:13:10');
INSERT INTO `instructors` VALUES(5, 'Manuel Pallarés', 'Arquitecto + Diseñador Editorial', '2023-05-27 20:13:10', '2023-05-27 20:13:10');
INSERT INTO `instructors` VALUES(6, 'Jose Antonio Lozano de Paz', 'Instructor Sales', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(7, 'Diego León', 'Licenciado en Administración de empresas', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(8, 'Diego Córdoba', 'Ing. en Informática - Instructor GNU/Linux & Ethical Hacking', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(9, 'Cesar Colina Desarrollo Web', 'Full Stack Developer', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(10, 'Cyn Perazzo', 'Autora. Coach de vida especializada en autoconocimiento', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(11, 'Fernando Vicente', 'Desarrollador freelance', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(12, 'Marco Mendoza +80.000 Estudiantes', 'Ingeniero en Sistemas,  Téc en Informatica y Autodidacta', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(13, 'Mauricio Hurtado', 'Empresario del sector de las ciencias de la computación', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(14, 'Javier González', 'Product designer and UX mentor', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(15, 'Sebastian Espejo', 'Estudiante de ingeniería industrial', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(16, 'Federico Rodriguez', 'Experto en sistemas de crecimiento', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(17, 'Juan Fernando Urrego', 'Diseñador Visual y Desarrollador Web', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(18, 'Héctor Uriel Pérez', 'Microsoft MVP', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(19, 'Sergio Alejandro Pérez Gabriel', 'Ingeniero en Computación', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(20, 'Mywebstudies .com', 'Analista', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(21, 'La Clase De Coreano  Korean Class', 'Academia De Idioma Coreano', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(22, 'Andres Rojas', 'Desarrollador Python', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(23, 'Yury Zavaleta', 'Ingeniero en Sistemas', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(24, 'Horacio Meza', 'Ingeniero en Sistemas Computacionales', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(25, 'Jordan Alexander', 'Ingenierio en Tecnologías de la Información', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(26, 'Víctor Robles', 'Desarrollador web', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(27, 'Agustin Navarro Galdon', 'Frontend & Backend Developer || +150.000 estudiantes online', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(28, 'Yirsis Serrano', 'Administrador en T.I. y Fullstack Developer', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(29, 'Mercedes Arruiz', 'Coach de Empoderamiento', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(30, 'Nacho Cabanes', 'Ingeniero Software y profesor de Programación', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(31, 'Daniel Rodes Encarna Sanchez', 'Fundadores y directores de la escuela  internacional Lemat', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(32, 'Joaquin Pujols', 'Technology Lover | Infrastructure Engineer | DevOps | AWS', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(33, 'Juan Diego Morales del Corral', 'Software Developer', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(34, 'Tito Figueroa', 'Conferencista Internacional', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(35, 'Nelson Eduardo Castiblanco Sepulveda', 'Tec. Profesional en Programación de Software, Mecatronico.', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(36, 'Sergio Granell', 'Didáctico de la nutrición', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(37, 'Gustavo Meza', 'Ingeniero de Sistemas y Programador web', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(38, 'Maria Leticia Ditrani', 'Asesora en Marketing Digital - Creadora de Educreativa', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(39, 'Alejandro Lora', 'Software Developer', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(40, 'Joan Amengual | AWS Certified & Senior Blockchain Professional', 'Full Stack Engineer', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(41, 'HispaFight BJJ & MMA', 'BJJ - MMA - Grappling - Boxeo - K1 - Defensa Personal', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(42, 'Manuel Sánchez', 'Programador Web', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(43, 'Pedro Daniel Alcalá Rojas', 'Científico de datos || 70.000 estudiantes online', '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `instructors` VALUES(44, 'Daniel Carmona', 'Ing. en Sistemas Computacionales', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(45, 'JOSE OJEDA ROJAS', 'Diplomado en Empresariales y Programador', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(46, 'Esteban Balvin', 'Test Lead, Ingeniero informático, Instructor QA y automation', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(47, 'Jorge Luis García Coello', 'Fullstack Developer - Instructor en Aprendible.com', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(48, 'Daniela Baena', 'Chef Pastelera y Health Coach en Nutrición Integral', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(49, 'Diego Velazquez', 'Senior Product Designer', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(50, 'Martin Rojas', 'Creator of Digital Content', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(51, 'José Manuel De Aquino', 'Security Researcher', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(52, 'United Fitness Center', 'Coach', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(53, 'Agustín Dighiero', 'Contador público. Master en Marketing Digital & Ecommerce.', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(54, 'Rubén Rojas', 'Experto en Productividad, Scrum Master', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(55, 'Diego Davila • 750.000+ Students', 'Entrepreneur and Social Media Innovator', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(56, 'Juan José. Descailleaux', 'Ing. Industrial y Master en Ingeniería Industrial', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(57, 'Simon Castaño', 'FullStack developer and designer', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(58, 'Vladimir Rodríguez', 'Programador, técnico. Orador. Master PNL. Empresario. Coach.', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(59, 'Homero Raúl Vargas Cruz', 'Ingeniero en Sistemas', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(60, 'Gisel Gutierrez', 'Gisel Te Orienta- Abogada y Orientadora Familiar', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(61, 'German Flores', 'Ingeniero en Sistemas y en Electronica', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(62, 'Juan Guillermo Araya Toledo', 'Desarrollador digital', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(63, 'Juan Camarena', 'Ingeniero Mecatrónico', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(64, 'Fausto Enrique Montano Mendoza', 'Magister en Administración', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(65, 'Julie Guaglianono', 'Language Instructors', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(66, 'Elio Marcano', 'Informatic Engineer - Programmer', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(67, 'Numpi Cursos', 'Potencializa tu carrera profesional', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(68, 'Matias Picasso', 'Engineer - MBA', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(69, 'Federico Garay', 'Instructor Best-Seller. Apasionado por enseñar. Padre Feliz.', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(70, 'Liset Carolina Vásquez pino', 'Psicóloga', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(71, 'Holman Isidro Gonzalez Ortegon', 'Ingeniería informatica, Scrum Master, Color Grading', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(72, 'N.C. Kurt', 'Autor, dedicado al estudio del Potencial Humano.', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(73, 'Daniel Acuña', 'Expansión de Consciencia', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(74, 'Martin Frias', 'Founder of Coldd Security', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(75, 'Wilmer Cordoba', 'Desarrollador full Stack - Experto Contable', '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `instructors` VALUES(76, 'Verónica Montaño', 'Especialista en Microblading y Micropigmentación', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(77, 'Enrique Oriol', 'SW Engineer & entrepreneur', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(78, 'Tomas Ruiz Diaz', 'Desarrollador de Software', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(79, 'Juan Kaenel', 'Analista de Sistemas', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(80, 'CLAVEDIGITAL Training Center', 'Academia de sonido, audio y producción musical', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(81, 'Global Mentoring Ing. Ubaldo Acosta', 'Pasión por la enseñanza!', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(82, 'Ignacio Javier Doncel Ramos', 'Diseñador gráfico y animador motion graphics', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(83, 'Zenva Academy', 'Build Games, Apps, Websites and VR Experiences', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(84, 'Marlon Steven Martínez Romero', 'Trader Profesional', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(85, 'Escuela de Autoconocimiento', 'Instructor of Self-knowledge and mediator of Non-Violence', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(86, 'Juan Pablo De la torre Valdez', 'Creador de Código Con Juan - Aprende Con Proyectos Reales', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(87, 'José Eduardo López Montero', 'Análista de sistemas', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(88, 'Laura Gracia', 'Artísta plástica e ilustradora', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(89, 'Andres Torres', 'Instructor Adobe Photoshop Premiere AfterEffects Audition', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(90, 'Elba Sindoni', 'Lead Product Designer', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(91, 'Jairo Vera Chaly', 'Analista de inteligencia de negocios', '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `instructors` VALUES(92, 'Manuel Arnedo', 'Escritor, profesor y webmaster', '2023-05-27 20:13:13', '2023-05-27 20:13:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` VALUES(1, '2014_10_12_100000_create_password_reset_tokens_table', 1);
INSERT INTO `migrations` VALUES(2, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES(3, '2019_12_14_000001_create_personal_access_tokens_table', 1);
INSERT INTO `migrations` VALUES(4, '2023_04_12_071022_create_personal_datas_table', 1);
INSERT INTO `migrations` VALUES(5, '2023_04_12_071553_create_users_table', 1);
INSERT INTO `migrations` VALUES(6, '2023_04_12_073100_create_instructors_table', 1);
INSERT INTO `migrations` VALUES(7, '2023_04_12_073200_create_online_courses_table', 1);
INSERT INTO `migrations` VALUES(8, '2023_04_12_073718_create_purchases_table', 1);
INSERT INTO `migrations` VALUES(9, '2023_05_17_203222_create_bootcamps_table', 1);
INSERT INTO `migrations` VALUES(10, '2023_05_17_203843_create_subscriptions_table', 1);
INSERT INTO `migrations` VALUES(11, '2023_05_19_080204_create_permission_tables', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `model_has_roles`
--

INSERT INTO `model_has_roles` VALUES(1, 'App\\Models\\User', 1);
INSERT INTO `model_has_roles` VALUES(1, 'App\\Models\\User', 2);
INSERT INTO `model_has_roles` VALUES(2, 'App\\Models\\User', 3);
INSERT INTO `model_has_roles` VALUES(2, 'App\\Models\\User', 4);
INSERT INTO `model_has_roles` VALUES(2, 'App\\Models\\User', 5);
INSERT INTO `model_has_roles` VALUES(2, 'App\\Models\\User', 6);
INSERT INTO `model_has_roles` VALUES(2, 'App\\Models\\User', 7);
INSERT INTO `model_has_roles` VALUES(2, 'App\\Models\\User', 8);
INSERT INTO `model_has_roles` VALUES(2, 'App\\Models\\User', 9);
INSERT INTO `model_has_roles` VALUES(2, 'App\\Models\\User', 10);
INSERT INTO `model_has_roles` VALUES(2, 'App\\Models\\User', 11);
INSERT INTO `model_has_roles` VALUES(2, 'App\\Models\\User', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `online_courses`
--

CREATE TABLE `online_courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `headline` varchar(255) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `instructor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `online_courses`
--

INSERT INTO `online_courses` VALUES(101866, 'Cómo Programar para Emprendedores - JavaScript', 'Aprende JavaScript desde cero, a tu propio ritmo con este curso de Zenva.', '11.00', 4, 'https://img-c.udemycdn.com/course/480x270/101866_7118_7.jpg', 83, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(310112, 'Introducción a la Programación con Pseudocódigo en español', 'Un curso creado para enseñarte los fundamentos de la programación comunes en todos los lenguajes.', '16.00', 3, 'https://img-c.udemycdn.com/course/480x270/310112_d848_15.jpg', 4, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(456302, 'acoreanate curso coreano 1 online  para topik', 'La mejor opción para aprender coreano en el lugar y el tiempo que quieras, podrás prepararte paraTOPIK en curso coreano ', '7.00', 5, 'https://img-c.udemycdn.com/course/480x270/456302_7730_6.jpg', 21, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(600884, 'UX Design: Conceptos básicos para principiantes', 'Descubre qué es la Experiencia de Usuario y qué técnicas te ofrece para que  tu proyecto web o aplicación sea un éxito.', '14.95', 4, 'https://img-c.udemycdn.com/course/480x270/600884_5bd4.jpg', 14, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(749262, 'Curso de maquetación web de lo básico a lo avanzado', 'Aprende a maquetar sitios web de una manera fácil y efectiva en los lenguajes HTML5 y CSS3', '43.00', 5, 'https://img-c.udemycdn.com/course/480x270/749262_08d8_6.jpg', 17, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(882422, 'Curso Maestro de Python: De Cero a Programador Todoterreno', 'Aprenderás Python y sus mejores módulos: Tkinter, SQLite, Numpy, Pandas, Matplotlib, Pipenv, Django, FastAPI, Bs4 y más!', '19.00', 5, 'https://img-c.udemycdn.com/course/480x270/882422_0549_11.jpg', 4, '2023-05-27 20:13:10', '2023-05-27 20:13:10');
INSERT INTO `online_courses` VALUES(919844, 'Cómo Crear un Blog en WordPress Paso a Paso desde Cero', 'Construye tu blog en plataforma propia o gratis y empieza a crear y publicar tus propios artículos', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/919844_03c4_4.jpg', 92, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(920204, 'GNU/Linux: Da tus primeros pasos!! (Curso básico)', 'Una guía básica para iniciarse en el mundo GNU/Linux y entender sus fundamentos.', '58.00', 3, 'https://img-c.udemycdn.com/course/480x270/920204_6f8a_4.jpg', 8, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(958732, 'Curso rápido de relajación', 'Una vida relajada es la base de la felicidad creciente.', '18.00', 5, 'https://img-c.udemycdn.com/course/480x270/958732_0353_2.jpg', 85, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(1094878, 'Autoconocimiento desde Cero', 'Inicia el viaje más importante de tu vida a través de tu autoconocimiento', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/1094878_4870_3.jpg', 10, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(1104380, 'Aprende a crear tu primer sitio web con Laravel', 'Curso introductorio a Laravel PHP', '81.00', 3, 'https://img-c.udemycdn.com/course/480x270/1104380_304c_6.jpg', 47, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(1289352, 'Creación de Videojuegos en Unreal Engine para principiantes', 'Aprende a crear un videojuego 3D desde cero utilizando el Unreal Engine 4 con blueprints sin necesidad de codificar.', '9.95', 3, 'https://img-c.udemycdn.com/course/480x270/1289352_dc78_3.jpg', 24, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(1332174, 'Fundamentos de Java: Aprende Java desde cero con Netbeans!', 'Aprende a programar en Java desde cero, paso a paso y sin misterios, con el IDE de Apache Netbeans y el JDK 13', '12.95', 3, 'https://img-c.udemycdn.com/course/480x270/1332174_a8cc_3.jpg', 81, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(1392960, 'Inteligencia Emocional', 'Eleva tu Coeficiente Emocional y Progresa en la vida como Nunca Antes', '71.00', 3, 'https://img-c.udemycdn.com/course/480x270/1392960_8845_2.jpg', 34, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(1509816, 'JavaScript Moderno Guía Definitiva Construye +20 Proyectos', 'Aprende el Lenguaje de Programación Web más popular paso a paso con +20 Proyectos - Incluye Proyecto MERN Full Stack', '72.00', 4, 'https://img-c.udemycdn.com/course/480x270/1509816_dff8.jpg', 86, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(1513292, 'Fundamentos de Programación, Algoritmos en java y JavaScript', 'Aprende a programar con practicas desde cero, pasando del seudocodigo y diagramas de flujo a un lenguaje de programación', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/1513292_9a09_7.jpg', 3, '2023-05-27 20:13:10', '2023-05-27 20:13:10');
INSERT INTO `online_courses` VALUES(1920428, 'WordPress Introducción Practica a Gutenberg el Nuevo Editor', 'Conoce como trabajar con Gutenberg, utilizar bloques, preparar tu theme para Gutenberg y encontrar bloques más Avanzados', '8.00', 5, 'https://img-c.udemycdn.com/course/480x270/1920428_a413_4.jpg', 86, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(1932018, 'Curso JavaFX - Aplicaciones de Escritorio Modernas', 'Desarrollo de aplicaciones de escritorio en lenguaje Java con interfaz moderna e intuitiva.', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/1932018_9d4b.jpg', 35, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(1966466, 'Conociendo Adobe Illustrator CC', 'Conociendo Adobe Illustrator CC', '8.99', 3, 'https://img-c.udemycdn.com/course/480x270/1966466_9d72.jpg', 82, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(2039484, 'Blender la guía completa para novatos', 'Aprende a realizar proyectos en Blender sin conocimientos previos y mejora tus habilidades en producción 3D', '12.00', 5, 'https://img-c.udemycdn.com/course/480x270/2039484_05d1_6.jpg', 17, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(2053413, 'Desarrollo de aplicaciones móvil android sin programación', 'Aprende a crear aplicaciones móviles sin saber programación', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/2053413_9f27_2.jpg', 57, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(2217820, 'NestJS: Node + Typescript al estilo Angular para crear APIS', 'INTRODUCCIÓN: APIs con TypeScript como si estuvieras en Angular. Crea Servicios Web API como un PRO. Aprende desde cero.', '7.00', 3, 'https://img-c.udemycdn.com/course/480x270/2217820_28c1_3.jpg', 39, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(2217998, 'Curso Completo de Marketing Digital - 23 Cursos en 1', 'Aprenda Marketing Digital para crecer su negocio: Marketing de redes sociales, Facebook, SEO, YouTube, E-mail Marketing.', '3.99', 5, 'https://img-c.udemycdn.com/course/480x270/2217998_02cb_5.jpg', 55, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(2292651, 'Mindfulness para crear Hábitos', '8 técnicas para crear hábitos saludables usando Mindfulness', '15.00', 5, 'https://img-c.udemycdn.com/course/480x270/2292651_c383_2.jpg', 29, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(2317918, 'Productividad│Alcanza tus Metas y ten tiempo para todo', '¿Sientes que no avanzas? Consigue tus objetivos y dispón de más tiempo mediante la productividad personal', '12.00', 4, 'https://img-c.udemycdn.com/course/480x270/2317918_6a3e_2.jpg', 54, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(2348096, 'Curso Base sobre Nutrición y Entrenamiento', 'Información esencial sobre nutrición', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/2348096_b829.jpg', 36, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(2357486, 'Inicia en la  Programacion: Primer Paso : Git y Terminal', 'Herramientas necesarias para Aprender a programar: Git, Terminal y Visual Studio code. Curso de inicio en Programacion', '15.00', 5, 'https://img-c.udemycdn.com/course/480x270/2357486_e795.jpg', 9, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(2367340, '¡Business Intelligence para todos!', 'Introducción al mundo del Business Intelligence aplicado a las empresas utilizando Power BI, Qlik sense y Tableau.', '95.00', 4, 'https://img-c.udemycdn.com/course/480x270/2367340_7321_5.jpg', 43, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(2437618, 'Curso ágil de Google Sheets (hojas de cálculo) desde cero.', 'Aprende a usar rápidamente Google Sheets, una alternativa a Excel totalmente gratuita y en la nube. Básico a Intermedio', '95.00', 3, 'https://img-c.udemycdn.com/course/480x270/2437618_16b8_6.jpg', 87, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(2493858, 'Fundamentos de Angular', '¿Acabas de llegar a Angular? Este es el curso que necesitas para perderle el miedo y empezar a trabajar con Angular.', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/2493858_4bda.jpg', 77, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(2500242, 'Taller de creación de Backdoors con Python - Parte 1', '[+] ¡ APRENDE A CREAR TUS PROPIAS HERRAMIENTAS DE ACCESO REMOTO !', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/2500242_f191.jpg', 51, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(2547201, 'Video Curso de Fundamentos del Trading', 'Completo Curso de Introducción al Trading, 8 Vídeos cargados de contenido de valor, ejercicios prácticos, operativa real', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/2547201_5bea_2.jpg', 84, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(2583420, 'Introducción a la Pastelería Saludable', 'Todo sobre Ingredientes saludables, utensilios de pastelería y creatividad. Al final, una Master Class inédita.', '11.00', 3, 'https://img-c.udemycdn.com/course/480x270/2583420_d5f7.jpg', 48, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(2661342, 'React JS: La biblioteca de JS creada por Facebook', 'Aprende paso a paso que es React Js, los Hooks, Componentes, Props, Navegación con React Router Dom, y mucho mas...', '6.00', 4, 'https://img-c.udemycdn.com/course/480x270/2661342_4f49_6.jpg', 27, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(2697902, 'Tablas dinámicas desde cero hasta análisis de datos', 'Domina las tablas dinámicas y análisis de datos con ejemplos que se aplican en el mundo laboral (Excel 2010 - 2019)', '34.00', 4, 'https://img-c.udemycdn.com/course/480x270/2697902_f902.jpg', 91, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(2731162, 'Máximo Potencial 1: Colección Videos de Desarrollo Personal', 'Videos Sobre Diferentes Temas de Desarrollo Personal para Pensar, Reflexionar y Cambiar. Con el Autor N.C. Kurt.', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/2731162_30a4_2.jpg', 72, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(2760004, 'Javascript Curso Gratis 2020', 'El lenguaje de programación más popular y amado por la mayoría de los programadores. Aprende Javascript gratis', '40.00', 3, 'https://img-c.udemycdn.com/course/480x270/2760004_d399.jpg', 66, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(2904068, 'Curso de CSS3, Flexbox y CSS Grid Layout | Básico y rápido', 'Aprende CSS 3, CSS Flexbox y Grid Layout y da tus primeros pasos en la maquetación web. Dale estilos a tus páginas web.', '2.00', 4, 'https://img-c.udemycdn.com/course/480x270/2904068_4961.jpg', 26, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(2962192, 'Introducción a la Producción Musical', 'Cómo entrar en el negocio de la música y la producción', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/2962192_58e9_6.jpg', 80, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(3046162, 'Diviértete creando personajes cartoon', 'Con este curso aprenderás a crear tus personajes cartoon desde cero. Partiendo de formas básicas, sencillo y divertido.', '86.00', 3, 'https://img-c.udemycdn.com/course/480x270/3046162_b1c8_2.jpg', 88, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(3109394, 'Microsoft Excel - Funciones de la A a la Z', 'Aprende a utilizar las fórmulas más útiles y poderosas de Excel de una manera sencilla con casos practicos.', '52.95', 5, 'https://img-c.udemycdn.com/course/480x270/3109394_edaa_4.jpg', 67, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(3190088, 'CRUD Angular + NET Core + Entity Framework Core + MySql', 'Desarrollo frontend con Angular 9, backend NET Core 3, Entity Framework Core 3 y MySQL!', '87.99', 3, 'https://img-c.udemycdn.com/course/480x270/3190088_191f_4.jpg', 78, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(3201160, 'Crea una página web moderna con HTML CSS Y JAVASCRIPT', 'Aprende a crear una página web con HTML5 CSS3 y Javacript, [Adaptable a dispositivos móviles]', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/3201160_e33c_2.jpg', 25, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(3412194, 'Escribe Código JavaScript Seguro', 'El mejor curso de seguridad para tus aplicaciones hechas en JavaScript', '73.00', 3, 'https://img-c.udemycdn.com/course/480x270/3412194_a3b3_2.jpg', 28, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(3506094, 'Edición de video con Adobe Premiere Pro - Primera parte', 'Aprende a editar video de forma profesional', '9.99', 5, 'https://img-c.udemycdn.com/course/480x270/3506094_3830.jpg', 89, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(3639538, 'Introducción al Data Science', 'Aprende acerca de la Ciencia que está revolucionando el mundo de los negocios y el rol del Científico de Datos.', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/3639538_fccc_2.jpg', 43, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(3696178, 'Entrenamiento especializado en Mujeres', 'Enfocado a ganancia de Fuerza', '8.00', 3, 'https://img-c.udemycdn.com/course/480x270/3696178_b5fa_2.jpg', 52, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(3698162, 'Tablas dinámicas intensivo', 'Domina el arte de las tablas dinámicas', '73.00', 4, 'https://img-c.udemycdn.com/course/480x270/3698162_4acf_3.jpg', 7, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(3763082, 'Curso gratuito de Nutrición y Dietética', 'Aprende a cuidar tu salud', '4.00', 5, 'https://img-c.udemycdn.com/course/480x270/3763082_4faa.jpg', 20, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(3951350, 'Contabilidad para principiantes', 'Curso introductorio a la contabilidad. Presentaremos la contabilidad, el libro diario y balances.', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/3951350_8d77.jpg', 53, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(4109502, 'Introducción a BI, Modelos y DAX Con Power Pivot de Excel', 'Dale super poderes a los procesos de Excel con Power Pivot y el lenguaje DAX', '28.99', 3, 'https://img-c.udemycdn.com/course/480x270/4109502_47f6.jpg', 75, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(4177000, '(GRATIS) Ethical Hacking Curso Introductiorio Usando Kali', 'Aprenda a como asegurar su maquina para empezar aprender conceptos de cyberseguridad o ethical hacking.', '49.00', 4, 'https://img-c.udemycdn.com/course/480x270/4177000_a38d_2.jpg', 32, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(4188680, 'Aprende Lógica de Programación (Básico)', 'Los fundamentos para un buen programador', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/4188680_4371_2.jpg', 19, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(4214062, 'Curso de Inglés GRATIS para principiantes', '¡100% GRATIS! Esta es la forma más sencilla y eficaz de empezar a hablar Inglés.', '6.99', 4, 'https://img-c.udemycdn.com/course/480x270/4214062_fb71_3.jpg', 65, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(4245584, 'Aprender a gestionar el dinero - Finanzas personales', 'Capacidad de ahorro, presupuestos, flujos de fondos, endeudamiento e inversiones.', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/4245584_cbfd.jpg', 68, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(4322950, 'Software Testing desde cero : MasterClass todo en 1 (2023)', 'Inicia tu carrera como QA desde 0 , aprende sobre pruebas ágiles, APIs, automatización con Selenium, Cypress, y más...', '32.00', 3, 'https://img-c.udemycdn.com/course/480x270/4322950_c28d_4.jpg', 46, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(4348320, 'Curso de Diseño de Cejas y Sombreado con Henna', 'Perfecciona tu diseño de cejas y sombrea con henna como una profesional.', '4.00', 4, 'https://img-c.udemycdn.com/course/480x270/4348320_f9b9.jpg', 76, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(4369426, 'Nmap 101 - Aprende Nmap desde cero', 'Aprende a utilizar una de las herramientas más usadas en ciberseguridad. Año 2021.', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/4369426_92af.jpg', 79, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(4452440, 'Monta tu laboratorio de pen testing', 'Introducción al ethical hacking', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/4452440_0ee2_3.jpg', 61, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(4468626, 'Guía definitiva para crecer en Instagram', 'Aprenderás los 5 pasos fundamentales para crecer en Instagram. Las estrategias más avanzadas de Marketing Digital.', '75.00', 4, 'https://img-c.udemycdn.com/course/480x270/4468626_f747_3.jpg', 16, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(4542042, 'Lo básico de C#', 'Aprende los fundamentos de la programación de computadoras, usando C#', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/4542042_063c.jpg', 30, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(4554466, 'Scrum Elemental', 'Scrum desde cero', '46.99', 3, 'https://img-c.udemycdn.com/course/480x270/4554466_8ef1_3.jpg', 71, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(4568420, 'Strapi v4: De cero a Experto', 'Aprende Strapi desde cero para crear tu propia API REST y tu administrador de aplicaciones', '6.00', 4, 'https://img-c.udemycdn.com/course/480x270/4568420_52eb_2.jpg', 27, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(4577996, 'Hacking Ético: Pentesting Basico en Android Con Metasploit', 'Aprende los Conceptos Básicos del Pentesting y Hacking en  Sistemas Android Con Metasploit', '13.00', 3, 'https://img-c.udemycdn.com/course/480x270/4577996_17e4_2.jpg', 12, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(4609034, 'Fundamentos de Blockchain: Tecnología, Criptomonedas y NFTs', '¡Aprende los elementos clave de la tecnología Blockchain: Bitcoin, Ethereum, Smart Contracts, Tokens NFT y mucho más!', '73.00', 3, 'https://img-c.udemycdn.com/course/480x270/4609034_897d_6.jpg', 40, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(4641230, 'Taller de Consultas SQL', 'Aprende a realizar múltiples consultas y descubre lo que puede hacer el comando SELECT.', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/4641230_56b2_4.jpg', 44, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(4641460, 'Virtualización con VirtualBox (Enfocada a la ciberseguridad)', 'Este curso gratuito de Coldd Security te servirá para exprimir al máximo el uso de este hipervisor de tipo 2.', '81.00', 4, 'https://img-c.udemycdn.com/course/480x270/4641460_6056.jpg', 74, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(4661946, 'Más de 200 trucos de la consola de GNU/Linux y Shell Script', 'Descubra el potencial de la consola de GNU/Linux y aprenda a automatizar procesos mediante Shell Script.', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/4661946_52b3.jpg', 11, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(4685584, 'Curso de Diseño gráfico en Canva', 'Aprende desde cero a utilizar Canva y a crear diseños para redes sociales', '87.99', 4, 'https://img-c.udemycdn.com/course/480x270/4685584_1cde_2.jpg', 18, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(4712048, 'Modelamiento de Procesos usando el estándar BPMN', 'Cómo entender el funcionamiento de una empresa utilizando para documentarlo el estándar BPMN', '85.95', 4, 'https://img-c.udemycdn.com/course/480x270/4712048_8982.jpg', 56, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(4736326, 'CRUD básico usando FastAPI', '¡Aprende a crear un CRUD con FastAPI!', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/4736326_1110.jpg', 22, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(4747144, 'Aprende a editar gameplays para youtube', 'Edicion en Premiere Pro', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/4747144_ff69.jpg', 50, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(4875680, 'Laravel Livewire básico - Framework Full Stack para Laravel', 'Aprende los fundamentos de Laravel Livewire con éste curso para principiantes y crea aplicaciones totalmente dinámicas.', '1.00', 4, 'https://img-c.udemycdn.com/course/480x270/4875680_e6c0_5.jpg', 37, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(4878712, 'JavaScript TOTAL - 18 Días para ser Desarrollador Web', 'Crea sitios web desde Cero. Completa 18 PROYECTOS. Practica con +130 ejercicios. HTML, CSS, Node.js, Angular, JSON y más', '91.00', 4, 'https://img-c.udemycdn.com/course/480x270/4878712_df70_4.jpg', 69, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(4891812, 'Diseño UI: Figma esencial para diseño de interfaces 2023', 'Ejercicios prácticos para internalizar el uso de la herramienta', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/4891812_a748_2.jpg', 90, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(4956110, 'Como Crear un Sitio Web Profesional en 30 minutos WordPress', 'Crea un sitio web atractivo en 30 minutos con WordPress y Elementor. Páginas web optimizadas. ¡Sin saber programar!', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/4956110_6325_4.jpg', 55, '2023-05-27 20:13:13', '2023-05-27 20:13:13');
INSERT INTO `online_courses` VALUES(4958750, 'Aprende a crear un buscador web sin código - App Móvil y WEB', 'Con AppGyver crearas un potente buscador web multiplataforma y 100% funcional, con resultados estructurados y rápidos.', '65.00', 4, 'https://img-c.udemycdn.com/course/480x270/4958750_e61a_3.jpg', 13, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(4998416, 'Introducción a la creación de Azure Virtual Machines', 'Crea maquinas virtuales Linux y Windows utilizando el Portal de Azure.', '6.00', 4, 'https://img-c.udemycdn.com/course/480x270/4998416_76b2.jpg', 33, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(5004074, 'Crea una página web con Framer sin saber programar | No Code', 'Aprende a crear páginas web en minutos sin la necesidad de saber programar, no necesitas saber HTML, CSS o Javascript', '16.00', 4, 'https://img-c.udemycdn.com/course/480x270/5004074_2d27_3.jpg', 49, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(5016332, 'Crea una Pokédex con React.js y TypeScript', '¡Aprender y practica React.js con este divertido curso!', '13.00', 5, 'https://img-c.udemycdn.com/course/480x270/5016332_090b_2.jpg', 42, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(5028210, 'Tarot Marsella Lemat gratuito', '22 arcanos y 4 ases. por Daniel Rodes y Encarna Sanchez de la escuela internacional Lemat.', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/5028210_58be_2.jpg', 31, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(5035658, 'Aprende Figma para Programadores haciendo un Portfolio Web', '¡Da tus primeros pasos en el diseño web con este curso gratuito apto para principiantes!', '9.00', 5, 'https://img-c.udemycdn.com/course/480x270/5035658_46a8_3.jpg', 42, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(5076332, 'Introducción a la programación en C, java, C#, Python y JS', 'Aprende fundamentos de programación  : tipos de datos, estructuras de control, operaciones aritméticos, lógicas y más', '53.99', 3, 'https://img-c.udemycdn.com/course/480x270/5076332_bd7b_4.jpg', 62, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(5110296, 'Cómo decir adiós a una relación tóxica y perjudicial.', 'Libérate de una prisión emocional que quebranta tu autoestima y limita tu desarrollo personal.', '21.00', 4, 'https://img-c.udemycdn.com/course/480x270/5110296_6ca1.jpg', 60, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(5114102, 'Crea un juego de Plataformas 3D con Unreal Engine 5', 'Aprende a crear un juego pequeño pero muy completo con Unreal Engine 5', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/5114102_c590.jpg', 1, '2023-05-27 20:13:10', '2023-05-27 20:13:10');
INSERT INTO `online_courses` VALUES(5118130, 'Curso de Excel: Aprende Excel como un ingeniero.', 'Entendimiento de macros a partir de una tabla de amortización de crédito.', '5.00', 3, 'https://img-c.udemycdn.com/course/480x270/5118130_c49e_3.jpg', 15, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(5121854, 'Sketchup course. Building a strong foundations', 'Learn to think as Sketchup does. Break the ice wall and start using this amazing software', '44.00', 3, 'https://img-c.udemycdn.com/course/480x270/5121854_4f56_3.jpg', 5, '2023-05-27 20:13:10', '2023-05-27 20:13:10');
INSERT INTO `online_courses` VALUES(5121900, 'Gestión de Redes Sociales - Community Manager & Social Media', 'Aprende a gestionar redes sociales de manera profesional', '19.00', 5, 'https://img-c.udemycdn.com/course/480x270/5121900_4dc5_2.jpg', 38, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(5125842, 'Introducción a la Ciberseguridad', 'Identifica las principales amenazas en el ciberespacio, comprendiendo los fundamentos de la ciberseguridad.', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/5125842_b9bc.jpg', 23, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(5144958, 'FODA para crear tu emprendimiento', 'La mejor forma de emprender es conociendo tu FODA', '0.00', 4, 'https://img-c.udemycdn.com/course/480x270/5144958_b12a.jpg', 64, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(5150682, 'Wordpress framework para crear tu web paso a paso', 'Crea tu web con bloques ( sin programacion )', '12.00', 5, 'https://img-c.udemycdn.com/course/480x270/5150682_8426_4.jpg', 45, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(5158688, 'Bases de XML: los fundamentos esenciales que debes conocer', 'Entiende de una vez esta herramienta tan habitual en el desarrollo de software', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/5158688_9934_4.jpg', 58, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(5168022, 'Recibí Guía de Tu Espíritu con Péndulo', 'Como establecer comunicación clara con el espíritu para mejorar aspectos de tu vida', '75.00', 5, 'https://img-c.udemycdn.com/course/480x270/5168022_a81e_2.jpg', 73, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(5168292, 'Ultimate Python: de cero a programador experto', 'Conviértete en programador experto viendo desde lo básico hasta lo más avanzado de Python', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/5168292_1584_4.jpg', 2, '2023-05-27 20:13:10', '2023-05-27 20:13:10');
INSERT INTO `online_courses` VALUES(5181288, 'Vende más con ChatGPT: Domina la revolución - Básico', 'Vende más con ChatGPT: Domina la tecnología que revolucionará tu estrategia comercial y te hará marcar la diferencia', '68.99', 4, 'https://img-c.udemycdn.com/course/480x270/5181288_b26f_3.jpg', 6, '2023-05-27 20:13:11', '2023-05-27 20:13:11');
INSERT INTO `online_courses` VALUES(5184136, 'Curso gratis de práctica Solidworks CSWA - nivel básico', 'Curso gratis de práctica para la certificación Solidworks asociado CSWA - nivel básico', '0.00', 3, 'https://img-c.udemycdn.com/course/480x270/5184136_658c.jpg', 63, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(5215168, 'Desarrollo de paquetes de PHP & Laravel 10', 'Crea paquetes reutilizables y robustos', '2.00', 4, 'https://img-c.udemycdn.com/course/480x270/5215168_2d2a_2.jpg', 59, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(5223378, '“Autoconocimiento y Transformación”', 'UN RECORRIDO DE ADENTRO HACIA AFUERA “Autoconocimiento y Transformación”', '4.00', 5, 'https://img-c.udemycdn.com/course/480x270/5223378_88f9_2.jpg', 70, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(5228474, 'Curso de Hacking Etico: El Ransomware en Android y Windows.', 'Aprende a Ejecutar Ataques con Ransomware y como Mitigarlos, y Comprende cómo Funciona el Malware más Letal del Mundo.', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/5228474_d75e_4.jpg', 12, '2023-05-27 20:13:12', '2023-05-27 20:13:12');
INSERT INTO `online_courses` VALUES(5239422, 'BJJ | Drills para Jiu Jitsu Brasileño en español', 'Drills de BJJ en solitario y en pareja para mejorar tu movilidad', '0.00', 5, 'https://img-c.udemycdn.com/course/480x270/5239422_6927_3.jpg', 41, '2023-05-27 20:13:11', '2023-05-27 20:13:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_datas`
--

CREATE TABLE `personal_datas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `location` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_datas`
--

INSERT INTO `personal_datas` VALUES(1, 'Víctor', 'Muñoz Calzada', '1994-05-13', 'Barcelona', 'img', '2023-05-27 20:12:46', '2023-05-27 20:12:46');
INSERT INTO `personal_datas` VALUES(2, 'Mostafa', 'Abdedlillah', '1996-04-30', 'Barcelona', 'img', '2023-05-27 20:12:46', '2023-05-27 20:12:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purchases`
--

CREATE TABLE `purchases` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `online_course_id` bigint(20) UNSIGNED NOT NULL,
  `purchase_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` VALUES(1, 'admin', 'api', '2023-05-27 20:12:46', '2023-05-27 20:12:46');
INSERT INTO `roles` VALUES(2, 'user', 'api', '2023-05-27 20:12:46', '2023-05-27 20:12:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `bootcamp_id` bigint(20) UNSIGNED NOT NULL,
  `subscription_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `personal_data_id` bigint(20) UNSIGNED DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` VALUES(1, 'victor', '$2y$10$vID6yb4R2kKJqHSg5MVQKeIaalLKr4xYKm8P1bX/NZMHTHRitN3DO', 'victor@gmail.com', 1, 'RDtl5UWKvD', '2023-05-27 20:12:46', '2023-05-27 20:12:46');
INSERT INTO `users` VALUES(2, 'mosta', '$2y$10$LqHl2enYIMxD7zxLoR9jpeq6ud6zGpVCf0wOC4N3Cxde3aOhmrEVe', 'mosta@gmail.com', 2, 'BUN5fVtfys', '2023-05-27 20:12:47', '2023-05-27 20:12:47');
INSERT INTO `users` VALUES(3, 'Delfina Wisoky DVM', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'alan68@example.com', NULL, 'WtgKA2GKdM', '2023-05-27 20:12:47', '2023-05-27 20:12:47');
INSERT INTO `users` VALUES(4, 'Vince Welch', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'rodrigo.abshire@example.net', NULL, 'UY4EmBu61s', '2023-05-27 20:12:47', '2023-05-27 20:12:47');
INSERT INTO `users` VALUES(5, 'Tiara Von', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'karolann.abshire@example.com', NULL, 'emwuL1w1Nq', '2023-05-27 20:12:47', '2023-05-27 20:12:47');
INSERT INTO `users` VALUES(6, 'Anjali Russel', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'murray.elizabeth@example.com', NULL, 'ylykeDX4Bj', '2023-05-27 20:12:47', '2023-05-27 20:12:47');
INSERT INTO `users` VALUES(7, 'Santina Kozey', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'okeefe.johnathan@example.org', NULL, 'eZMZvm1SCb', '2023-05-27 20:12:47', '2023-05-27 20:12:47');
INSERT INTO `users` VALUES(8, 'Prof. Esteban Pfannerstill', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ursula91@example.com', NULL, 'sPe8dZ6iir', '2023-05-27 20:12:47', '2023-05-27 20:12:47');
INSERT INTO `users` VALUES(9, 'Eulah Hyatt', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'doris.watsica@example.com', NULL, 'fHE9hEFMOz', '2023-05-27 20:12:47', '2023-05-27 20:12:47');
INSERT INTO `users` VALUES(10, 'Elaina Maggio', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'henri30@example.com', NULL, 'IiIT8cwwhf', '2023-05-27 20:12:47', '2023-05-27 20:12:47');
INSERT INTO `users` VALUES(11, 'Maynard Schulist', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'mckayla70@example.net', NULL, 'rqdZFgJGJ8', '2023-05-27 20:12:47', '2023-05-27 20:12:47');
INSERT INTO `users` VALUES(12, 'Mr. Isaias Oberbrunner', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'cullen00@example.net', NULL, '17KE9SI9iG', '2023-05-27 20:12:47', '2023-05-27 20:12:47');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bootcamps`
--
ALTER TABLE `bootcamps`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `instructors`
--
ALTER TABLE `instructors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indices de la tabla `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indices de la tabla `online_courses`
--
ALTER TABLE `online_courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `online_courses_instructor_id_foreign` (`instructor_id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `personal_datas`
--
ALTER TABLE `personal_datas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchases_user_id_foreign` (`user_id`),
  ADD KEY `purchases_online_course_id_foreign` (`online_course_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indices de la tabla `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indices de la tabla `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subscriptions_user_id_foreign` (`user_id`),
  ADD KEY `subscriptions_bootcamp_id_foreign` (`bootcamp_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_personal_data_id_foreign` (`personal_data_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bootcamps`
--
ALTER TABLE `bootcamps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `instructors`
--
ALTER TABLE `instructors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `online_courses`
--
ALTER TABLE `online_courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5239423;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personal_datas`
--
ALTER TABLE `personal_datas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `online_courses`
--
ALTER TABLE `online_courses`
  ADD CONSTRAINT `online_courses_instructor_id_foreign` FOREIGN KEY (`instructor_id`) REFERENCES `instructors` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_online_course_id_foreign` FOREIGN KEY (`online_course_id`) REFERENCES `online_courses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `purchases_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD CONSTRAINT `subscriptions_bootcamp_id_foreign` FOREIGN KEY (`bootcamp_id`) REFERENCES `bootcamps` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `subscriptions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_personal_data_id_foreign` FOREIGN KEY (`personal_data_id`) REFERENCES `personal_datas` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;