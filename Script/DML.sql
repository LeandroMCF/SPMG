USE SPMedicalGroup;
GO

INSERT INTO TipoUsuario			(TipoUsuario)
VALUES							('Administrador'),
								('Médico'),
								('Paciente');
GO

INSERT INTO Especialidades		(Nome)
VALUES							('Acupuntura'),
								('Anestesiologia'),
								('Angiologia'),
								('Cardiologia'),
								('Cirurgia Cardiovascular'),
								('Cirurgia da mão'),
								('Cirurgia do Aparelho Digestivo'),
								('Cirurgia Geral'),
								('Cirurgia Pediátrica'),
								('Cirurgia Plástica'),
								('Cirurgia Torácica'),
								('Cirurgia Vascular'),
								('Dermatologia'),
								('Radioterapia'),
								('Urologia'),
								('Pediatria'),
								('Psiquiatria');
GO

INSERT INTO Usuario				(IdTipoUsuario, Email, Senha)
VALUES							( 1, 'adm@gmail.com', 'adm123'),
								( 2, 'helena.souza@spmedicalgroup.com.br', 'HelenaS123'),
								( 2, 'roberto.possarle@spmedicalgroup.com.br', 'RicardoP123'),
								( 2, 'ricardo.lemos@spmedicalgroup.com.br', 'RicardoL123'),
								( 3, 'ligia@gmail.com', 'Ligia123'),
								( 3, 'alexandre@gmail.com', 'Alexandre123'),
								( 3, 'fernando@gmail.com', 'Fernando123'),
								( 3, 'henrique@gmail.com', 'Henrique123'),
								( 3,  'joao@hotmail.com', 'João123'),
								( 3,  'bruno@gmail.com', 'Bruno123'),
								( 3, 'mariana@outlook.com', 'Mariana123');
GO

INSERT INTO Clinica				(Clinica, CNPJ, RazaoSocial, Endereco)
VALUES							('Clinica Possarle ', '86.400.902/0001-30', 'SP Medical Group', 'Av. Barão Limeira, 532, São Paulo, SP');
GO

INSERT INTO	Situacao			(Situacao)
VALUES							('Agendada'),
								('Cancelada'),
								('Realizada');
GO

INSERT INTO	Prontuario			(IdUsuario, Nome, DataDeNascimento, Telefone, RG, CPF, Endereco)
VALUES							(1, 'Ligia', '1983-10-13', '11 3456-7654', '43522543-5', '94839859000', 'Rua Estado de Israel 240, São Paulo, Estado de São Paulo, 04022-000'),
								(2, 'Alexandre', '2001-07-23', '11 98765-6543', '32654345-7', '73556944057', 'Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200'),
								(3, 'Fernando', '1978-10-10', '11 97208-4453', '54636525-3', '16839338002', 'Av. Ibirapuera - Indianópolis, 2927,  São Paulo - SP, 04029-200'),
								(4, 'Henrique', '1985-10-13', '11 3456-6543', '54366362-5', '14332654765', 'R. Vitória, 120 - Vila Sao Jorge, Barueri - SP, 06402-030'),
								(5, 'João', '1975-08-27', '11 7656-6377', 't32544444-1', '91305348010', 'R. Ver. Geraldo de Camargo, 66 - Santa Luzia, Ribeirão Pires - SP, 09405-380'),
								(6, 'Bruno', '1972-03-21', '11 95436-8769', '54566266-7', '79799299004', 'Alameda dos Arapanés, 945 - Indianópolis, São Paulo - SP, 04524-001'),
								(7, 'Mariana', '2018-03-05', NULL, '54566266-8', '13771913039', 'R Sao Antonio, 232 - Vila Universal, Barueri - SP, 06407-140');
GO

INSERT INTO Medicos				(CRM, IdUsuario, IdEspecialidades, IdClinica, Nome)
VALUES							('54356-SP', 8, 1, 1, 'Ricardo Lemos'),
								('53452-SP', 9, 17, 1, 'Roberto Possarle'),
								('65463-SP', 10, 16, 1, 'Helena Strada');
GO

INSERT INTO Consultas			(IdProntuario, IdMedicos, DataConsulta, IdSituacao)
VALUES							(7, 3, '20-01-2020 15:00:00', 3),
								(2, 2, '2020-01-06 10:00:00', 2),
								(3, 2, '2020-02-07 11:00:00', 3),
								(2, 2, '2018-02-06 10:00:00', 3),
								(4, 1, '2019-02-07 11:00:45', 2),
								(7, 3, '2020-03-08 15:00:00', 1),
								(4, 2, '2020-03-09 11:00:45', 1);
GO