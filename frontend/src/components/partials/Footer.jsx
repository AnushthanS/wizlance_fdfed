const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h2 className="font-bold mb-2">Categories</h2>
          <ul className="font-thin">
            <li>
              <a href="/mainpage/Graphic Design">Graphics & Design</a>
            </li>
            <li>
              <a href="/mainpage/Music Audio">Music Audio</a>
            </li>
            <li>
              <a href="/mainpage/programming-tech">Programming and Tech</a>
            </li>
            <li>
              <a href="/mainpage/photography">Photography</a>
            </li>
            <li>
              <a href="/mainpage/Animation">Animation</a>
            </li>
            <li>
              <a href="/mainpage/writing-translation">Writing</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h2 className="font-bold mb-2">Support</h2>
          <ul className="font-thin">
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-auto my-6 w-4/5 border border-white" />
      <div className="container mx-auto flex justify-between">
        <span className="font-semibold">WizLance</span>
        <span className="font-light">WizLance 2023&copy;</span>
      </div>
    </footer>
  );
}

export default Footer;
