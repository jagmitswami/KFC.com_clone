function navbar() {
  return `
  <div>
        <div id="navbar">
      <div id="mySidebar" class="sidebar">
          <div id="sidebar_nav">
              <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
              <div id="sidebar_logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="42" viewBox="0 0 80 42" fill="none"
                      class="injected-svg" data-src="/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <rect width="16.4103" height="41.0256" fill="#E4002B"></rect>
                      <rect x="32.8203" width="16.4103" height="41.0256" fill="#E4002B"></rect>
                      <rect x="63.5898" width="16.4103" height="41.0256" fill="#E4002B"></rect>
                  </svg>
              </div>
              <div class="cartLengthContainer">
                  <div id="sidecart_cnt">0</div>
                  <img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                      id="sidecart_svg">
              </div>
          </div>
          <a href="#" id="letscookin">LET'S GET <br>COOKIN' <br>
              <a>
                  <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
                      id="signin_svg2">
                  <span id="sign_side">Sign In/Sign up <span> →</span></span>
              </a></a>
          <div class="menu" onclick="tomenu()">
              <div>Menu</div><img
                  src="https://images.ctfassets.net/wtodlh47qxpt/4k2cm92M32R26grdRRbI3B/e335a7a29e35e5d7aa1900a7f65eea12/menu__1.png"
                  alt="">
          </div>
          <div class="menu" onclick="todeal()">
              <div>Deals</div><img
                  src="https://images.ctfassets.net/wtodlh47qxpt/7wp9jn9bCtkSpS2RklLTXD/9f5a47d39f34c6ede838ac01830659db/Deals.png"
                  alt="">
          </div>
          <div class="data_menu">
              <div>Get Help</div>
              <div>Contact Us</div>
              <div>KFC Feedback</div>
              <div>Privacy Policy</div>
          </div>
      </div>


      <div id="burger">
          <img src="https://online.kfc.co.in/static/media/MenuIcon.e607771f.svg" onclick="openNav()">
      </div>
      <div class="logoContainer">
          <div>
              <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" id="nav_logo"
                  onclick="toindex()">
          </div>

          <span id="nav_titles">
              <button onclick="tomenu()">Menu</button>
              <button onclick="todeal()">Deals</button>
          </span>
      </div>

      <div style="display: flex;align-items: center;">

          <div id="nav_cart">
              <div onclick="signinto()" class="signinLink">
                  <div>
                      <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
                          id="signin_svg">
                  </div>
                  <div>
                      <span id="signin_page">Sign in</span>
                  </div>
              </div>

          </div>



          <div onclick="tocartpage()" style="color: red;" class="totalContainer">
              <div>₹<span id="cost_of_cart">0</span></div>
              <div id="cart_cnt" onclick="tocartpage()">0</div>
              <div>
                  <img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                      id="cart_svg">

              </div>
          </div>
      </div>
    </div>
</div>
  `;
}

export default navbar;

/* `
  <div id="mySidebar" class="sidebar">
    <div id="sidebar_nav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div id="sidebar_logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="42" viewBox="0 0 80 42" fill="none" class="injected-svg" data-src="/static/media/Stripes_Small_OffersIcon.87fc6256.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="16.4103" height="41.0256" fill="#E4002B"></rect>
                <rect x="32.8203" width="16.4103" height="41.0256" fill="#E4002B"></rect>
                <rect x="63.5898" width="16.4103" height="41.0256" fill="#E4002B"></rect>
            </svg>
        </div>
        <div>
        <div id="sidecart_cnt">0</div>
         <img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" id="sidecart_svg"  >
        </div>
    </div>
    <hr>
    <a href="#" id="letscookin">LET'S GET <br>COOKIN' <br>
        <a >
            <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" id="signin_svg2" >
            <span id="sign_side">Sign In/Sign up <span> →</span></span>
        </a></a>
    <div class="menu" onclick="tomenu()"><div>Menu</div><img src="https://images.ctfassets.net/wtodlh47qxpt/4k2cm92M32R26grdRRbI3B/e335a7a29e35e5d7aa1900a7f65eea12/menu__1.png" alt=""></div>
    <div class="menu" onclick="todeal()"><div>Deals</div><img src="https://images.ctfassets.net/wtodlh47qxpt/7wp9jn9bCtkSpS2RklLTXD/9f5a47d39f34c6ede838ac01830659db/Deals.png" alt=""></div>
    <div class="data_menu">
        <div >Get Help</div>
        <div >Contact Us</div>
        <div>KFC Feedback</div>
        <div>Privacy Policy</div>
    </div>
</div>
<div id="burger">
    <img src="https://online.kfc.co.in/static/media/MenuIcon.e607771f.svg" onclick="openNav()">
</div>
<div>
<img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" id="nav_logo" onclick="toindex()">
<span id="nav_titles">
    <button onclick="tomenu()">Menu</button>
    <button onclick="todeal()">Deals</button>
</span>
</div>
<div id="nav_cart">

<a onclick="signinto()" >
    <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" id="signin_svg" >
    <span id="signin_page"></span>
</a>
<a onclick="tocartpage()" >
    <span>₹<span id="cost_of_cart">0</span></span>
    <div id="cart_cnt" onclick="tocartpage()">0</div>
    <img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" id="cart_svg"  >
</a>
</div>`; */
