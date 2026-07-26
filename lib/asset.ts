/**
 * Prefix a /public asset path with the deploy basePath.
 * Next.js prefixes <Link> and next/image automatically, but a plain <img src>
 * to an absolute /public path does not get the basePath, so we add it here.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
