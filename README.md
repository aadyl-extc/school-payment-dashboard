# 🏫 School Payment Dashboard - Frontend

A modern, responsive React application for managing school payments and transactions.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Screenshots](#-screenshots)

## ✨ Features

### Core Features

- 📊 **Transaction Overview Dashboard** - View all transactions in a paginated table
- 🔍 **Advanced Filtering** - Filter by status, school ID, and date range
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 📈 **Real-time Data** - Live transaction status updates
- 🔐 **JWT Authentication** - Secure API access

### Dashboard Pages

1. **Transactions Overview**
   - Paginated transaction list
   - Multi-select status filters
   - Column sorting (asc/desc)
   - URL-persistent filters
   - Search functionality

2. **School-wise Transactions**
   - Filter transactions by specific school
   - School dropdown selector
   - Dedicated school analytics

3. **Transaction Status Check**
   - Real-time status verification
   - Custom order ID lookup
   - Status history tracking


## 🛠 Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Router** - Client-side routing

## 🚀 Installation

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Setup Steps


   ```bash
   git clone https://github.com/aadyl-extc/school-payment-dashboard-frontend.git
   cd school-payment-dashboard-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create environment file**

   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables**

   ```env
   # .env
   VITE_API_BASE_URL=http://localhost:3000/api
   ```

5. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📖 Usage

### Running the Application

#### Development Mode

```bash
npm run dev
# Starts dev server at http://localhost:5173
```

## 📁 Project Structure

FRONTEND/
├── node_modules/                         # Dependencies
├── public/                               # Static files
├── src/
│   ├── components/                       # Reusable UI components
│   │   └── TransactionTable.jsx          # Transaction table component
│   ├── pages/                            # Page components
│   │   ├── TransactionsBySchool.jsx      # School-specific transactions
│   │   └── TransactionStatusCheck.jsx    # Status check page
│   ├── App.css                           # Main app styles
│   ├── App.jsx                           # Main app component
│   ├── index.css                         # Global styles (Tailwind imports)
│   └── main.jsx                          # App entry point
├── .env                                  # Environment variables
├── .gitignore                            # Git ignore rules
├── eslint.config.js                      # ESLint configuration
├── index.html                            # HTML template
├── package-lock.json                     # Dependency lock file
├── package.json                          # Project dependencies & scripts
├── README.md                             # Project documentation
├── tailwind.config.js                    # Tailwind CSS configuration
└── vite.config.js                        # Vite build configuration

## 🔌 API Integration

### Endpoints Used

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/transactions` | Fetch all transactions |
| `GET` | `/transactions/school/:schoolId` | Fetch school transactions |
| `GET` | `/transaction-status/:orderId` | Check transaction status |
| `POST` | `/create-payment` | Create new payment |

#### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable class-based dark mode
  theme: { extend: {} },
  plugins: [],
}
```

## 📸 Screenshots

### Transaction Table with Filters

![Transaction Table](/screenshots/transactions_table.png)

![Transaction Status](/screenshots/transaction_status.png)

![Transaction BySchool](/screenshots/transaction_by_school.png)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `VITE_API_BASE_URL` - Production API URL

## 🛠 Development

### Git Workflow

```bash
# Feature branch
git checkout -b feature/new-feature

# Commit changes
git add .
git commit -m "feat: add new transaction filter"

# Push and create PR
git push origin feature/new-feature
```

## 🤝 Contributing

### Contributing Guidelines

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add your features'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

#### Build Failures

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

🔗 Links
🌐 Live Demo: https://school-payment-dashboard.vercel.app
📂 GitHub Repository: https://github.com/aadyl-extc/school-payment-dashboard
