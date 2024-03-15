// import React,{useState,useEffect} from 'react'


// export default function Theme() {

//         const [theme, setTheme] = useState("light");

//         const toggleTheme = () => {
//           if (theme === "light") {
//             setTheme("dark");
//             window.localStorage.setItem("theme", "dark");
//             document.documentElement.classList.add("dark");
//           } else {
//             setTheme("light");
//             window.localStorage.setItem("theme", "light");
//             document.documentElement.classList.remove("dark");
//           }
//         };
    
//     useEffect(() => {   
//         const localTheme = window.localStorage.getItem("theme") 
    
//         if (localTheme) {
//           setTheme(localTheme);
    
//           if (localTheme === "dark") {
//             document.documentElement.classList.add("dark");
//           }
//         } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//           setTheme("dark");
//           document.documentElement.classList.add("dark");
//         }
//       }, []);

      
//   return (
//     <div className='fixed bottom-[32px] right-2 bg-white w-[3rem] h-[3rem] bg-opacity-80  backdrop-blur-.5  flex justify-center items-cente dark:bg-[#131313] md:bottom-[20px] md:right-2 lg:right-1 xl:right-5'> 
//     <button onClick={toggleTheme}>
//         {theme === "light" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none  " stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/>
//         <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
//         : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none " stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>}
//     </button>
      
//     </div>
//   )
// }
