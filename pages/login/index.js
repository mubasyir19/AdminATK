import dynamic from 'next/dynamic';

const LoginPage = dynamic(() => import('@/components/Organism/Login'), { ssr: false });

export default function Login() {
  return <LoginPage />;
}
