import Galeria from '@/components/Galeria';
import { getImages } from '@/lib/actions';

export const dynamic = 'force-dynamic'


export default async function Home() {
  const images = await getImages();
  console.log(images);

  return (
    <main>
      <Galeria images={images}/>
    </main >
  )
}
