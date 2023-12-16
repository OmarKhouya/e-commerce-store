import RatingStars from "./RatingStars";

export default function ProductCard({prodData}) {

    const {id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images} = prodData
    console.log(images)
    return (
        <>
            <div className="card col-lg-3 col-md-4 mt-2 me-2 " key={id}>
                <div className="card-header">
                    <img src={thumbnail} alt="thumbnail" className="card-img-top" />
                </div>
                <div className="card-body">
                    <h1>{title}</h1>
                    <p>brand : {brand}</p>
                    <p>about : {description}</p>
                </div>
                <div className="card-footer">
                    <p>{price} $ - <span className="text-decoration-line-through text-danger">{discountPercentage}</span><span className=" text-danger">%</span></p>
                    <p>rating {rating}</p>
                    <p>stock {stock}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#product${id}`}>
                        Show Infos
                    </button>
                </div>
            </div>

            <div className="modal fade" id={`product${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 d-flex justify-content-between" id="exampleModalLabel">{brand} | {title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Images Carousel */}
                            <div id={`carouselProductImage${id}`} class="carousel slide carousel-fade">
                                <div class="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="card-img-top" src={thumbnail} alt="Second slide" />
                                    </div>
                                    {
                                        images.map(image => <div className="carousel-item" key={image}><img className="card-img-top" src={image} alt={image}/></div>)
                                    }
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target={`#carouselProductImage${id}`} data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target={`#carouselProductImage${id}`} data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            {/* Product data */}
                            <div>
                                <p className="mt-3 fs-3">{description}</p>
                                <hr />
                                <p className="fs-4">{stock > 0 ? `in stock (${stock})` : "not in stock"}</p>
                                {<p className="fs-4"><RatingStars rating={rating} /> ({rating})</p>}
                                <hr />
                                <p className="mt-3 fs-1">{price} $ - <span className="text-decoration-line-through text-danger">{discountPercentage}</span><span className=" text-danger">%</span></p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}
