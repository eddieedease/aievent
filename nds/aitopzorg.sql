-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 20, 2020 at 08:45 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aitopzorg`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `naam` text NOT NULL,
  `organisatie` text NOT NULL,
  `functie` text NOT NULL,
  `email` text NOT NULL,
  `acc` int(11) NOT NULL,
  `datee` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `checklist` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `naam`, `organisatie`, `functie`, `email`, `acc`, `datee`, `checklist`) VALUES
(1, 'sdf', 'sdfsd', 'sdfsd', 'sdfsd', 1, '2020-01-20 09:29:46', 0),
(2, 'wwwww', 'werwe', 'sdf', 'werwer', 1, '2020-01-20 09:30:16', 0),
(3, 'sdf', 'werwe', 'asdas', 'sdfsdf', 0, '2020-01-20 09:30:48', 0),
(4, 'werwe', 'werwe', 'wer', 'sdf', 0, '2020-01-20 09:31:12', 0),
(5, 'asd', 'asdas', 'qweqw', 'qweqw', 0, '2020-01-20 09:31:27', 0),
(6, 'sdfwer', 'werwe', 'asdad', 'qweqw', 1, '2020-01-20 09:31:40', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
