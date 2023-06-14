import React, { useEffect, useState } from "react";
import css from '../../Admin Styles/Products.module.css'
import axios from 'axios'

// seller_name,
// shop_name,
// email,
// pass,
// gst_number,
// location,
// http://localhost:8080/seller/getdetails


const UserDetails = () => {
    const [user, setUser] = useState([])
    const FetchDetails = async() => {
        try {
            await axios.get(`https://encouraging-petticoat-calf.cyclic.app/seller/getdetails`).then((res) => {
                setUser(res.data.user)
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        FetchDetails()
    },[])

    console.log(user)
  return (
    <div>
      <table className={css.table}>
        <thead>
          <tr className={css.tr}>
            <th>User</th>
            <th>Seller_Name</th>
            <th className={css.userno}>Shop_Name</th>
            <th>Email</th>
            <th className={css.userno}>Gst_Number</th>
            <th>Location</th>                   
          </tr>
        </thead>
        <tbody>
          {user.length > 0 &&
            user.map((item) => {
              const { _id, seller_name, shop_name, gst_number, email, location } = item;
                
              return (
                <tr className={css.tr} key={_id}>
                  <td className={css.usersimage}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM35D9k88rgotfv791Och_V6Jkyguwa8aheg&usqp=CAU" alt="" />
                  </td>
                  <td>{seller_name}</td>
                  <td className={css.userno}>{shop_name}</td>
                  <td>{email}</td>
                  <td className={css.userno}>{gst_number}</td>
                  <td>{location}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
