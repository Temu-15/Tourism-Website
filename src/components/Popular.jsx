// import React from "react";
// import { Link } from "react-router-dom";
// import CardSmall from "./CardSmall";
// import irrecha from "../assets/irrecha.jpg";
// import ashenda from "../assets/ashenda.jpg";
// import ethiopianRun from "../assets/ethiopianRun.jpg";
// import harare from "../assets/harare.jpg";
// import meskel from "../assets/meskel.jpg";
// import Timket from "../assets/Timket.jpg";

// function Popular() {
//   return (
//     <div className="lg:px-12 mt-20">
//       <div className="h-[50px] flex items-center justify-between mb-10">
//         <h2 className="font-bold text-[30px] leading-[45px] text-[#05073C]">
//           Popular events
//         </h2>
//         <Link to="/" className="leading-[28px] text-[16px] text-[#05073C]">
//           see all
//         </Link>
//       </div>
//       <div className="grid grid-cols-4 gap-5">
//         <CardSmall img={meskel} title="Meskel" />
//         <CardSmall img={ashenda} title="Ashenda" className="row-span-2" />
//         <CardSmall img={irrecha} title="Irrecha" />
//         <CardSmall
//           img={ethiopianRun}
//           title="Ethiopian Run"
//           className="col-span-2"
//         />
//         <CardSmall img={harare} title="Harare" />
//         <CardSmall img={Timket} title="Timket" />
//       </div>
//     </div>
//   );
// }

// export default Popular;
// import React from "react";
// import { Link } from "react-router-dom";
// import CardSmall from "./CardSmall";
// import irrecha from "../assets/irrecha.jpg";
// import ashenda from "../assets/ashenda.jpg";
// import ethiopianRun from "../assets/ethiopianRun.jpg";
// import harare from "../assets/harare.jpg";
// import meskel from "../assets/meskel.jpg";
// import Timket from "../assets/Timket.jpg";

// function Popular() {
//   return (
//     <div className="lg:px-12 mt-20">
//       <div className="h-[50px] flex items-center justify-between mb-10">
//         <h2 className="font-bold text-[30px] leading-[45px] text-[#05073C]">
//           Popular events
//         </h2>
//         <Link to="/" className="leading-[28px] text-[16px] text-[#05073C]">
//           see all
//         </Link>
//       </div>

//       <div className="grid grid-cols-4 grid-rows-2 gap-5">
//         <CardSmall
//           img={meskel}
//           title="Meskel"
//           className="col-start-1 col-end-2 row-start-1 row-end-2"
//         />
//         <CardSmall
//           img={ashenda}
//           title="Ashenda"
//           className="col-start-2 col-end-4 row-start-1 row-end-3"
//         />
//         <CardSmall
//           img={irrecha}
//           title="Irrecha"
//           className="col-start-4 col-end-5 row-start-1 row-end-2"
//         />
//         <CardSmall
//           img={Timket}
//           title="Timket"
//           className="col-start-1 col-end-3 row-start-2 row-end-4"
//         />
//         <CardSmall
//           img={harare}
//           title="Harare"
//           className="col-start-3 col-end-4 row-start-2 row-end-3"
//         />
//         <CardSmall
//           img={ethiopianRun}
//           title="Ethiopian Run"
//           className="col-start-4 col-end-5 row-start-2 row-end-3"
//         />
//       </div>
//     </div>
//   );
// }

// export default Popular;

import React from "react";
import { Link } from "react-router-dom";
import CardSmall from "./CardSmall";
import irrecha from "../assets/irrecha.jpg";
import ashenda from "../assets/ashenda.jpg";
import ethiopianRun from "../assets/ethiopianRun.jpg";
import harare from "../assets/harare.jpg";
import meskel from "../assets/meskel.jpg";
import Timket from "../assets/Timket.jpg";

function Popular() {
  return (
    <div className="lg:px-12 mt-20">
      {/* Header */}
      <div className="h-[50px] flex items-center justify-between mb-10">
        <h2 className="font-bold text-[24px] md:text-[30px] leading-[36px] md:leading-[45px] text-[#05073C]">
          Popular events
        </h2>
        <Link
          to="/"
          className="leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] text-[#05073C]"
        >
          see all
        </Link>
      </div>

      {/* Responsive Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        style={{ gridAutoRows: "minmax(200px, auto)" }} // Ensures row height consistency
      >
        {/* Grid Items with dynamic spans */}
        <CardSmall img={meskel} title="Meskel" className="sm:col-span-1" />
        <CardSmall
          img={ashenda}
          title="Ashenda"
          className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
        />
        <CardSmall img={irrecha} title="Irrecha" className="sm:col-span-1" />
        <CardSmall img={Timket} title="Timket" className="lg:col-span-2" />
        <CardSmall img={harare} title="Harare" />
        <CardSmall img={ethiopianRun} title="Ethiopian Run" />
      </div>
    </div>
  );
}

export default Popular;
