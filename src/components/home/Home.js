import React, { useEffect, useState } from 'react';
import "./Home.css";
import { useSelector } from 'react-redux';
import "./Form.css"
import "./Modal.css"




const Home = () => {
    const storeLength = useSelector((state) => {
        return state.stores;
    })
    const [shops] = useState(storeLength);
    const [commonshops, setCommonShop] = useState([]);
    const [commonFiler, setCommonFiler] = useState({
        filterByArea: "ALL",
        filterByCategory: "ALL",
        filterByOpenOrClose: "Open/Close"
    })

    useEffect(() => {
        if (commonFiler.filterByArea !== "ALL") {
            let newshops = shops.filter(element => {
                if (commonFiler.filterByCategory !== "ALL") {
                    return element.shop_area === commonFiler.filterByArea && element.shop_category === commonFiler.filterByCategory;
                } else {
                    return element.shop_area === commonFiler.filterByArea;
                }
            });
            setCommonShop(newshops)
        }
        else {
            let newshopss = shops.filter((element, x, y) => {
                if (commonFiler.filterByCategory !== "ALL") {
                    return element.shop_category === commonFiler.filterByCategory;
                } else {
                    return y;
                }
            });
            setCommonShop(newshopss)
        }
    }, [commonFiler])



    return (
        <>
        <div className="home">
            <div className='home-filter border'>
                <div className="catagories py-5 ms-5">
                    <label for="blood" style={{color:'black',marginLeft:"100px"}}><b>Choose a Area : &nbsp;</b></label>
                    <select id="blood" name="bloodlist" onChange={(e) => setCommonFiler({
                        ...commonFiler, filterByArea: e.target.value
                    })}>
                        <option selected="selected" value="ALL">ALL</option>
                        <option value="Thane">Thane</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai-Suburban">Mumbai-Suburban</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Ahmednagar">Ahmednagar</option>
                        <option value="Solapur">Solapur</option>
                    </select>
                </div>
                <div className="catagories py-5 ms-5">
                    <label for="blood" style={{color:'black',marginLeft:"100px"}}><b>Choose a Category : &nbsp;</b></label>
                    <select id="blood" name="bloodlist" onChange={(e) => setCommonFiler({
                        ...commonFiler, filterByCategory: e.target.value
                    })}>
                        <option selected="selected" value="ALL">ALL</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Butcher">Butcher</option>
                        <option value="Baker">Baker</option>
                        <option value="Chemist">Chemist</option>
                        <option value="Stationery-shop">Stationery-shop</option>
                    </select>
                </div>
                <div className="catagories py-5 ms-5">
                    <label for="blood" style={{color:'black',marginLeft:"100px"}}><b>open/close status(Today) : &nbsp;</b></label>
                    <select id="blood" name="bloodlist" onChange={(e) => setCommonFiler({
                        ...commonFiler, filterByOpenOrClose: e.target.value
                    })}>
                        <option selected="selected" value="ALL">Open/Close</option>
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                    </select>
                </div>
            </div>
            <div className="homeGrid" >
                {
                    commonshops && commonshops.map((dt, idx) => {
                        const { shop_name, shop_area, shop_category, open, close } = dt
                        return (
                            <div key={idx} className='homeGridShops'>
                                <p className='grid-shop-p'>{shop_name}</p>
                                <p>AREA : {shop_area}</p>
                                <p>CATEGORY : {shop_category}</p>
                                <p>OPEN DATE : {open}</p>
                                <p>CLOSE DATE : {close}</p>
                            </div>
                        )
                    }).reverse()
                }
            </div>


            


        </div>
        </>
    );
};

export default Home;


// const AddShops = () => {
    

//     return (
//         <>
            
//         </>
//     );
// };

// export default AddShops;

