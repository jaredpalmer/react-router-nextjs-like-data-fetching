# SSR Experiments with React Router 4

## Install

Clone the repo and install deps...

```
git clone ...
cd ssr-demo
yarn install & yarn start
```

## What is going on here?

This little app demonstrates some cool SSR stuff you can do with React Router 4:

- Next.js-like data fetching using an HoC, static route config, and react-router-config. 
- "Client-only" routes...this translates to partial/selective SSR (because Routes are just components :wink:)
- Using RR4's `statusContext` to set HTTP status codes isomorphically.
