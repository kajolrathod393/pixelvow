export const FALLBACK_IMG = '/images/placeholder.svg';

export function handleImgError(e) {
  const img = e.currentTarget;
  if (img.src.endsWith(FALLBACK_IMG)) return;
  img.src = FALLBACK_IMG;
}
