-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 14, 2020 at 05:58 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fav_things`
--

-- --------------------------------------------------------

--
-- Table structure for table `fav_animes`
--

DROP TABLE IF EXISTS `fav_animes`;
CREATE TABLE IF NOT EXISTS `fav_animes` (
  `anime_ID` int(11) NOT NULL AUTO_INCREMENT,
  `anime_name` varchar(30) NOT NULL,
  `Air Dates` varchar(20) NOT NULL,
  `anime_description` text NOT NULL,
  `anime_image` varchar(30) NOT NULL,
  `anime_video` varchar(30) NOT NULL,
  PRIMARY KEY (`anime_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `fav_animes`
--

INSERT INTO `fav_animes` (`anime_ID`, `anime_name`, `Air Dates`, `anime_description`, `anime_image`, `anime_video`) VALUES
(1, 'Attack on Titan', 'from 2013', 'Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives within cities surrounded by enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to retake the world after a Titan brings about the destruction of his home town and the death of his mother. Attack on Titan has been serialized in Kodansha\'s monthly Bessatsu Shōnen Magazine since September 2009, and collected into 32 tankōbon volumes as of September 2020.\",\r\n', 'AttackOnTitan.jpg', 'AttackOnTitan.mp4'),
(2, 'Demon Slayer', 'from 2019', 'Demon Slayer:  Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotōge. It follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon. The manga was serialized in Shueisha\'s Weekly Shōnen Jump from February 2016 to May 2020, and its chapters collected in 22 tankōbon volumes as of October 2020. It is published in English by Viz Media and simulpublished by Shueisha in English and Spanish on their Manga Plus platform. ', 'DemonSlayer.jpg', 'DemonSlayer.mp4'),
(3, 'Inuyasha', 'from 2000', 'Inuyasha, also known as Inuyasha: A Feudal Fairy Tale, is a Japanese manga series written and illustrated by Rumiko Takahashi. The series begins with Kagome Higurashi, a fifteen-year-old middle school girl from modern-day Tokyo who is transported to the Japanese era of Sengoku period after falling into a well in her family shrine, where she meets the half-demon, Inuyasha. When a demon from the era tries to take the sacred Shikon Jewel that re-emerges from inside Kagome\'s body, she inadvertently shatters the Jewel into dozens of fragments that are scattered across Japan. Inuyasha and Kagome set to recover the Jewel\'s fragments, and through their quest they are joined by the lecherous monk Miroku, the demon slayer Sango, and the fox demon Shippo. Together, they journey to restore the Shikon Jewel before it falls into the hands of the evil demon Naraku.', 'Inuyasha.jpg', 'Inuyasha.mp4');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
