<h1 align="center">:+1: API - Net Promoter Score :chart:</h1>

<p align="center">
 <a href="https://www.linkedin.com/in/igor-gregori/">
    <img alt="Linkedin" src="https://img.shields.io/badge/-Igor%20Gregori-0e76a8?label=Linkedin&logo=linkedin&style=flat-square"/>
  </a>
  <a href="https://github.com/Igor-Gregori/Net-Promoter-Score-NLW/blob/main/LICENSE">
    <img alt="MIT license" src="https://img.shields.io/github/license/Igor-Gregori/Net-Promoter-Score-NLW?color=A31F34&style=flat-square"/>
  </a>
  <a href="https://github.com/Igor-Gregori/Net-Promoter-Score-NLW/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/Igor-Gregori/Net-Promoter-Score-NLW?color=EBEBEB&style=flat-square"/>
  </a>
  <a href="https://github.com/Igor-Gregori/Net-Promoter-Score-NLW/issues?q=is%3Aissue+is%3Aclosed">
    <img alt="GitHub closed issues" src="https://badgen.net/github/closed-issues/Igor-Gregori/Net-Promoter-Score-NLW?color=EBEBEB&style=flat-square"/>
  </a>
  <a href="https://github.com/Igor-Gregori/Net-Promoter-Score-NLW/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/Igor-Gregori/Net-Promoter-Score-NLW?color=yellow&style=flat-square"/>
  </a>
  <a href="https://github.com/Igor-Gregori/Net-Promoter-Score-NLW/network">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/Igor-Gregori/Net-Promoter-Score-NLW?color=EBEBEB&style=flat-square"/>
  </a>
</p>

<p align="center">
  <a href="#page_facing_up-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-diagrama">Diagrama</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man-Desenvolvedor">Desenvolvedor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
    <img src="./.github/preview.png" alt="Preview Test" width="100%" />  
</p>

## :page_facing_up: Descrição

NPS ou Net Promoter Score é uma métrica criada por Fred Reichheld para medir a satisfação dos clientes, perguntando “de 0 a 10, o quanto você indicaria nossa empresa aos amigos?” A fórmula para calcular o NPS é: % clientes promotores (notas 9 e 10) – % clientes detratores (notas de 0 a 6) = NPS

O API - Net Promoter Score é uma aplicação que consiste em calcular o NPS da empresa. Nele fazemos o cadastro de usuários, cadastro de pesquisas, envio de e-mail para os usuários responderem as pesquisas de satisfação e com isso podemos realizar o cálculo do NPS.

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Ethereal-Email](https://ethereal.email/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)
- Para mais detalhes, veja o <kbd>[package.json](./package.json)</kbd>

## 🔶 Diagrama

<img src="./.github/diagramaNPS.png" alt="Diagrama da aplicação" />

## :computer: Instalação

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

```bash
# Clone este repositório.
$ git clone https://github.com/Igor-Gregori/Net-Promoter-Score-NLW

# Vá para a pasta moveit
$ cd Net-Promoter-Score-NLW

# Instale as dependências
$ yarn

# Execute aplicação
$ yarn dev

# O app vai está rodando na porta 3333
```
Agora através de algum client rest api como o [Insomnia](https://insomnia.rest/download) você poderá cadastrar clientes, cadastrar pesquisas, mandar emails como a imagem abaixo e calcular o NPS que sua empresa terá

<p align="center"> 
   <img src="./.github/msgNPS3.png" alt="Menssagem enviada pelo e-mail" width="320px" />
</p>

## :man: Desenvolvedor

<a href="https://github.com/Igor-Gregori">
 <img src="https://avatars.githubusercontent.com/u/60407257?v=4" width="80px;" alt="Igor Gregori" style="border-radius:50%"/>
 <br />
 <sub><b>Igor Gregori</b></sub>
</a>

Desenvolvido por <b>Igor Gregori</b> :metal::satisfied::+1: Entre em contato! :speech_balloon:

<a href="https://www.linkedin.com/in/igor-gregori/">
  <img alt="Linkedin" src="https://img.shields.io/badge/-Igor%20Gregori-0e76a8?label=Linkedin&logo=linkedin&style=flat-square" >
</a>

## :closed_book: Licença

This project is [MIT](https://github.com/Igor-Gregori/moveit/blob/main/LICENSE) licensed.

