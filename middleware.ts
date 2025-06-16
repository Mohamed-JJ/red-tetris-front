// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import './utils';
// import { api } from './utils';

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   console.log("pathname", pathname)
//   // Handle room/player pattern (exactly 2 segments)
//   const segments = pathname.split('/').filter(Boolean);
//  if (segments.length === 2) {
//     const [room, playername] = segments;
//     console.log('Room:', room, 'Player:', playername);
//     return NextResponse.redirect(new URL('/', request.url))
//   }

//   // // Only run middleware logic for protected routes
//   const isProtectedRoute = request.nextUrl.pathname.startsWith('/dashboard');
//   console.log('in middleware');
//   if (!isProtectedRoute) {
//     return NextResponse.next();
//   }

//   const rawData = request.cookies.get('data')?.value;

//   if (!rawData) {
//     console.log('No data in cookie storage - redirecting to login');
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   const parsedData = JSON.parse(rawData);
//   console.log('token', parsedData.accessToken);
//   try {
//     const res = await api.get('auth/canAccess', {
//       headers: { Authorization: `bearer ${parsedData.accessToken}` },
//     });
//     console.log(res.data);
//   } catch (error: unknown) {
//     Router.push('/');
//   }
//   // try {
//   //     const token = JSON.parse(rawData)
//   //     console.log("Token object:", token)

//   //     if (token.accessToken) {
//   //         console.log("Valid token found:", token.accessToken)
//   //         const res = await api.get('auth/canAccess')

//   //         // Allow access to protected route
//   //         return NextResponse.next()
//   //     } else {
//   //         console.log("No access token found - redirecting to login")
//   //         return NextResponse.redirect(new URL('/', request.url))
//   //     }
//   // } catch (error) {
//   //     console.error("Error parsing token:", error)
//   //     return NextResponse.redirect(new URL('/', request.url))
//   // }
// }

// export const config = {
//   matcher: [
//     '/dashboard/:path*',
//     '/:path*',
//   ],
// };

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import './utils';
import { api } from './utils';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log('pathname', pathname);
  let flag = false;
  // Handle dashboard routes first (protected routes)
  if (pathname.startsWith('/dashboard')) {
    flag = true;
    console.log('Accessing protected dashboard route');
  }

  // Handle room/player pattern (exactly 2 segments, excluding known routes)
  const segments = pathname.split('/').filter(Boolean);

  if (
    segments.length === 2 &&
    !segments[0].startsWith('_next') &&
    !segments[0].startsWith('api') &&
    segments[0] !== 'dashboard' &&
    segments[0] !== 'favicon.ico'
  ) {
    flag = true;
    const [room, playername] = segments;
    console.log('Room:', room, 'Player:', playername);
  }

  if (flag) {
    const rawData = request.cookies.get('data')?.value;

    if (!rawData) {
      console.log('No data in cookie storage - redirecting to login');
      return NextResponse.redirect(new URL('/', request.url));
    }

    try {
      const parsedData = JSON.parse(rawData);
      console.log('token', parsedData.accessToken);

      const res = await api.get('auth/canAccess', {
        headers: { Authorization: `bearer ${parsedData.accessToken}` },
      });

      console.log('Auth success:', res.data);
      return NextResponse.next(); // Allow access to dashboard
    } catch (error: unknown) {
      console.error('Auth failed:', error);
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // For all other routes, proceed normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Catch dashboard routes
    '/dashboard/:path*',
    // Catch most routes except Next.js internals and static files
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
