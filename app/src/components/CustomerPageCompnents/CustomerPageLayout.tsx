import { NavigationBar } from "../NavigationBar";
import { PageLayout } from "../PageLayout";

export function CustomerPageLayout(props: React.PropsWithChildren<{}>) {
    return (
        <PageLayout title={"Egy átlagos autószerelő-műhely átlagos weboldala"}>
            <NavigationBar elements={
                [
                    {
                        title: "Rendelések",
                        id: "orders",
                        onPressed: (id) => alert(id)
                    },
                    {
                        title: "Autók",
                        id: "cars",
                        onPressed: (id) => alert(id)
                    },
                    {
                        title: "Fiók",
                        id: "profile",
                        onPressed: (id) => alert(id)
                    },
                    {
                        title: "Kilép",
                        id: "logout",
                        onPressed: (id) => alert(id)
                    }
                ]
            } />
            {props.children}
        </PageLayout>
    )
}