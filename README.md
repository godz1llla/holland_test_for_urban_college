# 🎯 RIASEC Personality Test: Modern Expert System

A state-of-the-art career orientation platform based on the **Holland Codes (RIASEC)** theory. This project implements a Decision-Engine based Expert System using **Drools** and **Spring Boot**, paired with a premium **Next.js** frontend.

> [!NOTE]
> This project is a modernized and localized fork of the original [riasec-personality-test](https://github.com/JuliaZamaitat/riasec-personality-test) by Julia Zamaitat.

---

## 🌍 Multi-language Support (New!)
The platform now provides a fully localized experience in three languages:
- 🇺🇸 **English** (Native)
- 🇷🇺 **Russian** (Localized)
- 🇰🇿 **Kazakh** (Localized)

The localization system features:
- **Language Switcher**: A premium glassmorphism toggle with flag icons.
- **Localized Content**: All 150+ test questions and 100+ profession titles are fully translated.
- **Dynamic Data Loading**: The frontend automatically selects localized fields from the backend API based on user preference.

---

## ✨ Features
- **Intelligent Assessment**: Take the RIASEC test to identify your personality type (Realistic, Investigative, Artistic, Social, Enterprising, Conventional).
- **Expert Matchmaking**: Our Drools-powered engine matches your personality profile with over 100 real-world professions.
- **Educational Content**: Learn about each Holland Code category in the comprehensive **About** page.
- **Premium UI**: Modern design with glassmorphism effects, smooth transitions, and responsive layouts.

---

## 🛠 Tech Stack

### Backend
- **Spring Boot 3**: Core application framework.
- **Drools 7**: Expert System rule engine for matching Holland Codes to professions.
- **Spring Data JPA**: Persistence layer with MySQL support.
- **Maven**: Dependency management.

### Frontend
- **Next.js 14**: Modern React framework for high-performance UI.
- **TypeScript**: Type-safe development.
- **Tailwind CSS**: Utility-first styling with custom glassmorphism effects.
- **Context API**: Global state management for language and user data.

---

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Node.js 18+
- MySQL Server

### 1. Database Setup
Create a MySQL database and run the following setup script or use the provided migration logic:
```sql
CREATE DATABASE riasec_db;
```
Configure your `application.properties` in `backend/src/main/resources/` with your database credentials.

### 2. Run Backend
```bash
cd backend
./mvnw spring-boot:run
```
The API will be available at `http://localhost:9090`.

### 3. Run Frontend
```bash
cd frontend
npm install
npm run dev
```
The application will be available at `http://localhost:3000`.

---

## 📐 Architecture & Infrastructure

### Expert System Rules
The matchmaking logic is defined in `.drl` files within the `backend/src/main/resources/rules` directory. It evaluates user scores across the six personality dimensions and finds the best profession matches based on exact and similar Holland Codes.

### Localization Strategy
- **Backend Persistence**: Entities like `HollandCodeTestQuestion` and `Profession` store translations in dedicated fields (e.g., `textRu`, `textKz`).
- **Frontend Dictionaries**: UI-specific strings are stored in JSON dictionaries under `frontend/dictionaries/`.
- **Language Context**: A custom React Context provider manages the active language and provides a `t()` helper for nested key access.

---

## 🔧 Critical Fixes Included
- **Repository Optimization**: All entities and repositories updated to use `Long` IDs for consistency and performance.
- **Caching Resolution**: Next.js data fetching utilities updated with `cache: 'no-store'` to ensure dynamic localized content is never served stale.

---

## 👥 Contributors
- **Julia Zamaitat** (Original Maintainer)
- **Gubaidulla Orynbekov** (Modernization, Localization, and Bug Fixes)
