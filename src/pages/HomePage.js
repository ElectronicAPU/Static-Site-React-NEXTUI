import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
import cards from "../array/CardArray";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <div className="w-full grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {cards.map((card, index) => (
            <Link key={index} to={`/card/${index}`}>
              <CardComponent card={card} />
            </Link>
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default HomePage;
