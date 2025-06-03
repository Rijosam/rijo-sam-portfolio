/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_POST_HOG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
