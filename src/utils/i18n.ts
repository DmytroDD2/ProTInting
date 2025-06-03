export const SUPPORTED_LOCALES = ['uk', 'cs'] as const;
type Locale = typeof SUPPORTED_LOCALES[number];

interface PageProps {
  uaTitle?: string;
  enTitle?: string;
  description?: Record<Locale, string>;
  canonicalUrl?: Record<Locale, string>;

  image?: string;
  noindex?: boolean;
}

export const generateStaticPaths = (pageProps: PageProps = {}) => {
  return SUPPORTED_LOCALES.map((lang): { params: { lang: Locale }; props: any } => ({
    params: { lang },
    props: {
      lang,
      title: getLocalizedTitle(lang, pageProps),
      description: pageProps.description?.[lang] || getDefaultDescription(lang),
      canonicalUrl: pageProps.canonicalUrl?.[lang] || getDefaultCanonical(lang),
      image: pageProps.image || '/default-social.jpg',
      noindex: pageProps.noindex || false,
      ...pageProps
    }
  }));
};


function getLocalizedTitle(lang: Locale, props: PageProps): string {
  return lang === 'uk' 
    ? props.uaTitle || 'Тонування вікон' 
    : props.enTitle || 'Window Tinting';
}

function getDefaultDescription(lang: Locale): string {
  return lang === 'uk'
    ? 'Професійне тонування вікон. Якісні матеріали.'
    : 'Professional window tinting. High-quality materials.';
}

function getDefaultCanonical(lang: Locale): string {
  const baseUrl = 'https://autotint.com';
  return lang === 'uk' 
    ? `${baseUrl}/uk` 
    : `${baseUrl}/en`;
}


// export const SUPPORTED_LOCALES = ['uk', 'cs'];

// export const generateStaticPaths = (pageProps = {}) => {
//   return SUPPORTED_LOCALES.map(lang => ({
//     params: { lang },
//     props: {
//       title: lang === 'uk'                                      
//         ? `${pageProps.uaTitle || 'Сторінка'}` 
//         : `${pageProps.enTitle || 'Page'}`,
//       ...pageProps                    
//     }                
//   }));
// };