import { dragOverHandler, dropHandler } from '@/lib/drag-drop'


function Imagen({ children, img }) {
    return (
        <form id="preview" key={'form' + img?.public_id} >
            <img
                id='imgPreview'
                src={`${img?.secure_url ?? 'image.png'}`}
                onDrop={dropHandler}
                onDragOver={dragOverHandler} 
                style={{
                    aspectRatio: 1.62,
                    width: '324px',
                    height: '200px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                }} />            
            <input type='file' id='file' name='file' accept='image/*' style={{ display: 'none' }}></input>
            <input type='hidden' name='public_id' value={img?.public_id} />
            <br />

            {children}
        </form>

    )
}

export default Imagen