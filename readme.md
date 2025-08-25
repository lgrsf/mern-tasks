# 📌 MERN Tasks App

Aplicación Full Stack hecha con **MongoDB, Express, React y Node.js** para gestionar tareas.  
Permite **crear, listar, actualizar y eliminar** tareas, mostrando fecha y hora de creación y edición.

---

## 🚀 Tecnologías

- **Frontend:** React (Vite), Axios, TailwindCSS  
- **Backend:** Node.js, Express, Mongoose  
- **Base de datos:** MongoDB (local o Atlas)

---

## 📂 Estructura del proyecto

```bash
mern-tasks/
├─ backend/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ .env
│  ├─ package.json
│  └─ server.js
├─ frontend/
│  ├─ src/
│  ├─ package.json
│  └─ vite.config.js
└─ README.md
```

---

## ⚙️ Instalación y uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/mern-tasks.git
cd mern-tasks
```bash

### 2. Configurar el Backend
```bash
cd backend
npm install
```bash

Crear archivo **.env**:
```env
MONGO_URI=mongodb://localhost:27017/mern_tasks
PORT=5000
```bash

Iniciar servidor:
```bash
npm run dev
```bash

Backend disponible en 👉 `http://localhost:5000`

---

### 3. Configurar el Frontend
```bash
cd ../frontend
npm install
npm run dev
```bash

Frontend disponible en 👉 `http://localhost:5173`

---

## 📌 API Endpoints

### Tareas (`/api/tasks`)

- **GET /** → Listar todas las tareas  
- **POST /** → Crear nueva tarea  
- **PUT /:id** → Actualizar tarea  
- **DELETE /:id** → Eliminar tarea  

Ejemplo de creación:
```json
{
  "title": "Aprender MERN",
  "completed": false
}
```

---

## 🎯 Funcionalidades

- [x] Crear tareas  
- [x] Listar tareas con **fecha y hora**  
- [x] Marcar como completada / pendiente  
- [x] Editar título  
- [x] Eliminar tarea  

---

## 📸 Capturas (opcional)

---

## 👨‍💻 Autor

Proyecto creado por **Lucas Gallo** 🇦🇷  
