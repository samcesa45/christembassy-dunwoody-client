'use client';
import { queryConfig } from '@/lib/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { useState } from 'react';
import MainErrorFallback from '@/ui/errors/main';
import { AuthLoader } from '@/lib/auth';
import { Spinner } from '@/ui/spinner';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <AuthLoader
          renderLoading={() => (
            <div className="flex relative h-screen w-full max-w-[1920px] mx-auto items-center justify-center">
              <Spinner />
            </div>
          )}
        >
          {children}
        </AuthLoader>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
