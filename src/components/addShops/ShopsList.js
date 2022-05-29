import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shopsD } from '../../redux/actions';
import UpdateModal from './UpdateModal';
import "./Table.css";
const ShopsList = () => {
    const storeLength = useSelector((state) => {
        return state.stores;
    })
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const handleKeyup = e => e.keyCode === 27 && setShowModal(false);
    const [updateid, setUpdateId] = useState('');
    useEffect(() => {
        if (showModal) window.addEventListener('keyup', handleKeyup);
        return () => window.removeEventListener('keyup', handleKeyup);
    });
    const shopsUU = (d) => {
        setUpdateId(d)
        setShowModal(!showModal)
    }

    return (
        <div className="shopslist">
            <table id="customers">
                <thead>
                    <tr>
                        <th className="shopIDlist">NO.</th>
                        <th>SHOPS NAME</th>
                        <th>DELETE</th>
                        <th>UPDATE</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        storeLength.map((dt, idx) => {
                            const { shop_name, shop_id } = dt;

                            return (
                                <tr key={idx}>
                                    <td className="shopIDlist">{shop_id}</td>
                                    <td>{shop_name}</td>
                                    <td><button style={{cursor: 'pointer'}} onClick={() => dispatch(shopsD(shop_id))}>Delete shops </button></td>
                                    <td><button style={{cursor: 'pointer'}} onClick={() => shopsUU(shop_id)}>update shops </button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
            <div className="App">
                {showModal && <Modal>
                    <UpdateModal setShowModal={setShowModal} showModal={showModal} shop_id={updateid} />
                </Modal>}
            </div>
        </div>
    );
};

export default ShopsList;
const Modal = ({ children }) => <div className='Modal'>{children}</div>;