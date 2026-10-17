# Creative Job Manager

Professional job management web application for creative design companies — Next.js (App Router), PostgreSQL + Drizzle ORM.

## Setup
1. Set `DATABASE_URL` in `.env` (e.g. `postgresql://postgres:postgres@127.0.0.1:5432/app_db`).
2. `npm install`
3. `npx drizzle-kit push` — creates all tables.
4. `npm run build && npm start` (or `npm run dev`).
5. Default users are seeded automatically on first launch.

### Optional
- **Email for password reset**: set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`. Without SMTP the code is logged and shown on screen (development mode).
- **Private file storage**: defaults to `./storage/uploads` (outside `/public`); override with `UPLOAD_DIR`. Files are only served through the authenticated `/api/files/:id` route.
- Set `COOKIE_SECURE=true` when serving over HTTPS.

## Demo accounts
| Role   | Email                    | Password   |
|--------|--------------------------|------------|
| Admin  | admin@creativejobs.com   | Admin@123  |
| Worker | priya@creativejobs.com   | Worker@123 |
| Worker | daniel@creativejobs.com  | Worker@123 |
| Worker | sofia@creativejobs.com   | Worker@123 |

## Workflow
Admin creates & assigns a job → Worker Start / Hold / Resume / Job Done (server-side timestamps, hold time excluded) → Upload images with captions + PDFs → Submit for Approval → Admin Approve / Reject with comments → Download A4 PDF report (images + captions, page numbers). Admin analytics: daily/weekly/monthly hours, estimated vs actual, hold time, overdue, exportable PDF.
