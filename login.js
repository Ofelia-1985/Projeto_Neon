const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

let db = [
{ID_LANCAMENTO: '1',	LOGIN_ID_CLIENTE: '1',	TIPO_LANCAMENTO: 'SAIDA',	VALOR: '1.0',	DESCRICAO: 'IFOOD',	SALDO_CONTA: '0.0',	DATA_LANCAMENTO: '2021-12-15 16:49:47'},
{ID_LANCAMENTO: '2',	LOGIN_ID_CLIENTE: '1',	TIPO_LANCAMENTO: 'ENTRADA',	VALOR: '100.0',	DESCRICAO: 'EMPRESTIMO',	SALDO_CONTA: '100.0',	DATA_LANCAMENTO: '2021-12-15 17:33:19'},
{ID_LANCAMENTO: '3',	LOGIN_ID_CLIENTE: '2',	TIPO_LANCAMENTO: 'ENTRADA',	VALOR: '1100.0',	DESCRICAO: 'SALARIO',	SALDO_CONTA: '1200.0', DATA_LANCAMENTO:	'2021-12-15 17:43:50'}
]

app.get('/',(req, res) => {
	return res.json(db);
})

app.listen(21262, () => {
	console.log(`Express started at http://localhost:21262`);
})
