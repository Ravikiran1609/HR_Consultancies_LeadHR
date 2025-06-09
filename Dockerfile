FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install framer-motion && npm install
COPY . .

# ✅ Build the Next.js app before start
RUN npx prisma generate && npm run build

EXPOSE 3000
CMD ["sh", "-c", "npx prisma migrate dev --name init --skip-generate && npx next start"]

