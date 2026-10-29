import express from 'express';
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('Seja bem vindo(a) à Central de Informações da Escola!');
});

app.get('/status', (req, res) => {
    res.json({ status: 'online', sprint: 1});
});

app.get('/escola', (req, res) => {
    res.send({
        "nome": "Escola Técnica",
        "cidade": "São Paulo",
        "tipo": "Ensino Técnico"
    });
});

app.get('/cursos', (req, res) => {
    res.send([
        { "id": 1, "nome": "Desenvolvimento de Sistemas" },
        { "id": 2, "nome": "Redes de Computadores" },
        { "id": 3, "nome": "Administração" }
    ]);
});

app.get('/professor', (req, res) => {
    res.json({
        nome: "Eduardo",
        disciplina: "Programação Back-End"
    });
});

app.get('/ajuda', (req, res) => {
    const orientacoes = `
    Rotas disponíveis no sistema:
    - GET /          : Página inicial com mensagem de boas-vindas.
    - GET /status    : Verifica se o servidor está online.
    - GET /escola    : Retorna dados da instituição (Nome, Cidade, Tipo).
    - GET /cursos    : Lista os cursos técnicos disponíveis.
    - GET /professor : Mostra o nome do professor e sua disciplina.
    - GET /ajuda     : Apresenta as orientações.
    `;
    res.send(orientacoes);
});

// DESAFIO EXTRA
app.get('/requisicao', (req, res) => {
  res.json({
    metodo: req.method,
    caminho: req.path,
    mensagem: "Solicitação recebida com sucesso!"
  });
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
}) ;