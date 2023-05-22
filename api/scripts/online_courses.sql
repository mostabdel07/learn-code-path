-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 22, 2023 at 08:30 PM
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
(456302, 'acoreanate curso coreano 1 online  para topik', 'La mejor opción para aprender coreano en el lugar y el tiempo que quieras, podrás prepararte paraTOPIK en curso coreano ', '24.00', 4, 'https://img-b.udemycdn.com/course/480x270/456302_7730_6.jpg', 50, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(600884, 'UX Design: Conceptos básicos para principiantes', 'Descubre qué es la Experiencia de Usuario y qué técnicas te ofrece para que  tu proyecto web o aplicación sea un éxito.', '7.99', 5, 'https://img-b.udemycdn.com/course/480x270/600884_5bd4.jpg', 2, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(792278, 'De Novato a Desarrollador Exitoso', 'Los 7 Pasos para Ganarte la Vida Desarrollando Aplicaciones', '0.00', 5, 'https://img-b.udemycdn.com/course/480x270/792278_1240_3.jpg', 95, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(831442, 'Aprende a crear animaciones y efectos interactivos con CSS3', 'Construye recursos interactivos utilizando sólo CSS3 sin necesidad de javascript.', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/831442_f51a_2.jpg', 6, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(919844, 'Cómo Crear un Blog en WordPress Paso a Paso desde Cero', 'Construye tu blog en plataforma propia o gratis y empieza a crear y publicar tus propios artículos', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/919844_03c4_4.jpg', 66, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(920204, 'GNU/Linux: Da tus primeros pasos!! (Curso básico)', 'Una guía básica para iniciarse en el mundo GNU/Linux y entender sus fundamentos.', '0.00', 5, 'https://img-b.udemycdn.com/course/480x270/920204_6f8a_4.jpg', 42, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(958732, 'Curso rápido de relajación', 'Una vida relajada es la base de la felicidad creciente.', '15.99', 4, 'https://img-b.udemycdn.com/course/480x270/958732_0353_2.jpg', 60, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(970462, 'Ukelele exprés: aprende a tocar en menos de un mes', 'Aprende todo lo básico de este divertido instrumento en un tiempo récord!', '95.00', 3, 'https://img-b.udemycdn.com/course/480x270/970462_095c_3.jpg', 90, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(1094878, 'Autoconocimiento desde Cero', 'Inicia el viaje más importante de tu vida a través de tu autoconocimiento', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/1094878_4870_3.jpg', 8, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(1251780, 'Aprende Python desde cero', 'Aprende programación orientada a objetos y base de datos mongoDB con python', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/1251780_c7d3_5.jpg', 31, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(1289352, 'Creación de Videojuegos en Unreal Engine para principiantes', 'Aprende a crear un videojuego 3D desde cero utilizando el Unreal Engine 4 con blueprints sin necesidad de codificar.', '8.00', 5, 'https://img-b.udemycdn.com/course/480x270/1289352_dc78_3.jpg', 38, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(1317138, 'Fotografia Movil: Iníciate y aprende las bases', 'Iníciate en la fotografía digital usando el móvil. Luego, continúa con el móvil o con una cámara, tú decides.', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/1317138_7fcb.jpg', 7, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(1332174, 'Fundamentos de Java: Aprende Java desde cero con Netbeans!', 'Aprende a programar en Java desde cero, paso a paso y sin misterios, con el IDE de Apache Netbeans y el JDK 13', '15.00', 3, 'https://img-b.udemycdn.com/course/480x270/1332174_a8cc_3.jpg', 67, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(1392960, 'Inteligencia Emocional', 'Eleva tu Coeficiente Emocional y Progresa en la vida como Nunca Antes', '13.00', 5, 'https://img-b.udemycdn.com/course/480x270/1392960_8845_2.jpg', 24, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(1513292, 'Fundamentos de Programación, Algoritmos en java y JavaScript', 'Aprende a programar con practicas desde cero, pasando del seudocodigo y diagramas de flujo a un lenguaje de programación', '75.00', 4, 'https://img-b.udemycdn.com/course/480x270/1513292_9a09_7.jpg', 5, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(1932018, 'Curso JavaFX - Aplicaciones de Escritorio Modernas', 'Desarrollo de aplicaciones de escritorio en lenguaje Java con interfaz moderna e intuitiva.', '3.00', 3, 'https://img-b.udemycdn.com/course/480x270/1932018_9d4b.jpg', 91, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(1966466, 'Conociendo Adobe Illustrator CC', 'Conociendo Adobe Illustrator CC', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/1966466_9d72.jpg', 70, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2039484, 'Blender la guía completa para novatos', 'Aprende a realizar proyectos en Blender sin conocimientos previos y mejora tus habilidades en producción 3D', '13.00', 4, 'https://img-b.udemycdn.com/course/480x270/2039484_05d1_6.jpg', 6, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2173972, 'Descubre el significado emocional y mental de la enfermedad', 'Entiende porque se manifiestan las enfermedades y que aprendizajes hay detrás de ellas', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/2173972_4c18.jpg', 57, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2217820, 'NestJS: Node + Typescript al estilo Angular para crear APIS', 'INTRODUCCIÓN: APIs con TypeScript como si estuvieras en Angular. Crea Servicios Web API como un PRO. Aprende desde cero.', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/2217820_28c1_3.jpg', 43, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2292651, 'Mindfulness para crear Hábitos', '8 técnicas para crear hábitos saludables usando Mindfulness', '0.00', 5, 'https://img-b.udemycdn.com/course/480x270/2292651_c383_2.jpg', 27, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2317918, 'Productividad│Alcanza tus Metas y ten tiempo para todo', '¿Sientes que no avanzas? Consigue tus objetivos y dispón de más tiempo mediante la productividad personal', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/2317918_6a3e_2.jpg', 49, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2348096, 'Curso Base sobre Nutrición y Entrenamiento', 'Información esencial sobre nutrición', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/2348096_b829.jpg', 37, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2355642, 'Dart & Introducción a Flutter', '¡Aprende Dart el lenguaje de Google para crear apps móviles iOS y Android con Flutter! Un código para muchas plataformas', '13.00', 5, 'https://img-b.udemycdn.com/course/480x270/2355642_283c.jpg', 44, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2357486, 'Inicia en la  Programacion: Primer Paso : Git y Terminal', 'Herramientas necesarias para Aprender a programar: Git, Terminal y Visual Studio code. Curso de inicio en Programacion', '57.00', 4, 'https://img-b.udemycdn.com/course/480x270/2357486_e795.jpg', 32, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2367340, '¡Business Intelligence para todos!', 'Introducción al mundo del Business Intelligence aplicado a las empresas utilizando Power BI, Qlik sense y Tableau.', '11.00', 4, 'https://img-b.udemycdn.com/course/480x270/2367340_7321_5.jpg', 46, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2376258, 'Autoliderazgo en 3 pasos', 'Sé tu propio Líder', '6.99', 5, 'https://img-b.udemycdn.com/course/480x270/2376258_56ce_2.jpg', 27, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2378118, 'Swift 5 y Xcode 10  Crea una App Calculadora desde 0 en iOS', 'Aprende a crear una aplicación completa y de forma profesional utilizando las últimas herramientas de desarrollo iOS', '89.99', 5, 'https://img-b.udemycdn.com/course/480x270/2378118_5faf_4.jpg', 58, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2385562, 'Inglés Básico 1 (A1)', 'The beginning', '59.00', 5, 'https://img-b.udemycdn.com/course/480x270/2385562_d0ca.jpg', 80, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2421996, 'Curso básico de Angular 15 - Empieza con este framework JS', 'Aprende lo básico de Angular 15 desde cero y paso a paso con Víctor Robles WEB. Instalación, componentes, eventos y más', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/2421996_b1af.jpg', 64, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2437618, 'Curso ágil de Google Sheets (hojas de cálculo) desde cero.', 'Aprende a usar rápidamente Google Sheets, una alternativa a Excel totalmente gratuita y en la nube. Básico a Intermedio', '0.00', 5, 'https://img-b.udemycdn.com/course/480x270/2437618_16b8_6.jpg', 35, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2493858, 'Fundamentos de Angular', '¿Acabas de llegar a Angular? Este es el curso que necesitas para perderle el miedo y empezar a trabajar con Angular.', '0.00', 5, 'https://img-b.udemycdn.com/course/480x270/2493858_4bda.jpg', 54, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2500242, 'Taller de creación de Backdoors con Python - Parte 1', '[+] ¡ APRENDE A CREAR TUS PROPIAS HERRAMIENTAS DE ACCESO REMOTO !', '19.00', 3, 'https://img-b.udemycdn.com/course/480x270/2500242_f191.jpg', 36, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2547201, 'Video Curso de Fundamentos del Trading', 'Completo Curso de Introducción al Trading, 8 Vídeos cargados de contenido de valor, ejercicios prácticos, operativa real', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/2547201_5bea_2.jpg', 68, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2583420, 'Introducción a la Pastelería Saludable', 'Todo sobre Ingredientes saludables, utensilios de pastelería y creatividad. Al final, una Master Class inédita.', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/2583420_d5f7.jpg', 76, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2661342, 'React JS: La biblioteca de JS creada por Facebook', 'Aprende paso a paso que es React Js, los Hooks, Componentes, Props, Navegación con React Router Dom, y mucho mas...', '20.00', 3, 'https://img-b.udemycdn.com/course/480x270/2661342_4f49_6.jpg', 1, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2697902, 'Tablas dinámicas desde cero hasta análisis de datos', 'Domina las tablas dinámicas y análisis de datos con ejemplos que se aplican en el mundo laboral (Excel 2010 - 2019)', '63.00', 4, 'https://img-b.udemycdn.com/course/480x270/2697902_f902.jpg', 78, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2731162, 'Máximo Potencial 1: Colección Videos de Desarrollo Personal', 'Videos Sobre Diferentes Temas de Desarrollo Personal para Pensar, Reflexionar y Cambiar. Con el Autor N.C. Kurt.', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/2731162_30a4_2.jpg', 75, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2760004, 'Javascript Curso Gratis 2020', 'El lenguaje de programación más popular y amado por la mayoría de los programadores. Aprende Javascript gratis', '10.00', 4, 'https://img-b.udemycdn.com/course/480x270/2760004_d399.jpg', 30, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(2962192, 'Introducción a la Producción Musical', 'Cómo entrar en el negocio de la música y la producción', '0.00', 5, 'https://img-b.udemycdn.com/course/480x270/2962192_58e9_6.jpg', 63, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(3109394, 'Microsoft Excel - Funciones de la A a la Z', 'Aprende a utilizar las fórmulas más útiles y poderosas de Excel de una manera sencilla con casos practicos.', '4.00', 3, 'https://img-b.udemycdn.com/course/480x270/3109394_edaa_4.jpg', 62, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(3190088, 'CRUD Angular + NET Core + Entity Framework Core + MySql', 'Desarrollo frontend con Angular 9, backend NET Core 3, Entity Framework Core 3 y MySQL!', '57.00', 5, 'https://img-b.udemycdn.com/course/480x270/3190088_191f_4.jpg', 55, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(3201160, 'Crea una página web moderna con HTML CSS Y JAVASCRIPT', 'Aprende a crear una página web con HTML5 CSS3 y Javacript, [Adaptable a dispositivos móviles]', '45.99', 4, 'https://img-b.udemycdn.com/course/480x270/3201160_e33c_2.jpg', 25, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(3288628, 'Kotlin para Principiantes', 'Aprende a programar en Kotlin COMO RAYO con un curso 100% PRÁCTICO', '19.99', 4, 'https://img-b.udemycdn.com/course/480x270/3288628_3669_2.jpg', 82, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(3381136, 'Javascript desde cero para principiantes [GRATIS y ONLINE]', 'Aprende Javascript en vídeos breves', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/3381136_7cc8_2.jpg', 48, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(3412194, 'Escribe Código JavaScript Seguro', 'El mejor curso de seguridad para tus aplicaciones hechas en JavaScript', '13.00', 5, 'https://img-b.udemycdn.com/course/480x270/3412194_a3b3_2.jpg', 14, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(3506094, 'Edición de video con Adobe Premiere Pro - Primera parte', 'Aprende a editar video de forma profesional', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/3506094_3830.jpg', 94, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(3555325, 'La Brújula del Data Science', 'Encuentra el Norte y decide tu camino.', '53.00', 5, 'https://img-b.udemycdn.com/course/480x270/3555325_1c61.jpg', 93, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(3763082, 'Curso gratuito de Nutrición y Dietética', 'Aprende a cuidar tu salud', '17.00', 3, 'https://img-b.udemycdn.com/course/480x270/3763082_4faa.jpg', 52, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(3951350, 'Contabilidad para principiantes', 'Curso introductorio a la contabilidad. Presentaremos la contabilidad, el libro diario y balances.', '7.00', 4, 'https://img-b.udemycdn.com/course/480x270/3951350_8d77.jpg', 15, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4109502, 'Introducción a BI, Modelos y DAX Con Power Pivot de Excel', 'Dale super poderes a los procesos de Excel con Power Pivot y el lenguaje DAX', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/4109502_47f6.jpg', 73, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4177000, '(GRATIS) Ethical Hacking Curso Introductiorio Usando Kali', 'Aprenda a como asegurar su maquina para empezar aprender conceptos de cyberseguridad o ethical hacking.', '37.95', 4, 'https://img-b.udemycdn.com/course/480x270/4177000_a38d_2.jpg', 71, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4188680, 'Aprende Lógica de Programación (Básico)', 'Los fundamentos para un buen programador', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/4188680_4371_2.jpg', 34, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4214062, 'Curso de Inglés GRATIS para principiantes', '¡100% GRATIS! Esta es la forma más sencilla y eficaz de empezar a hablar Inglés.', '10.00', 4, 'https://img-b.udemycdn.com/course/480x270/4214062_fb71_3.jpg', 33, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4348320, 'Curso de Diseño de Cejas y Sombreado con Henna', 'Perfecciona tu diseño de cejas y sombrea con henna como una profesional.', '81.00', 5, 'https://img-b.udemycdn.com/course/480x270/4348320_f9b9.jpg', 87, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4369426, 'Nmap 101 - Aprende Nmap desde cero', 'Aprende a utilizar una de las herramientas más usadas en ciberseguridad. Año 2021.', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/4369426_92af.jpg', 69, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4371276, 'Kotlin para principiantes', 'Aprende las bases de kotlin y prepárate para desarrollar aplicaciones', '39.00', 4, 'https://img-b.udemycdn.com/course/480x270/4371276_e5d6_2.jpg', 77, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4452440, 'Monta tu laboratorio de pen testing', 'Introducción al ethical hacking', '71.95', 3, 'https://img-b.udemycdn.com/course/480x270/4452440_0ee2_3.jpg', 65, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4463786, 'Cómo convertí el miedo en éxito (conferencia gratuita)', 'El miedo es tu mayor herramienta para obtener lo que quieres en tu vida. Úsalo.', '0.00', 5, 'https://img-b.udemycdn.com/course/480x270/4463786_7d0d_2.jpg', 88, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4468626, 'Guía definitiva para crecer en Instagram', 'Aprenderás los 5 pasos fundamentales para crecer en Instagram. Las estrategias más avanzadas de Marketing Digital.', '5.00', 5, 'https://img-b.udemycdn.com/course/480x270/4468626_f747_3.jpg', 10, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4510400, 'Aprende cualquier idioma de manera eficiente - ¡Fácil!', 'Sé mas eficiente a la hora de estudiar.', '64.00', 3, 'https://img-b.udemycdn.com/course/480x270/4510400_755e.jpg', 53, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4542042, 'Lo básico de C#', 'Aprende los fundamentos de la programación de computadoras, usando C#', '16.00', 4, 'https://img-b.udemycdn.com/course/480x270/4542042_063c.jpg', 83, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4554466, 'Scrum Elemental', 'Scrum desde cero', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/4554466_8ef1_3.jpg', 85, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4568420, 'Strapi v4: De cero a Experto', 'Aprende Strapi desde cero para crear tu propia API REST y tu administrador de aplicaciones', '0.00', 5, 'https://img-b.udemycdn.com/course/480x270/4568420_52eb_2.jpg', 1, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4577996, 'Hacking Ético: Pentesting Basico en Android Con Metasploit', 'Aprende los Conceptos Básicos del Pentesting y Hacking en  Sistemas Android Con Metasploit', '47.00', 5, 'https://img-b.udemycdn.com/course/480x270/4577996_17e4_2.jpg', 12, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4609034, 'Fundamentos de Blockchain: Tecnología, Criptomonedas y NFTs', '¡Aprende los elementos clave de la tecnología Blockchain: Bitcoin, Ethereum, Smart Contracts, Tokens NFT y mucho más!', '15.99', 3, 'https://img-b.udemycdn.com/course/480x270/4609034_897d_6.jpg', 26, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4635490, 'Introducción a la gestión informática de SAP Business One', 'Conoce las oportunidades laborales que SAP Business One brinda a los profesionales de informática', '35.00', 5, 'https://img-b.udemycdn.com/course/480x270/4635490_e34c_6.jpg', 89, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4641230, 'Taller de Consultas SQL', 'Aprende a realizar múltiples consultas y descubre lo que puede hacer el comando SELECT.', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/4641230_56b2_4.jpg', 28, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4661946, 'Más de 200 trucos de la consola de GNU/Linux y Shell Script', 'Descubra el potencial de la consola de GNU/Linux y aprenda a automatizar procesos mediante Shell Script.', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/4661946_52b3.jpg', 22, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4676958, 'HTML para principiantes', 'Da tus primeros pasos para convertirte en desarrollador Fullstack', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/4676958_4991.jpg', 74, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4685584, 'Curso de Diseño gráfico en Canva', 'Aprende desde cero a utilizar Canva y a crear diseños para redes sociales', '46.00', 4, 'https://img-b.udemycdn.com/course/480x270/4685584_1cde_2.jpg', 16, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4712048, 'Modelamiento de Procesos usando el estándar BPMN', 'Cómo entender el funcionamiento de una empresa utilizando para documentarlo el estándar BPMN', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/4712048_8982.jpg', 21, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4735480, 'COACHING Iniciación - El Mejor curso GRATIS para ser coach', 'La metodología realista de coaching que no te enseñan en casi ninguna escuela', '60.95', 3, 'https://img-b.udemycdn.com/course/480x270/4735480_b368_2.jpg', 92, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4736326, 'CRUD básico usando FastAPI', '¡Aprende a crear un CRUD con FastAPI!', '29.00', 5, 'https://img-b.udemycdn.com/course/480x270/4736326_1110.jpg', 19, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4747144, 'Aprende a editar gameplays para youtube', 'Edicion en Premiere Pro', '14.00', 5, 'https://img-b.udemycdn.com/course/480x270/4747144_ff69.jpg', 45, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4888028, 'Curso Fundamental de .NET 7 MVC', 'Aprende los fundamentos de .NET 7 MVC: Code First, Modelos, Migraciones, Páginas Razor, Extensiones Nuget, TempData', '2.00', 3, 'https://img-b.udemycdn.com/course/480x270/4888028_32b3.jpg', 61, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4891812, 'Diseño UI: Figma esencial para diseño de interfaces 2023', 'Ejercicios prácticos para internalizar el uso de la herramienta', '7.00', 5, 'https://img-b.udemycdn.com/course/480x270/4891812_a748_2.jpg', 84, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4956110, 'Como Crear un Sitio Web Profesional en 30 minutos WordPress', 'Crea un sitio web atractivo en 30 minutos con WordPress y Elementor. Páginas web optimizadas. ¡Sin saber programar!', '36.99', 3, 'https://img-b.udemycdn.com/course/480x270/4956110_6325_4.jpg', 41, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4958750, 'Aprende a crear un buscador web sin código - App Móvil y WEB', 'Con AppGyver crearas un potente buscador web multiplataforma y 100% funcional, con resultados estructurados y rápidos.', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/4958750_e61a_3.jpg', 20, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4968106, 'Masterclass: Relaciones Familiares', 'Elementos para el desarrollo personal', '15.00', 5, 'https://img-b.udemycdn.com/course/480x270/4968106_7629_3.jpg', 81, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(4998416, 'Introducción a la creación de Azure Virtual Machines', 'Crea maquinas virtuales Linux y Windows utilizando el Portal de Azure.', '50.00', 5, 'https://img-b.udemycdn.com/course/480x270/4998416_76b2.jpg', 3, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5018138, '#Shorts Introducción a la programación con JavaScript Básico', '#Shorts Introducción a la programación con JavaScript Básico. Conceptos y sintaxis.', '5.99', 3, 'https://img-b.udemycdn.com/course/480x270/5018138_7059_2.jpg', 86, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5028210, 'Tarot Marsella Lemat gratuito', '22 arcanos y 4 ases. por Daniel Rodes y Encarna Sanchez de la escuela internacional Lemat.', '4.95', 4, 'https://img-b.udemycdn.com/course/480x270/5028210_58be_2.jpg', 9, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5050598, 'Introducción a gráficas con Python y Jupyter Notebook', 'Generando gráficas desde la interfase de Jupyter Notebook', '91.99', 4, 'https://img-b.udemycdn.com/course/480x270/5050598_f0cb_3.jpg', 79, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5076332, 'Introducción a la programación en C, java, C#, Python y JS', 'Aprende fundamentos de programación  : tipos de datos, estructuras de control, operaciones aritméticos, lógicas y más', '0.00', 5, 'https://img-b.udemycdn.com/course/480x270/5076332_bd7b_4.jpg', 47, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5110296, 'Cómo decir adiós a una relación tóxica y perjudicial.', 'Libérate de una prisión emocional que quebranta tu autoestima y limita tu desarrollo personal.', '92.00', 3, 'https://img-b.udemycdn.com/course/480x270/5110296_6ca1.jpg', 59, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5121854, 'Sketchup course. Building a strong foundations', 'Learn to think as Sketchup does. Break the ice wall and start using this amazing software', '98.00', 3, 'https://img-b.udemycdn.com/course/480x270/5121854_4f56_3.jpg', 13, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5121900, 'Gestión de Redes Sociales - Community Manager & Social Media', 'Aprende a gestionar redes sociales de manera profesional', '53.99', 5, 'https://img-b.udemycdn.com/course/480x270/5121900_4dc5_2.jpg', 18, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5144958, 'FODA para crear tu emprendimiento', 'La mejor forma de emprender es conociendo tu FODA', '7.99', 3, 'https://img-b.udemycdn.com/course/480x270/5144958_b12a.jpg', 40, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5150682, 'Wordpress framework para crear tu web paso a paso', 'Crea tu web con bloques ( sin programacion )', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/5150682_8426_4.jpg', 23, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5151966, 'Python para criptomonedas (Trading y Análisis de Datos)', 'Con ejemplos fáciles y prácticos', '76.00', 4, 'https://img-b.udemycdn.com/course/480x270/5151966_9644_5.jpg', 48, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5153332, 'Visual Studio Code', 'Comienza con este gran editor', '22.99', 5, 'https://img-b.udemycdn.com/course/480x270/5153332_a6d1.jpg', 23, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5158688, 'Bases de XML: los fundamentos esenciales que debes conocer', 'Entiende de una vez esta herramienta tan habitual en el desarrollo de software', '0.00', 4, 'https://img-b.udemycdn.com/course/480x270/5158688_9934_4.jpg', 29, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5181288, 'Vende más con ChatGPT: Domina la revolución - Básico', 'Vende más con ChatGPT: Domina la tecnología que revolucionará tu estrategia comercial y te hará marcar la diferencia', '14.00', 4, 'https://img-b.udemycdn.com/course/480x270/5181288_b26f_3.jpg', 11, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5184136, 'Curso gratis de práctica Solidworks CSWA - nivel básico', 'Curso gratis de práctica para la certificación Solidworks asociado CSWA - nivel básico', '4.00', 3, 'https://img-b.udemycdn.com/course/480x270/5184136_658c.jpg', 56, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5205496, 'ChatGPT en la educación', 'Aprovecha esta nueva herramienta', '0.00', 3, 'https://img-b.udemycdn.com/course/480x270/5205496_e780_3.jpg', 17, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5207172, 'Mi primer aplicativo en Powerapps desde excel', 'Powerapps', '0.00', 5, 'https://img-b.udemycdn.com/course/480x270/5207172_5ea8_2.jpg', 51, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5215168, 'Desarrollo de paquetes de PHP & Laravel 10', 'Crea paquetes reutilizables y robustos', '11.95', 5, 'https://img-b.udemycdn.com/course/480x270/5215168_2d2a_2.jpg', 4, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5223378, '“Autoconocimiento y Transformación”', 'UN RECORRIDO DE ADENTRO HACIA AFUERA “Autoconocimiento y Transformación”', '1.95', 5, 'https://img-b.udemycdn.com/course/480x270/5223378_88f9_2.jpg', 72, '2023-05-22 18:27:58', '2023-05-22 18:27:58'),
(5239422, 'BJJ | Drills para Jiu Jitsu Brasileño en español', 'Drills de BJJ en solitario y en pareja para mejorar tu movilidad', '0.00', 5, 'https://img-b.udemycdn.com/course/480x270/5239422_6927_3.jpg', 39, '2023-05-22 18:27:58', '2023-05-22 18:27:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `online_courses`
--
ALTER TABLE `online_courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `online_courses_instructor_id_foreign` (`instructor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `online_courses`
--
ALTER TABLE `online_courses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5239423;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `online_courses`
--
ALTER TABLE `online_courses`
  ADD CONSTRAINT `online_courses_instructor_id_foreign` FOREIGN KEY (`instructor_id`) REFERENCES `instructors` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
