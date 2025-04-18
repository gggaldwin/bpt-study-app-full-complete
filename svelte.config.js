import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: '200.html'  // Important for Vercel to handle SPA routing
    }),
    prerender: {
      entries: ['*']
    }
  }
};
