import SignupForm from '@/app/auth/signup/_components/signUpForm';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <div className='bg-white p-8 rounded-md shadow-md w-96 flex flex-col justify-center items-center'>
      <h2 className='text-center text-2xl font-bold mb-3'>Sign Up Page</h2>
      <SignupForm />
      <div>
        <p>Already have an account?</p>
        <Link className='underline' href='/auth/signin'>
          signin
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
