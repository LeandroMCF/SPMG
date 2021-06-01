CREATE DATABASE SPMedicalGroup;
GO

USE SPMedicalGroup;
GO

CREATE TABLE TipoUsuario
(
	IdTipoUsuario			INT PRIMARY KEY IDENTITY,
	TipoUsuario				VARCHAR(250)UNIQUE NOT NULL 
)
GO

CREATE TABLE Usuario
(
	IdUsuario				INT PRIMARY KEY IDENTITY,
	IdTipoUsuario			INT FOREIGN KEY REFERENCES TipoUsuario (IdTipoUsuario),
	Email					VARCHAR(200) NOT NULL,
	Senha					VARCHAR(200) NOT NULL,
);
GO

CREATE TABLE Especialidades
(
	IdEspecialidades		INT PRIMARY KEY IDENTITY,
	Nome					VARCHAR(200) NOT NULL
);
GO

CREATE TABLE Clinica
(
	IdClinica				INT PRIMARY KEY IDENTITY,
	Clinica					VARCHAR(200)UNIQUE NOT NULL,
	CNPJ					VARCHAR(200)UNIQUE NOT NULL,
	RazaoSocial				VARCHAR(200)UNIQUE NOT NULL,
	Endereco				VARCHAR(200)UNIQUE NOT NULL,
);
GO

CREATE TABLE Situacao
(
	IdSituacao				INT PRIMARY KEY IDENTITY,
	Situacao				VARCHAR(200)UNIQUE NOT NULL,
);
GO

CREATE TABLE Prontuario
(
	IdProntuario			INT PRIMARY KEY IDENTITY,
	IdUsuario				INT FOREIGN KEY REFERENCES Usuario (IdUsuario),
	Nome					VARCHAR(200)NOT NULL,
	DataDeNascimento		DATE,
	Telefone				VARCHAR(200)UNIQUE,
	RG						VARCHAR(200)UNIQUE NOT NULL,
	CPF						VARCHAR(200)UNIQUE NOT NULL,
	Endereco				VARCHAR(200) NOT NULL,
);
GO

CREATE TABLE Medicos
(
	IdMedicos				INT PRIMARY KEY IDENTITY,
	IdEspecialidades		INT FOREIGN KEY REFERENCES Especialidades (IdEspecialidades),
	IdClinica				INT FOREIGN KEY REFERENCES Clinica (IdClinica),
	IdUsuario				INT FOREIGN KEY REFERENCES Usuario (IdUsuario),
	Nome					VARCHAR(200)NOT NULL,
	CRM						VARCHAR(200)UNIQUE NOT NULL,
);
GO

CREATE TABLE Consultas
(
	IdConsultas				INT PRIMARY KEY IDENTITY,
	IdMedicos				INT FOREIGN KEY REFERENCES Medicos (IdMedicos),
	IdProntuario			INT FOREIGN KEY REFERENCES Prontuario (IdProntuario),
	IdSituacao				INT FOREIGN KEY REFERENCES Situacao (IdSituacao),
	DataConsulta			DATETIME,
);
GO

CREATE FUNCTION Idade (@Nome VARCHAR(200))
RETURNS REAL
AS
	BEGIN
		DECLARE @Idade REAL
		SELECT 
			@Idade = (2021 - YEAR(P.DataDeNascimento))
		FROM Prontuario AS P
		WHERE P.Nome = @Nome
		RETURN @Idade
	END
GO