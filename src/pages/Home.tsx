import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">{t("home.welcome")}</span>
          <span className="text-proxio-accent block">Proxio Solutions</span>
        </h1>
        <p className="text-proxio-text-muted mx-auto mt-3 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          {t("home.description")}
        </p>
        <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              to="/contact"
              className="text-proxio-darker bg-proxio-accent hover:bg-proxio-accent-hover flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-bold transition-colors md:py-4 md:text-lg"
            >
              {t("home.getStarted")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
