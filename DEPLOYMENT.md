# LUMESBD Deployment Guide

This guide provides step-by-step instructions for deploying LUMESBD to Vercel.

## Prerequisites

- [GitHub](https://github.com) account with the repository pushed
- [Vercel](https://vercel.com) account
- [MySQL database](https://www.mysql.com/) hosted (e.g., PlanetScale, AWS RDS)

## Step 1: Prepare GitHub Repository

Ensure your code is pushed to GitHub:

```bash
git add -A
git commit -m "Ready for deployment"
git push origin main
```

Repository: https://github.com/simulhunt-bit/lumx

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"** or **"Add New"**
3. Select the `lumx` repository
4. Configure project settings:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: Leave as default
5. Click **"Deploy"** (may fail if env vars aren't set - that's OK)

### Option B: Using Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

## Step 3: Configure Environment Variables

After deployment (or before), add environment variables in Vercel Dashboard:

1. Go to Project Settings → **Environment Variables**
2. Add each variable below:

### Required Variables

| Variable | Value | Example |
|----------|-------|---------|
| `NEXTAUTH_SECRET` | Generate: `openssl rand -base64 32` | `ABC123xyz...` |
| `NEXTAUTH_URL` | Your production domain | `https://lumesbd.vercel.app` |
| `DATABASE_URL` | MySQL connection string | `mysql://user:pass@host/db` |
| `NEXT_PUBLIC_API_BASE_URL` | API endpoint | `https://api.lumesbd.com` |

### Generate NEXTAUTH_SECRET

**On Windows (PowerShell):**
```powershell
[Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((Get-Random -InputObject (1..999999999999999))))
```

**On Mac/Linux:**
```bash
openssl rand -base64 32
```

## Step 4: Set Up Database

1. Create MySQL database (e.g., using PlanetScale or AWS RDS)
2. Update `DATABASE_URL` with connection string
3. Run migrations (via Vercel CLI or dashboard):

```bash
vercel env pull .env.production.local
npx prisma migrate deploy
```

## Step 5: Configure Domain (Optional)

1. Go to Project Settings → **Domains**
2. Add your custom domain
3. Update DNS settings according to Vercel's instructions

## Step 6: Deploy Next Commits

Push new commits to trigger automatic deployments:

```bash
git add -A
git commit -m "Your changes"
git push origin main
```

Vercel will automatically detect changes and redeploy.

## Troubleshooting

### Build Fails: "prisma generate failed"

- Ensure `DATABASE_URL` is set in Vercel environment variables
- Verify database connection string is correct

### Build Fails: "Cannot find module"

- Clear build cache: Project Settings → **Deployments** → **Redeploy** → **Clear Build Cache**
- Delete `node_modules` locally and `npm install` again

### Runtime Error: "API Base URL undefined"

- Check `NEXT_PUBLIC_API_BASE_URL` is set in environment variables
- Verify API server is running and accessible from Vercel

### Database Connection Fails

- Verify `DATABASE_URL` format is correct
- Check database firewall allows Vercel IPs
- Ensure database is running and accessible

## Monitoring

After deployment, monitor your site:

1. **Vercel Dashboard**: View build logs and deployment history
2. **Application**: Check [https://your-domain.com](https://your-domain.com)
3. **Errors**: View function logs in Vercel Dashboard → **Functions**

## Rollback

To rollback to a previous deployment:

1. Go to Vercel Project → **Deployments**
2. Click the deployment you want to restore
3. Click **"Promote to Production"**

## Next Steps

- Set up CI/CD for automated testing
- Configure custom domain
- Set up monitoring and alerting
- Enable automatic deployments for specific branches

For more info, see [Vercel Documentation](https://vercel.com/docs).
