/// <reference types="astro/client" />
interface ImportMetaEnv {
	readonly CR_PAT: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
