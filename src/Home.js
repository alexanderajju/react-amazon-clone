import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

<div className="home__row">
<Product
className="product__rating"
id="12354678796"
title="The Lean StartUp:Now Constant Innovation creates "
price={11.96}
rating={5}
image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"

/>
<Product
className="product__rating"
id="12354678796"
title="The Lean StartUp:Now Constant Innovation creates "
price={11.96}
rating={5}
image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"

/>
<Product
className="product__rating"
id="12354678796"
title="The Lean StartUp:Now Constant Innovation creates "
price={11.96}
rating={5}
image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"

/>


</div>

<div className="home__row">
<Product
className="product__rating"
id="12354678796"
title="The Lean StartUp:Now Constant Innovation creates "
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"

/>
<Product
className="product__rating"
id="12354678796"
title="The Lean StartUp:Now Constant Innovation creates "
price={11.96}
rating={5}
image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"

/>


</div>

<div className="home__row">
<Product
className="product__rating"
id="12354678796"
title="The Lean StartUp:Now Constant Innovation creates "
price={11.96}
rating={5}
image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"

/>


</div>





        </div>
    )
}

export default Home
