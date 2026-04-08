@echo off
echo 🚀 Starting Smart Learning Assistant...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo 📦 Installing dependencies...

REM Install frontend dependencies
echo Installing frontend dependencies...
call npm install

REM Install backend dependencies
echo Installing backend dependencies...
cd backend
call npm install
cd ..

echo.
echo ✅ Dependencies installed successfully!
echo.

REM Create uploads directory for backend
if not exist "backend\uploads" mkdir backend\uploads

echo 🔧 Setting up environment...

REM Create .env.local if it doesn't exist
if not exist ".env.local" (
    echo NEXT_PUBLIC_API_URL=http://localhost:3001/api > .env.local
    echo Created .env.local file
)

REM Create backend .env if it doesn't exist
if not exist "backend\.env" (
    echo PORT=3001 > backend\.env
    echo NODE_ENV=development >> backend\.env
    echo FRONTEND_URL=http://localhost:3000 >> backend\.env
    echo Created backend\.env file
)

echo.
echo 🎯 Starting development servers...
echo Frontend: http://localhost:3000
echo Backend: http://localhost:3001
echo.
echo Press Ctrl+C to stop both servers
echo.

REM Start both servers
call npm run dev:full






