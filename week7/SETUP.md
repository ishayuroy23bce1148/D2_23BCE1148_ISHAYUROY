# Smart Learning Assistant - Setup Guide

## Quick Start Commands

### 🚀 Development Mode (Recommended for testing)

**Windows:**
```bash
start-dev.bat
```

**Linux/Mac:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

**Manual:**
```bash
# Install all dependencies
npm run install:all

# Start backend (Terminal 1)
npm run dev:backend

# Start frontend (Terminal 2)
npm run dev
```

### 🏭 Production Mode

**Windows:**
```bash
start-prod.bat
```

**Linux/Mac:**
```bash
chmod +x start-prod.sh
./start-prod.sh
```

**Manual:**
```bash
# Build and start
npm run build
npm run start:full
```

### 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in background
docker-compose up -d --build
```

## What's Fixed and Improved

### ✅ Backend Integration Issues Fixed
1. **API URL Mismatch**: Fixed frontend API URL from port 3001 to 4000
2. **OCR Bug**: Fixed confidence score extraction in backend OCR endpoint
3. **Error Handling**: Improved error handling and logging throughout

### ✅ OCR Scanner Enhancements
1. **AI Summarization**: Added intelligent text summarization using backend API
2. **Confidence Scoring**: Display OCR confidence percentage
3. **Better UI**: Enhanced interface with progress indicators and better feedback
4. **Text Simplification**: Added text simplification for easier reading
5. **Download Feature**: Export extracted text and summaries

### ✅ PDF Reader Improvements
1. **AI Summarization**: Added AI-powered PDF text summarization
2. **Better Processing**: Improved PDF text extraction with progress indicators
3. **Enhanced UI**: Better visual feedback and loading states
4. **Download Feature**: Export PDF text and summaries

### ✅ Frontend UI Enhancements
1. **Modern Design**: Updated with better colors, spacing, and typography
2. **Loading States**: Added proper loading indicators and progress bars
3. **Error Handling**: Better error messages and user feedback
4. **Accessibility**: Improved keyboard navigation and screen reader support
5. **Responsive Design**: Better mobile and tablet support

## Key Features Now Working

### 🎤 Voice Commands
- "Go to scanner" - Opens OCR camera
- "Open PDF reader" - Opens PDF upload
- "Read this page" - Reads current content
- "High contrast" - Toggles accessibility mode
- "Dark mode" - Toggles theme

### 📷 Smart OCR Scanner
- Camera-based text capture
- Image upload support
- AI-powered summarization
- Confidence scoring
- Text simplification
- Voice output

### 📄 PDF Reader
- PDF upload and processing
- AI-powered summarization
- Voice reading with controls
- Page navigation
- Text export

### 🌐 Multilingual Support
- 15+ languages including Indian languages
- Voice synthesis in multiple languages
- Cultural context awareness

## Testing the Application

### 1. Start the Application
```bash
# Use the quick start script
start-dev.bat  # Windows
./start-dev.sh  # Linux/Mac
```

### 2. Test OCR Scanner
1. Click "Scanner" or press `C`
2. Click "Start Camera" or "Upload Image"
3. Capture/upload an image with text
4. Click "AI Summary" to generate summary
5. Use "Read Text" or "Read Summary" for voice output

### 3. Test PDF Reader
1. Click "PDF Reader" or press `P`
2. Upload a PDF file
3. Wait for processing
4. Click "AI Summary" to generate summary
5. Use voice controls to read content

### 4. Test Voice Commands
1. Click "Start Listening" or press `Space`
2. Say commands like:
   - "Go to scanner"
   - "Open PDF reader"
   - "Read this page"
   - "High contrast"

## Troubleshooting

### Backend Not Starting
```bash
# Check if port 4000 is available
netstat -an | findstr :4000  # Windows
lsof -i :4000  # Linux/Mac

# Restart backend
cd backend
npm install
npm run dev
```

### Frontend Not Loading
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### OCR Not Working
1. Check camera permissions in browser
2. Ensure backend is running on port 4000
3. Try uploading an image instead of camera
4. Check browser console for errors

### Voice Commands Not Working
1. Check microphone permissions
2. Ensure HTTPS in production
3. Try refreshing the page
4. Check browser console for errors

## File Structure

```
smart-learning-assistant/
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── ocr-camera.tsx    # OCR scanner component
│   ├── pdf-reader.tsx    # PDF reader component
│   └── ...               # Other components
├── hooks/                # Custom React hooks
│   ├── use-ocr.ts        # OCR functionality
│   ├── use-tts.ts        # Text-to-speech
│   └── ...               # Other hooks
├── lib/                  # Utilities
│   ├── api.ts            # API client
│   └── utils.ts          # Helper functions
├── backend/              # Express.js backend
│   ├── server.js         # Main server file
│   ├── uploads/          # File upload directory
│   └── package.json      # Backend dependencies
├── start-dev.bat         # Windows dev script
├── start-dev.sh          # Linux/Mac dev script
├── start-prod.bat        # Windows prod script
├── start-prod.sh         # Linux/Mac prod script
├── docker-compose.yml    # Docker setup
└── README.md             # This file
```

## Next Steps

1. **Test all features** using the provided scripts
2. **Customize** the application for your needs
3. **Deploy** using Docker or manual setup
4. **Extend** with additional features as needed

## Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the console logs for errors
3. Ensure all dependencies are installed
4. Try the manual setup steps

---

**The Smart Learning Assistant is now fully functional with proper backend integration, AI-powered features, and a modern, accessible UI!**
