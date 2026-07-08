# Degú
Proyecto Integrador Plataforma

## Descripción

Plataforma web para la gestión de asistencia a talleres y generación de métricas.

## Tecnologías

- Backend: Node.js, Express, Prisma, PostgreSQL y TypeScript
- Frontend: React, Vite y TypeScript

## Configuración inicial

### Base de datos

Reemplaza los datos de conexión por los de tu entorno en la variable `DATABASE_URL`:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
```

- `username`: usuario de PostgreSQL
- `password`: contraseña de PostgreSQL
- `localhost:5432`: host y puerto de PostgreSQL
- `mydb`: nombre de la base de datos

Más información sobre Prisma y PostgreSQL:
https://www.prisma.io/docs/prisma-orm/quickstart/postgresql

### Backend

El backend está desarrollado con Node.js, Express y Prisma.

Más información sobre Express:
https://expressjs.com/

### Frontend

El frontend está desarrollado con React y Vite.

Más información sobre Vite:
https://vite.dev/guide/

## Variables de entorno

El backend utiliza las siguentes variables de entorno:

- `DATABASE_URL`
- `DIRECT_URL`
- `JWT_SECRET`
- `GOOGLE_CLIENT_ID`
- `VITE_API_URL`

El frontend utiliza las siguentes variables de entorno:

- `VITE_API_URL`

Si ejecutas el proyecto localmente, configura estos valores en tu entorno antes de iniciar la aplicación.

## Uso de Docker

### Construir las imágenes

```bash
docker-compose build --no-cache
```

### Levantar los servicios

```bash
docker-compose up -d
```

### Detener los servicios

```bash
docker-compose down -v
```

## Ejecución local

### Backend

```bash
cd Backend
npm install
npm run dev
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

## Scripts disponibles

### Backend

- `npm run dev`: ejecuta el servidor en desarrollo
- `npm run build`: compila TypeScript
- `npm run start`: inicia la aplicación compilada
- `npm run test`: ejecuta los tests
- `npm run seed`: carga datos iniciales en la base de datos

### Frontend

- `npm run dev`: inicia Vite en modo desarrollo
- `npm run build`: compila la aplicación
- `npm run lint`: ejecuta ESLint
- `npm run preview`: previsualiza el build

## Documentación
Para detalles sobre cómo transferir la propiedad de los servicios (Supabase, Railway, Vercel) y configurar los entornos de producción, por favor revisa el siguiente documento:

* [Manual de Traspaso y Despliegue](./deploy.md)

* [Manual del Usuario ](./MANUALUSUARIO.md)

