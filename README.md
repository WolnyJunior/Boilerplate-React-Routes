## Instalar React-Router-Dom
- npm i react-router-dom

## Instalar React-Router-Dom com recomendações e importações automáticas
- npm install --save-dev @types/react-router-dom

## Função loginRedirect
A função loginRedirect tem o propósito de redirecionar o usuário para a página inicial (/) caso ele já esteja autenticado. Se o usuário não estiver autenticado, a função simplesmente retorna o componente que foi passado como argumento.

## Explicação

1. **`isAutenticated = true`:**
   - Esta linha define uma constante que indica se o usuário está autenticado ou não. Neste exemplo, ela está definida como `true`, o que significa que o usuário está autenticado.

2. **`loginRedirect(componente)`:**
   - Esta é a função que aceita um parâmetro `componente`. Esse parâmetro é um componente React que será retornado caso o usuário não esteja autenticado.

3. **`if (isAutenticated)`:**
   - Esta condição verifica se o usuário está autenticado. Se `isAutenticated` for `true`, o código dentro do `if` será executado.

4. **`<Navigate to='/' replace />`:**
   - O `Navigate` é um componente do React Router (geralmente usado na versão 6 ou superior) que realiza o redirecionamento programático do usuário para outra rota.
   - **`to='/'`**: Este prop define para qual rota o usuário será redirecionado. No seu caso, `'/'` significa que o usuário será redirecionado para a página inicial.
   - **`replace`**: Este prop opcional faz com que a nova rota substitua a rota atual no histórico de navegação, em vez de adicioná-la ao final. Isso significa que se o usuário pressionar o botão "Voltar" do navegador, ele não voltará para a página anterior (a página onde o `loginRedirect` foi chamado), mas para a página anterior àquela.

5. **`return componente`:**
   - Se o usuário não estiver autenticado (`isAutenticated` for `false`), a função retorna o componente passado como argumento para a função `loginRedirect`.

## Resumo

- **`<Navigate to='/' replace />`**: Redireciona o usuário para a página inicial (`'/'`). O `replace` impede que a rota atual fique no histórico de navegação.
- **Comportamento Geral**: Se o usuário estiver autenticado, ele será redirecionado para a página inicial. Caso contrário, o componente passado para a função `loginRedirect` será renderizado.

# path='*' no React Router
### Explicação
- `path='*'`:
    - <strong>Uso</strong>: No React Router, o asterisco (*) é utilizado como um curinga para capturar qualquer URL que não corresponda a rotas definidas anteriormente. Essa abordagem é útil para tratar URLs não reconhecidas ou não definidas.
### Contexto de Uso
1. <strong>Página não Encontrada:</strong>
    - <strong>Objetivo:</strong> Exibir uma página de erro 404 ou uma página personalizada para URLs que não são correspondidas por rotas específicas.
2. <strong>Redirecionamento Global</strong>
    - <strong>Objetivo:</strong> Redirecionar usuários para uma página específica quando a URL acessada não corresponde a nenhuma rota definida.

## Resumo
- O `path='*'` é utilizado para capturar todas as URLs que não correspondem a rotas definidas. Isso permite gerenciar URLs não reconhecidas e redirecionar usuários de acordo com as necessidades da aplicação.