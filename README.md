# Angular API Monitor Dashboard

A public, cloud-hosted **API Performance Monitoring Dashboard** built with Angular.
The application monitors API health and response times using repeated GET requests
and visualizes the data through a clean dashboard UI.

This project is designed to demonstrate **real-world Angular architecture**,
RxJS-based polling, and **CI/CD deployment using GitHub Actions and GitHub Pages**.

---

## 🚀 Key Features

- Dashboard view of monitored APIs
- Repeated GET request polling
- Frontend-controlled polling count
- API status indicators (success / failure)
- Response time tracking
- Performance trend visualization
- Public demo (no authentication)
- Loosely coupled design for future extension

---

## 🧱 Architecture & Design Pattern

- **Service-based separation of concerns**
- RxJS-driven asynchronous data flow
- UI components are presentation-only
- Business logic and API interaction handled in services

This approach ensures scalability, testability, and clean code organization.

---

## 🛠 Tech Stack

- **Framework:** Angular
- **UI Library:** Angular Material
- **Charts:** Chart.js (via ng2-charts)
- **Async Handling:** RxJS
- **CI/CD & Deployment:** GitHub Actions + GitHub Pages

---

## 📁 Planned Folder Structure

The following structure defines clear separation of concerns and will be implemented incrementally during development:

- src/app/
  - core/
    - services/        # API polling, monitoring logic
    - models/          # Interfaces and data models
    - core.module.ts
  - shared/
    - components/      # Reusable dumb/presentational components
    - pipes/
    - shared.module.ts
  - features/
    - dashboard/       # Smart container for overview
    - api-details/     # API logs and detailed views
    - settings/        # Add / manage APIs
  - app-routing.module.ts
  - app.module.ts

---

## ☁️ Deployment & CI/CD

- Hosted on **GitHub Pages** (free)
- Continuous Deployment via **GitHub Actions**
- Every push to the `main` branch triggers build & deploy automatically

---

## 📌 Project Scope (Initial Phase)

- GET requests only
- Polling logic controlled from frontend
- No authentication (public demo)
- Local storage used for demo data

---

