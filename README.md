# 🚀 Help Desk API

API REST para gerenciamento de chamados (Help Desk), desenvolvida com Node.js, Express e MongoDB, incluindo autenticação com JWT, controle de usuários e gestão de SLA.

---

## 📌 Sobre o projeto

Este projeto está sendo desenvolvido com base em experiências reais em suporte técnico, incluindo gestão de chamados, priorização e controle de SLA (Service Level Agreement).

A aplicação simula um ambiente real de atendimento, com controle de usuários, segurança e métricas operacionais, permitindo o gerenciamento completo de chamados.

---

## ⚙️ Funcionalidades

### 🔐 Autenticação
- Cadastro de usuário
- Login com geração de token JWT
- Senha criptografada com bcrypt

---

### 🎫 Chamados
- Criar chamado vinculado ao usuário autenticado
- Listar chamados do próprio usuário
- Buscar chamado por ID (com controle de acesso)
- Atualizar chamado
- Deletar chamado

---

### ⏱️ SLA (Service Level Agreement)
- Definição automática de SLA por prioridade:
  - Alta: 4h
  - Média: 8h
  - Baixa: 24h
- Cálculo automático de `dataLimite`
- Recalculo de SLA ao atualizar prioridade
- Identificação de chamados:
  - Dentro do prazo
  - Vencidos (SLA estourado)

---

### 🚨 Monitoramento
- Endpoint de chamados atrasados
- Dashboard com métricas:
  - Total de chamados
  - Chamados abertos
  - Chamados fechados
  - Chamados atrasados

---

### 🛡️ Segurança
- Rotas protegidas com JWT
- Controle de acesso por usuário
- Cada usuário acessa apenas seus próprios chamados

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
git clone https://github.com/tomaziniwilliam/helpdesk-api.git
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
 "nome": "",
  "email": "",
  "senha": ""
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

| Método | Rota                    | Descrição                       |
| ------ | ----------------------- | ------------------------------- |
| POST   | /api/chamados           | Criar chamado                   |
| GET    | /api/chamados           | Listar chamados do usuário      |
| GET    | /api/chamados/:id       | Buscar chamado                  |
| PUT    | /api/chamados/:id       | Atualizar chamado               |
| DELETE | /api/chamados/:id       | Deletar chamado                 |
| GET    | /api/chamados/atrasados | Listar chamados com SLA vencido |
| GET    | /api/chamados/dashboard | Métricas gerais                 |


---

## 💡 Diferenciais do projeto

- Baseado em cenário real de suporte técnico
- Implementação de SLA automático por prioridade
- Controle de usuários (multiusuário)
- Segurança com JWT e isolamento de dados por usuário
- Monitoramento de chamados atrasados
- Dashboard com métricas operacionais
- Organização em camadas (Controller, Model, Routes)

---

## 🚀 Melhorias futuras

- Interface web (frontend)
- Dashboard visual com gráficos
- Notificações de SLA (email/webhook)
- Deploy em nuvem (Render / Railway)
- Testes automatizados

---

## 👨‍💻 Autor

William Tomazini
Experiência com suporte técnico, infraestrutura e ambientes críticos
Em transição para desenvolvimento backend

---

## 📄 Licença

MIT


## ▶️ Como rodar o projeto

### 🔹 Pré-requisitos
- Node.js instalado
- MongoDB rodando localmente

---

### 🔹 Instalação

```bash
git clone https://github.com/tomaziniwilliam/helpdesk-api.git
cd helpdesk-api
npm install

🔹 Rodar aplicação
 run dev
