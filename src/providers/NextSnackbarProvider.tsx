"use client";
import { SnackbarProvider } from 'notistack';
import { ReactNode } from 'react';

export default function NextSnackbarProvider({ children }: { children: ReactNode }) {
    return (
        <SnackbarProvider>
            {children}
        </SnackbarProvider>
    );
}
