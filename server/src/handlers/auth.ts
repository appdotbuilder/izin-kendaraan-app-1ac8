import { type LoginInput, type LoginResponse } from '../schema';

export async function login(input: LoginInput): Promise<LoginResponse> {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is to authenticate user with NIK and password,
    // verify credentials against database, update FCM token if provided,
    // and return user data with authentication token.
    return Promise.resolve({
        user: {
            id: 0,
            nik: input.nik,
            name: "Placeholder User",
            role: "Karyawan" as const,
            fcm_token: input.fcm_token || null,
            created_at: new Date()
        },
        token: "placeholder_jwt_token"
    });
}

export async function verifyToken(token: string): Promise<{ userId: number; role: string } | null> {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is to verify JWT token and return user information
    // for authorization purposes in protected routes.
    return Promise.resolve({ userId: 1, role: "Karyawan" });
}