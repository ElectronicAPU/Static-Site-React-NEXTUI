import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const CardComponent = () => {
  return (
    <>
      <Card isHoverable className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className=" py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
        </CardBody>
      </Card>
    </>
  );
};

export default CardComponent;
