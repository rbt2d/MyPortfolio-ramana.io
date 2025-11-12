# Deployment Guide - Netlify

This guide will walk you through deploying Ramana's portfolio to Netlify with the custom domain `ramana.io`.

## Prerequisites

- A GitHub account
- Your portfolio code pushed to a GitHub repository
- A domain name (ramana.io) - can be purchased from providers like Namecheap, GoDaddy, or Google Domains

## Step-by-Step Deployment Process

### 1. Create a Netlify Account

1. Go to [https://netlify.com](https://netlify.com)
2. Click "Sign up" and sign up with GitHub (recommended) or email
3. Complete the registration process

### 2. Prepare Your Repository

Make sure your code is pushed to GitHub:

```bash
# If not already initialized
git init
git add .
git commit -m "Initial commit - Ramana's portfolio"

# Create a new repository on GitHub first, then:
git remote add origin https://github.com/rbt2d/ramana-portfolio.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Netlify

1. **Log in to Netlify Dashboard**
   - Go to [https://app.netlify.com](https://app.netlify.com)

2. **Add New Site**
   - Click "Add new site" → "Import an existing project"

3. **Connect to GitHub**
   - Choose "GitHub" as your Git provider
   - Authorize Netlify to access your GitHub account
   - Select your repository (`ramana-portfolio`)

4. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```
   
5. **Deploy Site**
   - Click "Deploy site"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at a URL like `https://random-name-12345.netlify.app`

### 4. Configure Custom Domain (ramana.io)

#### Option A: Domain Purchased from Namecheap/GoDaddy/Other Provider

1. **Add Custom Domain in Netlify**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter `ramana.io`
   - Click "Verify"

2. **Configure DNS Records**
   
   Go to your domain provider's DNS settings and add:
   
   **For Root Domain (ramana.io):**
   ```
   Type: A Record
   Name: @
   Value: 75.2.60.5
   TTL: Automatic or 3600
   ```

   **For WWW Subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   TTL: Automatic or 3600
   ```

3. **Wait for DNS Propagation**
   - DNS changes can take 24-48 hours to propagate
   - Usually happens within 1-2 hours

#### Option B: Use Netlify DNS (Recommended)

1. **Add Custom Domain**
   - In Netlify, go to Domain management
   - Add `ramana.io`

2. **Use Netlify DNS**
   - Click "Use Netlify DNS"
   - Netlify will provide nameservers like:
     ```
     dns1.p03.nsone.net
     dns2.p03.nsone.net
     dns3.p03.nsone.net
     dns4.p03.nsone.net
     ```

3. **Update Nameservers at Domain Registrar**
   - Log in to where you bought ramana.io
   - Find DNS/Nameserver settings
   - Replace existing nameservers with Netlify's nameservers
   - Save changes

4. **Verify Domain**
   - Return to Netlify
   - Click "Verify DNS configuration"
   - Wait for verification (can take up to 24 hours)

### 5. Enable HTTPS (Automatic)

1. Once your domain is verified:
   - Go to Domain settings → HTTPS
   - Netlify automatically provisions SSL certificates (Let's Encrypt)
   - Enable "Force HTTPS" to redirect all HTTP traffic to HTTPS

### 6. Add Resume PDF

Copy your resume to the public folder:

```bash
cp /Users/rbingi/Downloads/Ramana_Resume.pdf /Users/rbingi/Development/MyPortfolio-ramana.io/public/
```

Then commit and push:

```bash
git add public/Ramana_Resume.pdf
git commit -m "Add resume PDF"
git push
```

Netlify will automatically redeploy with the new file.

### 7. Configure Environment Variables (If Needed)

If you need any environment variables:

1. Go to Site settings → Build & deploy → Environment
2. Click "Add variable"
3. Add your variables (e.g., API keys, etc.)

### 8. Enable Continuous Deployment

Netlify automatically enables continuous deployment:
- Every push to `main` branch triggers a new build
- Pull requests get preview deployments
- You can see all deployments in the "Deploys" tab

## Verification Checklist

- [ ] Site is live at `https://ramana.io`
- [ ] WWW redirect works: `https://www.ramana.io` → `https://ramana.io`
- [ ] HTTPS is enabled and enforced
- [ ] Resume PDF is accessible at `https://ramana.io/Ramana_Resume.pdf`
- [ ] All links work correctly
- [ ] Contact form is functional
- [ ] Site loads quickly (check PageSpeed Insights)

## Troubleshooting

### DNS Not Resolving
- Wait 24-48 hours for DNS propagation
- Clear your browser cache
- Use [DNS Checker](https://dnschecker.org) to verify propagation

### Build Fails
- Check build logs in Netlify dashboard
- Ensure `package.json` has correct build command
- Verify Node version compatibility

### HTTPS Not Working
- Wait for SSL certificate provisioning (can take a few minutes)
- Verify domain is correctly configured
- Check if DNS is fully propagated

### 404 Errors on Page Refresh
Add a `_redirects` file in your public folder:
```
/*    /index.html   200
```

## Additional Configuration

### Custom Headers
Create `public/_headers`:
```
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

### Form Notifications
To receive contact form submissions:
1. Go to Site settings → Forms
2. Add form notifications
3. Configure email notifications

## Monitoring & Analytics

### Enable Netlify Analytics
1. Go to Site settings → Analytics
2. Enable Netlify Analytics ($9/month)
3. Or integrate Google Analytics in your code

### Performance Monitoring
- Use Lighthouse in Chrome DevTools
- Check [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor Core Web Vitals

## Cost

Netlify offers:
- **Free Tier**: 100GB bandwidth, 300 build minutes/month
- **Pro Tier**: $19/month - More bandwidth and features
- **Analytics**: $9/month (optional)

For a personal portfolio, the free tier is usually sufficient.

## Support

If you need help:
- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Support Forums](https://answers.netlify.com)
- [Netlify Status Page](https://www.netlifystatus.com)

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to production (via Git)
git add .
git commit -m "Update portfolio"
git push origin main
```

---

**Your portfolio will be live at: https://ramana.io** 🚀

