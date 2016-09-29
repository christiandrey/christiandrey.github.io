-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2015 at 06:44 AM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `speadmins`
--

-- --------------------------------------------------------

--
-- Table structure for table `polllist`
--

CREATE TABLE IF NOT EXISTS `polllist` (
  `ID` int(2) NOT NULL,
  `POLLNAME` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `speadminslogins`
--

CREATE TABLE IF NOT EXISTS `speadminslogins` (
  `ID` int(2) NOT NULL,
  `USERNAME` varchar(255) NOT NULL,
  `KEYHASH` varchar(60) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `speadminslogins`
--

INSERT INTO `speadminslogins` (`ID`, `USERNAME`, `KEYHASH`) VALUES
(1, 'speadmins', '$2y$10$Jg7khjCis07U94hHAh70q.c1m0LQ4OwMMUxdUe5RITGZAwthCR3.S');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `polllist`
--
ALTER TABLE `polllist`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `speadminslogins`
--
ALTER TABLE `speadminslogins`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `polllist`
--
ALTER TABLE `polllist`
  MODIFY `ID` int(2) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `speadminslogins`
--
ALTER TABLE `speadminslogins`
  MODIFY `ID` int(2) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
