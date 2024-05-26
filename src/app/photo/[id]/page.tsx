import React from "react";

const Photo = ({ params }: { params: { id: string } }) => {
  return (
    <div className={`flex justify-center items-center min-h-screen w-full`}>
      {params.id}
    </div>
  );
};

export default Photo;
