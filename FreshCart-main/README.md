# FreshCart – Modern E‑commerce Web App

FreshCart is a React-based shopping experience that makes it easy to explore products, add items to a cart or wishlist, and complete checkout using online or cash payments. The app focuses on a fast, clean UI and smooth navigation across catalog, account, and orders.

## Highlights
- Authentication: Sign up, sign in, and password recovery/reset.
- Catalog: Browse all products, drill into details, and explore by categories and brands.
- Cart & Wishlist: Add to cart, save favorites, and manage items.
- Checkout: Online payment and cash on delivery options.
- Orders: View your order history and track prices and status.
- Profile: Basic user profile page (name, email, etc.).

## Tech Stack
- React 18, React Router v6
- State and data: Context API, React Query
- Forms & validation: Formik, Yup
- HTTP: Axios
- Meta & SEO: React Helmet
- Auth helpers: jwt-decode
- UI & UX: Bootstrap 5, Sass, react-toastify, react-loader-spinner
- Utilities: react-detect-offline, react-slick, react-super-responsive-table

## Getting Started

Prerequisites:
- Node.js (LTS recommended) and npm

Install and run:
1) Install dependencies
	- npm ci (or npm install)
2) Start development server
	- npm start
3) Open the app at http://localhost:3000

Build and test:
- Production build: npm run build
- Tests: npm test

## Available Scripts
- start: Launch the dev server with react-scripts
- build: Create an optimized production build
- test: Run tests in watch mode
- eject: Eject CRA configuration (irreversible)

## Project Structure (abridged)
```
src/
  components/        # Feature components (Home, Products, Cart, etc.)
  context/           # Token and cart contexts
  assets/            # Images and static media
  App.js             # Routes and layout wiring
  index.js           # App bootstrap
```

## Notes
- API integration uses ecommerce.routemisr.com endpoints.
- Toast notifications and loaders are used throughout for feedback.
- Offline states are detected and handled gracefully where relevant.

## Deployment
The app can be deployed to platforms like Vercel or similar static hosts. Build with `npm run build` and deploy the contents of the `build/` directory.
