// "use client";
// import "./globals.css";

// import {  IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
// import { IntlProvider } from "next-intl";
// import arMessages from "@/public/dictionaries/ar.json";
// import enMessages from "@/public/dictionaries/en.json";
// import React, { ReactNode, useContext, useState, createContext } from "react";
// import Head from "next/head";
// type Messages = Record<string, string>;

// const ibm_plex_arabic = IBM_Plex_Sans_Arabic({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin", "arabic"],
//   display: "swap",
// });

// const ibm_plex_sans = IBM_Plex_Sans({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

// const LocaleContext = createContext({
//   currentLocale: "ar",
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   setLocale: (locale: string) => { },
// });

// export const useLocale = () => useContext(LocaleContext);

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const [currentLocale,setLocale ] = useState("ar");

//   console.log(setLocale);

//   const messages: Messages = currentLocale === "en" ? (enMessages as unknown as Messages) : (arMessages as unknown as Messages)
//   const fontClass = currentLocale === "en" ? ibm_plex_sans.className : ibm_plex_arabic.className;

//   return (
//     <LocaleContext.Provider value={{ currentLocale, setLocale}}>
//       <html lang={currentLocale} dir={currentLocale === "ar"? "rtl" : "ltr"}>
//         <Head>
//           {/* Facebook Domain Verification */}
//           <meta name="facebook-domain-verification" content="kkrd506y1ao3crgzgm7wxpi08nhfsv" />
//         </Head>
//         <body
//           cz-shortcut-listen="false"

//           className={`${fontClass} text-sm antialiased bg-primary-10 text-primary-100 min-h-screen flex flex-col relative`}>

//           <IntlProvider locale={currentLocale} messages={messages}>

//             {children}
//           </IntlProvider>
//         </body>
//       </html>
//     </LocaleContext.Provider>

//   );
// }

"use client";
import "./globals.css";
import { IBM_Plex_Sans_Arabic, IBM_Plex_Sans } from "next/font/google";
import { IntlProvider } from "next-intl";
import enMessages from "@/public/dictionaries/en.json";
import arMessages from "@/public/dictionaries/ar.json";
import React, {
  useState,
  useEffect,
  ReactNode,
  createContext,
  useContext,
} from "react";
import Head from "next/head";

type Messages = Record<string, string>;

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const LocaleContext = createContext({
  currentLocale: "ar",
  setLocale: (_locale: string) => {},
});

export const useLocale = () => useContext(LocaleContext);

export default function RootLayout({ children }: { children: ReactNode }) {
  const [currentLocale, setLocale] = useState<string | null>(null);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "ar";
    setLocale(savedLocale);
  }, []);

  const updateLocale = (locale: string) => {
    setLocale(locale);
    localStorage.setItem("locale", locale);
  };

  if (!currentLocale) {
    return null;
  }

  const messages: Messages =
    currentLocale === "en"
      ? (enMessages as unknown as Messages)
      : (arMessages as unknown as Messages);

  const fontClass =
    currentLocale === "en" ? ibmPlexSans.className : ibmPlexArabic.className;

  return (
    <LocaleContext.Provider value={{ currentLocale, setLocale: updateLocale }}>
      <html
        lang={currentLocale}
        dir={currentLocale === "ar" ? "rtl" : "ltr"}
        suppressHydrationWarning
      >
        <Head>
          <meta
            name="facebook-domain-verification"
            content="kkrd506y1ao3crgzgm7wxpi08nhfsv"
          />
        </Head>
        <body
          className={`${fontClass} text-sm antialiased bg-primary-10 text-primary-100 min-h-screen flex flex-col relative`}
        >
          <IntlProvider locale={currentLocale} messages={messages}>
            {children}
          </IntlProvider>
        </body>
      </html>
    </LocaleContext.Provider>
  );
}
