# 🚀 Help Desk API

API REST para gerenciamento de chamados (Help Desk), desenvolvida com Node.js, Express e MongoDB, incluindo autenticação com JWT.

---

## 📌 Sobre o projeto

Este projeto foi desenvolvido com base em experiências reais em suporte técnico, incluindo controle de chamados, prioridade e estrutura preparada para SLA (Service Level Agreement).

A aplicação permite o gerenciamento completo de chamados, com autenticação de usuários e controle de acesso.

---

## ⚙️ Funcionalidades

### 🔐 Autenticação
- Cadastro de usuário
- Login com geração de token JWT
- Senha criptografada com bcrypt

### 🎫 Chamados
- Criar chamado
- Listar chamados
- Buscar chamado por ID
- Atualizar chamado
- Deletar chamado

### 🛡️ Segurança
- Rotas protegidas com JWT
- Acesso apenas para usuários autenticados

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt
- CORS
- Dotenv

---

## 📁 Estrutura do projeto

/helpdesk-api
 ├── controllers
 ├── models
 ├── routes
 ├── middlewares
 ├── config
 ├── server.js

---

## ▶️ Como rodar o projeto

### 🔹 Pré-requisitos
- Node.js instalado
- MongoDB rodando localmente

---

### 🔹 Instalação

```bash
git clone https://github.com/seu-usuario/helpdesk-api.git
cd helpdesk-api
npm install
```

---

### 🔹 Rodar aplicação

```bash
npm run dev
```

Servidor rodando em:
http://localhost:3000

---

## 🔑 Autenticação

### 📌 Registrar usuário

POST:
/api/auth/register

Body:
{
  "nome": "William",
  "email": "william@email.com",
  "senha": "123456"
}

---

### 📌 Login

POST:
/api/auth/login

Resposta:
{
  "token": "seu_token_jwt"
}

---

### 📌 Usar token

Header:
Authorization: Bearer SEU_TOKEN

---

## 🎫 Endpoints de Chamados

| Método | Rota | Descrição |
|------|------|---------|
| POST | /api/chamados | Criar chamado |
| GET | /api/chamados | Listar chamados |
| GET | /api/chamados/:id | Buscar chamado |
| PUT | /api/chamados/:id | Atualizar chamado |
| DELETE | /api/chamados/:id | Deletar chamado |

---

## 💡 Diferenciais do projeto

- Baseado em cenário real de suporte técnico
- Estrutura preparada para controle de SLA
- Organização em camadas (Controller, Model, Routes)
- Autenticação com JWT
- Código limpo e escalável

---

## 🚀 Melhorias futuras

- Implementar SLA automático por prioridade
- Vincular chamados ao usuário criador
- Criar interface web (frontend)
- Deploy em nuvem (Render / Railway)

---

## 👨‍💻 Autor

William Tomazini

---

## 📄 Licença

MIT
