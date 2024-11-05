import HomePage from '@/components/home';
import { getHomeApi } from '@/utils/api';

export default async function Home() {
  const data = await getHomeApi();

  console.log(data, 'test client');
  return (
    <>
      <HomePage datas={data} />
    </>
  );
}
