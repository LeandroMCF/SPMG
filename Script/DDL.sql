USE SPMedicalGroup;
GO

--Teste
SELECT TipoUsuario.TipoUsuario FROM Usuario
INNER JOIN TipoUsuario
ON Usuario.IdTipoUsuario = TipoUsuario.IdTipoUsuario;

SELECT * FROM Clinica;

SELECT * FROM Prontuario;

SELECT * FROM Medicos;

SELECT * FROM Situacao;

SELECT * FROM Consultas;

SELECT * FROM Especialidades;
--FimTeste

--Especialidades
SELECT Nome FROM Especialidades
--FimEspecialidades

--Médicos
SELECT Medicos.CRM, Medicos.Nome, Usuario.Email, Especialidades.Nome AS Especialidade, C.Clinica, C.CNPJ AS Cnpj, C.RazaoSocial AS Razão_Social, C.Endereco AS Endereço
FROM Medicos
INNER JOIN Usuario
ON Usuario.IdUsuario = Medicos.IdUsuario
INNER JOIN Especialidades
ON Especialidades.IdEspecialidades = Medicos.IdEspecialidades
INNER JOIN Clinica C
ON C.IdClinica = Medicos.IdClinica;
GO
--FimMédicos

--Prontuário
SELECT P.Nome, U.Email, P.DataDeNascimento, P.RG, P.CPF, P.Endereco  
FROM Prontuario P
INNER JOIN Usuario U
ON U.IdUsuario = P.IdUsuario;
GO
--FimProntuário

--Consultas
SELECT P.Nome AS Paciente, M.Nome AS Médico, C.DataConsulta AS Data_da_Consulta, S.Situacao AS Situação
FROM Consultas C
INNER JOIN Prontuario P
ON P.IdProntuario = C.IdProntuario
INNER JOIN Medicos M
ON M.IdMedicos = C.IdMedicos
INNER JOIN Situacao S
ON S.IdSituacao = C.IdSituacao;
GO
--FimConsultas

--Idade
SELECT dbo.Idade('Ligia')AS [Nome]
--FimIdade

SELECT * FROM Prontuario
Where CPF = '94839859000';