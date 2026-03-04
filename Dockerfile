# ──────────────────────────────────────────────────────────────
# Stage 1 — Build
# ──────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (layer caching)
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# ──────────────────────────────────────────────────────────────
# Stage 2 — Production
# ──────────────────────────────────────────────────────────────
FROM node:20-alpine AS production

WORKDIR /app

# Install a lightweight static file server
RUN npm install -g serve@latest

# Copy only the built artefacts
COPY --from=builder /app/dist ./dist

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173", "--no-clipboard"]
