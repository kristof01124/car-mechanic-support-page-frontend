import { NavigateFunction, useNavigate } from "react-router-dom"
import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout"
import { ItemList } from "../components/ItemList"
import { Button } from "react-bootstrap"

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

            <h1>Rendelések</h1>
            <ItemList IDs={props.IDs.map((id) => id.toString())} onClick={(id) => onItemClick(id, navigate)} />
            <Button className="carsButton" size="lg" onClick={() => onClick(navigate)}>Új rendelés leadása</Button>
        </CustomerPageLayout>
    )
}