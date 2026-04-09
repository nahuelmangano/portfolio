import { SiteHeader } from "@/components/site-header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
      <footer className="mx-auto max-w-5xl px-4 pb-10 text-sm text-white/50">
        © {new Date().getFullYear()} Nahuel Mangano — Built with Next.js
      </footer>
    </>
  );
}
