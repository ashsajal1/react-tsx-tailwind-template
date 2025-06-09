import { Helmet } from 'react-helmet-async';
import React from 'react';

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterImage?: string;
  robots?: string;
  favicon?: string;
  children?: React.ReactNode;
};

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  ogTitle,
  ogDescription,
  twitterCard = 'summary_large_image',
  twitterSite,
  twitterCreator,
  twitterImage,
  robots = 'index, follow',
  favicon = '/favicon.ico',
  children,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    {canonical && <link rel="canonical" href={canonical} />}
    <meta name="robots" content={robots} />
    {favicon && <link rel="icon" href={favicon} />}
    {/* Open Graph */}
    <meta property="og:type" content={ogType} />
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />
    {ogImage && <meta property="og:image" content={ogImage} />}
    {canonical && <meta property="og:url" content={canonical} />}
    {/* Twitter Card */}
    <meta name="twitter:card" content={twitterCard} />
    {twitterSite && <meta name="twitter:site" content={twitterSite} />}
    {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
    <meta name="twitter:title" content={ogTitle || title} />
    <meta name="twitter:description" content={ogDescription || description} />
    {twitterImage && <meta name="twitter:image" content={twitterImage} />}
    {children}
  </Helmet>
);

export default Seo; 