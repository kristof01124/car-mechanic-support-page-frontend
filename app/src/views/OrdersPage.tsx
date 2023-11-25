import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout"
import { ItemList } from "../components/ItemList"

interface OrdersPageInterface {
    IDs: number[]
}

export function OrdersPage(props: OrdersPageInterface) {
    return (
        <CustomerPageLayout>
            <ItemList IDs={props.IDs.map((id) => id.toString())} onClick={(id) => alert(id)} />
            <button>Új rendelés leadása</button>
        </CustomerPageLayout>
    )
}