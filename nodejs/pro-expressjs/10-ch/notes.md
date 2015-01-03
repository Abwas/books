# 10. Abstração

* Mantenha o arquivo `app.js` ou `server.js` o menor possível
* A melhor forma de reutilizar código é usar *middlewares* e *routes*.
* Declarações de configuração também podem (devem) ser abstraídas

## Middleware

* Usar funções nomeadas permite que se reaproveite o middleware para outras rotas
* A melhor prática é abstrair funções nomeadas para módulos externos baseados em sua funcionalidade. Ex: `auth`, `database`, etc.

## Routes

* Para melhor suporte entre plataformas, é bom utilizar `path.join( 'algumaPasta', 'algumArquivo' )`, pois assim será gerado o caminho relativo ao da plataforma que o código está sendo utilizado.