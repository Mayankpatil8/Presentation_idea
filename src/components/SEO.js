import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Microcraft Engineering';
const BASE_URL = 'https://microcraft.in';
const DEFAULT_OG_IMAGE = 'https://microcraft.in/images/logo3.png';

/**
 * SEO component — safely manages <title>, <meta>, <link rel="canonical">,
 * and Open Graph / Twitter Card tags for each page via react-helmet-async.
 *
 * Props:
 *   title       — page title (do NOT include site name, it's appended automatically)
 *   description — meta description (≤155 chars recommended)
 *   canonical   — canonical path, e.g. '/about' (base URL prepended automatically)
 *   ogImage     — Open Graph image URL (absolute). Defaults to logo.
 *   noIndex     — set true to add noindex (e.g. thank-you pages)
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
