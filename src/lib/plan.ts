import plan from '../data/plan.json';

export type Plan = typeof plan;
export type Week = Plan['weeks'][number];
export type Recipe = Plan['recipes'][number];

export { plan };

/** Color de acento por semana y el color de texto legible encima. */
export const WEEK_TONE: Record<number, { bg: string; on: string; soft: string; name: string }> = {
  1: { bg: 'var(--tomate)', on: 'var(--ink)', soft: '#FCD9CF', name: 'tomate' },
  2: { bg: 'var(--mostaza)', on: 'var(--ink)', soft: '#FDEBC0', name: 'mostaza' },
  3: { bg: 'var(--palta)', on: 'var(--ink)', soft: '#D7EBCC', name: 'palta' },
  4: { bg: 'var(--azul)', on: '#FFFFFF', soft: '#D3E1FA', name: 'azul' },
};

export const CAT_TONE: Record<string, { bg: string; on: string; soft: string }> = {
  almuerzos: { bg: 'var(--tomate)', on: 'var(--ink)', soft: '#FCD9CF' },
  cenas: { bg: 'var(--azul)', on: '#FFFFFF', soft: '#D3E1FA' },
  desayunos: { bg: 'var(--mostaza)', on: 'var(--ink)', soft: '#FDEBC0' },
  dulces: { bg: 'var(--fresa)', on: 'var(--ink)', soft: '#FBDCE6' },
  goodfoodpapi: { bg: 'var(--palta)', on: 'var(--ink)', soft: '#D7EBCC' },
};

export const catLabel = (id: string) => plan.categories.find((c) => c.id === id)?.label ?? id;

export const toneStyle = (t: { bg: string; on: string; soft: string }) =>
  `--tone:${t.bg};--on-tone:${t.on};--tone-soft:${t.soft}`;

export const recipeBySlug = (slug: string) => plan.recipes.find((r) => r.slug === slug);

export const base = (p: string) => {
  const b = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${b}${p}`;
};
