// import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {
  return (
    <>

    {/* grid */}


    <div 
      className="bg-green-800  h-96 grid grid-cols-4  gap-4">
        
        <div className="bg-orange-900 h-32 col-span-2"></div>
        <div className="bg-orange-500 h-32"></div>
        <div className="bg-orange-200 h-32"></div>
        <div className="bg-orange-100 h-32 col-span-3"></div>
    
    
    </div>
    





    <br></br>
    <br></br>
    <br></br>
    <br></br>

    {/* flex box */}

    <div 
      className="bg-gray-800  h-96 flex  justify-between items-center">
        
        <div className="bg-orange-500 size-32"></div>
        <div className="bg-orange-500 size-32"></div>
        <div className="bg-orange-500 size-32"></div>
        <div className="bg-orange-500 size-32"></div>
    
    
    </div>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    {/* flex - row */}

    <div className="bg-blue-800  h-96  flex  flex-row">

    <div className="bg-gray-500 h-32 basis-1/12"></div>
    <div className="bg-red-500 h-32 basis-2/12"></div>
    <div className="bg-orange-500 h-32 basis-4/12"></div>
    <div className="bg-green-500 h-32 basis-2/12"></div>

    </div>
      
   
   
    </>
  

  );
  
}
