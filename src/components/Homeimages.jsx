const Homeimages = ({ categoryImages }) => {
    return (
        <>
            {categoryImages.map((image) => (
                <div className="category-illustration" key={image.id}>
                    <div className="overlay">
                        <span className="image-title">Image title</span>
                    </div>
                    <img src={image.image} className='category-img' alt="" />
                </div>
            ))}
        </>
    );
}

export default Homeimages;