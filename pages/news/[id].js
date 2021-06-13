import NewsItem from '@components/NewsItem';
import hackerContext from '@context/hackerContext';

import { useEffect, useContext } from 'react';

export default function index({ id }) {
  const { currentNews, addCurrentNews } = useContext(hackerContext);
  useEffect(() => {
    addCurrentNews(id);
  }, []);
  return (
    <div>
      <NewsItem />
    </div>
  );
}

export async function getServerSideProps({ query: { id } }) {
  return {
    props: {
      id,
    },
  };
}
