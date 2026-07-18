import { site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-content px-5 py-6 md:px-8">
        <p className="text-center font-mono text-xs text-ink-faint">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
