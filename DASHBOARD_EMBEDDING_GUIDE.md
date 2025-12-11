# Dashboard Embedding Guide

This guide explains how to embed the AccruLabs.ai Data & AI Governance Dashboard into your website.

## 📋 Overview

The dashboard has been added to your website as an embedded iframe. The dashboard section is now visible in the navigation menu and includes:
- Full dashboard embed via iframe
- "Open in New Tab" option
- Fallback error handling
- Feature highlights

## 🚀 Current Setup

The dashboard is currently configured to load from:
```
http://localhost:3001
```

**This will only work when:**
- The dashboard is running locally on your machine
- You're accessing the website from the same machine
- Port 3001 is not blocked by firewall

## 🔧 Deployment Options

### Option 1: Deploy Dashboard to Vercel (Recommended)

This is the best option for production use. The dashboard will be accessible from anywhere.

#### Step 1: Prepare Dashboard for Deployment

1. **Navigate to your dashboard project:**
   ```powershell
   cd "C:\Users\caran\OneDrive\Desktop\ai governance ICAI BOOK\Reference material used for book\dashboard for books"
   ```

2. **Create a Vercel configuration file** (if not exists):
   Create `vercel.json` in the dashboard root:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "devCommand": "npm run dev",
     "installCommand": "npm install",
     "framework": "nextjs"
   }
   ```

#### Step 2: Deploy Dashboard to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```powershell
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```powershell
   vercel login
   ```

3. **Deploy the dashboard:**
   ```powershell
   cd "C:\Users\caran\OneDrive\Desktop\ai governance ICAI BOOK\Reference material used for book\dashboard for books"
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No**
   - Project name? (e.g., `accrulabs-dashboard`)
   - Directory? **./** (current directory)
   - Override settings? **No**

4. **Get your deployment URL:**
   After deployment, Vercel will provide a URL like:
   ```
   https://accrulabs-dashboard.vercel.app
   ```

#### Step 3: Update Website with Dashboard URL

1. **Open your website's `index.html` file:**
   ```
   C:\CA RANJAN SINGHAL\index.html
   ```

2. **Find the iframe element** (around line 260-270) and update the `src` attribute:
   ```html
   <iframe 
       id="dashboard-iframe"
       src="https://accrulabs-dashboard.vercel.app" 
       class="w-full h-full border-0"
       ...
   ```

3. **Also update the "Open in New Tab" link:**
   ```html
   <a href="https://accrulabs-dashboard.vercel.app" target="_blank" ...>
   ```

4. **Update the fallback link as well:**
   ```html
   <a href="https://accrulabs-dashboard.vercel.app" target="_blank" ...>
   ```

5. **Commit and push to GitHub:**
   ```powershell
   cd "C:\CA RANJAN SINGHAL"
   git add index.html
   git commit -m "Update dashboard URL to production"
   git push
   ```

### Option 2: Deploy Dashboard to Netlify

Similar to Vercel, but using Netlify:

1. **Install Netlify CLI:**
   ```powershell
   npm i -g netlify-cli
   ```

2. **Login and deploy:**
   ```powershell
   cd "C:\Users\caran\OneDrive\Desktop\ai governance ICAI BOOK\Reference material used for book\dashboard for books"
   netlify login
   netlify init
   netlify deploy --prod
   ```

3. **Update the iframe URL in your website** with the Netlify URL.

### Option 3: Use a Custom Domain

If you have a custom domain for your dashboard:

1. Configure the domain in Vercel/Netlify dashboard
2. Update the iframe `src` in `index.html` to use your custom domain
3. Ensure CORS headers are properly configured (usually handled automatically by Vercel/Netlify)

## 🔒 Security Considerations

### CORS (Cross-Origin Resource Sharing)

If you encounter CORS errors when embedding:

1. **For Next.js Dashboard:**
   Add to `next.config.js`:
   ```javascript
   const nextConfig = {
     async headers() {
       return [
         {
           source: '/:path*',
           headers: [
             {
               key: 'X-Frame-Options',
               value: 'SAMEORIGIN', // or 'ALLOW-FROM https://your-website.com'
             },
           ],
         },
       ]
     },
   }
   ```

2. **For Vercel deployments:**
   Create `vercel.json` in dashboard project:
   ```json
   {
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {
             "key": "X-Frame-Options",
             "value": "SAMEORIGIN"
           }
         ]
       }
     ]
   }
   ```

## 🧪 Testing Locally

### Test Dashboard Locally

1. **Start the dashboard:**
   ```powershell
   cd "C:\Users\caran\OneDrive\Desktop\ai governance ICAI BOOK\Reference material used for book\dashboard for books"
   npm run dev
   ```

2. **Open your website locally:**
   - If you have a local server, open `index.html` in a browser
   - Or use a simple HTTP server:
     ```powershell
     cd "C:\CA RANJAN SINGHAL"
     python -m http.server 8000
     ```
     Then visit: `http://localhost:8000`

3. **Verify the dashboard loads** in the embedded iframe.

## 📝 Configuration Variables

For easier management, you can use JavaScript to set the dashboard URL:

Add this before the closing `</body>` tag in `index.html`:

```html
<script>
    // Dashboard Configuration
    const DASHBOARD_URL = 'http://localhost:3001'; // Change this to your deployed URL
    
    // Update all dashboard links
    document.addEventListener('DOMContentLoaded', function() {
        const iframe = document.getElementById('dashboard-iframe');
        const links = document.querySelectorAll('a[href*="localhost:3001"]');
        
        if (iframe) iframe.src = DASHBOARD_URL;
        links.forEach(link => {
            link.href = DASHBOARD_URL;
        });
    });
</script>
```

Then you only need to update `DASHBOARD_URL` in one place.

## 🐛 Troubleshooting

### Dashboard Not Loading

1. **Check if dashboard is running:**
   - Visit the dashboard URL directly in a new tab
   - If it doesn't load, the dashboard server might be down

2. **Check browser console:**
   - Open browser DevTools (F12)
   - Look for errors in the Console tab
   - Common issues:
     - CORS errors → Fix headers (see Security section)
     - Network errors → Check URL is correct
     - 404 errors → Dashboard route might be wrong

3. **Check iframe permissions:**
   - Some browsers block iframes from certain sources
   - Check browser security settings

### Dashboard Shows Fallback Message

The fallback message appears when:
- Dashboard URL is incorrect
- Dashboard server is not running
- CORS blocking the iframe
- Network connectivity issues

**Solution:** Check the dashboard URL and ensure the dashboard is deployed and accessible.

### Dashboard Loads but Looks Broken

1. **Check responsive design:**
   - The iframe height is set to 800px
   - Adjust in CSS if needed:
     ```css
     #dashboard-iframe {
         height: 1000px; /* Adjust as needed */
     }
     ```

2. **Check dashboard styling:**
   - Ensure dashboard CSS is loading correctly
   - Check for CSS conflicts between website and dashboard

## 📱 Mobile Responsiveness

The dashboard section is responsive:
- On mobile: Full width iframe
- On tablet: Full width with adjusted height
- On desktop: Full width with 800px height

Adjust the iframe height in the HTML if needed for better mobile experience.

## 🔄 Updating Dashboard

When you update the dashboard:

1. **If using Vercel:**
   - Push changes to GitHub (if connected)
   - Or run `vercel --prod` to redeploy
   - No need to update website iframe URL (it stays the same)

2. **If using localhost:**
   - Restart the dashboard server
   - Refresh the website page

## 📞 Support

For issues or questions:
- Email: ranjansinghal.ca@gmail.com
- Check dashboard documentation in the dashboard project folder

## ✅ Checklist

Before going live:

- [ ] Dashboard deployed to Vercel/Netlify
- [ ] Dashboard URL updated in `index.html` (all 3 places: iframe src, open link, fallback link)
- [ ] CORS headers configured (if needed)
- [ ] Tested dashboard loads correctly
- [ ] Tested "Open in New Tab" works
- [ ] Tested on mobile devices
- [ ] Tested fallback message appears when dashboard is down
- [ ] Committed and pushed changes to GitHub
- [ ] Verified website deployment on Vercel

---

**Last Updated:** January 2025
**Dashboard Version:** 1.0.0
**Website Version:** 1.0.0

