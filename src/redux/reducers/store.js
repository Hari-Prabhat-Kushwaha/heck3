const initialState = [
  {
    shop_name: 'SHOPa',
    shop_id: '1',
    shop_area: 'Mumbai-Suburban',
    shop_category: 'Baker',
    open: '2022-06-03',
    close: '2022-06-01'
  },
  {
    shop_name: 'SHOPb',
    shop_id: '2',
    shop_area: 'Nashik',
    shop_category: 'Chemist',
    open: '2022-05-26',
    close: '2022-05-10'
  },
  {
    shop_name: 'SHOPc',
    shop_id: '3',
    shop_area: 'Nagpur',
    shop_category: 'Stationery-shop',
    open: '2022-06-03',
    close: '2022-06-01'
  },
  {
    shop_name: 'SHOPd',
    shop_id: '4',
    shop_area: 'Ahmednagar',
    shop_category: 'Grocery',
    open: '2022-05-26',
    close: '2022-05-10'
  },
  {
    shop_name: 'SHOPe',
    shop_id: '5',
    shop_area: 'Solapur',
    shop_category: 'Butcher',
    open: '2022-06-03',
    close: '2022-06-01'
  },
  {
    shop_name: 'SHOPf',
    shop_id: '6',
    shop_area: 'Nagpur',
    shop_category: 'Stationery-shop',
    open: '2022-06-03',
    close: '2022-06-01'
  }, {
    shop_name: 'SHOPg',
    shop_id: '7',
    shop_area: 'Solapur',
    shop_category: 'Butcher',
    open: '2022-06-03',
    close: '2022-06-01'
  },
  {
    shop_name: 'SHOPh',
    shop_id: '8',
    shop_area: 'Nagpur',
    shop_category: 'Stationery-shop',
    open: '2022-06-03',
    close: '2022-06-01'
  },
  {
    shop_name: 'SHOPi',
    shop_id: '9',
    shop_area: 'Thane',
    shop_category: 'Grocery',
    open: '2022-06-03',
    close: '2022-06-01'
  },
  {
    shop_name: 'SHOPj',
    shop_id: '10',
    shop_area: 'Pune',
    shop_category: 'Butcher',
    open: '2022-05-26',
    close: '2022-05-10'
  }
  

]
const store = (state = initialState, action) => {
  switch (action.type) {
    case 'shops':
      return [
        ...state,
        action.payload
      ];
    case 'shopsD':
      return state.filter(dt => dt.shop_id !== action.payload);
    case 'shopsU':
      const index = state.findIndex(dt => dt.shop_id === action.payload); //finding index of the item
      const newArray = [...state]; //making a new array
      newArray[index].shop_name=action.shop_name;//changing value in the new array
      newArray[index].shop_id=action.shop_id;
      newArray[index].shop_area=action.shop_area;
      newArray[index].shop_category=action.shop_category;
      newArray[index].open=action.open;
      newArray[index].close=action.close;
      return [...state]
    default:
      return state;
  }

}

export default store;