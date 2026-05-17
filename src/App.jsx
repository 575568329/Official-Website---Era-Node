import { lazy, Suspense } from 'react';

const CoolShowcasePage = lazy(() => import('./components/CoolShowcasePage'));

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#130f0b]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-orange-300 border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CoolShowcasePage />
    </Suspense>
  );
}
