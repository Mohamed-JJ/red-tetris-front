import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import './utils'
import { api } from './utils'
 
export async function middleware(request: NextRequest) {
    // // Only run middleware logic for protected routes
    const isProtectedRoute = request.nextUrl.pathname.startsWith('/dashboard')
    console.log("in middleware")
    if (!isProtectedRoute) {
        // Allow access to public routes (like /, /login, etc.)
        return NextResponse.next()
    }
    
    const rawData = request.cookies.get('data')?.value
    
    if (!rawData) {
        console.log("No data in cookie storage - redirecting to login")
        return NextResponse.redirect(new URL('/', request.url))
    }

    const parsedData = JSON.parse(rawData)
    console.log("token", parsedData.accessToken)
    try {
        const res = await api.get('auth/canAccess', {headers: {Authorization: `bearer ${parsedData.accessToken}`}})
        console.log(res.data)
    } catch (error: unknown) {
        Router.push('/')
    }

    // try {
    //     const token = JSON.parse(rawData)
    //     console.log("Token object:", token)
        
    //     if (token.accessToken) {
    //         console.log("Valid token found:", token.accessToken)
    //         const res = await api.get('auth/canAccess')
            
    //         // Allow access to protected route
    //         return NextResponse.next()
    //     } else {
    //         console.log("No access token found - redirecting to login")
    //         return NextResponse.redirect(new URL('/', request.url))
    //     }
    // } catch (error) {
    //     console.error("Error parsing token:", error)
    //     return NextResponse.redirect(new URL('/', request.url))
    // }
}
 
export const config = {
    // Run middleware on protected routes only
    matcher: ['/dashboard/:path*']
}