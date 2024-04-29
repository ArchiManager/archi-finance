/**
 * An Array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
]

/**
 * An Array of routes that are used for API authentication
 * These routes do not require authentication 
 * They are public api routes
 * @type {string[]}
 */
export const apiRoutes = [
    "/api/user",
]

/**
 * An Array of routes that are used for authentication
 * These routes will redirect logged in users to / main page
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication 
 * purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after a successful login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";