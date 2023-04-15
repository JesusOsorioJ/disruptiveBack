# Disruptive Backend

Este es el Backend del proyect Disruptive a continuacion se describe la erramientas utlizadas y paso a paso para ejecutar el backend

## Funcionalidades

- Express y Node.js ceacion Backend
- Prisma
- PostgreSQL (db)
- Swagger (Documentacion de API) http://localhost:8080/docs/
- Jest y SuperTest ( Testing Unitario)

## Information
- [Front End Repository](https://github.com/JesusOsorioJ/disruptiveFront)
## Collaborators
- [Jesus Osorio](https://github.com/JesusOsorioJ)

## Developing

1. Correr `npm install` para instalar dependencias de desarrollo
2. Crear y Configurar `.env` como `.env.example`
3. Generar migraciones con libreria prisma `npx prisma migrate dev --name init`
4. Ejecutar `npx prisma generate` para crear los tipos de los modelos (prisma)
5. Generar Seeding con prisma `npx prisma db seed`
6. Run `npm run dev` to start the development server.

