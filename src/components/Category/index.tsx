import "./index.css"

const Category = () => {
    return (
        <div className="category-wrapper">
            <div className="items">
                <div className="category category-1"></div>
                <p>Reserved</p>
            </div>
            <div className="items">
                <div className="category category-2"></div>
                <p>Free table</p>
            </div>
            <div className="items">
                <div className="category category-3"></div>
                <p>Preperation</p>
            </div>
            <div className="items">
                <div className="category category-4"></div>
                <p>Occupied</p>
            </div>
        </div>
    )
}

export default Category