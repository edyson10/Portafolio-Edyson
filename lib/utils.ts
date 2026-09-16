type ClassValue = string | number | null | boolean | undefined;

/** Combina clases condicionalmente, filtrando valores falsy. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDateRange(start: string, end: string | null): string {
  const format = (value: string) => {
    const [year, month] = value.split("-");
    const date = new Date(Number(year), Number(month) - 1);
    return date.toLocaleDateString("es-AR", { month: "short", year: "numeric" });
  };
  return `${format(start)} — ${end ? format(end) : "presente"}`;
}
