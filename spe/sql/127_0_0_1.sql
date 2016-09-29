-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2015 at 08:19 AM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `2015spetrial`
--

-- --------------------------------------------------------

--
-- Table structure for table `contname`
--

CREATE TABLE IF NOT EXISTS `contname` (
  `ID` varchar(50) NOT NULL,
  `PRESIDENT` varchar(50) NOT NULL,
  `VICE_PRESIDENT` varchar(50) NOT NULL,
  `GEN_SEC` varchar(50) NOT NULL,
  `AGS` varchar(50) NOT NULL,
  `APRO` varchar(50) NOT NULL,
  `TREASURER` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contname`
--

INSERT INTO `contname` (`ID`, `PRESIDENT`, `VICE_PRESIDENT`, `GEN_SEC`, `AGS`, `APRO`, `TREASURER`) VALUES
('CONT1', 'SanDre', 'DreSan', 'ConSre', 'SeeDre', 'SunDre', 'TreDre'),
('CONT2', '', '', '', '', '', ''),
('CONT3', '', '', '', '', '', ''),
('CONT4', '', '', '', '', '', ''),
('CONT5', '', '', '', '', '', ''),
('CONT6', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `pollvote`
--

CREATE TABLE IF NOT EXISTS `pollvote` (
  `ID` varchar(50) NOT NULL,
  `PRESIDENT` int(8) NOT NULL,
  `VICE_PRESIDENT` int(8) NOT NULL,
  `GEN_SEC` int(8) NOT NULL,
  `AGS` int(8) NOT NULL,
  `APRO` int(8) NOT NULL,
  `TREASURER` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pollvote`
--

INSERT INTO `pollvote` (`ID`, `PRESIDENT`, `VICE_PRESIDENT`, `GEN_SEC`, `AGS`, `APRO`, `TREASURER`) VALUES
('CONT1', 1, 1, 1, 1, 1, 1),
('CONT2', 0, 0, 0, 0, 0, 0),
('CONT3', 0, 0, 0, 0, 0, 0),
('CONT4', 0, 0, 0, 0, 0, 0),
('CONT5', 0, 0, 0, 0, 0, 0),
('CONT6', 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `voters`
--

CREATE TABLE IF NOT EXISTS `voters` (
  `ID` int(6) unsigned NOT NULL,
  `LEVEL` varchar(4) NOT NULL,
  `FIRSTNAME` varchar(50) NOT NULL,
  `LASTNAME` varchar(50) NOT NULL,
  `MATNO` varchar(6) NOT NULL,
  `PASSWORD` varchar(6) NOT NULL,
  `HASH` varchar(60) NOT NULL,
  `STATUS` int(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=251 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `voters`
--

INSERT INTO `voters` (`ID`, `LEVEL`, `FIRSTNAME`, `LASTNAME`, `MATNO`, `PASSWORD`, `HASH`, `STATUS`) VALUES
(1, '500L', 'Kiitan ', 'Okunmadewa', '158259', '978jP2', '$2y$10$q7tiy2KMVfY9OEAo/nR5ne.t/9/yODetJLhdv3I0pR33j6w64Z6ZS', 1),
(2, '500L', 'Olayinka ', 'Olaitan', '158267', 'kF4avx', '$2y$10$oMRdGo2jmK1gRWzDo7bMFu6cJlwVvquB6MbaK3pLVNuOaSUolbH6G', 0),
(3, '500L', 'Oladipo ', 'Olatunji', '164724', '6cw9pg', '$2y$10$tUc6VM4eXLIWYQa.jJto3O63bSJeu1U/KmSGq2DM6Bq1erv2TGUqK', 0),
(4, '500L', 'Temitayo ', 'Oloruntoba', '158282', 'omD0Pl', '$2y$10$zatK4fouUiJ4qMcCYhKy3u5KcfBp.qEA9anvSYIcr/8f3oUfgeWKy', 0),
(5, '500L', 'Temitope ', 'Olujinmi', '158287', '4mtT1q', '$2y$10$4xtda9MWpPdCEumMCyyYiORliC9eFHf0ONt8aytbu7gP8ArpV4Yrq', 0),
(6, '500L', 'Tobiloba ', 'Olukanni', '158288', 'V3JVNu', '$2y$10$rMVYLPnjYoP.b13AVr9Nm./kpANdVHTLcTJQgoGBDu8AkdChXi4xe', 0),
(7, '500L', 'Ogbemudia ', 'Omoregbee', '164734', 'ij0Nzt', '$2y$10$bN26UYyY4Rhg45h9wdxPDubnPjeujc5e4GDzJxqUyWE5H8/Hl6g12', 0),
(8, '500L', 'Benjamin ', 'Otugene', '165426', '336twz', '$2y$10$Vljp5tyUKQiSbd9M7EdTrO3nkf7RFYGs2bzFeMc4BuEPXUEHT0MDC', 0),
(9, '500L', 'Sunday ', 'Owoseni', '158315', 'QGEEWc', '$2y$10$PMQUfpI62.5puh22Zgp5t.HIP7xsfBu07xT5xq/3e6U/Acn4m7QOK', 0),
(10, '500L', 'Adebayo ', 'Raji', '158321', 'hCHiKu', '$2y$10$GfBN2.TfziD4.l7AQzCbt.V.tYq2YgwIQN0To4S0h6HrijidhkGjm', 0),
(11, '500L', 'Chiemelie ', 'Umeokeke', '158334', 'juavdv', '$2y$10$wVWgJe/dgASfyi65o1jx1.MO00zLFamzyQtOOQGL2vxPrUzuY40mq', 0),
(12, '500L', 'Sadam ', 'Yahaya', '158336', 'UZ0Rzv', '$2y$10$WKjuaMv/DPH8aCbTgNALGOY4wNu7qpc.W9/7XEO2XawfGz7mgw8zS', 0),
(13, '', '', '', '', 'IGH5Q7', '$2y$10$0cIvWwVjbhWbDxUJMYtRaOeQpCBlkahf/LOwzj3aY/WQhMmVMz9Xi', 0),
(14, '', '', '', '', 'Ea1RUr', '$2y$10$uGRdJ3K2bcXg6byfUAKVp.vRvQOgExY6ZdWjloGQGSXvUdXa9NhA6', 0),
(15, '', '', '', '', 'rXfYp3', '$2y$10$mavFNl7XmSR8DdrG8mqGOuBr469XFFqrN5sHwGbLKRly/EIeskyb6', 0),
(16, '', '', '', '', 'M25TNl', '$2y$10$0aeTj3HN5reLt1ITG3.RVuf.DFDOv/W.swaEGUoXmvg6XepWjrLjG', 0),
(17, '', '', '', '', 'p1AhWO', '$2y$10$geGfuyu9zFrhp5V89K1P2.dS4jdvVBTjcDsOVHl1x1B7H8gsPUqqq', 0),
(18, '', '', '', '', 'MMZu2y', '$2y$10$25JCqud4X4Jw16QJpwdgH.J7fY.Jqh9W.1f0ggUC0HfI41ttcCuZC', 0),
(19, '', '', '', '', 'XgBrDw', '$2y$10$.BRaP2M/RBnfZf1CQQ9S7u514Ga3UNVNBDfJs4pINC3ytj6Lk4AF2', 0),
(20, '', '', '', '', 'YF9Unz', '$2y$10$wSBIUVqEKUMnkVNl7zldMev.jUW.MnE8rOYgnThP.7M9rvi3vK0fC', 0),
(21, '', '', '', '', 'rgILTT', '$2y$10$JZuBlUbdJBetDtaZ7z06TueU/DvH93GkVk3mvVdOZnfieQB9zmuRG', 0),
(22, '', '', '', '', 'sX4wdn', '$2y$10$5eWUtn48Xim5g2eDIbHkzegGJUlemQkjid12iAfwf0vgUnZG5ovLG', 0),
(23, '', '', '', '', 'pQdm8o', '$2y$10$NvgkdO7CsX2C8ny9/lhQuuizRR.aeUzpt9a003ej1a591.yAUsHDG', 0),
(24, '', '', '', '', '6GGw4x', '$2y$10$Uio1BA3ST8l94uj1JrdQHeVup45dphKppDa3YGNGMRHTeuj66H1KC', 0),
(25, '', '', '', '', 'xpKS86', '$2y$10$5OR58XsqffLiQ9Gcr3I6TePPH3T2Ubu8vnZykoi3PKeiHSCYMh/V2', 0),
(26, '', '', '', '', '4YU0tN', '$2y$10$KvViH4FINl/7lb/C/VbSi.rUopiHyg0IpcsvZ3j6LTznyOEXuvl.6', 0),
(27, '', '', '', '', '9fA4hC', '$2y$10$dd9KD7eyViUdpNattvxA.eMTkbMJdLNMALe0XhnlPd8F7CNlT0bdW', 0),
(28, '', '', '', '', 'gO5j1T', '$2y$10$/ERp8/O8hm8F5DTlgQSe3O75UEXad8o0CRXBm9/EDpETXszx2MYc6', 0),
(29, '', '', '', '', 'NrtgO1', '$2y$10$JXhttvOgGqsITH7mRLWTf.EeQHI.YPzPmAQscam5fSJru6LTaLvay', 0),
(30, '', '', '', '', 'v41oKQ', '$2y$10$c6zjo21nmo5NjnHp.gMb0OyMLz/iSIhBaWViFZzI3jDwDXeSZ3Wc2', 0),
(31, '', '', '', '', 'PPskQT', '$2y$10$k1MIE3VxNUWVLvlFRBB0yeF/6hEBhwy5hvdhYbQU/AIQU2Ja1VCDO', 0),
(32, '', '', '', '', 'MrPKaU', '$2y$10$6lNq6bzixlBlO6xIxgAUiuVfB5EkB81zGiYn.OKiigVWDgDPbmWsO', 0),
(33, '', '', '', '', 'fwn7Ys', '$2y$10$lU9u2W3.8GSFqVJKh1wwPObHN5ogUl7XXaG7nitxxYnrn3J1WfXwG', 0),
(34, '', '', '', '', 'pSJwEY', '$2y$10$KopJdKQYIRGkZakw/poSpeR/gnNOW8XrbJm50kRw8l4.xD46DmVx.', 0),
(35, '', '', '', '', 'lgLu2p', '$2y$10$gAiPTpUm2AfYNG2opP8ZjOLtcGVlKfiop05BvPGNuFKasV0fykH3e', 0),
(36, '', '', '', '', '9MKBUD', '$2y$10$2GBE7HoPG4XA7ek0Si2AH.fX0ibJ1Yxl4MaYVyV0wJD3HxdKMlGba', 0),
(37, '', '', '', '', 'hpbhkH', '$2y$10$CsEfPBEt8OxebaKNXMNzy.0B4KS1XwaeOBXcdYY5lS.TsJFjUeqlO', 0),
(38, '', '', '', '', 'sKS1Z7', '$2y$10$pZyPq51JR8j9FdrseuKs6O/iHOchNTrSuiGmT0iChLw2V.sO4XzBe', 0),
(39, '', '', '', '', 'AE0bNK', '$2y$10$wR.5SbvnjyZRq3U3ebCm3.IMgIfH3.P5OyjGYkMjO5tVOpbOWwksO', 0),
(40, '', '', '', '', 'fIMHca', '$2y$10$4BJkjQFsfxraTC3rhkD8IO205/d0CRXHn.3A7jeL/WBUV9Zxf1Daq', 0),
(41, '', '', '', '', 'FFZKJb', '$2y$10$eG3ArqfzQppr9fO5QijEB.Uff9KuJR22wARGrJuZwoPCXrMXKVWLC', 0),
(42, '', '', '', '', 'BPGfRM', '$2y$10$Qbdf1EvKOzEIyDpuxIOPh.oD5fzPtfTYo6TJvpcftXQkd7IWKEHWS', 0),
(43, '', '', '', '', 'svN2N2', '$2y$10$oEWry/hrbX.eXfpUCsLX.ue1jQEagGTVyTm5dYaF/KkkPiMLhekJy', 0),
(44, '', '', '', '', 'DVQIzX', '$2y$10$rHQvfsrrtaSa6UHYbN2/EOCMbUIPUf68rpRUAl05x9OVf1t7Ug1JK', 0),
(45, '', '', '', '', '6wbPkS', '$2y$10$RkwU2vxuopDjodrnbQngluykGj4X4eRYBUKZSDhCR129wwfXP8TO2', 0),
(46, '', '', '', '', 'dTW9LN', '$2y$10$1/6RnRwHbRlycKo1IZa27eMN9lGpj.zX/pZo1shLsgjxE7eYVIZTu', 0),
(47, '', '', '', '', 'qptn0h', '$2y$10$SzOYK2EPrxfh2mriYj5RLeiTy9n/nrlkgAyqx4yq/X6nKod7SsGEO', 0),
(48, '', '', '', '', 'BIsQRF', '$2y$10$f.s78LecSzBkdF5J5.fYLum/EX/C5XuOq8A59s0OiJhY87SEpFzVK', 0),
(49, '', '', '', '', 'OslGgE', '$2y$10$GvQCC/Kv0IteA5tqsuArTe0ViWLLDIJxChJYPJooYOOLKpqvUcp9m', 0),
(50, '', '', '', '', 'sf7lO5', '$2y$10$eZI2ahxPjk8/y7DwrBK/7.FCh6AQp1dGpBFPH6FP4Xjp2wBCjSAnm', 0),
(51, '', '', '', '', 'E2wyL9', '$2y$10$b.6E283KF82dwVHceLE53.BdCR3BkbxAHL5Y.6xDNBvIAlI0km4OK', 0),
(52, '', '', '', '', 'P0k8Qw', '$2y$10$l9ka89UI82TBfa7aq3C3ruEW.ohJh5FfI7lHRAqXH6YYS76losWmi', 0),
(53, '', '', '', '', 'raTkw1', '$2y$10$5fYDnbIwBnmJyabk5HRgk.7hUih9NnqJrxG51Z.sJcEE7oB4vbFlG', 0),
(54, '', '', '', '', 'md2KfF', '$2y$10$P7R7H6saQg/1Ct8ZgIn/QOBtF21eUI2f1Dk7vVOweWmTGLPSY88MC', 0),
(55, '', '', '', '', 'ZkNoto', '$2y$10$Yrb1QXl1GBCOZHhF5lslIu54jC0Xbl2fxMXdCVCkAEgUZkhqbL2im', 0),
(56, '', '', '', '', '3HBarv', '$2y$10$ohqrY.xsjhaTqK7nVUa5GufcWS9jRJyhU14./XImrdqGPLuH76kjO', 0),
(57, '', '', '', '', 'vNRCxS', '$2y$10$tFr/SsSE/vrhxiUuU0grXegb2frrwPnGKLdRseDLNRDu7xBNF64Bu', 0),
(58, '', '', '', '', 'og33TV', '$2y$10$h2ZtulZLqp/MhMMn1Z4R9eP87BBKZ6hGZOFYxEXRa6nYv.hBbSjum', 0),
(59, '', '', '', '', 'vMTb10', '$2y$10$aoerEwvSQaZ9BOsj///1qulKROk/TrZmCBoC1uUKG5MqhdJPwYnjS', 0),
(60, '', '', '', '', 'Z1TE2j', '$2y$10$.PEG39/iiDP19Dkn1c1GY.nvjIfTGW/BJM43N1eaJ.ldF6YgK80e2', 0),
(61, '', '', '', '', '7LdBBX', '$2y$10$2rocEGdrJVVkh.adDf1ZKet7TOZKpsvSwmRSqRF1tEGVy7Kq2W8v.', 0),
(62, '', '', '', '', 'jYAhjJ', '$2y$10$4VuUjFnetmrp/DpYHaLC7uFTzF5LIEpdcDXEJH0YOLweJ9QMfgHYu', 0),
(63, '', '', '', '', 'xcbKbS', '$2y$10$GDf8xgERC0DUwQMXppVZguCFYpHuDK/G4b7OARYPtdkurzOP7vC2a', 0),
(64, '', '', '', '', 'DzTpVd', '$2y$10$0wEeRqeQm3M/S264wViTF.xj/dmf3fdtJZkXLMpG4a.KBfJp4Xz5m', 0),
(65, '', '', '', '', 'ltKHQz', '$2y$10$nrQp6FHrLIT/tb9/UTGEP.wBxi/VEgZc2kZ0iu22rlBFTc14II4EK', 0),
(66, '', '', '', '', 'I1icup', '$2y$10$zisQm.Xi6JNerApc0u0cmeoR2v/SwSiQJpV08GwBGWCOXC0JTCdV.', 0),
(67, '', '', '', '', 'xScycL', '$2y$10$q1kv8Bm1a47orPfj9udTo.odPp9y1PJfXQBDKa6yVP.11LkXUyQr6', 0),
(68, '', '', '', '', 'Qqq1kt', '$2y$10$dZVhgrnXuA3/.Pd12N48feHmqR5KFuhAGcjPTlozi6ZGRqVPTDek2', 0),
(69, '', '', '', '', 'X0suHf', '$2y$10$sXeQeHawXkqxHoWCBF0DzeOf51o9LC5cYte/5S4gqEFuUmt.fDKge', 0),
(70, '', '', '', '', 'dBGxnM', '$2y$10$a2KYq7CA17MKCNL/pXcd0eDcBU6.ZkIoY6thLzVdzOzye34A1spj6', 0),
(71, '', '', '', '', 'OyUIhI', '$2y$10$KF4meXBhGwBo3XrymkV1y.3CEvgXAjTrExKgr28S1sLIRitMg9Ga.', 0),
(72, '', '', '', '', 'ATK5ii', '$2y$10$ovGEuK2BAO/HhF8.cI.xguHH6awK/zvwekIkawNHKQcb6W9.UXZcW', 0),
(73, '', '', '', '', 'u5B226', '$2y$10$6J/zw3Je3qlGE1SbFQcQ8uCAKWT.Mv7eJ1cJRVbS0DFvlX3FjMBbK', 0),
(74, '', '', '', '', '55Xa5s', '$2y$10$PoY4hllxVjDcTMvxWawLsuZKXQhcZsSmdLt37RO69bEtX7TUhwQQy', 0),
(75, '', '', '', '', '9Y7tZj', '$2y$10$qaz1o6h.MjhhoEEzbXUuwu53/pFXUIyTKUzYKizam5G47mADy1LFG', 0),
(76, '', '', '', '', 'I7omhM', '$2y$10$n.DC5.xkIs3iGkqsQwpj6OgBmRabvQae4xkh81uSlKH5HNbZigNne', 0),
(77, '', '', '', '', '5kSWlo', '$2y$10$8w/1mo7Gtx1Nns2WMIdPYeJzAcFFcpYmkodaaUkwtST3idwQMEBm6', 0),
(78, '', '', '', '', 'u1LZMs', '$2y$10$WJUXzKMcsCbtGfnvFZ1M2.MVCR5RDZlZoL2V53dxlcjVP/RZgihaO', 0),
(79, '', '', '', '', '9lGxES', '$2y$10$7fpqc/wtXPlFDQTVKgVxb.I0/UFyegkoRMOS9wBFPs4UsazpzyRMG', 0),
(80, '', '', '', '', 'gAlNrZ', '$2y$10$l705iU0oCbCJGtU58eWLzuAna8bhEFZstELm0vsoyMHLf4D7cbVb.', 0),
(81, '', '', '', '', 'RpGTdT', '$2y$10$lNV8jvWu25tSmQr1Beg9Lu.92DOwDcqTfizIkOaCs8xn1qRtWMfAy', 0),
(82, '', '', '', '', 'PEiEDk', '$2y$10$kSGlcnSKo7ix/wBKmDSYWuq0wbDPs/YMC2CFDu2TC1UVH7HTaNOJa', 0),
(83, '', '', '', '', '4ucX29', '$2y$10$oymNSoAFbB/qgJHuAQcUsuRuoZUdzjvUA2rKQKmzN0s8zQzIu6acK', 0),
(84, '', '', '', '', 'GkMXB1', '$2y$10$JAtICmTFqK2vpFhG00GCEuMCkcCziqdyE9v8WhzB0lty6a05E0GR2', 0),
(85, '', '', '', '', 'vKx2xW', '$2y$10$e1CBGtAuRoFTGFabLCwJKeLZQAFo/FhV4ZgncMJmgbnqgv5B0mbK2', 0),
(86, '', '', '', '', 'QdAw4Z', '$2y$10$UPwTz552QaMg0dyJxxsPd.3CYtTQigWx0kNQpoH2YdN5YfGYuhlRu', 0),
(87, '', '', '', '', 'j8nFxD', '$2y$10$J8IvkNp6IRrRrCn3qyLi4el8MR6Vkq5p1VK9verAt9/FYqF4GJfjC', 0),
(88, '', '', '', '', 'nWNyLs', '$2y$10$K5pVA3HAbXuhHqk1qp3qW.KFIro8Nnw77Jgax6TQqGD7sxaIvVSIW', 0),
(89, '', '', '', '', 'F2VoO0', '$2y$10$f//3ozGUSAtIKWpI8Qi3AO1cRslcZztftEZzk9n3l6r9zF9/LB1Oe', 0),
(90, '', '', '', '', 'rA4Duf', '$2y$10$SnEIea4xUlJYngV.NnHz2.8.6s78nr8meKqWymw54BYxqG8jqM/NW', 0),
(91, '', '', '', '', 'jOfYTv', '$2y$10$Vvs64nKidUMH.dqwpxWDge5vaqa5aGbbgPT5MM3cyO76Bc1jdwchq', 0),
(92, '', '', '', '', 'miipIb', '$2y$10$wW329p8WEVvJ8ujrfStC7Owq/RDP5Wc17PoYrDaKb0jN9fu.dQIw6', 0),
(93, '', '', '', '', 'mKHClD', '$2y$10$5cgFJDNa7i0fXXZPYF.4B./9Lb36Q0Puuhl2OnE76sRFK9dq9D1Vu', 0),
(94, '', '', '', '', 'V2t6Yv', '$2y$10$X0sAOSdjK/Jf9wzviWsUz.5mxR4jJ2YXOasIaRUd1v9V6rVbxLD3q', 0),
(95, '', '', '', '', 'nMKUor', '$2y$10$YJ.T/vJeyY9PdM/lmX694u3YX2giwZeJXYBjkmLuqZmB5jboyaW0u', 0),
(96, '', '', '', '', 'TWNpC3', '$2y$10$7DtqCjJNCrrkg/3AH26sTOL2x808raDB0FE8isuSfM7WagRKeYB/a', 0),
(97, '', '', '', '', 'WDsYb3', '$2y$10$4LMxG0ZJ2aBnnudgpqgm8OjUkriWSvaNGoFIDDwXse1h3f4UO3bsq', 0),
(98, '', '', '', '', 'M3jEt8', '$2y$10$6sUsPxdk9UO5sExwz3D6Du1qoLLbHaWN9xWJLKCss683d947GzOIq', 0),
(99, '', '', '', '', 'fqwDy9', '$2y$10$4mHSkhQu//UcHalz7ZMHFeAKERK.95hYqh929QwFMXfjoKWaWVi8G', 0),
(100, '', '', '', '', 'F50qBw', '$2y$10$TkVqZbvLD9IbBDcRXwfPWOiYByNnh35sZ85dQvilKkfviLuUV3QMq', 0),
(101, '', '', '', '', 'SHwwbN', '$2y$10$ZeuY0yTyFM78JSQAjylC1e9QtNwBG7Qkw8sj5QMOREOrB5xrBQ1Fu', 0),
(102, '', '', '', '', 'XMdrPc', '$2y$10$jFaaw5V8pGVoocLn7X5YEe70E6vPRpq4zH3116MBhH0H2Oso6Jb2S', 0),
(103, '', '', '', '', 'knI7Bn', '$2y$10$XHqh75wfJWfTqiOcMJByyuWAUUMi3oJE5lDm9Z9OCwzzIIwpVjFvi', 0),
(104, '', '', '', '', 'pLCZ6G', '$2y$10$NDJx/bftTV3/FHxlBlSJYe7cpn1/T.UrCKtWr1XKIpWSHIe8OHWoS', 0),
(105, '', '', '', '', '1ZX0iW', '$2y$10$y9LLrXetvxszEde1b5nkGOmJ4mA6c/7qybXZJKcs/I8PE4FXVsX5C', 0),
(106, '', '', '', '', 'cn25F5', '$2y$10$w8a2ODeqwGVnjdxkvVXx..FoeaJPfHfYJDDJUgU1zRya7obzQ3ZHe', 0),
(107, '', '', '', '', 'jqRZlz', '$2y$10$8JVZsFBx.rvVrOq9bDJg2.eAVagANFgI3k0y8yIVzOxSe8Uf7Negi', 0),
(108, '', '', '', '', 'ERGQsK', '$2y$10$bBwdmQCy2M55hhsX8P5SnehdEu7TImVEtoNI.3q.vRTUxYseNCTU2', 0),
(109, '', '', '', '', 'UUPpAV', '$2y$10$S38pmyiFWQzldDXVf1uo5.GzlXmok1BMy33eQpZxt3JnLoDaVwmYi', 0),
(110, '', '', '', '', 'bEFOPm', '$2y$10$Xpayvg03itQOqPAh3dPzre93fJ.LMf6FEFIANvD2FJGJkJhmXm7.2', 0),
(111, '', '', '', '', 'UkYpug', '$2y$10$tf870fe9CsGQDDdEyMxkceKUSt7nefLZGbbYj0f/chaIX1YTjDGAm', 0),
(112, '', '', '', '', '1kmunx', '$2y$10$f4KujkiiJYo7JleAXvUluOayGBlJZrV6jb7vKG1jBEH81bL99kVSG', 0),
(113, '', '', '', '', 'stSgjc', '$2y$10$j0z65ha4QUAza1aIFVOLR.5Ecx3fFtAAz1WUan0eiq1vUTvDFCEPa', 0),
(114, '', '', '', '', '17vAod', '$2y$10$QwXwLpe4KD4ztbrH6qR4kewPuHzPdxq/OIaOu6LG0S0rlw2Q/93Hy', 0),
(115, '', '', '', '', 'xpmrF5', '$2y$10$8Upf2kZD6vYA6DQvWyDs1ehvuu7Mqdr3l.7fDKWscuZQJGxaPX23i', 0),
(116, '', '', '', '', 'V2VxWk', '$2y$10$Xe.a3rxbXhFybGe7c2dBKe9362Tm4xoOIzjg4jCaW0Rty.JyJK4Uu', 0),
(117, '', '', '', '', 'AglaYB', '$2y$10$YHYdWVYMQ8M2/dNrI1nz/.IiR3jAtFBMCrV0uXSUU3SmPOf.kgaFS', 0),
(118, '', '', '', '', 'sLIBD0', '$2y$10$Kk4RyFPtscRQE.ZSL2hw5.ZokyAnW2Hzo6Dstkpx7V/DUwfxTNe/O', 0),
(119, '', '', '', '', 'XbE1zm', '$2y$10$RwvRdZQC8dyUnRzzUPB.9eDJUeXXum5n11vk7zwgaP/I073mHfi1G', 0),
(120, '', '', '', '', '7tcrkI', '$2y$10$lbCWsMHLOXbTpyWPppEia.pjlfr0SExEsoBWwnYF/x.Br/ZXT1DnS', 0),
(121, '', '', '', '', 'DtGGc6', '$2y$10$DYx1iDOoz15kPEsRIQRMnuXhUmOU3v3.j0rlD90CJr8o7RTe9N7w2', 0),
(122, '', '', '', '', 'aiT6pJ', '$2y$10$UF4jbanRKexBmJvc4fW6ku.YHrbGB92HYhv5VUpAwSUBI/bKndv42', 0),
(123, '', '', '', '', 'qRO4AN', '$2y$10$kmJsVbuUIJWej8MfTQHj3urdNA4oL5cFZ.A2tTf.iXo6mcb9OYOMC', 0),
(124, '', '', '', '', 'n2sbBC', '$2y$10$6wpqE2L483LEePIxPqQ6duP/P.2ebyZstRTZDy6qB2M9qO5jlHJf6', 0),
(125, '', '', '', '', 'CR7wpI', '$2y$10$M1.jgggLYE16OK8GGYB6oe42vKOytuxYN4mm2m8Fkgag9QNO0aSNu', 0),
(126, '', '', '', '', 'ADz9z1', '$2y$10$cOMINYzydWdIzv0Tw2Q9Xui9vBIw3E8NHkGPToMesHG7cmbFzdp8i', 0),
(127, '', '', '', '', 'PJyhOd', '$2y$10$JAocwNv2tz5JotLEgYDwxOzAwVS9Rn6L7iOcmQVqrgOavz.8nOBJq', 0),
(128, '', '', '', '', 'mun0Of', '$2y$10$A7uvv7s8Lwka8mVSSs7ui.bTHVxXhonXeja/nGii9AdtM7ml06Gw6', 0),
(129, '', '', '', '', 'SgmPsw', '$2y$10$UNCbdkFADkM8PaEFefmY5.fus.4nOFx0TlZS2.0TjJpzc5ovkAkS6', 0),
(130, '', '', '', '', 'Zq615V', '$2y$10$80eVTdN3aNe4l8Mf0jZ1xuYulHM/LTtDtM4p8di296JcDi.NmWhVq', 0),
(131, '', '', '', '', 'kk9WbN', '$2y$10$OnPXBb7P6lmR1MHX7koDGO8V4TR9s2uaIx6nlXeeYrVc12c3/s3Ei', 0),
(132, '', '', '', '', 'x8aB1I', '$2y$10$gXUSXGFt5f1cFqrhON4XI.Uq5kdQ2AbdYXRN4vfChKhWoLZWjQwG.', 0),
(133, '', '', '', '', 'WhS7EM', '$2y$10$IoDrVo5d3rLPfYB3WG7FDORNRBIQUAPtYK8hr6t5Ks1NTR/BGR8Pu', 0),
(134, '', '', '', '', 'D4U11i', '$2y$10$78oV5crCnb2Hg5nmkRFsZuZ0I9k6hMQpfI9.8.2gMDwkduY91iK7y', 0),
(135, '', '', '', '', 'Jfh8T5', '$2y$10$lCcoEiB.fRN4H2bfWZ5UE.HRbyaAc3XCKfao5I3Z8Jx7vsolWOj66', 0),
(136, '', '', '', '', 'CvA2hc', '$2y$10$3zKNIDg9PX1TNJQReRWMAuqfqt34TnTMsoOBBdL9kmK7HaO8QPhAu', 0),
(137, '', '', '', '', 'dFTSTT', '$2y$10$jwsC4GnDdKUH.u0ZPoHMeugAIxITKNhWHsI027pxa1.rJFGMxegMm', 0),
(138, '', '', '', '', '2Dpzfu', '$2y$10$Vucfn8vyO/.OT8tvVyjSh.Xzx5BpaufFshQwToXA7f32VPgtQyIEa', 0),
(139, '', '', '', '', 'd2G2St', '$2y$10$DLiAn4ZK7gOqnFC6VBoIHOSUtI99x/LpdBPYBni5JIV4u6zxWR3JG', 0),
(140, '', '', '', '', 'Mlkaz2', '$2y$10$kibMTc3FN843gSAiheadi.zvYBeRSwcPVnXfs.xHAUEM7xdvQeHAa', 0),
(141, '', '', '', '', 'jLb5aD', '$2y$10$qMi.YTUux8MWgeNxeauek.sJIyA2wifyGCO6oigjDmiyC59VNeMHa', 0),
(142, '', '', '', '', 'UZOcTp', '$2y$10$.dR9hw/NgwNlDai2uzbTQuTcrk8yjXEnXPaEvwUUU4aGAxIEW8Ckq', 0),
(143, '', '', '', '', 'rNVJDk', '$2y$10$JV23BDd73yC.sZBfX5OCLeamW.Hxwcw0ug25jgR8/b.bj16f.QOv6', 0),
(144, '', '', '', '', '5FFSY4', '$2y$10$ASEJ.2Yd44WyZaAb9iGoruJEBPHdfgDfhjgUtbTT2lXWNIvKkKKgq', 0),
(145, '', '', '', '', 'wxbRog', '$2y$10$lcSY9ohFvQaNnl6HAD6Peuq10Mu3ifiBPEHtpy1N6Qu4M3lheofz6', 0),
(146, '', '', '', '', 'PODLiE', '$2y$10$3vrj9MZambllm0WV5I1VUO.AjkK.xTJ0vAsZwCgoH5y6Bl.Y64o9K', 0),
(147, '', '', '', '', 'uOBcH5', '$2y$10$6kGT.XXRJ0JjgQPGjGKLsudSH7Ri3RqIpBkGJa.nkVh21vySuJWnW', 0),
(148, '', '', '', '', 'siEYV8', '$2y$10$S8FhtFg7gUC22mkXcLXqm.asYMuee/gwurwfR7GvZYEyenlIFnNTu', 0),
(149, '', '', '', '', 'fzGVnr', '$2y$10$I/nUB.n5fBFW22fKoxTW5esTiCh9wQM3tz.2apw/A6qKaHr6aNoWK', 0),
(150, '', '', '', '', '6Dwd5i', '$2y$10$7gWOFXJyZkBzAclgYXQW8OrlRMzM21DVCU2s4koQxA2k528s6kh1i', 0),
(151, '', '', '', '', 'tToIKo', '$2y$10$L1jOEoVtEYUInZk9m9exluoWjnYWmtnnR2SFIeoVOHKDgjQ4qGRp2', 0),
(152, '', '', '', '', 'ERrFPv', '$2y$10$PPyKJFNgjxfmSLhyv1ovGep8JTphKVN6CUxWPEY0ilNWSW4MnVWci', 0),
(153, '', '', '', '', 'd2Rlpm', '$2y$10$2vOggJdaSlMU84NT0vZlZujempuGE71NizjnGgHcDuE5StORsAZx6', 0),
(154, '', '', '', '', '5dILng', '$2y$10$V78mM1Kp/4AX3vz1q2.ZQOw9B0MOE0ie/syVf4nacLLDke4iToedO', 0),
(155, '', '', '', '', 'skGgm4', '$2y$10$gzT39CaMqvWHKcJ9/HxBKeCO0Zzs/fPgnXJ/f6vpS5x4AER8AarH.', 0),
(156, '', '', '', '', 'U8PK95', '$2y$10$3MPtiwYmcPDjKEW4wCkScOOUSfFN2STtIm34BVIDlfJZQp9as0p8W', 0),
(157, '', '', '', '', 'cRbrU4', '$2y$10$9CnBIcmk5xy0eInT7570Zev3.Uv10p2BYL1/rmvpTJ2YQeSsZSc3K', 0),
(158, '', '', '', '', 'gbmqcV', '$2y$10$Oa7LEXnwvH4HEDQ46z8rl.RXb8xPwPqQA0EXOhko7mSQ5tUtgsNQS', 0),
(159, '', '', '', '', '0s1YIq', '$2y$10$qqceXOwmSgpiLVMbCHbXRuuD/W/1NZxT3uf.ja.CLHesIrZ7xq6ZC', 0),
(160, '', '', '', '', '0YfdZD', '$2y$10$3lAnQidRxDrWDYMPXgQGquFt0S5XxbWDIwm7ryOELy24/cpyrTH0y', 0),
(161, '', '', '', '', 'w2iAjq', '$2y$10$cXf.ro12jg7UOkIux8lIDe.7nxfjNrY2UuJSI9bVO37wqXYkdqI26', 0),
(162, '', '', '', '', '6cqsNc', '$2y$10$WnExKC9lSedq7FHibOA72.9G/MaHDOJZvx3B.4JUywg52a5I5iPym', 0),
(163, '', '', '', '', 'QgELP4', '$2y$10$N1ikYKophCtqIkHE/FEIO.lGs5XXeL7hTax6Q/TTiLKO8we8vF/ka', 0),
(164, '', '', '', '', 'GdCjf7', '$2y$10$TIfq0il4VrDjFE5gzjW6vuBWOecjoJFetcKpYI99U4PzX7.wJoSwq', 0),
(165, '', '', '', '', 'U1XUXa', '$2y$10$v./LfIlufeODMziREFz66ej.zMSEoydQAQ.vcz2pw9HSgMg5NStqG', 0),
(166, '', '', '', '', 'WTLzG6', '$2y$10$HyrCCHZZY75ic/hoyIbPxuvaCDuiyqgqIWNgWgpKmLpbcys5LXC5W', 0),
(167, '', '', '', '', 'vwsfyj', '$2y$10$UGPqu0mmtC9DR8MTrPHpUOY6pg7nYSiF47q6YVVYqq2YrWbLEnPym', 0),
(168, '', '', '', '', 'xjanYX', '$2y$10$ytBw9jb2cbUjAtNga8/0EO/WyvOt2R6o61zhm6sdlARMYqiYHHK9i', 0),
(169, '', '', '', '', 'R7dhjW', '$2y$10$d6u0O1n6NC6zaPm1jyo7jehjF4bt.6oBAr1qsHoyRE9sYPX14ruzG', 0),
(170, '', '', '', '', 'draflu', '$2y$10$/uxVqxJl0c.G/kk6ziZHKOqEEoIgAGzZ09N3R77Stjg1UdPCtmMv2', 0),
(171, '', '', '', '', '6bYKso', '$2y$10$YrwLZ7C46lzrVlrwRaNy9OX0wEry7GR8AfxVBi/9MiaddzswBK1jC', 0),
(172, '', '', '', '', 'xuYv18', '$2y$10$UYUSVzYn96uQQAkKDc.0ku/02gt9KXINdJJsr63RiwkYMf2P5z5tu', 0),
(173, '', '', '', '', 'Hc65L1', '$2y$10$94gD1LEdJKI0Iw.18jOAeenFmQbFGDnzCasLqrKaRZTrYEz/EAfYa', 0),
(174, '', '', '', '', 'usaE9z', '$2y$10$k3BaYSR0aI9XhXQfs2THgO694Nld/eacyVMmOONH8DTO4nkcJMk82', 0),
(175, '', '', '', '', 'NWD1pW', '$2y$10$7M97dHQ9lhJZBBejpXELR.QlTzBZGcpdsO3MLWWfVEw7ULP9Zce3.', 0),
(176, '', '', '', '', 'agnSg3', '$2y$10$7Vx1mdR0p9Gh2ehrxg21/.fU2JBiJBFCqWd7bnRvKRkLYLYQpLwSy', 0),
(177, '', '', '', '', 'cAXU94', '$2y$10$Ul6PIP55wsPjXMLruGSBd.JScowwo4UR6bmkqwMGQBqWpLH6TvTp6', 0),
(178, '', '', '', '', 'plCmo8', '$2y$10$rmqYoeXbKj57okEbyqnliOgB0dC7b.h.qFZllwCk0OiPqAQsgC7he', 0),
(179, '', '', '', '', '1DOkGr', '$2y$10$W8ciq7.I6gn638qrvuevPuC2NJmfiKn/go6NNiQgGEZCCR2YS.akm', 0),
(180, '', '', '', '', 'RkMxWr', '$2y$10$UjArhJpQNro/PW49NGJWgO4Q1K6UQQBnvQc9Yt79aDrHeSub7Ovgm', 0),
(181, '', '', '', '', 'yRoqhP', '$2y$10$8Zb8YD5NAaVAocWBsiDYM.JAv7ASpcueksai.NAq/5fuQPKw6GfQm', 0),
(182, '', '', '', '', '5NRr59', '$2y$10$m8g7Y.6gxY8nw0va1tnLtOaGFltAdAtoM1NhW/UivdKS5GBMRCQtS', 0),
(183, '', '', '', '', 'N10Trc', '$2y$10$aE/6/svL4xag4XU1rIaxX.vvg/9UkIbozBWBSMRdsvLCMPSr/ILz6', 0),
(184, '', '', '', '', 'zsvkQi', '$2y$10$Hlae.WQ1eOi6WGIci7xGWuhqd920cUibSzQwnFDWzDGDzQcuMvQ8S', 0),
(185, '', '', '', '', 'KIaIDY', '$2y$10$b9TddeMD7vDtLXA18SwQYuS92pY.WUvwUcVTd/BxHTHRadyhgiLMi', 0),
(186, '', '', '', '', '0vCYCt', '$2y$10$fnyyKtWIkFGLHg87fKFDwerJgqkHHPB9q3X8LZGog67vnA5TVXWHy', 0),
(187, '', '', '', '', '4YV8KD', '$2y$10$Zld9cswDYVKCIxzlFFK5duttjme/Y9VvhQENDOxHhGZR6Fgj9O/Sy', 0),
(188, '', '', '', '', 'FCnTXG', '$2y$10$2gNePg.3ukB4RxnL7CuVcOfASaUAk/qMVH1gYRSLg0sS.ojZuQI7a', 0),
(189, '', '', '', '', 'i9wp62', '$2y$10$Sp.5xAHMC3c9p/0kEQ8lnOZMF/siEmY7qvgGD4QKSAh1yX7RrhesO', 0),
(190, '', '', '', '', '2XEh7u', '$2y$10$QO0phVBfRu27r2LQpQGTWudmrKvyG2sHm7JXs0clLB0Zui4aOu2IK', 0),
(191, '', '', '', '', '43il2Y', '$2y$10$I9KF3jlT5z/Jn/RG/vx0VezGqDP7utkokPR7DzqEcuzZ2fnhVkBf.', 0),
(192, '', '', '', '', 'UoysH5', '$2y$10$f7/TS36FteSK692FhL/O0.bo7QncJKhB79OhKJlrfWFDHlQ.xlXpG', 0),
(193, '', '', '', '', 'Plf0MY', '$2y$10$yHCQ0nEKKbQb0MvBunibw.QQWHjxLGlz/cjwN/Dl3MFzVPWeTdzB6', 0),
(194, '', '', '', '', 'A75dRT', '$2y$10$PtdffxtFIJl/kIG2zHr4Je5CzAKfwBAuNQ4NOjqc5djObaVLM.ni6', 0),
(195, '', '', '', '', 'iHPc0w', '$2y$10$sVe7yYAqRebqfB9oW1A2ZOKZHVPp2ipBxJkxKVT6iNVJxNhqVrpX6', 0),
(196, '', '', '', '', 'SMOYK4', '$2y$10$cCK4uTIoMPKP6TUdmg5OluFKgVT68dNnOiH4vgHSgSAOwKy54rLbG', 0),
(197, '', '', '', '', '4FbRuQ', '$2y$10$8rY6bQSl9fMnj.EAz9O1MuaU9GKm1rs3HNI3XVyCfAYUwsELYXjGm', 0),
(198, '', '', '', '', 'Rhrfr9', '$2y$10$IwcmI7tfMgGDFjmLO4AK3e2Rt1Jq.RyPkyS/cpgRtnT5h3Pz8Mory', 0),
(199, '', '', '', '', 'm8CEU0', '$2y$10$PZiXa5kiVy3EaSW8H6ReXe94CMpkGiWckKMUM4Wbof8Ne8b1Qcm42', 0),
(200, '', '', '', '', 'LmgJJG', '$2y$10$6bMlk4Dg19IrYVXexNQc/egfmHInWrVrzdODU4iK.GitQRE2HOyL2', 0),
(201, '', '', '', '', 'I6twRa', '$2y$10$oQ67HbBDU/khKgk8mCpgre0/ktgiEIQHZsISYnwCi71Q012Gst/ci', 0),
(202, '', '', '', '', 'jw9Lp9', '$2y$10$vZtNfz1bigBtYSp5HXt46.Gyq8MhclWfWV4d0//90AtFZrQB3VIYW', 0),
(203, '', '', '', '', '4EWdNt', '$2y$10$ZNEryceDanADh6hKWZDCMOiHrYJdIW2ZIsaNtWEVMeZGVqyC.8JGy', 0),
(204, '', '', '', '', 'szLNd7', '$2y$10$xPFC1gC54aU4/LNXYVvSo.ptWnzfOL6dvm9I53IW6PMSwFDPVsz/y', 0),
(205, '', '', '', '', 'mwgA58', '$2y$10$YjV/RtShctcU6.LPW0IBwudbVqSggAfKgRoRVSZjHYUnmea0hmHzS', 0),
(206, '', '', '', '', 'wxEZo9', '$2y$10$Kjd7xGtU7SkAGLX3OgvLoOM1vbdHdx3vF6MWdR2wGbwginyDuqgPa', 0),
(207, '', '', '', '', 'qwzAt8', '$2y$10$SyxZCV0oLCUVA/TrCTC.Buqn7ttJ6h5RZmXhHRiZhAfiggdIufGrq', 0),
(208, '', '', '', '', 'jUOLob', '$2y$10$gT5s2VM8RdrmvgxyxW70Bu.ZOBekp0kn5MhvsQPU/TTBQKJoZtcnK', 0),
(209, '', '', '', '', 'Lj3TER', '$2y$10$TJfj/uAjjSd1ftjMA3FlhemiU7ZbH6fDNTop24uRqtLm3Ii7oDGZ2', 0),
(210, '', '', '', '', 'DuXns1', '$2y$10$FzbIX2hIGmIz63AeWBFY9uHOuzsHRadslZBS1Nc1/lert00HLgRYe', 0),
(211, '', '', '', '', 'dzlLy1', '$2y$10$eCcnk8CekK4.QJLMoXM.TeFjiOyyImP7x.fqibITdcgWkOWFA/6YG', 0),
(212, '', '', '', '', 'OoiWO1', '$2y$10$du53qyt9xfSS2VHxT7lpvuBI.eR8DmvafUJRu8aDoTAw5KDEQefaq', 0),
(213, '', '', '', '', '8B3qdj', '$2y$10$6ovNdoVle48hn1cte08cduAHGzRSCAgEPQ5sl6qTpkWMFNLWt1UQ6', 0),
(214, '', '', '', '', 'ncVtKV', '$2y$10$TkXyTQtBUm7qD/D0oCqzDOwgrp0Qgkl1UioDVSvcLZMfeSBDmABoi', 0),
(215, '', '', '', '', 'r2sOTd', '$2y$10$mq.IHNHqLKVk58OfqYlZYeEIC7DwNLqej/p8ABe7FypYAOprIJxme', 0),
(216, '', '', '', '', '7GExH1', '$2y$10$9zAN.NXH9l9vk5WbAlTylufFQ.KsB8RqZNXmHC9R1G1Mb5jqTsbnq', 0),
(217, '', '', '', '', 'mXFulP', '$2y$10$hkCm5fXTG4NylJIShvmEj.ZYCCxRZZL3/diTJKIOS3Y8Bbt4J4Hde', 0),
(218, '', '', '', '', 'jajmM8', '$2y$10$RquuTD4O4w4HDGis.O.noOJg2EhyS.nQ2SzqwXqt3WQkI1FPY/TAS', 0),
(219, '', '', '', '', '1EEqPN', '$2y$10$/Agd7uMS0udX1NF6lptmX.CPAgv1ViYNkZqCGC9UG.J4RzMbYt0OC', 0),
(220, '', '', '', '', 'fvLpwQ', '$2y$10$idthgXC7sovPx5BfnVO0ZejOgWLmBB4ACV7W.3WdaNlaDj49r9Xt6', 0),
(221, '', '', '', '', 'q0ENpR', '$2y$10$pnGuJLpY0UW8Qyhc8mF9oedcdjM7MzDFOgHzaPkV6zmbkd1UXcMEC', 0),
(222, '', '', '', '', '7iXKh8', '$2y$10$FMDmxHQlJTX0u06fEI4cJOMRtnBQqP1bE72xfTXCHWWTPxmLntOV6', 0),
(223, '', '', '', '', '4yccYA', '$2y$10$C6/NTCWZ3cFePj1RlHC1Ku/ZB7qHDodR.Jol4pUEkZNhTnD71DH22', 0),
(224, '', '', '', '', 'nGNC1V', '$2y$10$wUhUImHqXKnACJW5Jv1VIOnKLgCUioZrrCmUo6vgXpjjo5JMZf0wi', 0),
(225, '', '', '', '', '2Cghh1', '$2y$10$vMjLt00UHAh.P9Zvid6ztOoa2gP5cOQgFO1hk7oD/MXMWGZqErSNq', 0),
(226, '', '', '', '', 'TdEyHt', '$2y$10$hu0aqe3mt/.lVZTDX8lj3eCmKFnYotqiqS0p6Y92WYnUrrbOApA9m', 0),
(227, '', '', '', '', 'ubYmys', '$2y$10$MfCikzuc/mZANAOXhdLwJu3QMug1ObUlSLxcnHS/nF0WLKbRUgnAe', 0),
(228, '', '', '', '', 'qcGZ55', '$2y$10$sgOy7vTQ2koRQjqGmnBnU.hJ8/KnKw.v3i1vK2ifr1C8VbBQazTCa', 0),
(229, '', '', '', '', '9KD9o0', '$2y$10$6nMhqzp4FZ74AicKDjQYeeOSE.RpsQUaPprPMr6PlEPrHCnTagR4G', 0),
(230, '', '', '', '', 'uN6iWw', '$2y$10$WUiakQeh8ufN2NWwz8GPbeS1j35M3GdCJ2AjttgfpPKXHtc2Tq4BO', 0),
(231, '', '', '', '', 'vWbdHU', '$2y$10$MqIMHgQXQ95Z0YFYCr10QuAegJz4/b3Sy0DKqW7Juo40v62dHxuLS', 0),
(232, '', '', '', '', 'Ykk7tR', '$2y$10$WemuIBnYeoRB3fTV6kz0WeiLLAOrkUrq4rmiH71NNFZrrO6sgkgXO', 0),
(233, '', '', '', '', 'EJzIaG', '$2y$10$ApcrGKlx4ppGCJs3rMz8..cU.nx8a4mPthfrPS4j7sPbmt5/.yxc6', 0),
(234, '', '', '', '', 'wnWJX3', '$2y$10$zCo//E4hw8oAvaZpTiZGL.ukkGc2.kiWmmHV9hqPnasIuhF.jqpWO', 0),
(235, '', '', '', '', 'EiKRA6', '$2y$10$RxBNJZ6SHZKhQn3JuyZj6e9TZuv1NAruvTcH8FmRvUnMLzSg3DXUe', 0),
(236, '', '', '', '', 'Id3ZSM', '$2y$10$5sdk857jasgljUKYh7DTKOciYKL3YtDEUGm.zdrsWcPg2YMjTYkPO', 0),
(237, '', '', '', '', 'at2917', '$2y$10$EyyOXjegvESjzHGhBk01bu47PQ9CaKYBBi3KAR/ksl340SJh0JH2i', 0),
(238, '', '', '', '', 'MZGsYC', '$2y$10$rFbsNZL9NR1B1OKGW/cZv.V8sF/W.b1RU/ADGrMU.jbDFX/iPPjZW', 0),
(239, '', '', '', '', 'UEGEjO', '$2y$10$Vg8GVk61lnEGUy21vM5B1uNvKUm6CyHV8aChMHKBOJ7whSLTAmBKG', 0),
(240, '', '', '', '', 'ohtJSh', '$2y$10$XzFf8zu.RatTBKBGtxomy.FSolRuUYSaAesvtgETNyi60s3FIltMm', 0),
(241, '', '', '', '', 'hJo4WA', '$2y$10$5lsPHg7InA8AR/r7H/Z9tOQpQ56AVYiRozD1BfNUkWbbiy/AkE1yG', 0),
(242, '', '', '', '', 'Slwo9s', '$2y$10$lIa4KpKsjIzHwPMJ7yGy7O2xJ6RmPNu3yPopmkyQ9.M6/xyCyxSUe', 0),
(243, '', '', '', '', 'nftIVj', '$2y$10$OHAyLvzp0I3wtKx7QNRP.O1fRviASd8AYvnkE85FoZBUDOolsfdT2', 0),
(244, '', '', '', '', 'vq6P9a', '$2y$10$LUE3vhIGIFO8jzJU8hfg8eZysUdVO7dT8g3cE6HolcXobcXz8Dw6C', 0),
(245, '', '', '', '', 'Pxx5xm', '$2y$10$kVqf.vORSMrjDGSIF3O14.H0sm6tjgA4iGuIVdJcn4yyApFkIkgSK', 0),
(246, '', '', '', '', 'Cm4JGd', '$2y$10$qDG3EQ3kpxbMWn.xIBhfxe0lv9YCoeSkx9as9g/MLaHA7.YLYwk8e', 0),
(247, '', '', '', '', 'rwZ29r', '$2y$10$iwAZWnI8wLBku21IJcji1uTWass55upoSvnJv1eXhm/mC8lCg8sVW', 0),
(248, '', '', '', '', 'FVdbuC', '$2y$10$S.3w6WAKwM4ZS4nAYAOYCutS3GWgSJMXkik.mUMevxFXrfxtLZCje', 0),
(249, '', '', '', '', 'cpC7AX', '$2y$10$EurY3ZG125j7Fna9vB0YJ.AP.iiBZDFiGjkPc6sefZqUZrD10HuT.', 0),
(250, '', '', '', '', '8xMt8c', '$2y$10$ydFEtpqnEHfW6mWP70OHc.qdzQWZf1bftwGM1wpSVTQgQuNEvF4fW', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `voters`
--
ALTER TABLE `voters`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `voters`
--
ALTER TABLE `voters`
  MODIFY `ID` int(6) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=251;--
-- Database: `cdcol`
--

-- --------------------------------------------------------

--
-- Table structure for table `cds`
--

CREATE TABLE IF NOT EXISTS `cds` (
  `titel` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `interpret` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `jahr` int(11) DEFAULT NULL,
  `id` bigint(20) unsigned NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `cds`
--

INSERT INTO `cds` (`titel`, `interpret`, `jahr`, `id`) VALUES
('Beauty', 'Ryuichi Sakamoto', 1990, 1),
('Goodbye Country (Hello Nightclub)', 'Groove Armada', 2001, 4),
('Glee', 'Bran Van 3000', 1997, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cds`
--
ALTER TABLE `cds`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cds`
--
ALTER TABLE `cds`
  MODIFY `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;--
-- Database: `phpmyadmin`
--

-- --------------------------------------------------------

--
-- Table structure for table `pma_bookmark`
--

CREATE TABLE IF NOT EXISTS `pma_bookmark` (
  `id` int(11) NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma_column_info`
--

CREATE TABLE IF NOT EXISTS `pma_column_info` (
  `id` int(5) unsigned NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma_designer_coords`
--

CREATE TABLE IF NOT EXISTS `pma_designer_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `x` int(11) DEFAULT NULL,
  `y` int(11) DEFAULT NULL,
  `v` tinyint(4) DEFAULT NULL,
  `h` tinyint(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for Designer';

-- --------------------------------------------------------

--
-- Table structure for table `pma_history`
--

CREATE TABLE IF NOT EXISTS `pma_history` (
  `id` bigint(20) unsigned NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma_navigationhiding`
--

CREATE TABLE IF NOT EXISTS `pma_navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma_pdf_pages`
--

CREATE TABLE IF NOT EXISTS `pma_pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) unsigned NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma_recent`
--

CREATE TABLE IF NOT EXISTS `pma_recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma_recent`
--

INSERT INTO `pma_recent` (`username`, `tables`) VALUES
('root', '[{"db":"speadmins","table":"polllist"},{"db":"speadmins","table":"speadminslogins"},{"db":"speadmins","table":"speadminslogin"},{"db":"phpmyadmin","table":"pma_column_info"},{"db":"phpmyadmin","table":"pma_designer_coords"},{"db":"phpmyadmin","table":"pma_history"},{"db":"phpmyadmin","table":"pma_pdf_pages"},{"db":"phpmyadmin","table":"pma_recent"},{"db":"phpmyadmin","table":"pma_relation"},{"db":"cdcol","table":"cds"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma_relation`
--

CREATE TABLE IF NOT EXISTS `pma_relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma_savedsearches`
--

CREATE TABLE IF NOT EXISTS `pma_savedsearches` (
  `id` int(5) unsigned NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma_table_coords`
--

CREATE TABLE IF NOT EXISTS `pma_table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT '0',
  `x` float unsigned NOT NULL DEFAULT '0',
  `y` float unsigned NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma_table_info`
--

CREATE TABLE IF NOT EXISTS `pma_table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma_table_uiprefs`
--

CREATE TABLE IF NOT EXISTS `pma_table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Table structure for table `pma_tracking`
--

CREATE TABLE IF NOT EXISTS `pma_tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) unsigned NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin,
  `data_sql` longtext COLLATE utf8_bin,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) unsigned NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=COMPACT COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma_userconfig`
--

CREATE TABLE IF NOT EXISTS `pma_userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma_userconfig`
--

INSERT INTO `pma_userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2015-08-22 06:38:15', '{"collation_connection":"utf8mb4_unicode_ci"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma_usergroups`
--

CREATE TABLE IF NOT EXISTS `pma_usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma_users`
--

CREATE TABLE IF NOT EXISTS `pma_users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma_bookmark`
--
ALTER TABLE `pma_bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma_column_info`
--
ALTER TABLE `pma_column_info`
  ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma_designer_coords`
--
ALTER TABLE `pma_designer_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma_history`
--
ALTER TABLE `pma_history`
  ADD PRIMARY KEY (`id`), ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma_navigationhiding`
--
ALTER TABLE `pma_navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma_pdf_pages`
--
ALTER TABLE `pma_pdf_pages`
  ADD PRIMARY KEY (`page_nr`), ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma_recent`
--
ALTER TABLE `pma_recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma_relation`
--
ALTER TABLE `pma_relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`), ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma_savedsearches`
--
ALTER TABLE `pma_savedsearches`
  ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma_table_coords`
--
ALTER TABLE `pma_table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma_table_info`
--
ALTER TABLE `pma_table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma_table_uiprefs`
--
ALTER TABLE `pma_table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma_tracking`
--
ALTER TABLE `pma_tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma_userconfig`
--
ALTER TABLE `pma_userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma_usergroups`
--
ALTER TABLE `pma_usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma_users`
--
ALTER TABLE `pma_users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma_bookmark`
--
ALTER TABLE `pma_bookmark`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pma_column_info`
--
ALTER TABLE `pma_column_info`
  MODIFY `id` int(5) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pma_history`
--
ALTER TABLE `pma_history`
  MODIFY `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pma_pdf_pages`
--
ALTER TABLE `pma_pdf_pages`
  MODIFY `page_nr` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pma_savedsearches`
--
ALTER TABLE `pma_savedsearches`
  MODIFY `id` int(5) unsigned NOT NULL AUTO_INCREMENT;--
-- Database: `speadmins`
--

-- --------------------------------------------------------

--
-- Table structure for table `polllist`
--

CREATE TABLE IF NOT EXISTS `polllist` (
  `ID` int(11) NOT NULL,
  `POLLNAME` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `polllist`
--

INSERT INTO `polllist` (`ID`, `POLLNAME`) VALUES
(1, '2015spetrial');

-- --------------------------------------------------------

--
-- Table structure for table `speadminslogins`
--

CREATE TABLE IF NOT EXISTS `speadminslogins` (
  `USERNAME` varchar(25) NOT NULL,
  `KEYHASH` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1

;

--
-- Dumping data for table `speadminslogins`
--

INSERT INTO `speadminslogins` (`USERNAME`, `KEYHASH`) VALUES
('speadmin', '$2y$10$ofm6gSHYK6rgezs5Jpwqcu0b4HxA.Ph6PWgIizsNlb9UEnZtYEyEy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `polllist`
--
ALTER TABLE `polllist`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `polllist`
--
ALTER TABLE `polllist`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;--
-- Database: `test`
--
--
-- Database: `webauth`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_pwd`
--

CREATE TABLE IF NOT EXISTS `user_pwd` (
  `name` char(30) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `pass` char(32) COLLATE latin1_general_ci NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `user_pwd`
--

INSERT INTO `user_pwd` (`name`, `pass`) VALUES
('xampp', 'wampp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_pwd`
--
ALTER TABLE `user_pwd`
  ADD PRIMARY KEY (`name`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
