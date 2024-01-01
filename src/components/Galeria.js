'use client'
import { imgUpdate, imgDelete } from '@/lib/actions';
import { toast } from 'react-hot-toast';
import Imagen from '@/components/Imagen';



async function Galeria( {images}) {
  console.log(images);

  async function wrapper(data) {
    const { type, message } = await imgDelete(data);
    if (type == 'success') toast.success(message)
    if (type == 'error') toast.error(message)

  }

  return (
    <div className='galeria'>
      {images.resources.map(img => (
        <Imagen key={img.public_id} img={img}>
          <button formAction={imgUpdate} > Actualizar imagen</button> 
          <button formAction={imgDelete} > Eliminar imagen</button> 
        </Imagen>  
        ))
      }
    </div>
  )
}

export default Galeria