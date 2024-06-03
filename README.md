Welcome to the goat stack.

## Where the fun begins

- [React](https://react.dev/)
  - [Vite](https://vitejs.dev/)
  - [Vitest](https://vitest.dev/)
  - [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
    - [Course taken](https://members.codewithmosh.com/courses/complete-react-testing-course/lectures/52312452)
  - [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
  - [Shadcn](https://ui.shadcn.com/docs)
    - [Theme Generator](https://themes.fkaya.dev/)
  - [Tailwindcss](https://tailwindcss.com/docs/installation)
- [Supabase](https://supabase.com/)
- [posthog](https://posthog.com/pricing)
- PWA
  - [Caching](https://developer.chrome.com/docs/workbox/caching-strategies-overview)
  - [PWABuilder](https://www.pwabuilder.com/)
  - [Workbox](https://developer.chrome.com/docs/workbox/modules/workbox-sw)
    - Using their libraries, we can abstract away the route registration + the caching strategy
- Internationalization
  - [i18next](https://react.i18next.com/latest/i18nextprovider)
  - [i18nextreact](https://react.i18next.com/latest/i18nextprovider)
- Linting
  - ESLint ?
  - Prettier

### Backend

- Dockerized Golang webserver
  - Fly.io

## Requirements

[Shadcn requires for you to use their CLI to install components](https://ui.shadcn.com/docs/installation/vite).

`npx shadcn-ui@latest add button`

Add the PWABuilder Studio extension from VSCode. You will need it to verify your PWA configuration.

Download CLI for creating react files

## Needs

- AI

## TO-DO

- For the end: See if you can deploy it to netlify so it can be packaged

### Patterns

#### Stores

For every store created, there is a slight delay for hydration. You have to implement a hydration check for that.

