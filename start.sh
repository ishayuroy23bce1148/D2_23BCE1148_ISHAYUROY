#!/bin/bash

echo "🚀 Starting Smart Learning Assistant..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."

# Install frontend dependencies
echo "Installing frontend dependencies..."
npm install

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Create uploads directory for backend
mkdir -p backend/uploads

echo "🔧 Setting up environment..."

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "NEXT_PUBLIC_API_URL=http://localhost:3001/api" > .env.local
    echo "Created .env.local file"
fi

# Create backend .env if it doesn't exist
if [ ! -f backend/.env ]; then
    echo "PORT=3001" > backend/.env
    echo "NODE_ENV=development" >> backend/.env
    echo "FRONTEND_URL=http://localhost:3000" >> backend/.env
    echo "Created backend/.env file"
fi

echo ""
echo "🎯 Starting development servers..."
echo "Frontend: http://localhost:3000"
echo "Backend: http://localhost:3001"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Start both servers
npm run dev:full






