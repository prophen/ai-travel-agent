# Deployment Guide - AI Travel Agent

## Quick Summary

Your app is now configured to use **OpenAI API** with a serverless backend. The best services to deploy this are:

### 🏆 Recommended: **Vercel** (easiest)
- Free tier with unlimited deployments
- Serverless functions included
- GitHub integration for automatic deployments
- Perfect for fullstack JS apps

**Alternative**: Netlify (very similar to Vercel)

---

## 📋 Prerequisites

1. **GitHub Account** - to push your code
2. **OpenAI API Key** - from https://platform.openai.com/api-keys
3. **Vercel Account** - free signup at https://vercel.com

---

## 🚀 Step-by-Step Deployment

### 1. Initialize Git & Push to GitHub

```bash
cd /Users/nikema/Dev/ai-travel-agent

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: AI Travel Agent with OpenAI integration"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/ai-travel-agent.git
git branch -M main
git push -u origin main
```

### 2. Install Node Dependencies Locally

```bash
# Install OpenAI SDK
npm install
```

### 3. Set Up Vercel

**Option A: Using Vercel CLI (Recommended)**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (in your project directory)
vercel

# Follow the prompts:
# - Link to GitHub repo
# - Set project settings
# - Add environment variables
```

**Option B: Using Vercel Dashboard**

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select your GitHub repo
4. Click "Import"
5. In the "Environment Variables" section, add:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key from https://platform.openai.com/api-keys

### 4. Add Your OpenAI API Key

After deploying, go to your Vercel project settings:

1. Go to https://vercel.com/dashboard
2. Select your `ai-travel-agent` project
3. Click "Settings"
4. Go to "Environment Variables"
5. Click "Add"
   - **Name**: `OPENAI_API_KEY`
   - **Value**: Paste your OpenAI API key
6. Click "Save"
7. Redeploy: Click "Deployments" tab, then the three dots on the latest deployment, and select "Redeploy"

---

## 📁 Project Structure Explained

```
ai-travel-agent/
├── index.html           # Welcome screen
├── form.html            # Trip planning form
├── results.html         # Trip results page
├── styles.css           # All styling
├── script.js            # Frontend JavaScript
├── api/
│   └── recommendations.js  # OpenAI API endpoint (serverless)
├── package.json         # Dependencies (OpenAI SDK)
├── vercel.json          # Vercel configuration
└── .gitignore           # Git ignore file
```

---

## 🔄 How It Works

1. **User fills form** → Data stored in sessionStorage
2. **Submit → Results page loads**
3. **Frontend calls `/api/recommendations`** → Serverless function
4. **Function calls OpenAI API** → Gets personalized recommendations
5. **Recommendations displayed** → Weather, Flights, Hotel

---

## 🔐 Security

- ✅ **API Key is secure** - stored on Vercel server, never exposed to frontend
- ✅ **Frontend calls serverless function** - not directly calling OpenAI
- ✅ **Environment variables** - keep sensitive data hidden

---

## 📊 Monitoring & Logs

### View Deployment Logs

```bash
# Using Vercel CLI
vercel logs

# Or go to: https://vercel.com/dashboard → Select project → Deployments
```

### Monitor API Usage

- OpenAI Dashboard: https://platform.openai.com/account/usage/overview
- Vercel Analytics: In your project dashboard

---

## 💰 Pricing

### OpenAI API (GPT-3.5-turbo)
- ~$0.001 per 1000 tokens (very cheap)
- Your app uses ~200-300 tokens per request
- **Estimate**: ~$0.02 per trip plan

### Vercel
- **Free tier**: 100 invocations/day for functions
- Sufficient for most personal/small projects
- Scales automatically if needed

---

## 🐛 Troubleshooting

### Issue: 401 Unauthorized from OpenAI

**Solution**: 
- Check API key is correctly set in Vercel environment variables
- Make sure API key has "Read" permissions
- Generate a new API key from https://platform.openai.com/api-keys

### Issue: Serverless function returns 500 error

**Solution**:
- Check Vercel logs: `vercel logs --tail`
- Ensure `package.json` has `openai` dependency
- Verify environment variable is set

### Issue: CORS errors

**Solution**: These shouldn't happen since you're calling your own API, but if they do:
- Check the fetch URL is correct: `/api/recommendations` (relative path)

---

## 🔄 Redeploying After Code Changes

```bash
# Push changes to GitHub
git add .
git commit -m "Update: <description>"
git push origin main

# Vercel will automatically redeploy!
# Or manually:
vercel --prod
```

---

## 📱 Testing Before Deployment

```bash
# Test locally with Vercel environment
npm run dev

# This runs: vercel dev
# Simulates serverless functions locally
# Open: http://localhost:3000
```

---

## 🎯 Next Steps

1. ✅ Push code to GitHub
2. ✅ Sign up for Vercel
3. ✅ Import GitHub repo to Vercel
4. ✅ Add OpenAI API key to environment variables
5. ✅ Visit your deployed URL (Vercel provides it)
6. ✅ Test the app end-to-end

Your app will be live at: `https://ai-travel-agent.vercel.app` (or custom domain)

---

## 📚 Useful Links

- **Vercel Docs**: https://vercel.com/docs
- **OpenAI API Docs**: https://platform.openai.com/docs/api-reference
- **OpenAI Models**: https://platform.openai.com/docs/models
