# Dr. Sandeep Kanugula Website

Premium, mobile-first orthopaedic doctor website built with Next.js, Tailwind CSS, MongoDB, and Nodemailer.

## Folder structure

```text
.
|-- package.json
|-- src
|   |-- app
|   |   |-- api
|   |   |   `-- leads
|   |   |       `-- route.ts
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- components
|   |   |-- contact-form.tsx
|   |   |-- reveal.tsx
|   |   |-- section-heading.tsx
|   |   `-- sticky-contact-bar.tsx
|   |-- lib
|   |   |-- mailer.ts
|   |   |-- mongodb.ts
|   |   |-- sheets.ts
|   |   `-- site.ts
|   `-- models
|       `-- Lead.ts
`-- .env.example
```

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and fill in MongoDB and SMTP credentials.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Deployment steps

1. Push the project to GitHub.
2. Create a MongoDB Atlas database and whitelist your hosting provider.
3. Deploy on Vercel.
4. Add the environment variables from `.env.example` in the Vercel dashboard.
5. Update `NEXT_PUBLIC_SITE_URL` with the production URL.
6. Test the appointment form and verify email notifications.

## Optional Google Sheets sync

Set `GOOGLE_SHEETS_WEBHOOK_URL` to a Google Apps Script web app URL that accepts a JSON `POST` body and appends leads to a sheet.
