# CA Ranjan Singhal - Professional Website

Professional website for CA Ranjan Singhal - AI Governance & Data Privacy Advisor.

## 🚀 Deployment Guide

### Prerequisites
- A GitHub account
- A Vercel account (sign up at [vercel.com](https://vercel.com))

### Step 1: Push to GitHub

1. **Create a new repository on GitHub**
   - Go to [github.com](https://github.com) and click "New repository"
   - Name it (e.g., `ca-ranjan-singhal-website`)
   - Choose Public or Private
   - **Don't** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Push your code to GitHub**
   
   Open terminal in this directory and run:
   ```bash
   git add .
   git commit -m "Initial commit: Professional website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
   
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com) and sign in (or sign up with GitHub)

2. **Import your GitHub repository**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect it's a static site

3. **Configure deployment**
   - **Framework Preset:** Other
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** Leave empty (static site, no build needed)
   - **Output Directory:** Leave empty (serves root files)

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 30-60 seconds)
   - Your site will be live at `https://your-project-name.vercel.app`

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts to link your project and deploy.

### Step 3: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow Vercel's instructions to configure DNS

## 📁 Project Structure

```
.
├── index.html          # Main website file
├── README.md          # This file
├── .gitignore         # Git ignore rules
└── vercel.json        # Vercel configuration (optional)
```

## 🔄 Updating Your Website

1. Make changes to `index.html`
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. Vercel will automatically redeploy your site (if connected via GitHub)

## 📝 Notes

- This is a static HTML website, so no build process is required
- Vercel automatically deploys on every push to your main branch
- The site uses Tailwind CSS via CDN, so no npm packages needed

## 🆘 Troubleshooting

**Issue:** Vercel shows 404 error
- **Solution:** Make sure `index.html` is in the root directory

**Issue:** Changes not reflecting
- **Solution:** Wait a few minutes for Vercel to rebuild, or trigger a manual redeploy in Vercel dashboard

**Issue:** Git push fails
- **Solution:** Make sure you've added the remote repository correctly and have proper permissions

## 📧 Contact

For website issues or updates, contact: ranjansinghal.ca@gmail.com

