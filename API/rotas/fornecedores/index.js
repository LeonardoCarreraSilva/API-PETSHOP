const router = require('express').Router();
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')
router.get('/', async (req, res) => {
  const resultados = await TabelaFornecedor.listar()
  res.send(JSON.stringify(resultados))
})

router.post('/', async (req, res) => {
  const dadosRecebidos = req.body
  const fornecedor = new Fornecedor(dadosRecebidos);
  await fornecedor.criar()

  res.send(JSON.stringify(res))
})


module.exports = router