# Black Mercante Studios

A real Next.js project for the site, converted from the original single-file
prototype. Images are now actual files in `public/images` instead of
base64 text, and the Lookbook is a real page at `/lookbook` instead of
component state.

## Run it locally

You'll need [Node.js](https://nodejs.org) installed (18 or newer).

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Changes to any file auto-reload in the browser.

## Where things live

- `app/page.jsx` — homepage (hero, season filter, product grid, statement banner, newsletter)
- `app/lookbook/page.jsx` — the Lookbook page, at the real URL `/lookbook`
- `app/layout.jsx` — the wrapper every page shares: utility bar, header, footer, cart drawer
- `lib/products.js` — **edit this file to add, remove, or change products.** Each entry needs an `id`, `name`, `season`, `price`, `sizes`, `soldOut`, and optionally an `img` path
- `public/images/` — every product photo, logo, and lookbook photo as a real file. Add new photos here and reference them from `lib/products.js`
- `components/` — the Header, Footer, ProductCard, ProductArt (image tile with placeholder fallback), and CartDrawer
- `context/CartContext.jsx` — the shopping bag. It's in-memory only right now (clears on refresh) since there's no backend yet — see "What's still missing" below

## Adding a product

Open `lib/products.js` and add an object to the `PRODUCTS` array:

```js
{
  id: "bm-113",
  name: "New Product Name",
  season: "s03",
  price: 58,
  sizes: ["S", "M", "L", "XL"],
  soldOut: false,
  img: "/images/your-photo.png", // omit this line to use the placeholder tile
}
```

Drop the photo file into `public/images/` first, then reference it by that path.

## What's still missing before this can take real orders

This project looks and behaves like the final site, but two things are
placeholder-only:

1. **Checkout doesn't charge anyone.** The "Checkout" button in the cart is
   just a styled button — there's no payment processor wired up. To take
   real payments, you'd add [Stripe Checkout](https://stripe.com/docs/checkout/quickstart)
   or a tool like [Snipcart](https://snipcart.com) that plugs into a cart
   like this one.
2. **The cart doesn't persist or track real inventory.** Right now the bag
   lives in memory and resets on refresh, and "sold out" is just a flag you
   set by hand in `lib/products.js`. A real store needs a database (or a
   headless commerce backend) tracking actual stock.

Both are normal next steps for a from-scratch build — this project gets you
everything up to that point: a real, deployable site with your design,
your products, and a working (if not yet payment-connected) cart.

## Deploying

The easiest path is [Vercel](https://vercel.com) (made by the same team as
Next.js):

1. Push this project to a GitHub repo
2. Go to vercel.com, "Add New Project", and import that repo
3. Leave the default settings — Vercel detects Next.js automatically
4. Click Deploy

You'll get a live URL in about a minute, and every push to the repo after
that redeploys automatically. You can attach your own domain in the
Vercel project settings once you have one.
