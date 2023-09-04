import dynamic from 'next/dynamic';

const DashboardPage = dynamic(() => import('@/components/Organism/Dashboard'), { ssr: false });

export default function Home() {
  return <DashboardPage />;
}
