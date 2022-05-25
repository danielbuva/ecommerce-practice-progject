import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <nav className="globalBanner">
          <p className="Top1">Limited Time Only</p>
          <p className="Top2">TAKE AN EXTRA 40% OFF SALE STYLES</p>
          <button className="btn shop">Shop</button>
        </nav>
        <nav className="grayContainer">
          <div className="utilityBar">
            <div className="utilBar1">
              <p>Free Shipping On Orders $75+</p>
              <button className="btn details">Details</button>
            </div>
            <div className="utilBar2">
              <button className="btns rewards">☼ UO Rewards</button>
              <button className="btns giftcards">[M] Gift Cards</button>
              <button className="btns signIn">(O) Sign In</button>
            </div>
          </div>
        </nav>
        <div className="grayLine">
          <nav className="globalHeader">
            <NavLink to="/" className="UOtitle">
              URBAN OUTFITTERS
            </NavLink>
            <div className="mainNav">
              <NavLink to="/new" className="mainNav new">
                New
              </NavLink>
              <NavLink to="/womens" className="mainNav womens">
                Women's
              </NavLink>
              <NavLink to="/mens" className="mainNav mens">
                Men's
              </NavLink>
              <NavLink to="/home" className="mainNav home">
                Home
              </NavLink>
              <NavLink to="/lifestyle" className="mainNav lifestyle">
                Lifestyle
              </NavLink>
              <NavLink to="/beauty" className="mainNav beauty">
                Beauty
              </NavLink>
              <NavLink to="/sale" className="mainNav sale">
                Sale
              </NavLink>
            </div>
            <div className="itemNav">
              <div className="searchBox">
                <input className="input" type="text" placeholder="Search" />
                <button className="searchButton">🔍</button>
              </div>
              <p className="cart">C</p>
            </div>
          </nav>
        </div>
        {/* <div className="saleContainer">
          <div>UP TO</div>
          <div>40% OFF SHORTS, SWIM & SANDALS</div>
          <div>*PRICE AS MARKED. EXCLUSIONS APPLY.</div>
          <div>SHOP WOMEN'S</div>
          <div>SHOP MEN'S</div>
        </div>
        <div className="shopContainer">
          <div>Shop Men's</div>
          <div>Shop Women's</div>
          <div>Shop Home</div>
          <div>Shop Dresses</div>
          <div>Shop Graphics</div>
          <div>Shop Birkenstock</div>
          <div>Shop Urban Renewal</div>
        </div>
        <div className="newArrivals"></div>
        <div className="Most Popular"></div>
        <div className="communityContainer">
          <div>
            <div>UO Community</div>
            <div>
              A Platform and Space for our Community to tell THEIR stories and
              More!
            </div>
          </div>
          <div>UO ON YOU: SUMMER IN THE CITY WITH VIVIAN LI</div>
          <div>UO PHOTO DIARY: AGE AND JIHAD'S FESTIVAL DIARY</div>
          <div>UO BEAUTY: DONNI X FACE LACE</div>
        </div>
        <div className="giftCards">Gift Cards</div>
        <div className="linksContainer" />
        <div>Give the Gift of UO</div>
        <div>Download the UO APP now!</div>
        <div>Buy now, Pay later with afterpay</div>
        <div className="aboutContainer">
          <h3>About UO</h3>
          <p>
            Urban Outfitters is a lifestyle retailer dedicated to inspiring
            customers through a unique combination of product, creativity and
            cultural understanding. Founded in 1970 in a small space across the
            street from the University of Pennsylvania, Urban Outfitters now
            operates over 2...
          </p>
          <p>See More</p>
        </div> */}
        <div className="signupContainer">
          <div className="signup1">
            <p>Sign Up for Email</p>
            <p>
              Sign up to receive Urban Outfitters emails and get first dibs on
              new arrivals, sales, exclusive content, events and more!
            </p>
          </div>
          <div className="signup2">
            <p>Email Address*</p>
            <input classname="emailBox" type="text" />
            <button>Submit</button>
          </div>
          <div className="signup3">
            <p>
              By entering your email address, you agree to receive Urban
              Outfitters offers, promotions, other commercial messages. You can
              view our Privacy Policy here and you may unsubscribe at any time.
            </p>
          </div>
        </div>
        <footer>
          <div>
            <p>Help</p>
            <p>Order Sttus</p>
            <p>Start A Return Or Exchange</p>
            <p>Shipping</p>
            <p>Orders + Payments</p>
            <p>FAQ</p>
            <p>What Is Klarna?</p>
            <p>Product Recalls</p>
            <p>Contact Us</p>
            <p>See All Help Topics</p>
          </div>
          <div>
            <p>Quick Links</p>
            <p>Brands</p>
            <p>Gift Cards</p>
            <p>Careers</p>
            <p>Shop Europe</p>
            <p>Shop Canada</p>
          </div>
          <div>
            <p>Extras</p>
            <p>Afterpay</p>
            <p>UO MRKT</p>
            <p>UO Community</p>
            <p>UO Community Cares</p>
            <p>Creative Services</p>
            <p>UO Spaces</p>
          </div>
          <div>
            <p>Store Locator</p>
            <p>Sign Up For Email</p>
          </div>
          <div>downloads</div>
          <div>
            <p>
              Privacy PolicyTerms of UseCA TransparencyAccessibilityURBN.comFor
              CA Residents
            </p>
            <p>© 2022 Urban Outfitters All Rights Reserved</p>
          </div>
        </footer>
      </div>
      {/* <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
