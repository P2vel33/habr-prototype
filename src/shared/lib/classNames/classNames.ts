type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string {
    if (Object.entries(mods).length === 0 && additional.length === 0) {
        return `${cls}`;
    }
    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key),
    ]
        .join(" ")
        .trimEnd();
}
