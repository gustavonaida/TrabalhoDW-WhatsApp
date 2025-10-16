<h1 id="whatsapp-hub"><img src="./src/imagens README/icone_whats.png" alt="" width="60"/> WhatsApp Hub</h1>

Este projeto, realizado pelos alunos: Emanuel Alves, Emilly Damasceno e Gustavo Naida, como atividade avaliativa para obtenção de nota parcial no 3° bimestre da discliplina de Desenvolvimento Web 2 do curso Técnico Integrado em Informática para a Internet.

O mesmo têm por objetivo **gerar links personalizados que redirecionam os usuários diretamente ao início de conversas no WhatsApp, organizar e salvar contatos**, facilitando a comunicação entre clientes e prestadores de serviço, ou qualquer pessoa que deseje compartilhar um link direto de contato.

---
# Sumário
  - [Descrição](#descrição)
  - [Link da Aplicação](#link-da-aplicação)
  - [Execução local](#execução-local)
  - [Telas](#telas)
  - [Funcionalidades](#funcionalidades)
  - [Funcionalidades Extras](#funcionalidades-extras)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Equipe Desenvolvedora](#equipe-desenvolvedora)
---
## Descrição

O **WhatsApp Hub** é uma aplicação web simples e intuitiva que permite ao usuário criar um link direto para iniciar uma conversa no WhatsApp com qualquer número de telefone, podendo incluir uma mensagem personalizada. O mesmo também possui, juntamente ao gerador de links, a Agenda de Contatos, que possibilita salvar e organizar contatos dentro do Web Site.

A ideia é facilitar a vida de quem precisa compartilhar seu número de WhatsApp em sites, redes sociais ou plataformas de atendimento e organizar listas de contatos.

---
## Link da aplicação 
👉 link ---------------pedir ao gustavo

---

## Execução local
Como Executar o Projeto em seu computador:
```bash

# Clonar o repositório 
https://github.com/gustavonaida/TrabalhoDW-WhatsApp.git

# Entrar na pasta do projeto
cd TrabalhoDW-WhatsApp

# Instalar dependências
npm install

# Rodar no servidor local
npm run dev

# O projeto estará disponível em:
👉 http://localhost:5173

```
---

## Telas
Todas as telas foram estilizadas com CSS module.

#### Tela principal

<img src="./src/imagens README/tela_principal.png" alt=""/>

#### Tela ao gerar o link 
<img src="./src/imagens README/tela_gerar_link.png" alt=""/>

#### Tela ao clicar em "Abrir Whatsapp"
O usuário é redirecinado ao próprio WhatsApp, com requisitos que preencheu ao gerar o link.
<img src="./src/imagens README/tela_whatsapp.png" alt=""/>

---

## Funcionalidades

* Gerar link direto de redirecionamento para o WhatsApp  
* Adicionar mensagem personalizada (ou mensagem padrão) no link  
* Interface limpa e responsiva desenvolvida com **React + Vite**
* Integração com **Supabase** para armazenamento e gerenciamento de dados  
* Possibilidade de salvar contatos e links criados por meio do banco de dados integrado ao **Supabase**

---

## Funcionalidades extras
* Organização da Lista de Contatos através de cores, onde os contatos ficam salvos no banco de dados e podemos alterá-los dentro da Lista de Contatos, onde é possível organizar os contatos, agrupando-os através de cores previamente selecionadas. Essa funcionalidade foi implementada para permitir que o usuário organize seus contatos de forma visual e rápida, melhorando a usabilidade e tornando o sistema mais intuitivo.
* Opção de envio de mensagens padrão ao gerar o link de direcionamento para o WhatsApp. Essa funcionalidade foi implementada para permitir que o usuário possa otimizar o seu tempo com prompts pré estabelecidos de mensagens comuns entre os clientes.

#### Telas das funcionalidades extras
Organização de contatos por cor:
<p align="center">
  <img src="./src/imagens README/telas2.png" alt="Tela principal" width="400"/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./src/imagens README/tela_lista.png" alt="Tela de lista" width="300"/>
</p>


Envio de mensagens padrão:

<p align="center">
  <img src="./src/imagens README/tela_mensagem_opcional.png" alt="Tela de mensagem padrão" width="300"/>

---

## Tecnologias Utilizadas

| Categoria | Ferramenta |
|------------|-------------|
| **Frontend** | [React](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Banco de Dados** | [Supabase (PostgreSQL)](https://supabase.com/) |
| **Linguagem** | JavaScript |
| **Estilização** | CSS e CSS module |
| **Gerenciamento de dependências** | npm |

---

## Equipe Desenvolvedora 
Esse projeto foi desenvolvido pelos alunos:
* Emanuel alves de Souza - A2539217 - manuzin081922@gmail.com
* Emilly Damasceno Walter - A2539233 - emillyw@alunos.utfpr.edu.br
* Gustavo Freitas Naida - RA - gfnaida@gmail.com