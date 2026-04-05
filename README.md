# Nebula Cart - Kubernetes Deployment

This project is a microservices-based application. I have **forked** this repository from the original source to implement and demonstrate **Kubernetes (K8s)** orchestration and **GitHub Actions CI/CD automation**.

---

## 🚀 Project Overview
The main goal of this version is to transition the application from a basic containerized setup to a fully managed **Kubernetes** environment with automated workflows.

* **Original Project:** Developed by the Instructor.
* **My Contribution:** Forked the repository and implemented **Kubernetes deployment** along with **GitHub Actions CI pipeline** for automated build and deployment processes.
* **Cluster Choice:** Used **Kind (Kubernetes in Docker)** to create a local cluster for testing production-ready manifest files.

---

## 🛠 Prerequisites
To run this project locally, ensure you have the following installed:

* **Docker:** To host the containerized services.
* **Kind:** To create and manage the local Kubernetes cluster.
* **kubectl:** The command-line tool to interact with the cluster.

---

## 📂 Kubernetes Implementation
I have added a dedicated `k8s/` directory which includes the following configurations:

* **Deployments:** To ensure the microservices are self-healing and scalable.
* **Services:** To manage internal communication via `ClusterIP` and external exposure.
* **ConfigMaps / Secrets:** To manage environment variables and configurations properly.

---

## ⚙️ CI/CD with GitHub Actions
To automate the development workflow, I implemented **GitHub Actions**.

The workflow automatically:

* Builds the Docker image of the application
* Verifies the Kubernetes manifest files
* Ensures the project can be deployed successfully

Workflow configuration is located in:

```
.github/workflows/
```

This demonstrates **modern DevOps CI/CD practices** integrated directly into the repository.

---

## 🚀 Deployment Guide (How to Run)

Follow these steps to get the application up and running on your local **Kubernetes cluster**:

### 1. Clone the Repository

```bash
git clone https://github.com/abdulmoiz672006/nebula_cart.git
cd nebula_cart
```

### 2. Set Up the Kind Cluster

Create a new cluster named **nebula-cluster**:

```bash
kind create cluster --name nebula-cluster
```

### 3. Deploy the Manifests

Apply all the configuration files located in the **k8s** folder:

```bash
kubectl apply -f k8s/
```

### 4. Verify the Status

Check if all pods and services are in the **Running** state:

```bash
kubectl get pods
kubectl get svc
```

---

## 🌐 How to Access the Application

Once the pods are ready, use **Port Forwarding** to access the frontend from your local browser:

```bash
kubectl port-forward svc/frontend-service 8080:80
```

Now open your browser and go to:

```
http://localhost:8080
```

---

## 👨‍💻 Key Skills Demonstrated

- **DevOps Workflow:** Forking and modifying existing codebases for orchestration.
- **Infrastructure as Code:** Writing and debugging Kubernetes YAML manifest files.
- **Containerization:** Building and managing Docker images.
- **CI/CD Automation:** Implementing pipelines using GitHub Actions.
- **Orchestration:** Setting up and managing clusters using **Kubernetes (Kind)**.
- **Service Discovery:** Configuring networking and communication between microservices.

---

## 📄 Acknowledgments

- **Original application logic:** Provided by the Instructor.
- **Kubernetes architecture, CI/CD workflow implementation, manifest creation, deployment strategy, and documentation:** Abdul Moiz.
