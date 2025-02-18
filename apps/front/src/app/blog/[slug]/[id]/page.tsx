import { fetchPostById } from '@/lib/actions/postAction';
import Image from 'next/image';
import SanitizedContent from '@/app/blog/[slug]/[id]/_components/SanitizedContent';

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const postId = (await params).id;
  const post = await fetchPostById(+postId);

  console.log(post);

  return (
    <main className='container mx-auto px-4 py-8 mt-16'>
      <h1 className='text-4xl font-bold mb-4 text-slate-700'>{post.title}</h1>
      <p className='text-slate-500 text-sm mb-4'>
        By {post.author.name} | {new Date(post.createdAt).toLocaleDateString()}
      </p>

      <div className='relative w-80 h-60'>
        <Image
          className='rounded-md object-cover'
          alt={post.title}
          fill
          src={post.thumbnail ?? '/no-image.png'}
        />
      </div>

      <SanitizedContent content={post.content} />
    </main>
  );
};

export default Page;
