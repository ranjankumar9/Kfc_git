import React, { useState } from "react";
import css from "../../Admin Styles/AddProduct.module.css";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [cate, setCate] = useState("");
  const toast = useToast()

  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: JSON.parse(localStorage.getItem("sellertoken")),
  };

  const handleForm = (e) => {
    e.preventDefault();
    const render = { title, category, images, price, description, cate };
    try {
      axios.post(`https://encouraging-petticoat-calf.cyclic.app/seller/post`, render).then((res) => {
      // console.log(res.data);
      if(res.data.Msg === "Item Added Successfully"){
        toast({
          title: "Product Added Successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        window.location.reload()
      }
      else{
        toast({
          title: "Product Added Failed.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div>
      <form className={css.add} onSubmit={handleForm}>
        <h1>Add Product</h1>
        <input
          type="text"
          placeholder="Title ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="Veg">vegetarian</option>
          <option value="Nonveg">NonVegetarian</option>
        </select>
        <input
          type="text"
          placeholder="Image Url..."
          value={images}
          onChange={(e) => setImages(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <select value={cate} onChange={(e) => setCate(e.target.value)} required>
          <option value="">Type</option>
          <option value="peri peri match speicals">
            PERI PERI MATCH SPECIALS
          </option>
          <option value="chicken rolls">CHICKEN ROLLS</option>
          <option value="chicken buckets">CHICKEN BUCKETS</option>
          <option value="biryani buckets">BIRYANI BUCKETS</option>
          <option value="box meals">BOX MEALS</option>
          <option value="burgers">BURGERS</option>
          <option value="snacks">SNACKS</option>
          <option value="beverages">BEVERAGES</option>
        </select>
        <button>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
