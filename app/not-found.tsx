import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <div className="text-8xl font-bold text-slate-100 mb-4" aria-hidden="true">404</div>
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Page Not Found</h1>
      <p className="text-base text-slate-500 mb-8 max-w-sm">
        Sorry, we couldn't find that page. It may have moved or been removed.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="btn-primary">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link href="/free-quote" className="btn-secondary">
          Get a Free Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
