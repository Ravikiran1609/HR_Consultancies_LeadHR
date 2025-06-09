FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for layer caching
COPY package*.json ./

# Install all dependencies including framer-motion
RUN npm install

# Copy remaining project files
COPY . .

# Generate Prisma client and build Next.js app
RUN npx prisma generate && npm run build

# Expose app port
EXPOSE 3000

# Start app with DB migration
CMD ["sh", "-c", "npx prisma migrate dev --name init --skip-generate && npm run start"]

