import Script from "next/script";
import { FC } from "react";

// Your Google Tag Manager Container ID
const GTM_ID = "GTM-XXXXXXX";

const Tag: FC = () => {
  return (
    <>
      <Script id="GTMDataLayer" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || []
window.dataLayer.push({
  'gtm.start': new Date().getTime(),
  event: 'gtm.js',
})
    `}
      </Script>
      <Script
        async
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        strategy="afterInteractive"
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
};

export default Tag;
