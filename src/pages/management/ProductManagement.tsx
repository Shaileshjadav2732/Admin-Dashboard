import AdminSidebar from "../../components/AdminSidebar";
import { useState, ChangeEvent, FormEvent } from "react";

const img =
  "https://img.etimg.com/thumb/msid-108517210,width-640,resizemode-4,imgsize-57784/alia-bhatts-31st-birthday.jpg";

const ProductManagement = () => {
  const [product, setProduct] = useState({
    name: "Alia Bhatt",
    price: 500,
    description: "",
    stock: 50,
    photo: img,
  });

  const [productUpdate, setProductUpdate] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    stock: product.stock,
    photo: product.photo,
  });

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setProductUpdate({ ...productUpdate, photo: reader.result });
        }
      };
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Update the product state with the updated values
    setProduct({ ...productUpdate });
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <section>
          {/* Static data until the form is submitted */}
          <strong>ID-lblhblklkk</strong>
          <img src={product.photo} alt="product" />
          <p>{product.name}</p>
          {product.stock > 0 ? (
            <span className="green"> {product.stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}
          <h3>${product.price}</h3>
        </section>

        <article>
          <form onSubmit={handleSubmit}>
            <h2>Manage</h2>
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="Product Name"
                value={productUpdate.name}
                onChange={(e) =>
                  setProductUpdate({ ...productUpdate, name: e.target.value })
                }
              />
            </div>

            <div>
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={productUpdate.price}
                onChange={(e) =>
                  setProductUpdate({
                    ...productUpdate,
                    price: Number(e.target.value),
                  })
                }
              />
            </div>

            <div>
              <label>Description</label>
              <input
                required
                type="text"
                placeholder="Description"
                value={productUpdate.description}
                onChange={(e) =>
                  setProductUpdate({
                    ...productUpdate,
                    description: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={productUpdate.stock}
                onChange={(e) =>
                  setProductUpdate({
                    ...productUpdate,
                    stock: Number(e.target.value),
                  })
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

            {productUpdate.photo && (
              <img src={productUpdate.photo} alt="New Image" />
            )}

            <button type="submit">Submit</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
