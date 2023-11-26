import { NavigateFunction, useNavigate } from "react-router-dom"
import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout"
import { ItemList } from "../components/ItemList"

interface OrdersPageInterface {
    IDs: number[]
}

function onItemClick(id: string, navigate: NavigateFunction) {
    navigate("/order/" + id)
}

function onClick(navigate: NavigateFunction) {
    navigate("/createOrder")
}

export function OrdersPage(props: OrdersPageInterface) {
    var navigate = useNavigate()
    return (
        <CustomerPageLayout>
            <ItemList IDs={props.IDs.map((id) => id.toString())} onClick={(id) => onItemClick(id, navigate)} />
            <button onClick={() => onClick(navigate)}>Új rendelés leadása</button>
        </CustomerPageLayout>
    )
}