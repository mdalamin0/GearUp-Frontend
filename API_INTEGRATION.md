
# API Integration

This document outlines how the GearUp Frontend consumes backend APIs throughout the application.

## Base API

```text
https://gearup-backend-szbl.onrender.com
```

> Replace the URL above with your deployed backend API.

---

## Authentication

| Frontend Route / Component | Method | Backend Endpoint | Purpose |
| -------------------------- | ------ | ---------------- | ------- |
| Register Page | POST | `/auth/register` | Register Customer or Provider |
| Login Page | POST | `/auth/login` | Authenticate user |
| Protected Layout | GET | `/auth/me` | Retrieve authenticated user |
| Logout | POST | `/auth/logout`  | End user session |

---

## Public Pages

| Frontend Route / Component | Method | Backend Endpoint | Purpose |
| -------------------------- | ------ | ---------------- | ------- |
| Home (Featured Gear) | GET | `/gear?isFeatured=true` | Display featured gear |
| Browse Gear | GET | `/gear` | Browse all available gear |
| Gear Search | GET | `/gear?searchTerm=` | Search gear |
| Category Filter | GET | `/gear?category=` | Filter by category |
| Brand Filter | GET | `/gear?brand=` | Filter by brand |
| Price Filter | GET | `/gear?minPrice=&maxPrice=` | Filter by rental price |
| Availability Filter | GET | `/gear?available=` | Filter by stock availability |
| Categories | GET | `/categories` | Retrieve all categories |
| Brands | GET | `/gear/brands` | Retrieve available brands |
| Gear Details | GET | `/gear/:id` | Retrieve gear details |

---

## Customer Dashboard

| Frontend Route / Component | Method | Backend Endpoint | Purpose |
| -------------------------- | ------ | ---------------- | ------- |
| Customer Dashboard | GET | `/rentals` | View rental history |
| Create Rental | POST | `/rentals` | Place rental order |
| Payment History | GET | `/payments` | View payment history |
| Create Payment | POST | `/payments/create` | Initiate SSLCommerz payment |
| Payment Verification | POST | `/payments/confirm` | Verify payment |
| Reviews | POST | `/reviews` | Submit review after returning gear |

---

## Provider Dashboard

| Frontend Route / Component | Method | Backend Endpoint | Purpose |
| -------------------------- | ------ | ---------------- | ------- |
| Provider Dashboard | GET | `/provider/dashboard` | Provider overview |
| My Gear | GET | `/provider/gear` | Retrieve provider gear |
| Add Gear | POST | `/provider/gear` | Create gear listing |
| Edit Gear | PUT | `/provider/gear/:id` | Update gear |
| Delete Gear | DELETE | `/provider/gear/:id` | Remove gear |
| Provider Orders | GET | `/provider/orders` | View incoming rental orders |
| Update Order Status | PATCH | `/provider/orders/:id` | Update rental status |

---

## Admin Dashboard

| Frontend Route / Component | Method | Backend Endpoint | Purpose |
| -------------------------- | ------ | ---------------- | ------- |
| Dashboard Statistics | GET | `/admin/dashboard` | Platform overview |
| Users | GET | `/admin/users` | Retrieve all users |
| Update User Status | PATCH | `/admin/users/:id` | Suspend or Activate user |
| Gear Management | GET | `/admin/gear` | Retrieve all gear |
| Feature / Unfeature Gear | PATCH | `/admin/gear/:id/feature` | Toggle featured status |
| Rental Management | GET | `/admin/rentals` | Retrieve all rental orders |

---

## Payment Flow

```text
Customer
    │
    ▼
Create Rental
    │
    ▼
POST /payments/create
    │
    ▼
SSLCommerz Payment Gateway
    │
    ├──────────────► /payment/success
    │
    └──────────────► /payment/cancel
```

---

## Authentication Strategy

- JWT-based authentication
- Access Token stored in HTTP-only cookies
- Next.js Middleware protects role-based routes
- Authenticated user information is retrieved from the `/auth/me` endpoint.

---

## Data Fetching Strategy

- Server Components are used for initial data loading.
- Server Actions handle Create, Update and Delete operations.
- Cache invalidation is managed using `revalidateTag()`.
- `router.refresh()` updates UI after successful mutations.

---

## Error Handling

The frontend provides consistent user feedback by:

- Toast notifications for API success and error responses
- Form validation messages
- Loading indicators and skeleton components
- Graceful empty states
- Global `error.tsx`
- Global `not-found.tsx`