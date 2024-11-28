import Link from 'next/link';

const BlogList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>
            <a>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;