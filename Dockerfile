# Usa uma imagem base do Node.js otimizada para produção
FROM node:22-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia apenas os arquivos essenciais para instalar as dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install --legacy-peer-deps

# Copia o restante do código do projeto
COPY . .

# Executa o comando para construir o projeto
RUN npm run build

# Define a porta que será exposta pelo contêiner
EXPOSE 3000

# Comando para rodar o servidor de produção
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
