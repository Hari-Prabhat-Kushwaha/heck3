import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { shops } from '../../redux/actions';
import "./Form.css"
import "./Modal.css"
import ShopsList from './ShopsList';
import moment from 'moment';
const AddShops = () => {
    const storeLength = useSelector((state) => {
        return state.stores;
    })
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        const validateTime = moment(data.open).isBefore(data.close);
     
        if (validateTime) {
            if(data.shop_name.match(/^[A-Za-z]+$/))
              {
                dispatch(shops(data))
                console.table(data)
                alert("successfully submitted")
                reset()
              }
            else
              {
              alert("shop name can be only alphabet !!");
              }
        }else{
            alert("add Close Date after opening date")
        }
    };
    const [showModal, setShowModal] = useState(false);
    const handleKeyup = e => e.keyCode === 27 && setShowModal(false);
    useEffect(() => {
        if (showModal) window.addEventListener('keyup', handleKeyup);
        return () => window.removeEventListener('keyup', handleKeyup);
    });

    return (
        <>
            <form className="form model" onSubmit={handleSubmit(onSubmit)} >
                <input placeholder="Shop Name" {...register("shop_name", { required: true })} autoComplete="off" />
                {errors.shop_name && <p>This field is required</p>}
                <input type="hidden" defaultValue={storeLength.length + 1} {...register("shop_id")} autoComplete="off" readOnly />
                <div className='form-dropdown'>
                    <p>SHOPS AREA</p>
                    <select {...register("shop_area", { required: true })} className="p-1 mb-3">
                        <option value="Thane">Thane</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai-Suburban">Mumbai-Suburban</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Ahmednagar">Ahmednagar</option>
                        <option value="Solapur">Solapur</option>
                    </select>
                    {errors.shop_area && <p>This field is required</p>}
                </div>
                <div className='form-dropdown'>
                    <p>SHOPS CATEGORY -</p>
                    <select {...register("shop_category", { required: true })} className="p-1 mb-3">
                        <option value="Grocery">Grocery</option>
                        <option value="Butcher">Butcher</option>
                        <option value="Baker">Baker</option>
                        <option value="Chemist">Chemist</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Stationery-shop">Stationery-shop</option>
                    </select>
                    {errors.shop_category && <p>This field is required</p>}
                </div>

                <div className='form-dropdown'>
                    <div>
                        <p style={{ marginBottom: "10px" }}>Open Date</p>
                        <input type="date" {...register("open", { required: true })} />
                        {errors.open && <p>This field is required</p>}
                    </div>
                    <div>
                        <p style={{ marginBottom: "10px" }}>Close Date</p>
                        <input type="date"  {...register("close", { required: true })} />
                        {errors.close && <p>This field is required</p>}
                        {errors.closeD&& <p>close the shop before open!!</p>}
                    </div>
                </div>

                <input className="my-3" type="submit" value="ADD NEW SHOPS" />
            </form>

            <div>
                <ShopsList />
            </div>
        </>
    );
};

export default AddShops;

