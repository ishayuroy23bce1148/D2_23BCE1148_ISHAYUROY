# Smart Learning Assistant

An AI-powered learning assistant with voice commands, OCR text scanning, PDF reading, and multilingual support. Built with Next.js, Express.js, and advanced accessibility features.

## Features

### 🎤 Voice-First Interface
- Voice commands for navigation and control
- Text-to-speech for all content
- Voice recognition in multiple languages
- Keyboard shortcuts for accessibility

### 📷 Smart OCR Scanner
- Camera-based text recognition
- Image upload support
- AI-powered text summarization
- Confidence scoring
- Text simplification

### 📄 PDF Reader
- Upload and extract text from PDFs
- AI-powered summarization
- Voice reading with page navigation
- Download extracted text

### 🎵 Audio Notes
- High-quality voice recording
- Smart organization and tagging
- Voice command integration

### 🌐 Multilingual Support
- 15+ languages including Indian languages
- Native voice synthesis
- Cultural context awareness

### ♿ Accessibility Features
- High contrast mode
- Dark/light theme toggle
- Screen reader compatibility
- Keyboard navigation
- Voice announcements

## Quick Start

### Windows
```bash
# Run the development environment
start-dev.bat
```

### Linux/Mac
```bash
# Make script executable
chmod +x start-dev.sh

# Run the development environment
./start-dev.sh
```

### Manual Setup

1. **Install dependencies:**
   ```bash
   npm run install:all
   ```

2. **Start backend server:**
   ```bash
   npm run dev:backend
   ```

3. **Start frontend server (in another terminal):**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000

## Available Scripts

### Frontend (Root directory)
- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend (backend/ directory)
- `npm run dev` - Start with nodemon (auto-restart)
- `npm start` - Start production server

### Combined Scripts
- `npm run dev:full` - Start both frontend and backend
- `npm run start:full` - Start both in production mode
- `npm run install:all` - Install dependencies for both frontend and backend

## API Endpoints

### Backend (Port 4000)
- `GET /api/health` - Health check
- `POST /api/pdf/extract` - Extract text from PDF
- `POST /api/ocr/extract` - Extract text from image
- `POST /api/ai/summarize` - AI text summarization
- `POST /api/tts/speak` - Text-to-speech processing
- `POST /api/notes/save` - Save audio note
- `GET /api/notes/:id` - Get audio note

## Voice Commands

### Navigation
- "Go to scanner" / "Open scanner" - Switch to OCR view
- "Open notes" / "Go to notes" - Switch to audio notes
- "Open PDF reader" / "Go to PDF" - Switch to PDF reader
- "Show help" / "Help" - Open help panel
- "Go home" / "Main" - Return to main dashboard

### Actions
- "Read this page" - Read current page content
- "Start recording" - Begin audio recording
- "Scan text" - Capture text from camera
- "Upload PDF" - Open PDF upload dialog

### Controls
- "High contrast" - Toggle high contrast mode
- "Dark mode" / "Light mode" - Toggle theme
- "Change language" - Open language selector

### Keyboard Shortcuts
- `H` - Help
- `C` - Scanner (OCR)
- `N` - Notes
- `P` - PDF Reader
- `S` - Settings
- `L` - Languages
- `M` - Main dashboard
- `T` - Toggle high contrast
- `D` - Toggle dark mode
- `Space` - Toggle voice listening

## Technology Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **GSAP** - Animations
- **Tesseract.js** - Client-side OCR

### Backend
- **Express.js** - Web framework
- **Multer** - File upload handling
- **pdf-parse** - PDF text extraction
- **Tesseract.js** - Server-side OCR
- **Sharp** - Image processing
- **Helmet** - Security headers

## Development

### Project Structure
```
smart-learning-assistant/
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── ...               # Feature components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and API client
├── backend/              # Express.js backend
│   ├── server.js        # Main server file
│   ├── uploads/         # File upload directory
│   └── package.json     # Backend dependencies
├── public/               # Static assets
└── package.json          # Frontend dependencies
```

### Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

### Adding New Features
1. Create components in `components/`
2. Add API endpoints in `backend/server.js`
3. Update API client in `lib/api.ts`
4. Add voice commands in `app/page.tsx`

## Troubleshooting

### Common Issues

1. **Backend not starting:**
   - Check if port 4000 is available
   - Ensure Node.js version >= 16
   - Run `npm install` in backend directory

2. **OCR not working:**
   - Check camera permissions
   - Ensure backend is running
   - Try uploading an image instead

3. **Voice commands not working:**
   - Check microphone permissions
   - Ensure HTTPS in production
   - Try refreshing the page

4. **PDF upload failing:**
   - Check file size (max 10MB)
   - Ensure PDF format is valid
   - Check backend logs for errors

### Debug Mode
Enable debug logging by setting `NODE_ENV=development` in your environment.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions:
1. Check the troubleshooting section
2. Search existing issues
3. Create a new issue with detailed description

---

**Built with ❤️ for accessible learning**