use projeto_neon;
select * from lancamento;

-- POPULANDO A TABELA --
INSERT INTO lancamento (ID_LANCAMENTO, LOGIN_ID_CLIENTE, TIPO_LANCAMENTO, VALOR, DESCRICAO, SALDO_CONTA, DATA_LANCAMENTO)  VALUES (3, 1, 'ENTRADA', 1100.00, 'SALARIO', 1200.00, current_timestamp()); 
INSERT INTO lancamento (ID_LANCAMENTO, LOGIN_ID_CLIENTE, TIPO_LANCAMENTO, VALOR, DESCRICAO, SALDO_CONTA, DATA_LANCAMENTO)  VALUES (4, 2, 'ENTRADA', 100.00, 'VENDA TENIS', 100.00, current_timestamp()); 
INSERT INTO lancamento (ID_LANCAMENTO, LOGIN_ID_CLIENTE, TIPO_LANCAMENTO, VALOR, DESCRICAO, SALDO_CONTA, DATA_LANCAMENTO)  VALUES (5, 3, 'ENTRADA', 600.00, 'ADIANTAMENTO 13', 600.00, current_timestamp()); 
INSERT INTO lancamento (ID_LANCAMENTO, LOGIN_ID_CLIENTE, TIPO_LANCAMENTO, VALOR, DESCRICAO, SALDO_CONTA, DATA_LANCAMENTO)  VALUES (6, 4, 'ENTRADA', 1000.00, 'PAGAMENTO DO ALUGUEL', 1000.00, current_timestamp()); 
INSERT INTO lancamento (ID_LANCAMENTO, LOGIN_ID_CLIENTE, TIPO_LANCAMENTO, VALOR, DESCRICAO, SALDO_CONTA, DATA_LANCAMENTO)  VALUES (7, 5, 'ENTRADA', 1500.00, 'SALARIO', 1500.00, current_timestamp()); 
INSERT INTO lancamento (ID_LANCAMENTO, LOGIN_ID_CLIENTE, TIPO_LANCAMENTO, VALOR, DESCRICAO, SALDO_CONTA, DATA_LANCAMENTO)  VALUES (8, 6, 'ENTRADA', 800.00, 'VENDA GELADEIRA', 800.00, current_timestamp()); 
INSERT INTO lancamento (ID_LANCAMENTO, LOGIN_ID_CLIENTE, TIPO_LANCAMENTO, VALOR, DESCRICAO, SALDO_CONTA, DATA_LANCAMENTO)  VALUES (9, 7, 'ENTRADA', 100.00, 'EMPRESTIMO', 100.00, current_timestamp()); 

INSERT INTO lancamento (ID_LANCAMENTO, LOGIN_ID_CLIENTE, TIPO_LANCAMENTO, VALOR, DESCRICAO, SALDO_CONTA, DATA_LANCAMENTO)  VALUES (9, 2, 'SAIDA', 50.00, 'PIZZA', 50.00, current_timestamp()); 
INSERT INTO lancamento (ID_LANCAMENTO, LOGIN_ID_CLIENTE, TIPO_LANCAMENTO, VALOR, DESCRICAO, SALDO_CONTA, DATA_LANCAMENTO)  VALUES (10, 6, 'SAIDA', 50.00, 'IFOOD', 30.00, current_timestamp()); 
INSERT INTO lancamento (ID_LANCAMENTO, LOGIN_ID_CLIENTE, TIPO_LANCAMENTO, VALOR, DESCRICAO, SALDO_CONTA, DATA_LANCAMENTO)  VALUES (11, 5, 'SAIDA', 500.00, 'ALUGUEL', 1000.00, current_timestamp()); 
INSERT INTO lancamento (ID_LANCAMENTO, LOGIN_ID_CLIENTE, TIPO_LANCAMENTO, VALOR, DESCRICAO, SALDO_CONTA, DATA_LANCAMENTO)  VALUES (12, 3, 'SAIDA', 250.00, 'CARTAO DE CREDITO', 350.00, current_timestamp()); 

-- Atualiza????o dados da coluna --

UPDATE lancamento set SALDO_CONTA= 750.00 where ID_LANCAMENTO=10; 


