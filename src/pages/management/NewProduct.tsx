import AdminSidebar from "../../components/AdminSidebar";
import { useState, ChangeEvent } from "react";
const NewProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    stock: 0,
    photo: "",
  });
  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => { // this is heplful for images and videos to be displayed
        if (typeof reader.result === "string") {
          setProduct({ ...product, photo: reader.result });
        }
      };
    }
  };
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <article>
          <form>
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="Product Name"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </div>
            <div>
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: Number(e.target.value) })
                }
              />
            </div>
            <div>
              <label>Description</label>
              <input
                required
                type="text"
                placeholder="Description"
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={product.stock}
                onChange={(e) =>
                  setProduct({ ...product, stock: Number(e.target.value) })
                }
              />
            </div>
            <div>
              <label>Image</label>
              <input
                required
                type="file"
                placeholder="Image"
                onChange={changeImageHandler}
              />
            </div>
            {product.photo && <img src={product.photo} alt="New Image" />}
            <button type="submit">Submit</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
