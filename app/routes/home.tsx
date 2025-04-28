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

    {/* screen */}


    <div  className="bg-green-800  h-96 grid grid-cols-12  gap-4  xl:hidden">
        
        <div className="bg-orange-900 h-32 col-span-12 sm:col-span-6  md:col-span-3 "></div>
  
        <div className="bg-orange-500 h-32 col-span-12 sm:col-span-6  md:col-span-3 "></div>
  
        <div className="bg-orange-200 h-32 col-span-12 sm:col-span-6  md:col-span-3"></div>
  
        <div className="bg-orange-100 h-32 col-span-12 sm:col-span-6  md:col-span-3"></div>
  
    </div>
    





    <br></br>
    <br></br>
    <br></br>
    <br></br>

    
      
   
    <div className="sm-text-lg lg:text-4xl">
      screen responsive
      </div>  

    </>
  

  );
  
}
