# QUIZZY
O **QUIZZY** é uma aplicação Web desenvolvida como projeto avaliativo bimestral das disciplinas de **Desenvolvimento Web II** e **Análise e Projeto de Sistemas**, do curso **Técnico Integrado em Informática para a Internet** da **UTFPR – Câmpus Campo Mourão**.

## Objetivo do trabalho 

O sistema tem como objetivo proporcionar uma experiência **interativa, educativa e gamificada**, por meio de quizzes com perguntas relacionadas aos conteúdos estudados ao longo do curso. Inspirado em plataformas como o *Kahoot*, o QUIZZY permite que os usuários participem de jogos em salas já existentes ou criem seus próprios quizzes, estimulando a aprendizagem ativa.

O design do site segue uma proposta **lúdica e divertida**, com cores vibrantes e elementos visuais inspirados na franquia **Pokémon**, tornando a navegação mais atrativa e envolvente.

## Sumário

* [Objetivo do trabalho / Descrição](#objetivo-do-trabalho--descrição)
* [Possibilidades de Jogo no QUIZZY](#possibilidades-de-jogo-no-quizzy)
* [Execução Local (Ambiente de Desenvolvimento)](#execução-local-ambiente-de-desenvolvimento)
* [Execução Externa (Deploy)](#execução-externa-deploy)
* [Funcionalidades](#funcionalidades)
* [Funcionalidades Extras](#funcionalidades-extras)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Equipe Desenvolvedora](#equipe-desenvolvedora)

---

## Possibilidades de Jogo no QUIZZY

O QUIZZY oferece diferentes possibilidades de interação e jogo, conforme descrito nos requisitos do sistema. Após realizar o cadastro e autenticação, o usuário pode acessar **salas de quizzes** já existentes, nas quais estão organizados jogos criados por outros participantes.

Dentro dessas salas, o usuário pode iniciar um quiz e participar da partida respondendo às perguntas apresentadas pelo sistema. As perguntas são exibidas de forma dinâmica, permitindo uma experiência contínua e interativa durante o jogo.

Além da participação em quizzes prontos, o sistema também possibilita que usuários autenticados **criem seus próprios quizzes**, definindo temas, perguntas e alternativas. Podendo também utilizar a funcionalidade extra implementada pela equipe: **perguntas geradas por IA**, para que o usuário possa criar seu próprio quiz. 
Dessa forma, o QUIZZY não se limita apenas ao consumo de conteúdo, mas também incentiva a autoria e a colaboração entre os usuários.

---

## Execução Local (Ambiente de Desenvolvimento)

Siga os passos abaixo para executar o projeto localmente:

### Pré-requisitos

* Node.js (versão LTS recomendada)
* Gerenciador de pacotes **npm** ou **yarn**

### Passo a passo

1. Clone o repositório do projeto:

```bash
git clone <[URL_DO_REPOSITORIO](https://github.com/emillyshack/Trab-DW_APS_QUIZ.git)>
```

2. Acesse a pasta do projeto:

```bash
cd Trab-DW_APS_QUIZZ
```

3. Instale as dependências:

```bash
npm install
# ou
yarn
```

4. Configure as variáveis de ambiente do Supabase (`.env`):

```env
VITE_SUPABASE_URL="https://mtaefbwtvqgmnstuwofy.supabase.co"
VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10YWVmYnd0dnFnbW5zdHV3b2Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0OTkxNTMsImV4cCI6MjA3ODA3NTE1M30.e8aYSsYhXAtiab-p850pVgJX6LAbF3GthI3XQ6q7LHc"

VITE_GEMINI_API_KEY="AIzaSyDIDlVXpmN0FM-ZLbls4Pbqi68QRx6G0xg"
```

5. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

6. Acesse no navegador:

```
http://localhost:5173
```

---

## Execução Externa (Deploy)

**Link do jogo:**

> *

---

## Funcionalidades

* Cadastro de usuários
* Autenticação (login/logout)
* Acesso a salas de quizzes
* Participação em partidas de quiz
* Exibição dinâmica de perguntas e alternativas
* Respostas em tempo real
* Criação de quizzes personalizados
* Adição manual de perguntas
* Edição de perfil do usuário

---

## Funcionalidades Extras

### Geração automática de perguntas com auxílio de Inteligência Artificial (IA Gemini)
O QUIZZY conta com a integração de uma **Inteligência Artificial (IA Gemini)** como recurso de apoio à criação de conteúdo. 
Durante o processo de criação de um quiz, o usuário pode optar por **gerar perguntas automaticamente** com auxílio da IA.

A IA atua como um ator externo ao sistema, sendo responsável exclusivamente pela geração dos enunciados das perguntas, com base no tema definido pelo usuário. Após a geração, as perguntas são analisadas e incorporadas ao quiz pelo criador, que permanece responsável por definir as alternativas e a resposta correta.

Esse recurso tem como objetivo facilitar e agilizar a criação de quizzes, além de ampliar a variedade de perguntas disponíveis, mantendo o foco educacional e alinhado aos conteúdos estudados na UTFPR.

### Design temático inspirado na franquia **Pokémon**
O QUIZZY conta com um front-end inspirado pela franquia Pokémon. As interações e Easter eggs presentes na interface deixam a experiÊncia do jogo cada vez mais gamificada e interativa, mantendo os usuários conectados e engajados. 

---

## Tecnologias Utilizadas

* **React** + **Vite**
* **JavaScript**
* **CSS Modules**
* **Supabase** (Banco de dados e autenticação)
* **HTML5**
* **Inteligência Artificial (Gemini)** para geração de perguntas

---

## Equipe Desenvolvedora

Projeto desenvolvido por alunos do **3º período** do curso **Técnico Integrado em Informática para a Internet – UTFPR (Campo Mourão)**:

* Andrei Abner
* Emanuel Alves de Souza
* Emilly Damasceno Walter
* Gustavo Freitas Naida

---

*Projeto acadêmico desenvolvido para fins educacionais.*
