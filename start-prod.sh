#!/bin/bash

echo "Starting Smart Learning Assistant Production Environment..."
echo

echo "Building frontend..."
npm run build
if [ $? -ne 0 ]; then
    echo "Error building frontend!"
    exit 1
fi

echo
echo "Starting backend server..."
cd backend && npm start &
BACKEND_PID=$!

echo "Waiting for backend to start..."
sleep 5

echo
echo "Starting frontend production server..."
cd .. && npm start &
FRONTEND_PID=$!

echo
echo "Both servers are starting..."
echo "Backend: http://localhost:4000"
echo "Frontend: http://localhost:3000"
echo
echo "Press Ctrl+C to stop both servers"

# Function to cleanup on exit
cleanup() {
    echo
    echo "Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for user to stop
wait





