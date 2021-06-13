import NewsItem from '@components/NewsItem';
import { API_URL } from '@config/index';

export default function index({ nw }) {
  return (
    <div>
      <NewsItem nw={nw} />
    </div>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/items/${id}`);
  const news = await res.json();

  return {
    props: {
      nw: news,
    },
  };
}
