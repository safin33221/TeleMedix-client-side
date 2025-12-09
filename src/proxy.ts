import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';

type UserRole = "ADMIN" | "DOCTOR" | "PATIENT";

type RoutesConfig = {
    exact: string[];
    patterns: RegExp[];
};

const authRoute = ['/login', '/register', '/forget-password', '/reset-password'];

const commonProtectedRoute: RoutesConfig = {
    exact: ['/my-profile', '/setting'],
    patterns: []
};

const doctorProtectedRoute: RoutesConfig = {
    exact: [],
    patterns: [/^\/doctor/]
};

const adminProtectedRoute: RoutesConfig = {
    exact: [],
    patterns: [/^\/admin/]
};

const patientProtectedRoute: RoutesConfig = {
    exact: [],
    patterns: [/^\/dashboard/]
};

const isAuthRoute = (pathName: string) => {
    return authRoute.some(route => route === pathName);
};

const isRouteMatches = (pathName: string, routes: RoutesConfig) => {
    if (routes.exact.includes(pathName)) return true;
    return routes.patterns.some(pattern => pattern.test(pathName));
};

const getRouteOwner = (
    pathName: string
): "ADMIN" | "DOCTOR" | "PATIENT" | "COMMON" | null => {
    if (isRouteMatches(pathName, adminProtectedRoute)) return "ADMIN";
    if (isRouteMatches(pathName, doctorProtectedRoute)) return "DOCTOR";
    if (isRouteMatches(pathName, patientProtectedRoute)) return "PATIENT";
    if (isRouteMatches(pathName, commonProtectedRoute)) return "COMMON";
    return null;
};

const getDefaultDashboardRoute = (role: UserRole) => {
    switch (role) {
        case "ADMIN":
            return '/admin/dashboard';
        case "DOCTOR":
            return '/doctor/dashboard';
        case "PATIENT":
            return '/dashboard';
        default:
            return '/login';
    }
};

export async function proxy(request: NextRequest) {
    const pathName = request.nextUrl.pathname;
    const cookieStore = await cookies();
    const accessToken = request.cookies.get("accessToken")?.value;

    let userRole: UserRole | null = null;

    if (accessToken) {
        try {
            const verified = jwt.verify(
                accessToken,
                process.env.jwt_SECRET as string
            ) as JwtPayload;

            if (!verified || typeof verified === "string") {
                cookieStore.delete("accessToken");
                cookieStore.delete("refreshToken");
                return NextResponse.redirect(new URL("/login", request.url));
            }

            userRole = verified.role as UserRole;
        } catch {
            cookieStore.delete("accessToken");
            cookieStore.delete("refreshToken");
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    const routeOwner = getRouteOwner(pathName);
    const authPath = isAuthRoute(pathName);

    // Logged in users must not see login/register pages
    if (accessToken && authPath) {
        return NextResponse.redirect(
            new URL(getDefaultDashboardRoute(userRole as UserRole), request.url)
        );
    }

    // Protected route but no token → redirect with redirect param
    if (routeOwner && !accessToken) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathName);
        return NextResponse.redirect(loginUrl);
    }

    // Public route
    if (routeOwner === null) {
        return NextResponse.next();
    }

    // Common protected route (role not required)
    if (routeOwner === "COMMON") {
        return NextResponse.next();
    }

    // Role-based authorization
    if (
        (routeOwner === "ADMIN" ||
            routeOwner === "PATIENT" ||
            routeOwner === "DOCTOR") &&
        userRole !== routeOwner
    ) {
        return NextResponse.redirect(
            new URL(getDefaultDashboardRoute(userRole as UserRole), request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
    ],
};
