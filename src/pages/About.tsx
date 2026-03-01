import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t("about.title")} description={t("about.description")} />

      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-proxio-text-main text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t("about.title")}
            </h1>
            <p className="text-proxio-text-muted mt-6 text-lg">
              {t("about.description")}
            </p>
          </div>

          <div className="flex justify-center md:w-1/2">
            {/* <img
              src={aboutIllustration}
              alt={t("about.title")}
              className="w-72 max-w-md opacity-90 md:w-full"
            /> */}
          </div>
        </div>
      </main>
    </>
  );
}
