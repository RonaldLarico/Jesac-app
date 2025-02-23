// ✅ app/[locale]/layout.tsx
"use client";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

async function getMessages(locale: string) {
  try {
    if (!locale) throw new Error("❌ El locale no se proporcionó.");
    return (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.error("❌ Error al cargar el archivo de idioma:", error);
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(params.locale);

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages} timeZone="America/Lima">
      {children}
    </NextIntlClientProvider>
  );
}