import NewsItem from '@components/NewsItem';
import { API_URL } from '@config/index';

export default function index({ news }) {
  return (
    <div>
      <NewsItem nw={news[4]} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api`);
  const news = await res.json();

  return {
    props: { news },
  };
}
