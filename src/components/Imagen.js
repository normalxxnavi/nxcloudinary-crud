
function Imagen({ children, img }) {
    return (
        <div
            key={'div' + img.public_id}
            style={{
                aspectRatio: img.width / img.height,
                height: '200px',
                backgroundImage: `url(${img.secure_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} suppressHydrationWarning >
            <form>
                <input type='hidden' name='public_id' value={img.public_id} />
                {children}
            </form>
        </div >
    )
}

export default Imagen