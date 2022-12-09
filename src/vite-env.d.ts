/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTENTFUL_PREVIEW_TOKEN: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
