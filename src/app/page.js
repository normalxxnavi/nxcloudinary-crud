// Drag and Drop: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
import Galeria from '@/components/Galeria';
import Upload from '@/components/Upload';
import { getImages } from '@/lib/actions';

export const dynamic = 'force-dynamic'


export default async function Home() {
  const images = await getImages();
  console.log(images);

  return (
    <main>
      <Upload />
      <h1>Galería de imágenes</h1>
      <Galeria images={images}/>
    </main >
  )
}
