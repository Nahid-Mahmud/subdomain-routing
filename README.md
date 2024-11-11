Here’s a README.md for your project that includes instructions for setting up the environment, understanding the subdomain routing, and running the project:

---

# Simgle Subdomain Routing with Next Js

This project implements subdomain routing using Next.js with TypeScript. The app is designed to route different subdomains (`blog.localhost`, `forum.localhost`) to their respective paths.

## Features
- Subdomain routing for `blog` and `forum`.
- Custom middleware for handling subdomain-specific routing.
- Default routing to the root domain for unspecified subdomains.
  
## Setup Instructions

### 1. **Clone the repository**
First, clone the repository to your local machine.

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. **Install dependencies**

Make sure you have `Node.js` installed. Then, install the necessary dependencies using:

```bash
npm install
```

or

```bash
yarn install
```

### 3. **Configure environment variables**

Create a `.env.local` file in the root of the project with the following content:

```plaintext
NEXT_PUBLIC_ROOT_DOMAIN=localhost
NEXT_PUBLIC_BLOG_DOMAIN=blog.localhost
NEXT_PUBLIC_FORUM_DOMAIN=forum.localhost
```

- `NEXT_PUBLIC_ROOT_DOMAIN`: The root domain (for development, use `localhost`).
- `NEXT_PUBLIC_BLOG_DOMAIN`: Subdomain for the blog (e.g., `blog.localhost`).
- `NEXT_PUBLIC_FORUM_DOMAIN`: Subdomain for the forum (e.g., `forum.localhost`).

> **Note**: These domain values are used to control the subdomain routing behavior. For production, change these values to actual domains.

### 4. **Modify `/etc/hosts` (for local development)**

To test subdomains locally, add the following entries to your `/etc/hosts` file:

```plaintext
127.0.0.1 blog.localhost
127.0.0.1 forum.localhost
127.0.0.1 localhost
```

This step ensures that `blog.localhost` and `forum.localhost` resolve to your local development server (`localhost`).

### 5. **Run the project locally**

Now, you can start your Next.js development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

This will start the server on `http://localhost:3000`.

### 6. **Testing the Subdomains**

Once the app is running, you can test the routing:
- Visit `http://blog.localhost:3000` for the Blog page.
- Visit `http://forum.localhost:3000` for the Forum page.
- Visit `http://localhost:3000` for the root domain.

The middleware will handle subdomain routing and rewrite the paths accordingly.

### 7. **Production Setup**

For production:
- Update the `.env` file with the correct domain values.
- Ensure that the DNS provider is set up with wildcard subdomains for your domain.

### Middleware Logic

- **Subdomain Routing**:
  - If the hostname matches `blog.localhost`, it will redirect to the `/blog` route.
  - If the hostname matches `forum.localhost`, it will redirect to the `/forum` route.
  - If the hostname matches the root domain, it will redirect to the `/` route.
  
- **Default Routing**:
  - If an unsupported subdomain is requested, it will fallback to the root domain (`/`).

### 8. **Build the project for production**

Once you’re ready for production, run the following command to build the project:

```bash
npm run build
```

or

```bash
yarn build
```

After the build is complete, run the production server:

```bash
npm start
```

or

```bash
yarn start
```

Your Next.js app should now be fully functional with subdomain routing in both development and production environments.

---

Let me know if you'd like to add or modify anything else in the README!