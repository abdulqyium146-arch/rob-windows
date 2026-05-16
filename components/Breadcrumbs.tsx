import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const all = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        {all.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-1"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-300 shrink-0" aria-hidden="true" />}
            {index === 0 && <Home className="h-3.5 w-3.5 text-slate-400 shrink-0" aria-hidden="true" />}
            {item.href && index < all.length - 1 ? (
              <Link
                href={item.href}
                className="text-slate-500 hover:text-brand-600 transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-slate-900 font-medium" itemProp="name" aria-current="page">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
