-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Värd: localhost
-- Tid vid skapande: 30 maj 2020 kl 13:50
-- Serverversion: 5.7.28-0ubuntu0.18.04.4-log
-- PHP-version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `Emil`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `spelforumet`
--

CREATE TABLE `spelforumet` (
  `id` int(11) NOT NULL,
  `inlägg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `namn` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `datum` date NOT NULL,
  `rubrik` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumpning av Data i tabell `spelforumet`
--

INSERT INTO `spelforumet` (`id`, `inlägg`, `namn`, `datum`, `rubrik`) VALUES
(1, 'hej', 'emil', '2020-05-28', 'test'),
(2, 'test', 'test', '2020-05-28', 'hej'),
(3, 'test', 'test', '2020-05-28', 'hej'),
(4, 'Test', 'Emil', '2020-05-28', 'test'),
(5, 'Test', 'Emil', '2020-05-28', 'test'),
(6, 'Test', 'Emil', '2020-05-28', 'test'),
(7, 'Test', 'Emil', '2020-05-28', 'test'),
(8, 'Test', 'Emil', '2020-05-28', 'test'),
(9, 'Test', 'Emil', '2020-05-28', 'test'),
(10, 'Test', 'Emil', '2020-05-28', 'test'),
(11, 'Test', 'Emil', '2020-05-28', 'test');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `spelforumet`
--
ALTER TABLE `spelforumet`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `spelforumet`
--
ALTER TABLE `spelforumet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
