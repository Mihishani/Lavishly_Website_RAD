import './App.css'

function App() {
    return (
        <div className={''}>
            <header className={''}>
                <nav className="flex items-center justify-between p-4 bg-white text-cyan-950 border-2">
                    <img src="src/assets/image/the (1).png" title="logo" alt="logo" className="w-[150px]" />
                    <ul className="flex items-center gap-8">
                        <li className="navtext text-teal-600 hover:text-gray-300">Home</li>
                        <li className="navtext text-teal-600 hover:text-gray-300">Shop</li>
                        <li className="navtext text-teal-600 hover:text-gray-300">Offer</li>
                        <li className="navtext text-teal-600 hover:text-gray-300">Latest</li>
                        <li className="navtext text-teal-600 hover:text-gray-300">Customer Care</li>
                    </ul>
                    <div className={'flex gap-6'}>
                        <img src="src/assets/image/icons8-login-67.png" title="LoginIcon" alt="LoginIcon" className="w-7" />
                        <img src="src/assets/image/icons8-cart-64.png" title="Cart" alt="cart" className="w-7" />
                    </div>
                </nav>
            </header>

            {/*-----------------------------------------------------------------------------------------------------------*/}


            <section>
                <div>
                    <img src={'src/assets/image/copy.jpg'} alt={'bgimage'} className={'w-full h-200'}/>
                    <img src={'src/assets/image/backgroundLogo.png'} alt={'logo'} className={'absolute w-[1310px] top-[130px] h-[595px] px-2 bglogo bg-opacity-0 rounded-2xl rounded-2xl'}/>
                    <div className={'absolute w-full top-[113px] h-[640px] px-2   bg-teal-200 bg-opacity-50'}></div>

                    <div className={'absolute w-[1300px] top-[130px]  h-[595px] p-20 textTran  bg-teal-50 bg-opacity-50 rounded-2xl rounded-2xl '}>
                        <h1 className={'homePtext  text-teal-600 '}>Welcome to LAVISHLY - Your Oasis of Beauty and</h1>
                        <h1 className={'homePtext  text-teal-600 '}>Style!</h1>
                        <h1 className={'absolute HomeSub text-teal-900 top-[200px]'}>Hello Beautiful Souls!</h1>
                        <h1 className={'absolute HomeSub text-teal-900 top-[270px]'}>Step into a world where beauty knows no bounds and style is an art form. We</h1>
                        <h1 className={'absolute HomeSub2 text-teal-900 top-[310px]'}>are thrilled to welcome you to LAVISHLY, your ultimate destination for all</h1>
                        <h1 className={'absolute HomeSub3 text-teal-900 top-[350px]'}>things glamorous, chic, and utterly fabulous!</h1>

                        <button className={'homebtn absolute bg-teal-800 hover:bg-teal-400 rounded-l rounded-r hover:text-teal-950'}>Shop Now</button>
                    </div>
                </div>
            </section>

            {/*------------------------------------------------------------------------------------------------------------------------------------------*/}

            <section>
                <img src={'src/assets/image/adobe Background image 2.png'} alt={'bgimage'} className={'absolute w-full'} />
                <div className={'absolute w-[1518px] h-[730px] bg-teal-100 bg-opacity-80'}>
                    <h1 className={'ShopTxt'}>SHOP</h1>
                    <p className={'shopSub1'}>Shop effortlessly from the comfort of your home with our seamless online shopping</p>
                    <p className={'shopSub2'}>experience, bringing convenience and style to your fingertips.</p>

                    <div className={'ShopingImg absolute top-[200px] left-[120px] flex items-center gap-20'}>
                        <img src={'src/assets/image/How to identify a bad beautician_.jpeg'} className={'w-[260px] h-[400px]'}/>
                        <img src={'src/assets/image/O H H O N E Y.jpeg'} className={'w-[260px] h-[400px]'}/>
                        <img src={'src/assets/image/5 New Makeup Releases at Sephora To Splurge On - thatgirlArlene.jpeg'} className={'w-[260px] h-[400px]'}/>
                        <img src={'src/assets/image/girls hand bags.jpeg'} className={'w-[260px] h-[400px]'}/>
                    </div>

                    <div className={'ShopCategoriesName text-xl flex text-center top-[650px] absolute gap-[260px] left-[160px]'}>
                        <h1 className={''}>Skin Care <img src={'src/assets/image/right-arrow.png'} className={'w-[40px] absolute left-[80px] top-[-3px]'}/></h1>
                        <h1>Hair Care<img src={'src/assets/image/right-arrow.png'} className={'w-[40px] absolute left-[415px] top-[-3px]'}/></h1>
                        <h1>Make-up items<img src={'src/assets/image/right-arrow.png'} className={'w-[40px] absolute left-[790px] top-[-3px]'}/></h1>
                        <h1>Hand Bag & parse<img src={'src/assets/image/right-arrow.png'} className={'w-[40px] absolute left-[1195px]  top-[-3px]'}/></h1>
                    </div>
                </div>
            </section>

            {/*----------------------------------------------------------------------------------*/}

            <section>
                <img src={"src/assets/image/adobe Background image 2.png"} className={'relative top-[729px] w-full'}/>
                <div className={'absolute w-[1518px] h-[730px] bg-teal-100 bg-opacity-80'}>


                    <div className={'ShopingImg absolute top-[90px] left-[120px] flex items-center gap-28'}>
                        <img src={'src/assets/image/download (1).jpeg'} className={'w-[265px] h-[400px]'}/>
                        <img src={'src/assets/image/Ted Baker Menipp High heel.jpg'} className={'w-[265px] h-[400px]'}/>
                        <img src={'src/assets/image/Lacoste Straightset.jpeg'} className={'w-[265px] h-[400px]'}/>
                    </div>

                    <div className={'ShopCategoriesName text-xl flex text-center top-[550px] absolute gap-[280px] left-[160px]'}>
                        <h1 className={''}>Earrings <img src={'src/assets/image/right-arrow.png'} className={'w-[40px] absolute left-[75px] top-[-3px]'}/></h1>
                        <h1>High Heels<img src={'src/assets/image/right-arrow.png'} className={'w-[40px] absolute left-[435px] top-[-3px]'}/></h1>
                        <h1>Casual Shoes & Sandals<img src={'src/assets/image/right-arrow.png'} className={'w-[40px] absolute left-[905px] top-[-3px]'}/></h1>
                    </div>
                </div>
            </section>

            {/*--------------------------------------------------------------------------------------------------*/}

            <section>
                <img src={'src/assets/image/adobe Background image 2.png'} className={'relative  top-[729px] w-full'}/>
                <div className={'absolute  w-full  h-[730px]  bg-teal-100 bg-opacity-80'}>
                    <h1 className={'OffersTxt'}>OFFERS</h1>
                    <p className={'offersSub1'}>Unleash savings like never before! Explore our exclusive web offers now – your shortcut to</p>
                    <p className={'offersSub2'}>incredible deals!</p>
                </div>

                <div className={'absolute flex items-center gap-72 left-[155px] top-[2340px]'}>
                    <img src={'src/assets/image/Niacinamide.jpg'} className={'w-[200px] h-[200px] rounded-l rounded-r '}/>
                    <img src={'src/assets/image/salicylic.jpg'} className={'w-[200px] h-[200px] rounded-l rounded-r '}/>
                    <img src={'src/assets/image/peeling.jpg'} className={'w-[200px] h-[200px] rounded-l rounded-r '}/>
                </div>
                    <div className={'relative'}>
                        <h1 className={'OfferText1 absolute top-[325px] left-[110px]'}>The ordinary Niacinamide 10% + Zinc 1% </h1>
                        <p className={'OFT1 absolute top-[350px] left-[140px]'}>High strength Vitamin & Mineral</p>
                        <p className={'OFT1 absolute top-[370px] left-[175px]'}>Blemish Formula  30ml</p>
                            <div className={'OFT2 flex gap-5 absolute top-[390px] left-[140px]'}>
                                <p className={'text-red-800 line-through'}>Rs6,550.00</p>
                                <p className={'text-teal-800'}>Rs5,764.00   12% off</p>
                            </div>
                        <button className={'absolute rounded-l rounded-r text-white bg-teal-800 w-[80px] h-[40px] top-[420px] left-[200px] hover:text-black hover:bg-teal-500'}>Lern more</button>
                    </div>

                <div className={'relative'}>
                    <h1 className={'OfferText1 absolute top-[325px] left-[600px]'}>The ordinary Salicylic Acid 2% Solution </h1>
                    <p className={'OFT1 absolute top-[350px] left-[640px]'}>Formulated for Acne-Prone Skin.</p>
                    <p className={'OFT1 absolute top-[370px] left-[720px]'}>30ml</p>
                    <div className={'OFT2 flex gap-5 absolute top-[390px] left-[640px]'}>
                        <p className={'text-red-800 line-through'}>Rs6,550.00</p>
                        <p className={'text-teal-800'}>Rs5,764.00   12% off</p>
                    </div>
                    <button className={'absolute rounded-l rounded-r text-white bg-teal-800 w-[80px] h-[40px] top-[420px] left-[700px] hover:text-black hover:bg-teal-500'}>Lern more</button>
                </div>

                <div className={'relative'}>
                    <h1 className={'OfferText1 absolute top-[325px] left-[1050px]'}>The ordinary Peeling Solution AHA 30% + BHA 2%</h1>
                    <p className={'OFT1 absolute top-[350px] left-[1105px]'}>10- Minute Exfoliating Facial. PH-3.6</p>
                    <p className={'OFT1 absolute top-[370px] left-[1205px]'}>30ml</p>
                    <div className={'OFT2 flex gap-5 absolute top-[390px] left-[1120px]'}>
                        <p className={'text-red-800 line-through'}>Rs6,550.00</p>
                        <p className={'text-teal-800'}>Rs5,764.00   12% off</p>
                    </div>
                    <button className={'absolute rounded-l rounded-r text-white bg-teal-800 w-[80px] h-[40px] top-[420px] left-[1200px] hover:text-black hover:bg-teal-500'}>Lern more</button>
                </div>

                <div className={'absolute flex items-center gap-80 left-[370px] top-[2620px]'}>
                    <img src={'src/assets/image/Marine.jpg'} className={'w-[200px] h-[200px] rounded-l rounded-r '}/>
                    <img src={'src/assets/image/b61d65f589ca63cb6e3d8bddeee837ba.jpg'} className={'w-[200px] h-[200px] rounded-l rounded-r '}/>
                </div>

                <div className={'relative'}>
                    <h1 className={'OfferText1 absolute top-[605px] left-[350px]'}>The ordinary Marine Hyaluronic </h1>
                    <p className={'OFT1 absolute top-[625px] left-[400px]'}>lightweight serum.</p>
                    <p className={'OFT1 absolute top-[640px] left-[440px]'}>30ml</p>
                    <div className={'OFT2 flex gap-5 absolute top-[660px] left-[360px]'}>
                        <p className={'text-red-800 line-through'}>Rs6,550.00</p>
                        <p className={'text-teal-800'}>Rs5,764.00   12% off</p>
                    </div>
                    <button className={'absolute rounded-l rounded-r text-white bg-teal-800 w-[80px] h-[40px] top-[685px] left-[420px] hover:text-black hover:bg-teal-500'}>Lern more</button>
                </div>

                <div className={'relative'}>
                    <h1 className={'OfferText1 absolute top-[605px] left-[800px]'}>The ordinary Vitamin C Suspension 23% + HA Spheres 2%</h1>
                    <p className={'OFT1 absolute top-[625px] left-[850px]'}>A Water-free, Silicon-free Stable Suspension.</p>
                    <p className={'OFT1 absolute top-[640px] left-[970px]'}>30ml</p>
                    <div className={'OFT2 flex gap-5 absolute top-[660px] left-[880px]'}>
                        <p className={'text-red-800 line-through'}>Rs6,550.00</p>
                        <p className={'text-teal-800'}>Rs5,764.00   12% off</p>
                    </div>
                    <button className={'absolute rounded-l rounded-r text-white bg-teal-800 w-[80px] h-[40px] top-[685px] left-[950px] hover:text-black hover:bg-teal-500'}>Lern more</button>
                </div>
            </section>
n
            {/*-----------------------------------------------------------------------------------------------------------------*/}

            <section>
                <img src={'src/assets/image/adobe Background image 2.png'} alt={'bgimage'} className={'relative w-full top-[705px] '} />
                <div className={'absolute top-[2942px] w-[1518px] h-[730px] bg-teal-100 bg-opacity-80'}>
                    <h1 className={'LatestTxt'}>LATEST</h1>
                    <h1 className={'LatestSub'}><u>LATEST WOMEN BAG</u></h1>

                    <div className={'absolute flex gap-40 top-[100px] left-[105px]'}>
                        <img src={'src/assets/image/Pleated Minimalist Half Moon Dumpling Bag.jpg'} className={'w-[200px] h-[200px]'}/>
                        <img src={'src/assets/image/Quilted Embossed Flap Chain Bag.jpg'} className={'w-[200px] h-[200px]'}/>
                        <img src={'src/assets/image/Mulitiple color Casual bag.jpg'} className={'w-[200px] h-[200px]'}/>
                        <img src={'src/assets/image/Casual Fashionable Women Bag.jpg'} className={'w-[200px] h-[200px]'}/>
                    </div>

                    <div>
                        <h1 className={'latestnametxt absolute top-[300px] left-[45px]'}>Pleated Minimalist Half Moon Dumpling Bag</h1>
                        <p className={'text-teal-900 font-medium text-sm+ absolute top-[320px] left-[150px]'}>Rs3,580.00</p>
                        <button className={'absolute w-[80px] h-[40px] bg-teal-800 rounded-l rounded-r text-white left-[150px] top-[350px]'}>Shop Now</button>
                    </div>

                    <div>
                        <h1 className={'latestnametxt absolute top-[300px] left-[460px]'}> Quilted Embossed Flap Chain Bag</h1>
                        <p className={'text-teal-900 font-medium text-sm+ absolute top-[320px] left-[520px]'}>Rs4,890.00</p>
                        <button className={'absolute w-[80px] h-[40px] bg-teal-800 rounded-l rounded-r text-white left-[520px] top-[350px]'}>Shop Now</button>
                    </div>

                    <div>
                        <h1 className={'latestnametxt absolute top-[300px] left-[840px]'}> Mulitiple color Casual bag</h1>
                        <p className={'text-teal-900 font-medium text-sm+ absolute top-[320px] left-[880px]'}>Rs5,890.00</p>
                        <button className={'absolute w-[80px] h-[40px] bg-teal-800 rounded-l rounded-r text-white left-[880px] top-[350px]'}>Shop Now</button>
                    </div>

                    <div>
                        <h1 className={'latestnametxt absolute top-[300px] left-[1180px]'}>  Casual Fashionable Women Bag</h1>
                        <p className={'text-teal-900 font-medium text-sm+ absolute top-[320px] left-[1240px]'}>Rs2,400.00</p>
                        <button className={'absolute w-[80px] h-[40px] bg-teal-800 rounded-l rounded-r text-white left-[1240px] top-[350px]'}>Shop Now</button>
                    </div>

                    <div className={'absolute flex gap-40 top-[400px] left-[105px]'}>
                        <img src={'src/assets/image/Casual Women Bag.jpg'} className={'w-[200px] h-[200px]'}/>
                        <img src={'src/assets/image/Glitter Marble Purse.jpg'} className={'w-[200px] h-[200px]'}/>
                        <img src={'src/assets/image/Quilted Flap Chain Square Bag.jpg'} className={'w-[200px] h-[200px]'}/>
                        <img src={'src/assets/image/Bag.jpg'} className={'w-[200px] h-[200px]'}/>
                    </div>

                    <div>
                        <h1 className={'latestnametxt absolute top-[600px] left-[115px]'}> Casual Women Chain Bag</h1>
                        <p className={'text-teal-900 font-medium text-sm+ absolute top-[620px] left-[150px]'}>Rs3,890.00</p>
                        <button className={'absolute w-[80px] h-[40px] bg-teal-800 rounded-l rounded-r text-white left-[150px] top-[650px]'}>Shop Now</button>
                    </div>

                    <div>
                        <h1 className={'latestnametxt absolute top-[600px] left-[500px]'}>Glitter Marble Purse</h1>
                        <p className={'text-teal-900 font-medium text-sm+ absolute top-[620px] left-[520px]'}>Rs7,990.00</p>
                        <button className={'absolute w-[80px] h-[40px] bg-teal-800 rounded-l rounded-r text-white left-[520px] top-[650px]'}>Shop Now</button>
                    </div>

                    <div>
                        <h1 className={'latestnametxt absolute top-[600px] left-[825px]'}> Quilted Flap Chain Square Bag</h1>
                        <p className={'text-teal-900 font-medium text-sm+ absolute top-[620px] left-[880px]'}>Rs5,690.00</p>
                        <button className={'absolute w-[80px] h-[40px] bg-teal-800 rounded-l rounded-r text-white left-[880px] top-[650px]'}>Shop Now</button>
                    </div>

                    <div>
                        <h1 className={'latestnametxt absolute top-[600px] left-[1190px]'}> Gold Cyan Square Hand Bag</h1>
                        <p className={'text-teal-900 font-medium text-sm+ absolute top-[620px] left-[1240px]'}>Rs6,690.00</p>
                        <button className={'absolute w-[80px] h-[40px] bg-teal-800 rounded-l rounded-r text-white left-[1240px] top-[650px]'}>Shop Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
