# Production Deployment Checklist

## Before Deploying to Vercel

- [ ] All code is pushed to GitHub main branch
- [ ] `vercel.json` is configured correctly
- [ ] `.vercelignore` file exists
- [ ] `next.config.mjs` has production settings

## Vercel Project Setup

- [ ] Repository imported to Vercel
- [ ] Project name set correctly
- [ ] Framework auto-detected as Next.js

## Environment Variables (Vercel Dashboard)

- [ ] `NEXTAUTH_SECRET` - secure random string
- [ ] `NEXTAUTH_URL` - production domain
- [ ] `DATABASE_URL` - MySQL connection string
- [ ] `NEXT_PUBLIC_API_BASE_URL` - API endpoint

## Database Setup

- [ ] MySQL database created and accessible
- [ ] `DATABASE_URL` connection string tested
- [ ] Migrations run: `npx prisma migrate deploy`
- [ ] Admin user created (if needed)

## Build Verification

- [ ] Build succeeds without errors
- [ ] No warnings during build
- [ ] `npm run build` succeeds locally
- [ ] `npm run lint` passes

## Post-Deployment Tests

- [ ] Homepage loads: https://your-domain.com
- [ ] Navigation works
- [ ] Can login/register
- [ ] Products display correctly
- [ ] Cart functionality works
- [ ] Admin dashboard accessible
- [ ] API calls succeed (check console for errors)

## Security Checks

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Environment variables not exposed in logs
- [ ] Database credentials not in repository

## Domain & DNS

- [ ] Custom domain (optional)
- [ ] DNS records configured
- [ ] SSL certificate provisioned

## Monitoring

- [ ] Error logs checked
- [ ] Function logs reviewed
- [ ] Performance metrics acceptable
- [ ] No 500 errors in logs

## Documentation

- [ ] README.md updated with production URL
- [ ] DEPLOYMENT.md completed
- [ ] .env.example reviewed
- [ ] Environment variables documented

## Final Steps

- [ ] Smoke test on production
- [ ] Share with team
- [ ] Monitor for 24 hours
- [ ] Set up alerts (optional)

---

Last Updated: May 15, 2026
