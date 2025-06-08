FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npx prisma generate
EXPOSE 3000
CMD ["sh", "-c", "npx prisma migrate dev --name init && npx next start"]

