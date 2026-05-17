import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="bg-background flex flex-1 items-center justify-center px-6 py-16">
      <main className="border-border bg-card flex w-full max-w-4xl flex-col gap-12 rounded-3xl border p-8 shadow-sm sm:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-6 text-center sm:text-left">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
            <div className="space-y-4">
              <span className="border-border bg-background text-muted-foreground inline-flex rounded-full border px-3 py-1 text-sm">
                Cypress + next-themes
              </span>
              <h1 className="text-foreground max-w-2xl text-4xl font-semibold tracking-tight">
                Zoriva ma teraz gotową bazę pod testy e2e i przełączanie dark mode.
              </h1>
              <p className="text-muted-foreground max-w-2xl text-lg leading-8">
                Konfiguracja jest przygotowana pod Cypress do testów aplikacji oraz
                next-themes do obsługi jasnego i ciemnego motywu w App Routerze.
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <section className="border-border bg-background rounded-2xl border p-6">
            <h2 className="text-foreground text-lg font-semibold">Testy aplikacji</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-7">
              Dodana konfiguracja Cypress obejmuje uruchomienie testów end-to-end,
              przykładowy scenariusz strony głównej oraz wygodne skrypty do pracy
              lokalnej.
            </p>
          </section>
          <section className="border-border bg-background rounded-2xl border p-6">
            <h2 className="text-foreground text-lg font-semibold">Tryb dark</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-7">
              Motyw jest przełączany po klasie{" "}
              <code className="bg-muted rounded px-1.5 py-0.5">dark</code>, zgodnie z
              obecnym CSS-em projektu, i może korzystać z ustawień systemowych.
            </p>
          </section>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="bg-foreground text-background flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors hover:bg-[#383838] md:w-39.5 dark:hover:bg-[#ccc]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 md:w-39.5 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
