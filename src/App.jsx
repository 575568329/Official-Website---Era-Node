import { lazy, Suspense } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';

// 非首屏组件懒加载
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Stats = lazy(() => import('./components/Stats'));
const Products = lazy(() => import('./components/Products'));
const Solutions = lazy(() => import('./components/Solutions'));
const Advantages = lazy(() => import('./components/Advantages'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

// 加载占位组件
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen"><ThemeSwitcher />
      <Suspense fallback={<LoadingFallback />}>
        <Navbar />
      </Suspense>
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Products />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Solutions />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Advantages />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

