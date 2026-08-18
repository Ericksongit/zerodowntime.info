# zerodowntime.info

Repositório oficial do log de bordo aberto [zerodowntime.info](https://zerodowntime.info), focado em engenharia de software, infraestrutura, DevOps e tudo mais que eu tiver interesse.

Construído utilizando [Hugo](https://gohugo.io/) com um tema super minimalista e purista (feito do zero).

## 🚀 Ambiente de Desenvolvimento (Docker)

Para garantir um ambiente asséptico, livre de conflitos de dependências (Ruby, Go, versões específicas do Hugo, etc), **todo o desenvolvimento local deste projeto roda via containers**.

### Pré-requisitos
* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Rodando o Blog Localmente

1. Suba o container do Hugo em modo *live-reload*:
```bash
docker-compose up
```

2. Acesse o terminal em:
[http://localhost:1313](http://localhost:1313)

Qualquer alteração que você fizer no código HTML, CSS ou conteúdo em Markdown será refletida quase que instantaneamente graças ao monitoramento de volumes do Docker.

### Criando Novos Posts

Para criar a estrutura limpa de um novo post sem precisar ter o Hugo instalado na sua máquina host, apenas peça ao container rodando em background para fazer isso:

```bash
docker-compose exec hugo hugo new content/posts/meu-novo-post/index.md
```

## 🤝 Contribuições

A intenção principal de manter este repositório público é **divulgar código e compartilhar conhecimento**, e não atuar como um portal colaborativo de artigos.

Portanto:
- **Não** são aceitos Pull Requests adicionando novos posts ou textos de terceiros.
- Pull Requests contendo correções de bugs, melhorias no código do template Hugo (CSS/HTML/Docker) ou correções ortográficas serão avaliados e são muito bem-vindos!

## 📜 Licença e Atribuição

- Este  blog foi inspirado/baseado no blog do [AkitaOnRails](https://github.com/akitaonrails/akitaonrails.github.io).
- Por herança legal do modelo de design visual utilizado como base, este projeto adota a mesma licença open-source **[CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/)** (Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International).
