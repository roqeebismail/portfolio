import Section from "./components/section";
import Button from "./components/button";

function App() {
  return (
    <div className="text-gray-700">
      <HomeSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}

const NavBar = () => {
  return (
    <div className="navigation shadow">
      <nav className="flex justify-between items-center py-6 px-4">
        {/* LOGO */}
        <img src="./" alt="LOGO" className="logo" />

        {/* NavList */}
        <ul className="hidden md:flex gap-10 items-center list-none">
          <li className="cursor-pointer text-gray-600 hover:text-gray-800 font-medium">Home</li>
          <li className="cursor-pointer text-gray-600 hover:text-gray-800 font-medium">Services</li>
          <li className="cursor-pointer text-gray-600 hover:text-gray-800 font-medium">Projects</li>
          <li className="cursor-pointer text-gray-600 hover:text-gray-800 font-medium">Pages</li>
        </ul>

        {/* NavMenu (for mobile maybe?) */}
        <div className="nav__menu md:hidden">
          <span>&nbsp;</span>
          <span className="text-sm">MENU</span>
        </div>
      </nav>
    </div>
  );
};

function HomeSection() {
  return (
    <div className="bg-slate-200 relative">
      <NavBar />

      <Section >
        <div className="col-span-1 flex flex-column items-center">
          <div className="space-y-4">
            <pre className="text-xs font-thin">Full Stack Developer</pre>
            <h1 className="font-bold text-3xl text-gray-700 font-joti">Hello I'm &mdash; <br></br>Roqeeb Ismail</h1>

            <p className="text-gray-500">
              A full-stack developer specializing in the MERN stack
              (MangoDB, Express js, React, Node js).
              I build dynamic, high-performance web applications
              from the ground up.
            </p>

            <div className="bunto flex gap-8">
              <Button classStyle="bg-gray-500 hover:bg-gray-600 text-xs text-slate-50">LETS TALK</Button>
              <Button classStyle="hover:bg-gray-300 hover:text-gray-50 text-gray-600 hover:font-bold border-1 border-gray-400">Project</Button>
            </div>

            <div className="flex items-center gap-8 mt-10">
              <p>Check out my Project &rarr;</p>

              <div className="flex gap-4">
                <div className="rounded-full w-6 h-6 bg-gray-300"></div>
                <div className="rounded-full w-6 h-6 bg-gray-300"></div>
                <div className="rounded-full w-6 h-6 bg-gray-300"></div>
              </div>

            </div>
          </div>
        </div>

        <div className="col-span-1 flex items-center md:justify-end">
          <div className="w-100 h-110 bg-gray-200 profile-img "></div>
        </div>
      </Section>

      <div className="featuredIn h-24 w-2/3 bg-gray-300 absolute left-1/2 -translate-x-1/2 bottom -translate-y-1/2  p-2">
        <pre>FeaturedIn</pre>

        <div className=""></div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (

    <Section>
      <div className="col-span-1 space-y-3 flex flex-col">
        <pre className='text-xs font-bold text-gray-400'>BEST SERVICES</pre>
        <h1 className="text-xl font-bold">What Can I Do For You?</h1>
        <p className="text-gray-500">
          From Concept of deployment, I build fully functional
          web application using the
          MERN stack &mdash; MangoDB, Express js, React, and Node js
        </p>
        <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-y-10 ">
          <div className="box col-1">
            <span className="flex items-center gap-1">
              <span className="number font-medium text-3xl">3, 460</span>
              <span className="plus">+</span>
            </span>
            <p>Satisfy Client</p>
          </div>

          <div className="box col-2">
            <span className="flex items-center gap-1">
              <span className="number font-medium text-3xl">1, 460</span>
              <span className="plus">+</span>
            </span>
            <p>Project Completed</p>
          </div>

          <div className="box row-2 col-1">
            <span className="flex items-center gap-1">
              <span className="number font-medium text-3xl">15</span>
              <span className="plus">+</span>
            </span>
            <p>Years of Experience</p>
          </div>

          <div className="box row-2 col-2 bg-gray-700 w-40 flex items-center justify-center">

            <p className="text-gray-50 font-medium">Certified UX <br /> Proffessional</p>

          </div>
        </div>
      </div>

      <div className="col-span-1 flex items-center md:justify-end">
        <div className="w-100 h-120 bg-slate-100 service "></div>
      </div>



    </Section >
  )
}

function SkillsSection() {
  return (
    <div className="bg-slate-100 py-10">

      <div className="text-center">
        <span className="font-bold text-xs">SKILLS & EXPERIENCES</span>
        <h3 className="font-bold text-lg text-gray-700">Check My Skills and Work Experiences</h3>
      </div>

      <Section>

        <div className="col-span-1 space-y-3 flex items-center gap-20">

          <div className="space-y-4">
            <h3 className="border-b pb-1 font-bold text-lg">Work Experience</h3>

            <div className="">
              <span className="">2020 &mdash; 2025</span>
              <h4 className="text-sm font-bold">Software engineer</h4>
            </div>

            <div className="">
              <span className="">2020 &mdash; 2025</span>
              <h4 className="text-sm font-bold">UX engineer</h4>
            </div>

          </div>

          <div className="space-y-4">
            <h3 className="border-b pb-1 font-bold text-lg ">Education</h3>

            <div className="">
              <span className="">2020 &mdash; 2025</span>
              <h4 className="text-sm font-bold">Machachusset IT</h4>
            </div>

            <div className="">
              <span className="">2020 &mdash; 2025</span>
              <h4 className="text-sm font-bold">University of michingan, CN</h4>
            </div>

          </div>


        </div>

        <div className="col-span-1 flex items-center md:justify-end">
          <div className="w-100 h-120 bg-slate-200"></div>
        </div>



      </Section >

    </div>
  )
}

function ProjectsSection() {
  return (


    <Section>

      <div className="col-span-1 space-y-3 flex items-center gap-20">

        <div className="">

          <pre>Contact Us</pre>

          <h1 className="text-xl font-bold">What Can I Do For You</h1>
          <p className="text-gray-500">From Concept of deployment, I build fully functional web application using MERN stack &mdash; MongoDB, Express.js, React, and Node.js</p>


        </div>
      </div>

      <div className="col-span-1 flex items-center md:justify-end relative">
        <div className="w-100 h-120 bg-slate-200 flex justify-between">

          <form action="" className="space-y-5 ps-20 flex flex-col items-center justify-center">

            <div className="form_group">
              <label htmlFor="name" className="inline-block mb-4">Name:</label>
              <input className="bg-gray-300 block px-5" type="name" name="name" id="name" />
            </div>

            <div className="form_group">
              <label htmlFor="email" className="inline-block mb-4">Email:</label>
              <input className="bg-gray-300 block px-5" type="email" name="email" id="email" />
            </div>

            <div className="form_group">
              <label htmlFor="subject" className="inline-block mb-4">Subject:</label>
              <input className="bg-gray-300 block h-30 px-5" type="subject" name="subject" id="subject" />
            </div>
          </form>

          <div className="w-10 h-full bg-gray-600">&nbsp;</div>


        </div>
        <div className="button:btn submit py-2 px-4 bg-gray-700 text-gray-50 absolute left-40 -bottom-5">Message</div>
      </div>



    </Section >


  )
}

function FooterSection() {
  return (


    <footer className="bg-slate-50">
      <Section>



        <div className="">

          <span>LOGO</span>

          <div className="flex gap-4">
            <span>Contact</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>

          <span></span>
        </div>

        <footer className="copyright">Allright reserve copyright &copy; rq.ismael.com</footer>


      </Section >


    </footer>


  )
}


export default App;
