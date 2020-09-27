// Import React gunakanan useEffect dan useState
import React, { useEffect, useState } from "react";
// Import Hooks redux
import { useSelector, useDispatch } from "react-redux";
// import action redux
import { getProduct } from "../redux/actions/product.actions";

function ProductHooks() {
  // gunakan useDispatch
  const dispatch = useDispatch();
  //   gunakan useSelector
  const dataYangDipilih = useSelector((state) => state.data);
  console.log("ini data produk di view", dataYangDipilih);

  //   Gunakan useEffect
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  // Buat tombol untuk mengedit
  //   const handleEdit = () => {
  //     alert("testing");
  //   };

  // Buat State
  const [product, setProduct] = useState("");
  return (
    <div>
      <h1>Ini halaman Product</h1>
      <form>
        <input type="text" name="product" />
        <button>Tambahkan Product</button>
      </form>
      <div>
        {/* Ambil semua data dari API menggunakan Map */}
        {dataYangDipilih.map((item, index) => (
          <div className="app" key={index}>
            {/* <img src="{item.avatar}" alt="test" /> */}
            <h1>{item.name}</h1>
            <button>Edit</button>
            <button>Hapus</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductHooks;
