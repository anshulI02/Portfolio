/** Join class names, skipping falsy values. Tiny stand-in for clsx/cn. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
