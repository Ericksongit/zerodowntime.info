FROM alpine:latest

# Instalar Hugo
RUN apk add --no-cache hugo

# Configurar diretório de trabalho
WORKDIR /blog

# Expor a porta padrão do Hugo server
EXPOSE 1313

# Comando padrão para rodar o servidor
CMD ["hugo", "server", "--bind", "0.0.0.0", "-D", "--disableFastRender"]
