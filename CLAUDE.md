# Kohue Wines — Proyecto Angular + Firebase + Stripe

## Stack
- **Frontend:** Angular 17 standalone components, TailwindCSS, Signals
- **Backend:** Express.js standalone (Vercel: `kohueback.vercel.app`), NO Firebase Functions
- **Database:** Firebase Firestore + Firebase Auth
- **Payments:** Stripe Checkout Sessions
- **Email:** EmailJS
- **Hosting:** Firebase Hosting (`vineyardsinandes.web.app`, `kohuewines.com`)

## Path Aliases (tsconfig.json)
- `@admin/*` → `src/app/domains/admin/*`
- `@users/*` → `src/app/domains/users/*`
- `@shared/*` → `src/app/domains/shared/*`
- `@services/*` → `src/app/services/*`
- `@models/*` → `src/app/models/*`
- `@env/*` → `src/environments/*`
- `@shop/*` → `src/app/domains/shop/*`

## Comandos
- `npm start` — `ng serve` (dev en localhost:4200)
- `npm run build` — `ng build` (prod)
- `npm run watch` — `ng build --watch --configuration development`

## Rutas principales
| Ruta | Componente | Auth |
|---|---|---|
| `/` | LayoutComponent | No |
| `/members` | LandshopComponent | Sí |
| `/login` | LoginComponent | No |
| `/join` | SigninComponent | No |
| `/ship` | ShippingmethodComponent | Sí |
| `/card` | CardStripeComponent | Sí |
| `/offering` | DirectlinkComponent | No |
| `/offer1` | Directlink3Component | No |
| `/success_offering` | Directlink2Component | No |
| `/succes` | InfopurchaseComponent | No |
| `/thanks` | ThanksInterestModalComponent | No |
| `/clubmember` | ClubmemberModalComponent | No |
| `/stay` | StaytunedComponent | No |
| `/ourwines` | OurwinesComponent | No |
| `/about` | AboutComponent | No |
| `/dashboard` | DashboardComponent | Sí |
| `/edit` | EditComponent | Sí |
| `/admin` | ClientsFullComponent | Sí |
| `/usersadmin` | UsersFullComponent | No |
| `/ex-join` | JoinmailComponent | No |
| `/acquire` | AcquireComponent | No |
| `/credits` | CreditsComponent | No |
| `/terms` | TermsComponent | No |
| `/privacy` | PrivacyComponent | No |

## Estructura del proyecto
```
src/
├── app/
│   ├── app.routes.ts          # Definición de rutas
│   ├── app.config.ts          # Providers (Firebase, HTTP, Router)
│   ├── domains/
│   │   ├── admin/             # CRUD de clients y users
│   │   ├── users/             # Login, registro, dashboard, perfil, historial
│   │   ├── shop/              # Landshop, cart, monoproduct, direct links, checkout
│   │   └── shared/            # Layout, navbar, footer, agegate, terms, privacy
│   ├── services/              # Todos los servicios
│   ├── models/                # Interfaces (Client, Product, etc.)
│   └── guards/
├── environments/
│   ├── environment.ts                  # Producción
│   └── environment.development.ts      # Desarrollo
```

## Stripe Checkout Flow
1. **CartComponent** o **DirectLinkComponent** llama a `StripeService.getSessionCheckout()` o `getDirectLinkSessionCheckout()`
2. **Frontend** hace POST a `apiURL/create-checkout-session` con:
   - `user` (objeto con stripeCustomerId)
   - `product`, `quantity`, `stripeShippingId`, `priceProductId`, `californiaTaxId`
3. **Backend (Vercel)** crea `stripe.checkout.sessions.create()` con:
   - `line_items` con `price` + `quantity` + `tax_rates`
   - `customer`, `shipping_options`, `automatic_tax: false`, `mode: payment`
   - `success_url`, `cancel_url`
4. Backend devuelve `{ url: session.url }`
5. Frontend hace `window.location.href = checkoutUrl`

## Cart logic
- Max 3 unidades por producto (hardcodeado en `addToCart`)
- Shipping: Overnight ($90/1, $110/2, $130/3), Ground ($35/1, $0/2-3), Local ($0)
- Subtotal + shipping = totalAmount

## Models clave
- **Client:** `stripeCustomerId`, `clientUID`, `email`, `firstname`, `lastname`, `address`, `membership`, etc.
- **Product:** `id`, `title`, `price`, `images`, `description`, `quantity`, `category`

## Firestore collections
- `users` — Usuarios registrados (doc ID = Firebase Auth UID)
- `clientsjoinedlist` — Leads/emails de la lista de espera

## Stripe IDs (prod)
- PRICE_PRODUCT: `price_1TOjQdRtorj52eamiPA61LDE` (Cabernet 2022, $435)
- PRICE_PRODUCT_ONE: `price_1QeO9qRtorj52eambX2C809r` ($185)
- CALI_TAX_RATE: `txr_1QECkRRtorj52eamS6motspO`

## Observaciones técnicas
- Los componentes usan `lastValueFrom()` para convertir Observables HTTP a Promises
- Los guards de rutas admin están comentados (desactivados)
- Stripe.js v3 está comentado en index.html (no se usa, todo va por backend)
- `domainURL` hardcodeado en backend: `https://vineyardsinandes.web.app`
