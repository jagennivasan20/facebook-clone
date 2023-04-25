import React from "react";
import "./StoryReel.css";
import Story from "../Story/Story";
const StoryReel = () => {
  return (
    <div className="storyreel">
      <Story
        image="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/11/john-wick-1668095706.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZrybfIwcsTiDOIq8GwXUK44mP6g6h0stHs7TLM8tulLLfX83rsqLRxIGKRyOMcSAtcUE&usqp=CAU"
        title="john wick"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhT_pEcUJq3h0yB3ZNdUp1zxwHU0I5R6-EPwEAtVE&s"
        profileSrc="https://www.jiomart.com/images/product/500x630/rv3jnpppl2/tony-stark-iron-man-avengers-infinity-war-men-s-sunglasses-spectacle-frames-silver-blue-product-images-rv3jnpppl2-3-202207021924.jpg"
        title="tony stark"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWpyEMLLw2PTwRzCMudJ8jaEAcfp-y_2veg&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWpyEMLLw2PTwRzCMudJ8jaEAcfp-y_2veg&usqp=CAU"
        title="actor vijay"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aJsx4jwarABIp2UnhAour8E7vz2SlX00GA&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NOQECPA4LVtjZc6E3cgPecnE7kT8YmCisg&usqp=CAU"
        title="god of war"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg"
        profileSrc="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/money-heist-5-reasons-why-we-absolutely-love-the-professor-aka-alvaro-morte-in-la-casa-de-papel.jpg"
        title="professor"
      />
    </div>
  );
};

export default StoryReel;
