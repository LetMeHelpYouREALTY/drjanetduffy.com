'use client';

import { useEffect } from 'react';

const STYLE_ID = 'realscout-image-constraints';

/** Keeps MLS listing photos inside RealScout shadow roots from rendering at full resolution. */
export function RealScoutImageConstraints() {
  useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      realscout-office-listings {
        --rs-grid-columns: 3;
        --rs-card-hover-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
        width: 100%;
        max-width: 100%;
        display: block;
        box-sizing: border-box;
      }
      @media (max-width: 768px) {
        realscout-office-listings {
          --rs-grid-columns: 2;
        }
      }
      @media (max-width: 480px) {
        realscout-office-listings {
          --rs-grid-columns: 1;
        }
      }
      realscout-simple-search,
      realscout-advanced-search {
        width: 100%;
        max-width: 100%;
        display: block;
      }
    `;
    document.head.appendChild(style);

    function constrainImages() {
      document.querySelectorAll('realscout-office-listings').forEach((host) => {
        const shadow = (host as HTMLElement & { shadowRoot?: ShadowRoot | null }).shadowRoot;
        if (!shadow) return;

        shadow.querySelectorAll('img').forEach((img) => {
          img.style.maxWidth = '100%';
          img.style.width = '100%';
          img.style.height = 'auto';
          img.style.maxHeight = '220px';
          img.style.objectFit = 'cover';
        });
      });
    }

    constrainImages();
    const observer = new MutationObserver(constrainImages);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
