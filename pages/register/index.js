import dynamic from 'next/dynamic';

const RegisterPage = dynamic(() => import('@/components/Organism/Register'), { ssr: false });

export default function Register() {
  return <RegisterPage />;
}
