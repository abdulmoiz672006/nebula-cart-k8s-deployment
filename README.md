# NebulaCart

> **A premium, futuristic eCommerce storefront** built with React and Vite.
> Dark neon UI with glassmorphism accents — production-ready, containerised, and Kubernetes-deployable.

---

## Project Overview

NebulaCart is a single-page electronics storefront designed for visual impact and clean architecture. It features a curated catalogue of 12 premium products, real-time cart management via React Context, debounced search, category filtering, and a fully responsive layout that looks great from mobile to ultra-wide.

The project ships with a multi-stage Docker build and Kubernetes manifests so it can be deployed anywhere — local KIND clusters, managed cloud Kubernetes, or plain Docker.

---

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | React 19 (Vite 7)                   |
| Styling      | Tailwind CSS v4                     |
| Icons        | Lucide React                        |
| State        | React Context + useReducer          |
| Container    | Docker (multi-stage, Node 20 Alpine)|
| Orchestration| Kubernetes / KIND                   |

---

## Quick Start — Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev
```

The dev server runs on **port 5173** with hot module replacement.

---

## Production Build

```bash
npm run build    # outputs to ./dist
npm run preview  # preview at http://localhost:5173
```

---

## Docker

### Build the image

```bash
docker build -t nebulacart:latest .
```

### Run the container

```bash
docker run -d -p 5173:5173 --name nebulacart nebulacart:latest
```

Open **http://localhost:5173** in your browser.

### Stop & remove

```bash
docker stop nebulacart && docker rm nebulacart
```

---

## Kubernetes Deployment

### Option A — KIND (Kubernetes IN Docker)

```bash
# 1. Create a KIND cluster
kind create cluster --name nebulacart-cluster

# 2. Load the Docker image into KIND
kind load docker-image nebulacart:latest --name nebulacart-cluster

# 3. Apply manifests
kubectl apply -f k8s/deployment.yaml

# 4. Verify pods are running
kubectl get pods -l app=nebulacart

# 5. Port-forward to access the app
kubectl port-forward svc/nebulacart-service 5173:5173

# Open http://localhost:5173
```

### Option B — Any Kubernetes Cluster

```bash
# Push image to your registry first, then:
kubectl apply -f k8s/deployment.yaml
kubectl get pods -l app=nebulacart
kubectl port-forward svc/nebulacart-service 5173:5173
```

### Useful kubectl Commands

```bash
kubectl get all -l app=nebulacart       # List all resources
kubectl logs -l app=nebulacart          # View logs
kubectl describe pod -l app=nebulacart  # Inspect pod details
kubectl scale deploy nebulacart --replicas=3  # Scale up
kubectl delete -f k8s/deployment.yaml   # Tear down
```

---

## Folder Structure

```
nebula_cart/
├── public/                  # Static assets (favicon)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CartDrawer.jsx   # Slide-out cart panel
│   │   ├── CategoryFilter.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── SearchBar.jsx
│   │   └── SkeletonCard.jsx # Loading placeholder
│   ├── context/
│   │   └── CartContext.jsx  # Global cart state (Context + useReducer)
│   ├── data/
│   │   └── products.json    # Mock product catalogue
│   ├── hooks/
│   │   └── useDebounce.js   # Debounce hook for search
│   ├── App.jsx              # Root layout
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind imports + global styles
├── Dockerfile               # Multi-stage production build
├── .dockerignore
├── vite.config.js
├── package.json
└── README.md
```

---

## License

This project is provided as-is for demonstration and learning purposes.
