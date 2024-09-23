-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2024 at 03:40 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `realestateproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--
-- Error reading structure for table realestateproject.users: #1932 - Table &#039;realestateproject.users&#039; doesn&#039;t exist in engine
-- Error reading data for table realestateproject.users: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `realestateproject`.`users`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `users_credential`
--

CREATE TABLE `users_credential` (
  `Id` int(11) NOT NULL,
  `First_Name` varchar(50) NOT NULL,
  `Last_Name` varchar(50) NOT NULL,
  `Middle_Initial` varchar(2) NOT NULL,
  `Extension_Name` varchar(5) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `Sex` varchar(7) NOT NULL,
  `Purok` varchar(256) NOT NULL,
  `Barangay` varchar(256) NOT NULL,
  `City` varchar(256) NOT NULL,
  `Province` varchar(256) NOT NULL,
  `Country` varchar(256) NOT NULL,
  `Zip_Code` int(11) NOT NULL,
  `Username` varchar(256) NOT NULL,
  `Password` varchar(256) NOT NULL,
  `Account_Created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_credential`
--

INSERT INTO `users_credential` (`Id`, `First_Name`, `Last_Name`, `Middle_Initial`, `Extension_Name`, `Email`, `Sex`, `Purok`, `Barangay`, `City`, `Province`, `Country`, `Zip_Code`, `Username`, `Password`, `Account_Created`) VALUES
(9, 'Ric Charles', 'Paquibot', '', '', 'ric2thiss112@gmail.com', 'on', 'Ampayon', 'Ampayon', 'Butuan City', 'Agusan Del Norte', 'Philippines', 8600, 'admin123112', '$2y$10$46NHCQMw7GLOPrV/1CUSWOwqNTVm8FDuqB7PlVUegMjQezl9I2DHm', '2024-09-23 01:02:09'),
(10, 'Ric Charles', 'Paquibot', '', '', 'ric2thiss11233@gmail.com', 'on', 'Ampayon', 'Ampayon', 'Butuan City', 'Agusan Del Norte', 'Philippines', 8600, 'admin1231123', '$2y$10$5FcilQtIwO5W4l4AhEtxRepLuEPkwSx9NQ61f3Pyr8N02X4z8m9gq', '2024-09-23 01:03:42'),
(11, 'Ric Charles', 'Paquibot', '', '', 'ric2this123s@gmail.com', 'on', 'Ampayon', 'Ampayon', 'Butuan City', 'Agusan Del Norte', 'Philippines', 8600, 'ric2this123s@gmail.com', '$2y$10$rIDEHWpWfH.YwxfvKe5Ihu9WIf91eicgyYOnCZ.gAJk5UDfZFdeXm', '2024-09-23 01:07:16'),
(12, 'Ric Charles', 'Paquibot', '', '', 'ric2thiss@gmail.com', 'on', 'Ampayon', 'Ampayon', 'Butuan City', 'Agusan Del Norte', 'Philippines', 8600, 'admin123', '$2y$10$C.HWgDCrwdu5Ea.EnsOF2u/lJvopeGrGgDXLVNQhd2aU2gf/b0Xhu', '2024-09-23 01:11:11'),
(13, 'Ric Charles', 'Paquibot', '', '', 'ric2thiss321@gmail.com', 'on', 'Ampayon', 'Ampayon', 'Butuan City', 'Agusan Del Norte', 'Philippines', 8600, 'admin321', '$2y$10$PHaRZV7j8.3DJC4GZ8EvBeAofYqUbUmY.dNTg21u/95aYEkXWDlF.', '2024-09-23 01:12:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users_credential`
--
ALTER TABLE `users_credential`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users_credential`
--
ALTER TABLE `users_credential`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
