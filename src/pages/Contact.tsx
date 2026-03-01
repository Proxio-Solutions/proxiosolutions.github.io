import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t("contact.title")} description={t("contact.description")} />

      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* <img
            src={contactIllustration}
            alt={t("contact.title")}
            className="mb-10 w-64 opacity-90 md:w-80"
          /> */}

          <h1 className="text-proxio-text-main text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t("contact.title")}
          </h1>
          <p className="text-proxio-text-muted mt-6 max-w-2xl text-lg">
            {t("contact.description")}
          </p>
        </div>
      </main>
    </>
  );
}
