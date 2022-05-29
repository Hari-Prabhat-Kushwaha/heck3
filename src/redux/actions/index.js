export const increment = (num) => {
    return (
        {
            type: "INCREMENT",
            payload: num,

        }
    )
}
export const decrement = () => {
    return (
        {
            type: "DECREMENT"

        }
    )
}
export const shops = (shops) => {
    return (
        {
            type: "shops",
            payload: shops

        }
    )
}
export const shopsD = (idd) => {
    return (
        {
            type: "shopsD",
            payload: idd

        }
    )
}
export const shopsU = (data) => {
    return (
        {
            type: "shopsU",
            payload: data.shop_id,
            shop_name: data.shop_name,
            shop_id:  data.shop_id,
            shop_area: data.shop_area,
            shop_category: data.shop_category,
            open: data.open,
            close: data.close,
        }
    )
}