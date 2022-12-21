import React from "react";
import ActionOutline from "../Buttons/ActionOutline";

const Addvertise = () => {
  return (
    <div className="p-8  w-3/4 mx-auto mt-[-89px] py-14 rounded-xl bg-base-100  border-accent shadow-accent shadow-lg">
      <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between">
		
      <h2 className="text-center text-2xl lg:text-6xl tracking-tighter font-bold">Up to
				<br className="sm:hidden"/><span className="text-accent"> 25% </span>Off </h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg">Educator</span>
			</div>
			<a href="#" rel="noreferrer noopener"><ActionOutline title=" Shop Now"/></a>

		</div>
      </div>
    </div>
  );
};

export default Addvertise;
