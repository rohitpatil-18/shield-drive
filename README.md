# 🛡️ ShieldDrive - Auto Insurance Quote Landing Page

A modern, responsive auto insurance lead-generation landing page built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, **Prisma**, and **PostgreSQL**.

The application allows users to compare insurance quotes by submitting a lead form with cascading vehicle selection (**Year → Make → Model**) backed by a PostgreSQL database.

This project was built as part of a Frontend Engineer technical assessment with a focus on:

* Responsive UI
* Accessibility
* Performance
* SEO
* Form validation
* Server-side validation
* Database integration
* Modern Next.js App Router architecture

---

## 🚀 Features

### Landing Page

* Modern insurance landing page
* Responsive design (Mobile → Desktop)
* Hero section with CTA
* Trust indicators
* Features section
* Testimonials
* Quote Call-To-Action
* Professional Footer

### Quote Form

* React Hook Form
* Zod Validation
* Client-side validation
* Server-side validation
* Graceful API failure handling
* Loading states
* Success & error messages
* Prevents duplicate submissions

### Vehicle Selection

Dynamic cascading dropdowns powered by PostgreSQL:

* Vehicle Year
* Vehicle Make
* Vehicle Model

Features include:

* Year → Make dependency
* Make → Model dependency
* Loading indicators
* Empty states
* Server-side vehicle verification

### Backend

* Next.js Route Handlers
* Prisma ORM
* PostgreSQL
* Secure lead creation
* Vehicle validation
* Proper HTTP status codes
* Error handling

### Performance & SEO

* Next.js Metadata API
* robots.txt
* sitemap.xml
* Semantic HTML
* Mobile-first responsive design
* Optimized fonts
* Optimized images
* Accessibility improvements

---

# 🛠️ Tech Stack

| Technology              | Purpose                    |
| ----------------------- | -------------------------- |
| Next.js 15 (App Router) | Frontend Framework         |
| React 19                | UI Library                 |
| TypeScript              | Type Safety                |
| Tailwind CSS            | Styling                    |
| React Hook Form         | Form Management            |
| Zod                     | Client & Server Validation |
| Prisma ORM              | Database ORM               |
| PostgreSQL              | Database                   |
| Lucide React            | Icons                      |

---

# 📂 Project Structure

```text
app/
├── api/
│   ├── leads/
│   └── vehicles/
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── CTA.tsx
├── FeatureSection.tsx
├── Footer.tsx
├── Hero.tsx
├── Navbar.tsx
├── QuoteForm.tsx
├── Testimonials.tsx
└── Trust.tsx

lib/
├── prisma.ts
└── validations/
    └── quoteSchema.ts

prisma/
├── schema.prisma
├── seed.ts
└── vehicles.json

services/
└── vehicle.service.ts
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd shielddrive
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

```env
DATABASE_URL="postgresql://username:password@localhost:5432/shielddrive"
```

Replace the connection string with your local PostgreSQL database credentials.

---

# ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

---

# 🌱 Database Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Seed the vehicle database:

```bash
npx tsx prisma/seed.ts
```

Open Prisma Studio (optional):

```bash
npx prisma studio
```



---

# 🔌 API Endpoints

The application exposes the following API routes:

| Method | Endpoint                                     | Description                                             |
| ------ | -------------------------------------------- | ------------------------------------------------------- |
| GET    | `/api/vehicles/years`                        | Returns available vehicle years                         |
| GET    | `/api/vehicles/makes?year=2022`              | Returns available makes for the selected year           |
| GET    | `/api/vehicles/models?year=2022&make=Toyota` | Returns available models for the selected year and make |
| POST   | `/api/leads`                                 | Validates and stores a lead submission                  |

---

# ✅ Validation

Validation is implemented on both the client and server.

### Client-side

* React Hook Form
* Zod Schema Validation
* Required field validation
* Email validation
* US phone number validation
* ZIP code validation
* Vehicle selection validation

### Server-side

Every request submitted to `/api/leads` is validated again before inserting data into the database.

Additional server checks include:

* Vehicle Year exists
* Vehicle Make belongs to the selected Year
* Vehicle Model belongs to the selected Make and Year
* Invalid combinations are rejected
* Invalid requests return appropriate HTTP status codes

---

# 🗄️ Database

The project uses **PostgreSQL** with **Prisma ORM**.

Main tables:

### vehicles

Stores valid combinations of:

* Vehicle Year
* Vehicle Make
* Vehicle Model

### leads

Stores submitted insurance quote requests including:

* First Name
* Last Name
* Email
* Phone
* ZIP Code
* Vehicle Year
* Vehicle Make
* Vehicle Model
* Created Timestamp

Vehicle data is seeded using a generated `vehicles.json` file and a Prisma seed script.

---

# 🌱 Seeding Data

Generate the Prisma client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Seed the database:

```bash
npx tsx prisma/seed.ts
```

This imports the vehicle reference data into PostgreSQL and enables the cascading dropdown functionality.

---

# ♿ Accessibility

The application includes:

* Semantic HTML
* Accessible labels
* Keyboard navigation
* Screen reader support
* Focus states
* ARIA attributes
* Inline validation messages
* Accessible loading and success states

---

# 📱 Responsive Design

The application is built using a mobile-first approach.

Tested across:

* Mobile (~320px+)
* Tablet
* Desktop

All major sections adapt responsively including:

* Navigation
* Hero
* Quote Form
* Vehicle Selection
* CTA
* Footer



---

# 🚀 Deployment

The application is designed to be deployed on **Vercel**.

Deployment steps:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Deploy the application.

Required Environment Variable:

```env
DATABASE_URL=your_postgresql_connection_string
```

---

# 📊 Lighthouse Report

> The following scores will be updated after deployment.

| Metric         | Target | Actual  |
| -------------- | ------ | ------- |
| Performance    | ≥ 90   | Pending |
| Accessibility  | ≥ 90   | Pending |
| Best Practices | ≥ 95   | Pending |
| SEO            | ≥ 90   | Pending |

The audit was performed using:

* Chrome DevTools Lighthouse
* Mobile Device
* Production Deployment

---

# 🧪 Testing Checklist

The following scenarios were verified during development:

* ✅ Successful lead submission
* ✅ Required field validation
* ✅ Invalid email validation
* ✅ Invalid US phone validation
* ✅ Invalid ZIP code validation
* ✅ Invalid vehicle combination
* ✅ Cascading vehicle dropdowns
* ✅ Duplicate submission prevention
* ✅ Graceful API failure handling
* ✅ Responsive layout
* ✅ Database insertion
* ✅ Server-side validation

---

# 💡 Assumptions

* Vehicle reference data is generated using an LLM and seeded into PostgreSQL.
* The application focuses on lead generation only and does not implement real insurance quote calculations.
* Authentication and administration features are intentionally excluded as they are outside the assignment scope.

---

# 🔮 Future Improvements

Given additional development time, the following enhancements could be added:

* Lead management dashboard
* Email notifications
* Rate limiting
* Analytics integration
* Unit and integration tests
* CI/CD pipeline
* Dark mode
* Multi-step quote flow

---

# 🙏 Acknowledgements

Vehicle reference data was generated with the assistance of an LLM and imported into PostgreSQL using a Prisma seed script.

The application was built using modern React and Next.js best practices with an emphasis on:

* Clean architecture
* Performance
* Accessibility
* Responsive design
* SEO
* Maintainable code

---

## 🚀 Lighthouse Performance Report

View the complete Lighthouse report here:

📄 [Lighthouse Report-HTML](docs/shield-drive-performance.html)
📄 [Lighthouse Report-PDF](docs/shield-drive-performance.pdf)


## Thank You

Thank you for reviewing this project.

I enjoyed building this application and focused on creating a responsive, accessible, and production-ready implementation while following the assignment requirements.
