import SignInForm from '@/app/auth/signin/_components/signInForm';
import { Button } from '@/components/ui/button';
import { BACKEND_URL } from '@/lib/constants';
import Link from 'next/link';

const SignInPage = () => {
  return (
    <div className='bg-white p-8 border rounded-md shadow-md w-96 flex flex-col justify-center items-center'>
      <h1 className='text-center text-2xl font-bold mb-4'>Sign In Page</h1>
      {/* PUT SIGNIN FORM HERE */}
      <SignInForm />
      <Link href={'/auth/forgot'}>Forgot Your Password?</Link>
      <Button>
        <a href={`${BACKEND_URL}/auth/google/login`}>Sign In With Google</a>
      </Button>
    </div>
  );
};

export default SignInPage;
