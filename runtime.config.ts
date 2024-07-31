export const runtimeConfig = {
  auth: {
    accessToken: {
      secret: process.env.AUTH_ACCESS_TOKEN_SECRET,
      expiresIn: process.env.AUTH_ACCESS_TOKEN_EXPIRES_IN,
    },
    refreshToken: {
      secret: process.env.AUTH_REFRESH_TOKEN_SECRET,
      expiresIn: process.env.AUTH_REFRESH_TOKEN_EXPIRES_IN,
    },
  },
} as const
