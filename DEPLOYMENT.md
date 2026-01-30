# Netlify Deployment Guide - AI Travel Agent

## 🚀 Quick Start

Your app is configured for **Netlify deployment** with serverless functions.

---

## 📋 Prerequisites

1. **GitHub Account** - with your code pushed
2. **OpenAI API Key** - from https://platform.openai.com/api-keys
3. **Netlify Account** - free signup at https://netlify.com

---

## 🔧 Step-by-Step Deployment

### Step 1: Push Code to GitHub

```bash
cd /Users/nikema/Dev/ai-travel-agent

git add .
git commit -m "Add Netlify configuration for deployment"
git push origin main
```

### Step 2: Connect to Netlify

1. Go to https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Search for `ai-travel-agent` repository
5. Click "Import"
6. Accept the build settings (auto-detected from `netlify.toml`)
7. Click "Deploy site"

### Step 3: Add Environment Variables

After deployment starts:

1. **Go to Netlify Dashboard** → Your site
2. Click **"Site settings"**
3. Go to **"Build & deploy"** → **"Environment"**
4. Click **"Edit variables"**
5. Add:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Paste your OpenAI API key
6. Click **"Save"**

### Step 4: Trigger Redeploy

1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Deploy site"**

---

## 📁 Project Structure (Netlify)

```
ai-travel-agent/
├── index.html              # Welcome screen
├── form.html               # Trip planning form
├── results.html            # Trip results page
├── styles.css              # All styling
├── script.js               # Frontend JavaScript
├── netlify.toml            # Netlify configuration
├── netlify/
│   └── functions/
│       └── recommendations.js   # OpenAI serverless function
├── package.json            # Dependencies
└── DEPLOYMENT.md           # This guide
```

---

## 🔄 How It Works

1. **Static files** (HTML, CSS, JS) → Served by Netlify CDN
2. **Frontend calls** `/api/recommendations` → Redirected to `/.netlify/functions/recommendations`
3. **Serverless function** → Calls OpenAI API securely
4. **Response** → Sent back to frontend with personalized recommendations

---

## 🔐 Security

✅ **API Key is secure** - stored on Netlify server, never exposed to frontend
✅ **Frontend calls serverless function** - not directly calling OpenAI
✅ **Environment variables** - keep sensitive data hidden

---

## 📊 Monitoring & Logs

### View Deployment Logs

1. Go to https://app.netlify.com
2. Select your site
3. Click **"Deploys"** tab
4. Click a deployment to see build logs
5. Click **"Functions"** tab to see function logs

### Monitor API Usage

- OpenAI Dashboard: https://platform.openai.com/account/usage/overview

---

## 💰 Pricing

### Netlify

- **Free tier**: Unlimited deployments
- **Netlify Functions**: 125,000 invocations/month free
- Enough for most projects

### OpenAI API

- GPT-3.5-turbo: ~$0.001 per 1000 tokens
- Your app uses ~200-300 tokens per request
- **Cost per trip**: ~$0.02

---

## 🐛 Troubleshooting

### Issue: "Failed to generate recommendations"

**Check**:

1. API key is correctly set in Netlify environment variables
2. API key has "Read" permissions at https://platform.openai.com/api-keys
3. Check function logs in Netlify dashboard

**Solution**:

- Regenerate API key from OpenAI dashboard
- Update in Netlify environment variables
- Trigger redeploy

### Issue: Function returns 404

**Check**:

1. `netlify.toml` exists and has correct `functions` path
2. Function file is at `netlify/functions/recommendations.js`
3. Function exports `handler` (not `default`)

### Issue: CORS errors

**Solution**: Already handled. The `netlify.toml` redirects `/api/*` to functions.

---

## 🔄 Deploying Updates

```bash
# Make your changes
git add .
git commit -m "Update: <your change>"
git push origin main

# Netlify automatically redeploys
```

---

## 🎯 You're All Set!

Your app is ready to deploy. Follow the steps above and you'll have a live AI Travel Agent.

---

## 📚 Useful Links

- **Netlify Docs**: https://docs.netlify.com/
- **Netlify Functions**: https://docs.netlify.com/functions/overview/
- **OpenAI API Docs**: https://platform.openai.com/docs/api-reference
