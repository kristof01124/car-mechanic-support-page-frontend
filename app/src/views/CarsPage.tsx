import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout"
import { ItemList } from "../components/ItemList"

interface CarsPageInterface {
    IDs: number[]
}

export function CarsPage(props: CarsPageInterface) {
    return (
        <CustomerPageLayout>
            <ItemList IDs={props.IDs.map((id) => id.toString())} onClick={(id) => alert(id)} />
            <button>Új autó hozzáadása</button>
        </CustomerPageLayout>
    )
}