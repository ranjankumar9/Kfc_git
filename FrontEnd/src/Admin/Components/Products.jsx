import React, { useEffect, useState } from "react";
import axios from "axios";
import css from "../../Admin Styles/Products.module.css";
import { useToast } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const [seller, setSeller] = useState([]);
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [update, setUpdate] = useState("");
  const toast = useToast();
  const { _id } = useParams();

  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: JSON.parse(localStorage.getItem("sellertoken")),
  };

  const FetchAdmin = () => {
    try {
      axios.get(`https://encouraging-petticoat-calf.cyclic.app/seller/get`).then((res) => {
        setSeller(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    FetchAdmin();
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios
        .delete(`https://encouraging-petticoat-calf.cyclic.app/seller/delete/${id}`)
        .then((res) => {
          console.log(res.data);
          toast({
            title: "Product Deleted Successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          FetchAdmin();
        });
    } catch (err) {
      toast({
        title: "Failed to Delete Product.",
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleModal = (id) => {
    setModal(!modal);
    localStorage.setItem("id", JSON.stringify(id));
  };

  const handleClose = () => {
    setModal(!modal);
  };


  const handleUpdate = () => {
    const render = { images, title, category, price };
    setModal(!modal);
    let id = JSON.parse(localStorage.getItem("id"));
    try {
      axios
        .patch(`https://encouraging-petticoat-calf.cyclic.app/seller/update/${id}`, render)
        .then((res) => {
          // console.log(res.data);
            toast({
              title: "Product Updated Successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            FetchAdmin();

        });
    } catch (err) {
      toast({
        title: "Failed to Update Product.",
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <table className={css.table}>
        <thead>
          <tr className={css.tr}>
            <th>Images</th>
            <th>Title</th>
            <th>Category</th>
            <th>price</th>
            <th>Update</th>
            <th>Remove</th>
          </tr>
        </thead>
        {seller.length === 0 ? (
          <div className={css.add}>
            <Link to="/admin/board">
              <p>No Product AvaiLable? Add Products</p>
            </Link>
          </div>
        ) : (
          <tbody>
            {seller.map((item) => {
              const { _id, title, category, price, images } = item;

              return (
                <tr className={css.tr} key={_id}>
                  <td className={css.td1}>
                    <img src={images} alt="" />
                  </td>
                  <td>{title}</td>
                  <td>{category}</td>
                  <td>₹{price}</td>
                  <td>
                    <button onClick={() => handleModal(_id)}>Update</button>
                  </td>
                  <td>
                    <button onClick={() => handleRemove(_id)}>Remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {modal ? (
        <div className={css.update}>
          <p onClick={handleClose}>&times;</p>
          <form className={css.form} onSubmit={() => handleUpdate(_id)}>
            <h1>PRODUCT UPDATE FORM</h1>
            <input
              type="text"
              placeholder="Images Url ..."
              value={images}
              onChange={(e) => setImages(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Title...."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Category</option>
              <option value="Veg">Vegetarian</option>
              <option value="Nonveg">NonVegetarian</option>
            </select>
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <button >Update Products</button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Products;
