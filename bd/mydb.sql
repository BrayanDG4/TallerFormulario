-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-11-2022 a las 05:14:49
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acudiente`
--

CREATE TABLE `acudiente` (
  `idAcudiente` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Telefono` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `acudiente`
--

INSERT INTO `acudiente` (`idAcudiente`, `Nombre`, `Telefono`) VALUES
(0, '0', 0),
(123456988, 'Santiago', 32145697),
(1234567890, 'Ernesto', 321456988);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aspirantes`
--

CREATE TABLE `aspirantes` (
  `id_Aspirante` int(11) NOT NULL,
  `Documento` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `id_sexo` int(11) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `Estado_id_estado` int(11) NOT NULL,
  `Hijos` int(11) DEFAULT NULL,
  `TrabajoActual_id_trabajo` int(11) NOT NULL,
  `estrato` int(11) DEFAULT NULL,
  `OtroGenero_id_otro` int(11) NOT NULL,
  `Conyuge_id_conyuge` int(11) NOT NULL,
  `HIJOS_id_hijo` int(11) NOT NULL,
  `acudiente_idAcudiente` int(11) NOT NULL,
  `ciudad_idCiudad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `aspirantes`
--

INSERT INTO `aspirantes` (`id_Aspirante`, `Documento`, `Nombre`, `id_sexo`, `FechaNacimiento`, `Estado_id_estado`, `Hijos`, `TrabajoActual_id_trabajo`, `estrato`, `OtroGenero_id_otro`, `Conyuge_id_conyuge`, `HIJOS_id_hijo`, `acudiente_idAcudiente`, `ciudad_idCiudad`) VALUES
(1, 1234567890, 'Miguel', 1, '1998-11-18', 2, 1, 2, 1, 7, 4, 2, 0, 1),
(2, 1234567891, 'Naren', 3, '1998-11-16', 2, 1, 3, 1, 2, 6, 0, 0, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudad`
--

CREATE TABLE `ciudad` (
  `idCiudad` int(11) NOT NULL,
  `NombreCiudad` varchar(45) DEFAULT NULL,
  `departamento_idDepartamento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ciudad`
--

INSERT INTO `ciudad` (`idCiudad`, `NombreCiudad`, `departamento_idDepartamento`) VALUES
(1, 'Bucaramanga', 2),
(2, 'Medellin', 3),
(3, 'Valledupar', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conyuge`
--

CREATE TABLE `conyuge` (
  `id_conyuge` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `conyuge`
--

INSERT INTO `conyuge` (`id_conyuge`, `nombre`) VALUES
(0, 'No tiene'),
(1, 'Marcela'),
(2, 'Patricia'),
(3, 'Leidy'),
(4, 'Milena'),
(5, 'Carlos'),
(6, 'Manuel'),
(7, 'Camilo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `idDepartamento` int(11) NOT NULL,
  `NombreDepartamento` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`idDepartamento`, `NombreDepartamento`) VALUES
(1, 'Cesar'),
(2, 'Santander'),
(3, 'Antioquia ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id_estado` int(11) NOT NULL,
  `NombreEstado` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`id_estado`, `NombreEstado`) VALUES
(1, 'Soltero'),
(2, 'Union libre'),
(3, 'Casado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hijos`
--

CREATE TABLE `hijos` (
  `id_hijo` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Edad` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `hijos`
--

INSERT INTO `hijos` (`id_hijo`, `Nombre`, `Edad`) VALUES
(0, 'jaime', '5'),
(2, 'messi cristiano', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `otrogenero`
--

CREATE TABLE `otrogenero` (
  `id_otrogenero` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `otrogenero`
--

INSERT INTO `otrogenero` (`id_otrogenero`, `nombre`) VALUES
(1, 'Gay'),
(2, 'Puto'),
(3, 'Homosexual'),
(4, 'Lesbiana'),
(5, 'Payaso'),
(6, 'Helicoptero'),
(7, 'xxxxxx');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sexo`
--

CREATE TABLE `sexo` (
  `id_sexo` int(11) NOT NULL,
  `genero` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sexo`
--

INSERT INTO `sexo` (`id_sexo`, `genero`) VALUES
(1, 'Masculino'),
(2, 'Femenino'),
(3, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajoactual`
--

CREATE TABLE `trabajoactual` (
  `id_trabajo` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `trabajoactual`
--

INSERT INTO `trabajoactual` (`id_trabajo`, `Nombre`) VALUES
(0, 'No trabaja'),
(1, 'Microsoft'),
(2, 'Googol'),
(3, 'La calle'),
(4, 'UPC');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acudiente`
--
ALTER TABLE `acudiente`
  ADD PRIMARY KEY (`idAcudiente`);

--
-- Indices de la tabla `aspirantes`
--
ALTER TABLE `aspirantes`
  ADD PRIMARY KEY (`id_Aspirante`,`id_sexo`,`Estado_id_estado`,`TrabajoActual_id_trabajo`,`OtroGenero_id_otro`,`Conyuge_id_conyuge`,`HIJOS_id_hijo`,`acudiente_idAcudiente`,`ciudad_idCiudad`),
  ADD KEY `fk_ASPIRANTES_SEXO2_idx` (`id_sexo`),
  ADD KEY `fk_ASPIRANTES_OtroGenero1_idx` (`OtroGenero_id_otro`),
  ADD KEY `fk_ASPIRANTES_Estado1_idx` (`Estado_id_estado`),
  ADD KEY `fk_ASPIRANTES_Conyuge1_idx` (`Conyuge_id_conyuge`),
  ADD KEY `fk_ASPIRANTES_TrabajoActual1_idx` (`TrabajoActual_id_trabajo`),
  ADD KEY `fk_ASPIRANTES_HIJOS1_idx` (`HIJOS_id_hijo`),
  ADD KEY `fk_aspirantes_acudiente1_idx` (`acudiente_idAcudiente`),
  ADD KEY `fk_aspirantes_ciudad1_idx` (`ciudad_idCiudad`);

--
-- Indices de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`idCiudad`,`departamento_idDepartamento`),
  ADD KEY `fk_ciudad_departamento1_idx` (`departamento_idDepartamento`);

--
-- Indices de la tabla `conyuge`
--
ALTER TABLE `conyuge`
  ADD PRIMARY KEY (`id_conyuge`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`idDepartamento`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indices de la tabla `hijos`
--
ALTER TABLE `hijos`
  ADD PRIMARY KEY (`id_hijo`);

--
-- Indices de la tabla `otrogenero`
--
ALTER TABLE `otrogenero`
  ADD PRIMARY KEY (`id_otrogenero`);

--
-- Indices de la tabla `sexo`
--
ALTER TABLE `sexo`
  ADD PRIMARY KEY (`id_sexo`);

--
-- Indices de la tabla `trabajoactual`
--
ALTER TABLE `trabajoactual`
  ADD PRIMARY KEY (`id_trabajo`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `aspirantes`
--
ALTER TABLE `aspirantes`
  ADD CONSTRAINT `fk_ASPIRANTES_Conyuge1` FOREIGN KEY (`Conyuge_id_conyuge`) REFERENCES `conyuge` (`id_conyuge`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ASPIRANTES_Estado1` FOREIGN KEY (`Estado_id_estado`) REFERENCES `estado` (`id_estado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ASPIRANTES_HIJOS1` FOREIGN KEY (`HIJOS_id_hijo`) REFERENCES `hijos` (`id_hijo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ASPIRANTES_OtroGenero1` FOREIGN KEY (`OtroGenero_id_otro`) REFERENCES `otrogenero` (`id_otrogenero`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ASPIRANTES_SEXO2` FOREIGN KEY (`id_sexo`) REFERENCES `sexo` (`id_sexo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ASPIRANTES_TrabajoActual1` FOREIGN KEY (`TrabajoActual_id_trabajo`) REFERENCES `trabajoactual` (`id_trabajo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_aspirantes_acudiente1` FOREIGN KEY (`acudiente_idAcudiente`) REFERENCES `acudiente` (`idAcudiente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_aspirantes_ciudad1` FOREIGN KEY (`ciudad_idCiudad`) REFERENCES `ciudad` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD CONSTRAINT `fk_ciudad_departamento1` FOREIGN KEY (`departamento_idDepartamento`) REFERENCES `departamento` (`idDepartamento`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
