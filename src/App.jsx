  import './App.css'
  import './index.css'
  import Header from './Components/Header'
  import Home from './Components/Home'
  import About from './Components/About'
  import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import Projects from './Components/Projects'
  import Footer from './Components/Footer'
  import Exp from './Components/Exp'

  function App() {

    return (
      <BrowserRouter>
      <>
      <div className="flex flex-col items-center justify-between py-10 gap-10 w-full bg-[#131313]  ">
        <main className= ' text-gray-950 bg-[#231919] ' >
          <div className="bg-[#fbe2e3] absolute top-[-6rem]  right-[11rem]
          h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75em] -z-50 " > 
          </div>
          <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem]
          h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75em] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" ></div>
          </main>
        </div>
        <div className='bg-[#131313] text-gray-50'>
          <div className='flex flex-col items-center justify-center h-60vh p-3 md:py-24 '>
          <Home />
          </div>
          <div className='flex flex-col justify-center p-[25px] md:mt-[-100px] m-auto gap-10 sm:gap-20 max-w-[1300px] '>
          <About />
          <Projects />
          <Footer />
          </div>
          <Header />    
          </div>
      
          <Routes>  
            <Route path="/Home" element={<Home />} />
            <Route path="/Skills" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Exprience" element={<Exp />} />
            <Route path="/Footer" element={<Footer />} />
          </Routes>
      </>
      </BrowserRouter>
    )
  }

  export default App
