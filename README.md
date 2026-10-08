# Votrix

Votrix is a secure and verifiable digital voting system designed to provide private and transparent electronic elections. The platform provides separate interfaces for election officers, agents, and voters, covering election management, voter assistance, and secure vote casting.

## Technology

The system is built using **React** and **Vite** for the frontend, with **Tailwind CSS** for the user interface and **React Router** for application navigation.

The core voting logic is based on **Zero-Knowledge Proof (ZKP)** technology. ZKP allows the system to verify that a vote is valid without revealing sensitive information about the voter's choice. This provides a balance between **voter privacy, election integrity, and result verifiability**.

The frontend communicates with the backend through APIs for authentication, election management, voter information, vote processing, and verification.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd Votrix-frontend
```

Install dependencies:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

Then open the URL shown in the terminal (by default [http://localhost:5173](http://localhost:5173)).

## Other Commands

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Backend

Make sure the backend server is running and the API URL is configured correctly so the frontend can handle authentication, elections, voter data, vote processing, and verification.