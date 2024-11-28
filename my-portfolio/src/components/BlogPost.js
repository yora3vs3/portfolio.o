import { useEffect, useState } from 'react';
import remark from 'remark';
import html from 'remark-html';

const BlogPost = ({ post }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const processMarkdown = async () => {
      const processedContent = await remark().use(html).process(post.content);
      setContent(processedContent.toString());
    };

    processMarkdown();
  }, [post.content]);

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogPost;