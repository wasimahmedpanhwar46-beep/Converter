import './style.css'
import { createIcons, FileText, FileImage, FileVideo, Ruler, Star, Search, Bot, Send, X } from 'lucide';

const app = document.getElementById('app');

const AppHTML = `
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-40">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-4">
            <a href="#" class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg">C</div>
              <span class="font-bold text-xl text-slate-800">Converter</span>
            </a>
            <div class="hidden md:flex items-center space-x-2">
              <a href="#pdf" class="text-slate-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">PDF Tools</a>
              <a href="#image" class="text-slate-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Image Tools</a>
              <a href="#video" class="text-slate-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Video Tools</a>
              <a href="#units" class="text-slate-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Unit Converters</a>
            </div>
          </div>
          <div class="flex items-center">
            <button class="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors shadow-sm">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-grow">
      <!-- Hero Section -->
      <section class="py-20 md:py-28 text-center animate-fade-in">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Your All-in-One <span class="text-primary-600">File Conversion</span> & AI Assistant
          </h1>
          <p class="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Effortlessly convert documents, images, videos, and units. Get instant help from our AI assistant.
          </p>
          <div class="mt-10 max-w-xl mx-auto">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i data-lucide="search" class="w-5 h-5 text-slate-400"></i>
              </div>
              <input 
                type="search" 
                id="search-tool" 
                placeholder="Search for a tool (e.g., 'PDF to Word')"
                class="w-full pl-12 pr-4 py-4 text-base bg-white border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Tools Section -->
      <section id="tools" class="py-16 bg-slate-200/40 animate-slide-up" style="animation-delay: 0.2s;">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Tabs -->
          <div class="flex justify-center mb-10">
            <div id="tabs-container" class="flex space-x-2 bg-slate-200 p-1.5 rounded-xl">
              <!-- Tabs will be injected here -->
            </div>
          </div>
          <!-- Tools Grid -->
          <div id="tools-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <!-- Tool cards will be injected here -->
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-800 text-slate-400 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>&copy; 2025 Converter. All Rights Reserved. Built by Dualite Alpha.</p>
        <p class="mt-2">All conversions are processed securely and files are deleted after 24 hours.</p>
      </div>
    </footer>

    <!-- AI Chat Widget -->
    <div id="ai-chat-widget" class="fixed bottom-6 right-6 z-50">
      <button id="chat-toggle-btn" class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <i data-lucide="bot" class="w-8 h-8 text-white"></i>
      </button>
      <div id="chat-window" class="hidden absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 origin-bottom-right">
        <!-- Chat Header -->
        <div class="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50 rounded-t-2xl">
          <div class="flex items-center space-x-3">
            <i data-lucide="bot" class="w-6 h-6 text-primary-600"></i>
            <h3 class="font-bold text-slate-800">AI Assistant</h3>
          </div>
          <button id="chat-close-btn" class="text-slate-500 hover:text-slate-800">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>
        <!-- Chat Body -->
        <div id="chat-body" class="p-4 h-80 overflow-y-auto space-y-4">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <i data-lucide="bot" class="w-5 h-5 text-primary-600"></i>
            </div>
            <div class="bg-primary-100/60 text-slate-800 p-3 rounded-lg rounded-tl-none max-w-xs">
              <p class="text-sm">Hello! How can I help you find a tool or answer a question today?</p>
            </div>
          </div>
        </div>
        <!-- Chat Input -->
        <form id="chat-form" class="p-4 border-t border-slate-200">
          <div class="relative">
            <input type="text" id="chat-input" placeholder="Ask something..." class="w-full bg-slate-100 border-2 border-slate-200 rounded-lg py-2 pl-4 pr-12 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm">
            <button type="submit" class="absolute inset-y-0 right-0 flex items-center justify-center w-10 text-primary-600 hover:text-primary-800">
              <i data-lucide="send" class="w-5 h-5"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
`;

app.innerHTML = AppHTML;

const tools = [
  // --- PDF Tools ---
  { title: "Word to PDF", description: "Convert DOC, DOCX, and RTF files to PDF.", category: "pdf", icon: "file-text", popular: true },
  { title: "Excel to PDF", description: "Convert XLS, XLSX, and CSV spreadsheets to PDF.", category: "pdf", icon: "file-text", popular: true },
  { title: "PowerPoint to PDF", description: "Convert PPT and PPTX presentations to PDF.", category: "pdf", icon: "file-text", popular: true },
  { title: "Image to PDF", description: "Convert JPG, PNG, BMP, and GIF images to a single PDF.", category: "pdf", icon: "file-text" },
  { title: "HTML to PDF", description: "Convert web pages (HTML) to PDF documents.", category: "pdf", icon: "file-text" },
  { title: "Email to PDF", description: "Convert EML and MSG email files to PDF.", category: "pdf", icon: "file-text" },
  { title: "CAD to PDF", description: "Convert DWG, DXF, and SVG files to PDF.", category: "pdf", icon: "file-text" },
  { title: "Text to PDF", description: "Convert TXT, XML, and ODT files to PDF.", category: "pdf", icon: "file-text" },
  { title: "PDF to Word", description: "Convert PDFs to editable DOC and DOCX files.", category: "pdf", icon: "file-text", popular: true },
  { title: "PDF to Excel", description: "Extract data from PDFs into XLS and XLSX spreadsheets.", category: "pdf", icon: "file-text" },
  { title: "PDF to PowerPoint", description: "Convert PDFs back into editable PPTX presentations.", category: "pdf", icon: "file-text" },
  { title: "PDF to Image", description: "Convert PDF pages to JPG, PNG, or TIFF images.", category: "pdf", icon: "file-text" },
  { title: "PDF to Text/HTML", description: "Extract text and structure from PDFs to TXT or HTML.", category: "pdf", icon: "file-text" },
  { title: "Merge PDF", description: "Combine multiple PDF files into a single document.", category: "pdf", icon: "file-text", popular: true },
  { title: "Split PDF", description: "Extract pages or split a PDF into multiple files.", category: "pdf", icon: "file-text" },
  { title: "Compress PDF", description: "Reduce the file size of your PDF documents.", category: "pdf", icon: "file-text", popular: true },
  { title: "OCR PDF", description: "Recognize text in scanned PDFs to make them editable.", category: "pdf", icon: "file-text" },
  { title: "Secure PDF", description: "Add a password, watermark, or restrictions to a PDF.", category: "pdf", icon: "file-text" },
  { title: "Batch Convert PDF", description: "Convert multiple files to or from PDF at once.", category: "pdf", icon: "file-text" },
  
  // --- Image Tools ---
  { title: "JPG to PNG", description: "Change image format from JPG to PNG with transparency.", category: "image", icon: "file-image", popular: true },
  { title: "PNG to JPG", description: "Convert PNG images to the widely supported JPG format.", category: "image", icon: "file-image" },
  { title: "WEBP to JPG", description: "Convert modern WEBP images to JPG.", category: "image", icon: "file-image" },
  { title: "JPG to WEBP", description: "Optimize images by converting them to WEBP format.", category: "image", icon: "file-image" },
  { title: "HEIC to JPG", description: "Convert Apple's HEIC photos to standard JPG.", category: "image", icon: "file-image", popular: true },
  { title: "SVG to PNG", description: "Convert scalable vector graphics (SVG) to PNG images.", category: "image", icon: "file-image" },
  { title: "Image Resizer", description: "Change the dimensions and resolution of your images.", category: "image", icon: "file-image" },
  { title: "Compress Image", description: "Reduce file size of JPG, PNG, and WEBP images.", category: "image", icon: "file-image", popular: true },
  { title: "RAW to JPG", description: "Convert camera RAW files (CR2, NEF, ARW) to JPG.", category: "image", icon: "file-image" },
  { title: "Image to SVG", description: "Convert bitmap images like JPG/PNG to vector SVG.", category: "image", icon: "file-image" },
  { title: "TIFF to JPG", description: "Convert high-quality TIFF files to JPG.", category: "image", icon: "file-image" },
  { title: "BMP to JPG", description: "Convert BMP images to the more efficient JPG format.", category: "image", icon: "file-image" },
  { title: "ICO to PNG", description: "Convert icon files to PNG format.", category: "image", icon: "file-image" },
  { title: "EPS to JPG", description: "Convert EPS vector files to JPG images.", category: "image", icon: "file-image" },
  
  // --- Video Tools ---
  { title: "MP4 Converter", description: "Convert AVI, MKV, MOV, and more to MP4.", category: "video", icon: "file-video", popular: true },
  { title: "Video to MP3", description: "Extract audio from video and save as MP3.", category: "video", icon: "file-video", popular: true },
  { title: "Video Compressor", description: "Reduce video file size without changing format.", category: "video", icon: "file-video", popular: true },
  { title: "MOV Converter", description: "Convert video files to Apple's MOV format.", category: "video", icon: "file-video" },
  { title: "AVI Converter", description: "Convert videos to and from the AVI format.", category: "video", icon: "file-video" },
  { title: "MKV Converter", description: "Convert between MKV and other video formats.", category: "video", icon: "file-video" },
  { title: "WEBM Converter", description: "Convert videos to and from the WEBM format for web use.", category: "video", icon: "file-video" },
  { title: "Video to GIF", description: "Create animated GIFs from your video clips.", category: "video", icon: "file-video", popular: true },
  { title: "GIF to Video", description: "Convert animated GIFs to MP4 or WEBM video.", category: "video", icon: "file-video" },
  { title: "Video Merger", description: "Combine multiple video clips into a single file.", category: "video", icon: "file-video" },
  { title: "Video Cutter", description: "Trim or cut your video files to the desired length.", category: "video", icon: "file-video" },
  { title: "Add Subtitles to Video", description: "Embed an SRT or VTT subtitle file into a video.", category: "video", icon: "file-video" },
  { title: "YouTube to MP4", description: "Download and convert YouTube videos to MP4.", category: "video", icon: "file-video" },
  { title: "Change Video Resolution", description: "Upscale or downscale video resolution (e.g., 1080p to 4K).", category: "video", icon: "file-video" },
  { title: "Watermark Video", description: "Add a text or image watermark to your video.", category: "video", icon: "file-video" },

  // --- Unit Tools ---
  { title: "Length Converter", description: "Convert between meters, feet, miles, km, etc.", category: "units", icon: "ruler", popular: true },
  { title: "Area Converter", description: "Convert between sq. meters, sq. feet, acres, etc.", category: "units", icon: "ruler" },
  { title: "Volume Converter", description: "Convert between liters, gallons, cubic meters, etc.", category: "units", icon: "ruler" },
  { title: "Weight Converter", description: "Convert between kg, pounds, ounces, grams, etc.", category: "units", icon: "ruler", popular: true },
  { title: "Temperature Converter", description: "Switch between Celsius, Fahrenheit, and Kelvin.", category: "units", icon: "ruler", popular: true },
  { title: "Live Currency Converter", description: "Get real-time exchange rates for all currencies.", category: "units", icon: "ruler", popular: true },
  { title: "Crypto Converter", description: "Convert between cryptocurrencies like BTC, ETH and fiat.", category: "units", icon: "ruler" },
  { title: "Compound Interest Calculator", description: "Calculate the future value of an investment.", category: "units", icon: "ruler" },
  { title: "Data Storage Converter", description: "Convert between bits, bytes, KB, MB, GB, TB.", category: "units", icon: "ruler" },
  { title: "Data Transfer Rate Converter", description: "Convert between Mbps, MB/s, Gbps, etc.", category: "units", icon: "ruler" },
  { title: "Binary/Decimal/Hex Converter", description: "Convert numbers between binary, decimal, and hex.", category: "units", icon: "ruler" },
  { title: "Pixel to Inch/CM Converter", description: "Convert screen pixels to physical measurements.", category: "units", icon: "ruler" },
  { title: "Time Unit Converter", description: "Convert between seconds, minutes, hours, days, etc.", category: "units", icon: "ruler" },
  { title: "Unix Timestamp Converter", description: "Convert Unix time to a human-readable date and back.", category: "units", icon: "ruler" },
  { title: "Time Zone Converter", description: "Find the time difference between different cities.", category: "units", icon: "ruler" },
  { title: "Pressure Converter", description: "Convert between Pascal, bar, PSI, and more.", category: "units", icon: "ruler" },
  { title: "Energy Converter", description: "Convert between Joules, Calories, kWh, etc.", category: "units", icon: "ruler" },
  { title: "Power Converter", description: "Convert between Watts, Horsepower, etc.", category: "units", icon: "ruler" },
  { title: "Speed Converter", description: "Convert between m/s, km/h, mph, knots, etc.", category: "units", icon: "ruler" },
  { title: "BMI Calculator", description: "Calculate your Body Mass Index in metric or imperial.", category: "units", icon: "ruler" },
  { title: "Cooking Measurement Converter", description: "Convert cups, grams, oz, spoons, and ml.", category: "units", icon: "ruler" },
  { title: "Case Converter", description: "Convert text to UPPERCASE, lowercase, Title Case, etc.", category: "units", icon: "ruler" },
  { title: "Word/Character Counter", description: "Count the number of words and characters in a text.", category: "units", icon: "ruler" },
];

const tabs = [
  { id: 'popular', name: 'Popular', icon: 'star' },
  { id: 'pdf', name: 'PDF', icon: 'file-text' },
  { id: 'image', name: 'Image', icon: 'file-image' },
  { id: 'video', name: 'Video', icon: 'file-video' },
  { id: 'units', name: 'Units', icon: 'ruler' },
];

const toolsGrid = document.getElementById('tools-grid');
const searchInput = document.getElementById('search-tool');
const tabsContainer = document.getElementById('tabs-container');

let activeTab = 'popular';

function renderTools(filter = '') {
  toolsGrid.innerHTML = '';
  const lowerCaseFilter = filter.toLowerCase();
  
  const filteredTools = tools.filter(tool => {
    const inCategory = activeTab === 'popular' ? tool.popular : tool.category === activeTab;
    if (!inCategory) return false;
    
    if (filter) {
      return tool.title.toLowerCase().includes(lowerCaseFilter) || tool.description.toLowerCase().includes(lowerCaseFilter);
    }
    return true;
  });

  if (filteredTools.length === 0) {
    toolsGrid.innerHTML = `<p class="text-slate-500 col-span-full text-center">No tools found. Try a different search or category.</p>`;
    return;
  }

  filteredTools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
      <div class="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
        <i data-lucide="${tool.icon}" class="w-6 h-6 text-primary-600"></i>
      </div>
      <h3 class="font-bold text-lg text-slate-800 mb-2">${tool.title}</h3>
      <p class="text-slate-600 text-sm flex-grow">${tool.description}</p>
    `;
    toolsGrid.appendChild(card);
  });
  createIcons({ icons: { FileText, FileImage, FileVideo, Ruler, Star } });
}

function renderTabs() {
  tabsContainer.innerHTML = '';
  tabs.forEach(tab => {
    const button = document.createElement('button');
    button.className = `tab-btn flex items-center space-x-2 ${tab.id === activeTab ? 'active' : ''}`;
    button.dataset.tab = tab.id;
    button.innerHTML = `
      <i data-lucide="${tab.icon}" class="w-4 h-4"></i>
      <span>${tab.name}</span>
    `;
    button.addEventListener('click', () => {
      activeTab = tab.id;
      renderTabs();
      renderTools(searchInput.value);
    });
    tabsContainer.appendChild(button);
  });
  createIcons({ icons: { FileText, FileImage, FileVideo, Ruler, Star } });
}

searchInput.addEventListener('input', (e) => renderTools(e.target.value));

// AI Chat Widget Logic
const chatToggleButton = document.getElementById('chat-toggle-btn');
const chatCloseButton = document.getElementById('chat-close-btn');
const chatWindow = document.getElementById('chat-window');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');

chatToggleButton.addEventListener('click', () => {
  const isHidden = chatWindow.classList.contains('hidden');
  if (isHidden) {
    chatWindow.classList.remove('hidden');
    chatWindow.classList.remove('animate-chat-out');
    chatWindow.classList.add('animate-chat-in');
  } else {
    chatWindow.classList.remove('animate-chat-in');
    chatWindow.classList.add('animate-chat-out');
    setTimeout(() => chatWindow.classList.add('hidden'), 300);
  }
});

chatCloseButton.addEventListener('click', () => {
  chatWindow.classList.remove('animate-chat-in');
  chatWindow.classList.add('animate-chat-out');
  setTimeout(() => chatWindow.classList.add('hidden'), 300);
});

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;

  appendMessage(message, 'user');
  chatInput.value = '';
  
  setTimeout(() => {
    generateAiResponse(message);
  }, 1000);
});

function appendMessage(text, sender) {
  const messageDiv = document.createElement('div');
  if (sender === 'user') {
    messageDiv.className = 'flex justify-end';
    messageDiv.innerHTML = `
      <div class="bg-primary-600 text-white p-3 rounded-lg rounded-br-none max-w-xs">
        <p class="text-sm">${text}</p>
      </div>
    `;
  } else {
    messageDiv.className = 'flex items-start space-x-3';
    messageDiv.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
        <i data-lucide="bot" class="w-5 h-5 text-primary-600"></i>
      </div>
      <div class="bg-primary-100/60 text-slate-800 p-3 rounded-lg rounded-tl-none max-w-xs">
        <p class="text-sm">${text}</p>
      </div>
    `;
  }
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
  createIcons({ icons: { Bot } });
}

function generateAiResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();
  let response = "I'm sorry, I'm not sure how to help with that. I can help you find conversion tools. Try asking 'pdf to word' or 'image compressor'.";

  const foundTool = tools.find(tool => lowerMessage.includes(tool.title.toLowerCase()));

  if (foundTool) {
    response = `It looks like you're looking for the "${foundTool.title}" tool. I can help with that! This tool allows you to ${foundTool.description.toLowerCase()}. You can find it under the "${foundTool.category}" tab.`;
  } else if (lowerMessage.includes('pdf')) {
    response = "We have many PDF tools, including merging, splitting, compressing, and converting to Word. Which one are you looking for?";
  } else if (lowerMessage.includes('image')) {
    response = "I can help with image conversion, resizing, and compression. What do you need to do?";
  } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    response = "Hello there! How can I assist you with your file conversion needs today?";
  }

  appendMessage(response, 'ai');
}


// Initial Render
renderTabs();
renderTools();
createIcons({ icons: { Search, Bot, Send, X } });
