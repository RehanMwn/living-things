import { useRouter } from 'next/router';

const ArticlePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>{slug}</h1>
      {/* Here you can fetch and display the article content based on the slug */}
    </div>
  );
};

export default ArticlePage;