import React from "react";
import { storiesOf, addDecorator, setAddon } from "@storybook/react";
import { ProductCard } from "../src";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
setAddon(JSXAddon);

addDecorator(withKnobs);
storiesOf("Variants", module).addWithJSX("without state", () => {
  return (
    <div
      // style={{
      //   display: "grid",
      //   gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
      // }}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <ProductCard
        img={
          "https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwe4af9557/images/2018/1V0923-039_LD_B.jpg?sw=344&sh=529&sm=cut"
        }
        price={"RS. 1000"}
        name="White Sweat Shirt"
        onActionClick={action => () => {
          alert(action);
        }}
        detailsClick={() => {
          alert("Details");
        }}
        extra1={{ title: "Sizes", data: "XL, XXL, L, XXXL" }}
        extra2={{
          title: "Colors",
          data: (
            <div className="colors">
              <div className="color" style={{ background: "red" }} />
              <div className="color" style={{ background: "pink" }} />
              <div className="color" style={{ background: "grey" }} />
              <div className="color" style={{ background: "orange" }} />
            </div>
          )
        }}
      />
      <ProductCard
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFw3kVuA9bsph3HQ2SqwHIb46snvqtTBEKQHpu__IgGzoaJF-"
        }
        price={"RS. 500"}
        name="Blue Shirt"
        extra1={{ title: "Sizes", data: "XL, XXL, L, XXXL" }}
        extra2={{
          title: "Colors",
          data: (
            <div className="colors">
              <div className="color" style={{ background: "red" }} />
              <div className="color" style={{ background: "pink" }} />
              <div className="color" style={{ background: "grey" }} />
              <div className="color" style={{ background: "orange" }} />
            </div>
          )
        }}
      />
      <ProductCard
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqCIVIdKV_-OABIYmE6aCiQCs5G1REpmWiMG0kn7RMwEIEhMIZQ"
        }
      />
      <ProductCard
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfn2ptS_Akr6hctce2NEpduFOUjr6I2y9_D2Deba1lVH0jkAVb"
        }
      />
      <ProductCard
        img={
          "https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwe4af9557/images/2018/1V0923-039_LD_B.jpg?sw=344&sh=529&sm=cut"
        }
      />
    </div>
  );
});
