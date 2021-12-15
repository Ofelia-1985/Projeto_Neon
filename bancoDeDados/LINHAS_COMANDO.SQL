-- COMANDO UTILIZADOS DURANTE O DESENVOLVIMENTO DO BANCO DE DADOS --


-- Linha de comando utilizado para selecionar tabela --

select * FROM LANCAMENTO;


-- Linha de comando responsável por alterar a ordem da coluna --

ALTER TABLE login change NOME NOME varchar (30) AFTER ID_CLIENTE; 
select * from LOGIN;  
ALTER TABLE lancamento change LOGIN_ID_CLIENTE LOGIN_ID_CLIENTE INT AFTER ID_LANCAMENTO; 


-- Linha de comando para especificar o tipo de dado da coluna --

SELECT DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS 
WHERE table_name = 'lancamento' AND COLUMN_NAME = 'DATA_LANCAMENTO';

 -- Linha de comando para popular a tabela --

INSERÇÃO EM LANÇAMENTO (ID_LANCAMENTO, LOGIN_ID_CLIENTE, TIPO_LANCAMENTO, VALOR, DESCRIÇÃO, SALDO_CONTA, DATA_LANCAMENTO)   VALORES ( 3 , 1 , ' ENTRADA ' , 1100 . 00 , ' Salario ' , 1200 . 00 , current_timestamp ());


-- Linha de comando para atualizar dados da coluna SALDO_CONTA DO ID_LANCAMENTO PASSADO POR PARAMETRO --

UPDATE lancamento set SALDO_CONTA =  750 . 00  onde ID_LANCAMENTO = 10 ;;


-- Linha de comando para criar coluna DATA_LACAMENTO onde a função CURRENT_TIMESTAMP retorna a data e hora atual --

alter table lancamento add column DATA_LANCAMENTO TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP; 


-- Linha de comando de comando para deletar algumas linhas utilizando a clausula WHERE --
DELETE FROM lancamento WHERE ID_LANCAMENTO >= 2 AND ID_LANCAMENTO <= 7; excluir linhas;


