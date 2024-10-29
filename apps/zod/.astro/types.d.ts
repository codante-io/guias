declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"00-intro/01-Introdução.md": {
	id: "00-intro/01-Introdução.md";
  slug: "00-intro/01-introdução";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"00-intro/02-o-que-vamos-aprender.md": {
	id: "00-intro/02-o-que-vamos-aprender.md";
  slug: "00-intro/02-o-que-vamos-aprender";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"00-intro/03-pre-requisitos.md": {
	id: "00-intro/03-pre-requisitos.md";
  slug: "00-intro/03-pre-requisitos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"00-intro/04-repositorio.md": {
	id: "00-intro/04-repositorio.md";
  slug: "00-intro/04-repositorio";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"01-intro-zod/01-o-que-e-zod.md": {
	id: "01-intro-zod/01-o-que-e-zod.md";
  slug: "01-intro-zod/01-o-que-e-zod";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"01-intro-zod/02-por-que-zod-e-util.md": {
	id: "01-intro-zod/02-por-que-zod-e-util.md";
  slug: "01-intro-zod/02-por-que-zod-e-util";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"01-intro-zod/03-schemas.md": {
	id: "01-intro-zod/03-schemas.md";
  slug: "01-intro-zod/03-schemas";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"01-intro-zod/04-tipos-suportados.md": {
	id: "01-intro-zod/04-tipos-suportados.md";
  slug: "01-intro-zod/04-tipos-suportados";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"01-intro-zod/05-exemplos-validacao.md": {
	id: "01-intro-zod/05-exemplos-validacao.md";
  slug: "01-intro-zod/05-exemplos-validacao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"02-setup-zod/01-instalando-zod.md": {
	id: "02-setup-zod/01-instalando-zod.md";
  slug: "02-setup-zod/01-instalando-zod";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"02-setup-zod/02-configurando-o-projeto.md": {
	id: "02-setup-zod/02-configurando-o-projeto.md";
  slug: "02-setup-zod/02-configurando-o-projeto";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"02-setup-zod/03-entendendo-nossos-schemas.md": {
	id: "02-setup-zod/03-entendendo-nossos-schemas.md";
  slug: "02-setup-zod/03-entendendo-nossos-schemas";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"02-setup-zod/04-validacao-campos-obrigatorios.md": {
	id: "02-setup-zod/04-validacao-campos-obrigatorios.md";
  slug: "02-setup-zod/04-validacao-campos-obrigatorios";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"03-basic-usage/01-tipos-basicos-validacoes-zod.md": {
	id: "03-basic-usage/01-tipos-basicos-validacoes-zod.md";
  slug: "03-basic-usage/01-tipos-basicos-validacoes-zod";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"03-basic-usage/02-tipos-primitivos.md": {
	id: "03-basic-usage/02-tipos-primitivos.md";
  slug: "03-basic-usage/02-tipos-primitivos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"03-basic-usage/03-campos-opcionais-e-nulaveis.md": {
	id: "03-basic-usage/03-campos-opcionais-e-nulaveis.md";
  slug: "03-basic-usage/03-campos-opcionais-e-nulaveis";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"03-basic-usage/04-metodos-validacao-embutidos.md": {
	id: "03-basic-usage/04-metodos-validacao-embutidos.md";
  slug: "03-basic-usage/04-metodos-validacao-embutidos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"04-advanced-features/01-arrays-enums-unions.md": {
	id: "04-advanced-features/01-arrays-enums-unions.md";
  slug: "04-advanced-features/01-arrays-enums-unions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"04-advanced-features/02-compondo-schemas.md": {
	id: "04-advanced-features/02-compondo-schemas.md";
  slug: "04-advanced-features/02-compondo-schemas";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"04-advanced-features/03-mensagens-de-erro.md": {
	id: "04-advanced-features/03-mensagens-de-erro.md";
  slug: "04-advanced-features/03-mensagens-de-erro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"05-react-forms/01-intro.md": {
	id: "05-react-forms/01-intro.md";
  slug: "05-react-forms/01-intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"05-react-forms/02-zod-react-hook-forms-formik.md": {
	id: "05-react-forms/02-zod-react-hook-forms-formik.md";
  slug: "05-react-forms/02-zod-react-hook-forms-formik";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"06-api-validation/00-parsing-validacao-apis.md": {
	id: "06-api-validation/00-parsing-validacao-apis.md";
  slug: "06-api-validation/00-parsing-validacao-apis";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"06-api-validation/01-estruturas-dados-tipos-corretos.md": {
	id: "06-api-validation/01-estruturas-dados-tipos-corretos.md";
  slug: "06-api-validation/01-estruturas-dados-tipos-corretos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"07-ts-projects/01-garantindo-segurança-tipos.md": {
	id: "07-ts-projects/01-garantindo-segurança-tipos.md";
  slug: "07-ts-projects/01-garantindo-segurança-tipos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"07-ts-projects/02-usando-infer.md": {
	id: "07-ts-projects/02-usando-infer.md";
  slug: "07-ts-projects/02-usando-infer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
