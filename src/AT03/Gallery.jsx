import { useState, useEffect } from "react";
import "./gallery.css";

const initialImages = [
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
];

export default function Gallery() {
  const isLocalImages = JSON.parse(localStorage.getItem("images"));
  const [gallery, setGallery] = useState(isLocalImages || initialImages);

  useEffect(() => {
    if (!isLocalImages) {
      // Se localStorage estiver vazio, insere as imagens iniciais nele
      localStorage.setItem("images", JSON.stringify(initialImages));
    }
  }, []);

  function incrementGallery() {
    // Adiciona uma nova imagem a galeria
    const newGallery = [...gallery, "https://via.placeholder.com/100"];

    // Atualiza a galeria no incremento
    setGallery(newGallery);

    // Atualiza o localStorage no incremento
    localStorage.setItem("images", JSON.stringify(newGallery));
  }

  function decrementGallery() {
    // Adiciona uma nova imagem a galeria
    const newGallery = gallery.slice(0, -1);

    // Atualiza a galeria no decremento
    setGallery(newGallery);

    // Atualiza o localStorage no decremento
    localStorage.setItem("images", JSON.stringify(newGallery));
  }

  return (
    <div className="container-gallery">
      <div className="container-counter">
        <button className="decrement-btn" onClick={() => decrementGallery()}>
          -
        </button>
        <p>{gallery.length}</p>
        <button className="increment-btn" onClick={() => incrementGallery()}>
          +
        </button>
      </div>

      <div className="gallery-wrapper">
        {gallery.map((img, index) => (
          <img key={index} src={img} />
        ))}
      </div>
    </div>
  );
}
