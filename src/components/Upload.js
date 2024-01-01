'use client'
import { imgCreate } from '@/lib/actions'
import { toast } from 'react-hot-toast';


function dropHandler(ev) {
    ev.preventDefault();
    const fileInput = document.querySelector('input[type="file"]');
    const imgPreview = document.getElementById('imgPreview');

    if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        [...ev.dataTransfer.items].forEach((item, i) => {
            // If dropped items aren't files, reject them
            if (item.kind === "file") {
                const file = item.getAsFile();
                fileInput.files = ev.dataTransfer.files;  // IMPORTANTE

                let reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onloadend = () =>  imgPreview.src = reader.result
            }
        });
    } 
}

function dragOverHandler(ev) {
    ev.preventDefault();
}

function Upload() {

    async function wrapper(data) {
        const { type, message } = await imgCreate(data);
        if (type == 'success') toast.success(message)
        if (type == 'error') toast.error(message)
    }

    return (
        <>
            <div id="preview"
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
                style={{
                    aspectRatio: 1.62,
                    width: '324px',
                    height: '200px',
                    backgroundImage: `url('image.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <img id='imgPreview'  style={{
                    aspectRatio: 1.62,
                    width: '324px',
                    height: '200px',
                    objectFit: 'cover',
                    objectPosition: 'center'}} />   
            </div >
            <form>
                <input type='file' id='file' name='file' accept='image/*' style={{ display: 'none' }}></input>
                <button formAction={wrapper} > Subir imagen </button>
            </form>
        </>
    )
}

export default Upload


