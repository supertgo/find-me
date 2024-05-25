export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/home/:path*','/job/:path*', '/jobs/:path*', '/config/:path*'],
};
