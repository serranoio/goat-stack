export default function Template({ content = '' }) {
  if (content === '') {
    return <p>No content</p>;
  }

  return <p>{content}</p>;
}

