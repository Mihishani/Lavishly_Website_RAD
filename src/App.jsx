import './App.css'

function App() {
    return (
        <div>
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

                    <div>
                        <img src={''}/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
