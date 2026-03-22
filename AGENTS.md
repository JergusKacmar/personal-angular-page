# Project context

## Stack
- Angular 21
- Tailwind CSS

## Conventions
- Prefer Tailwind utility classes for simple styling over custom CSS
- Always use explicit types for callback arguments — avoid implicit `any`

```ts
// correct
items.forEach((item: Item) => { ... });
observable$.subscribe((value: string) => { ... });

// avoid
items.forEach((item) => { ... });
```
