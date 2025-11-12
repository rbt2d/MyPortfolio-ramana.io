# Ramana Kumar Bingi - Portfolio

A modern, responsive portfolio website showcasing 10 years of DevOps and Site Reliability Engineering expertise. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Works perfectly on all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and structured data
- **Accessible**: Follows web accessibility guidelines
- **Cloud-Focused**: Highlights AWS, Azure, and Kubernetes expertise

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Netlify

## 📁 Project Structure

```
src/
├── components/
│   ├── portfolio/     # Portfolio-specific components
│   └── ui/           # Reusable UI components
├── pages/            # Page components
├── hooks/            # Custom React hooks
└── lib/              # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rbt2d/ramana-portfolio.git
cd ramana-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 📦 Build for Production

```bash
npm run build
```

## 🌐 Deployment

This portfolio is deployed on Netlify with a custom domain (ramana.io).

### Deploying to Netlify

1. **Create a Netlify Account** (if you don't have one)
   - Go to [netlify.com](https://netlify.com) and sign up

2. **Connect Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git provider (GitHub)
   - Select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Set Up Custom Domain** (Optional)
   - Go to Site settings → Domain management
   - Add custom domain: `ramana.io`
   - Follow DNS configuration instructions from your domain provider
   - Add these DNS records:
     - Type: `A` Record → Value: Netlify's IP
     - Type: `CNAME` → Name: `www` → Value: `your-site.netlify.app`

5. **Enable HTTPS**
   - Netlify automatically provisions SSL certificates
   - Enable HTTPS redirect in Domain settings

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ramana Kumar Bingi**
- Senior DevOps Engineer & Site Reliability Expert
- 10 years experience in CI/CD, cloud infrastructure, and automation
- [GitHub](https://github.com/rbt2d)
- [LinkedIn](https://linkedin.com/in/ramana-kumar-bingi)
- Email: ramanakumarbingi@gmail.com
- Location: Dallas, TX
