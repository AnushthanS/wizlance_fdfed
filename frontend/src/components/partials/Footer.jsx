const Footer = () => {
    return (
        <div className="mt-12 w-full bg-black py-2 text-white">
          <div className="flex justify-start">
            <ul className="categories mx-4 mb-2">
              <span className="font-bold">Categories</span>
              <li>&nbsp;</li>
              <li><a href="/mainpage/Graphic Design">Graphics & Design</a></li>
              <li><a href="/mainpage/Music Audio">Music Audio</a></li>
              <li><a href="/mainpage/programming-tech">Programming and Tech</a></li>
              <li><a href="/mainpage/photography">Photography</a></li>
              <li><a href="/mainpage/Animation">Animation</a></li>
              <li><a href="/mainpage/writing-translation">Writing</a></li>
            </ul>
            <ul className="categories mx-4 mb-2">
              <span className="font-bold">Support</span>
              <li>&nbsp;</li>
              <li><a href="/contact"> Contact Us</a></li>
            </ul>
          </div>
          <hr className="mx-4 bg-white" />
          <div className="flex justify-between py-1">
            <span className="font-semibold ml-4">WizLance</span>
            <span className="font-thin mr-4">WizLance 2023&copy;</span>
          </div>
        </div>
      );
}
export default Footer;