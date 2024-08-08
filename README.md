# Backend Soniga
## Sistema backend para controle de loja

### Visão Geral
O sistema é capaz de controler o seu estoque, adicionando produtos, controle de vendas e criações de nota fiscais

### Instalação
Siga estes passos para instalar e configurar o projeto no seu ambiente local:

### Pré-requisitos
Certifique-se de ter o Node.js e o npm (ou yarn) instalados. Você pode baixar o Node.js aqui.

### Instalar Dependências
npm i ou npm install

### Para iniciar o servidor 
npm run dev #rodar local
npm start #rodar produção

### Variáveis de Ambiente
Você pode precisar definir algumas variáveis de ambiente para o projeto funcionar corretamente. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis

touch .env
DATABASE_URL=
PORT=5002
SECRET_KEY=@my-secret

### Testes
Para executar os testes, use o seguinte comando:

npm test
npm run test:coverage