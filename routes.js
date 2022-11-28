const express = require('express')
const router = express.Router()
const mock = require('./mock.json')

function formatBody(body) {
	const pecas = JSON.parse(body?.jsonPecas || null) || {}

	const formattedBody = {
		jogadorAtivo: body?.jogadorAtivo || null,
		tempoAtualBrancas: body?.tempoAtualBrancas || 0,
		tempoAtualPretas: body?.tempoAtualPretas || 0,
		jsonPecas: pecas?.pieces || {},
	}

	return formattedBody
}

// obter tabuleiro
router.get('/:id', (req, res) => {
	const body = req?.body || mock

	const finalData = formatBody(body)

	res.send(finalData)
})

// realizer jogada
router.get('/jogar/:id/:token/:src/:dest', (req, res) => {
	const body = req?.body || mock

	const finalData = formatBody(body)

	res.send(finalData)
})

// oferecer empate
router.get('/empate/:id')

// aceitar empate
router.get('/empate/aceitar/:id/:token')

// desistir da partida
router.get('/desistir/:id')

module.exports = router
