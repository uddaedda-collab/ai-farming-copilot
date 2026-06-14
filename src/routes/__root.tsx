import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#16A34A" },
      { title: "AI Farming Copilot — AI Crop, Pest & Irrigation Intelligence" },
      {
        name: "description",
        content:
          "AI Farming Copilot helps farmers detect crop diseases, optimize irrigation, predict yields, and grow more profitably with AI built for every farm.",
      },
      { name: "author", content: "AI Farming Copilot" },
      { property: "og:site_name", content: "AI Farming Copilot" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "AI Farming Copilot — AI Crop, Pest & Irrigation Intelligence" },
      { property: "og:description", content: "AI Farming Copilot empowers farmers with AI to detect diseases, optimize resources, and boost crop yields." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Farming Copilot — AI Crop, Pest & Irrigation Intelligence" },
      { name: "twitter:description", content: "AI Farming Copilot empowers farmers with AI to detect diseases, optimize resources, and boost crop yields." },
      { name: "description", content: "AI Farming Copilot empowers farmers with AI to detect diseases, optimize resources, and boost crop yields." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AI Farming Copilot",
          url: "https://aifarmingcopilot.space",
          email: "admin@aifarmingcopilot.space",
          telephone: "+91-8279201101",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-8279201101",
            email: "admin@aifarmingcopilot.space",
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["en", "hi"],
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Innovation Tower, Sector 62",
            addressLocality: "Noida",
            addressRegion: "Uttar Pradesh",
            postalCode: "201309",
            addressCountry: "IN",
          },
          description:
            "AI Farming Copilot helps farmers detect crop diseases, optimize irrigation, identify pests, and predict yields using AI.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('afc-theme')||'system';var d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="flex min-h-dvh flex-col">
          <Header />
          <main id="main" className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
