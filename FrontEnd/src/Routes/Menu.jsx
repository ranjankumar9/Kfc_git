import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import styles from "../Styles/Menu.module.css";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-scroll";
import Footer2 from "../Components/Footer2";
import { Button } from "@chakra-ui/react";

const Menu = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterData = () => {
    const filtered = data.filter((el) =>
      el.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const fetchData = () => {
    axios.get("https://encouraging-petticoat-calf.cyclic.app/product")
      .then((res) => {
        setData(res.data.product);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [searchQuery, data]);

  console.log(filteredData);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.headers}>
        <p>LET'S ORDER FOR DELIVERY,PICK UP,OR DINE-IN</p>
        <button>Start Order</button>
      </div>
      <div className={styles.main}>
        <div className={styles.menu}>
          <div className={styles.kfcmenu}>
            <div className={styles.firseimg}>
              <img
                src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
                alt=""
              />
            </div>
            <div className={styles.h1}>
              <p>KFC MENU</p>
            </div>
          </div>
          <div className={styles.details}>
            <Link to="PERI PERI MATCH SPECIALS" smooth={true} duration={2000}>
              <p>PERI PERI MATCH SPECIALS</p>
            </Link>
            <Link to="CHICKEN ROLLS" smooth={true} duration={2000}>
              <p>CHICKEN ROLLS</p>
            </Link>
            <Link to="CHICKEN BUCKETS" smooth={true} duration={2000}>
              <p>CHICKEN BUCKETS</p>
            </Link>
            <Link to="BIRYANI BUCKETS" smooth={true} duration={2000}>
              <p>BIRYANI BUCKETS</p>
            </Link>
            <Link to="BOX MEALS" smooth={true} duration={2000}>
              <p>BOX MEALS</p>
            </Link>
            <Link to="BURGERS" smooth={true} duration={2000}>
              <p>BURGERS</p>
            </Link>
            <Link to="SNACKS" smooth={true} duration={2000}>
              <p>SNACKS</p>
            </Link>
            <Link to="BEVERAGES" smooth={true} duration={2000}>
              <p>BEVERAGES</p>
            </Link>
          </div>
          <div className={styles.details1}>
            <Link to="PERI PERI MATCH SPECIALS" smooth={true} duration={2000}>
              <Button>PERI.</Button>
            </Link>
            <Link to="CHICKEN ROLLS" smooth={true} duration={2000}>
              <Button>CHICKEN.</Button>
            </Link>
            <Link to="CHICKEN BUCKETS" smooth={true} duration={2000}>
              <Button>C Bucket</Button>
            </Link>
            <Link to="BIRYANI BUCKETS" smooth={true} duration={2000}>
              <Button>B BUCKETS</Button>
            </Link>
            <Link to="BOX MEALS" smooth={true} duration={2000}>
              <Button>MEALS</Button>
            </Link>
            <Link to="BURGERS" smooth={true} duration={2000}>
              <Button>BURGERS</Button>
            </Link>
            <Link to="SNACKS" smooth={true} duration={2000}>
              <Button>SNACKS</Button>
            </Link>
            <Link to="BEVERAGES" smooth={true} duration={2000}>
              <Button>BEVERAGES</Button>
            </Link>
          </div>
        </div>

        <div className={styles.main2}>
          <div className={styles.searchbox}>
            <input
              type="text"
              placeholder="Search Our Menu"
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
            <div className={styles.line}></div>
          </div>
          <div className={styles.keydata}>
            <div className={styles.data} name="PERI PERI MATCH SPECIALS">
              <div className={styles.data1}>
                <p>PERI PERI MATCH SPECIALS</p>
              </div>
              <div className={styles.data2}>
                {filteredData.map((el, id) => {
                  if (el.cate == "peri peri match specials") {
                    return <ProductCard key={id} productId={el} />;
                  }
                })}
              </div>
            </div>
            <div className={styles.key} name="CHICKEN ROLLS">
              <div className={styles.key1}>
                <p>CHICKEN ROLLS</p>
              </div>
              <div className={styles.key2}>
                {filteredData.map((el, id) => {
                  if (el.cate == "chicken Rolls") {
                    return <ProductCard key={id} productId={el} />;
                  }
                })}
              </div>
            </div>
            <div className={styles.key} name="CHICKEN BUCKETS">
              <div className={styles.key1}>
                <p>CHICKEN BUCKETS</p>
              </div>
              <div className={styles.key2}>
                {filteredData.map((el, id) => {
                  if (el.cate == "chicken buckets") {
                    return <ProductCard key={id} productId={el} />;
                  }
                })}
              </div>
            </div>
            <div className={styles.key} name="BIRYANI BUCKETS">
              <div className={styles.key1}>
                <p>BIRYANI BUCKETS</p>
              </div>
              <div className={styles.key2}>
                {filteredData.map((el, id) => {
                  if (el.cate == "biryani buckets") {
                    return <ProductCard key={id} productId={el} />;
                  }
                })}
              </div>
            </div>
            <div className={styles.key} name="BOX MEALS">
              <div className={styles.key1}>
                <p>BOX MEALS</p>
              </div>
              <div className={styles.key2}>
                {filteredData.map((el, id) => {
                  if (el.cate == "box meals") {
                    return <ProductCard key={id} productId={el} />;
                  }
                })}
              </div>
            </div>
            <div className={styles.key} name="BURGERS">
              <div className={styles.key1}>
                <p>BURGERS</p>
              </div>
              <div className={styles.key2}>
                {filteredData.map((el, id) => {
                  if (el.cate == "burgers") {
                    return <ProductCard key={id} productId={el} />;
                  }
                })}
              </div>
            </div>
            <div className={styles.key} name="SNACKS">
              <div className={styles.key1}>
                <p>SNACKS</p>
              </div>
              <div className={styles.key2}>
                {filteredData.map((el, id) => {
                  if (el.cate == "snacks") {
                    return <ProductCard key={id} productId={el} />;
                  }
                })}
              </div>
            </div>
            <div className={styles.key} name="BEVERAGES">
              <div className={styles.key1}>
                <p>BEVERAGES</p>
              </div>
              <div className={styles.key2}>
                {filteredData.map((el, id) => {
                  if (el.cate == "beverages") {
                    return <ProductCard key={id} productId={el} />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Menu;
