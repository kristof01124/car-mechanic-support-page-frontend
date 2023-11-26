import { NavigateFunction, useNavigate } from "react-router-dom";
import { NavigationBar } from "../NavigationBar";
import { PageLayout } from "../PageLayout";
import { clearCurrentUser, setCurrentUser } from "../../controller/session/session";

function logout(navigate: NavigateFunction) {

}

export function CustomerPageLayout(props: React.PropsWithChildren<{}>) {
    var navigate = useNavigate()
    return (
        <PageLayout title={"Egy átlagos autószerelő-műhely átlagos weboldala"}>
            <NavigationBar elements={
                [
                    {
                        title: "Rendelések",
                        id: "orders",
                        onPressed: (id) => navigate("/orders")
                    },
                    {
                        title: "Autók",
                        id: "cars",
                        onPressed: (id) => navigate("/cars")
                    },
                    {
                        title: "Fiók",
                        id: "profile",
                        onPressed: (id) => navigate("/user")
                    },
                    {
                        title: "Kilép",
                        id: "logout",
                        onPressed: (id) => { navigate("/"); clearCurrentUser() }
                    }
                ]
            } />
            {props.children}
        </PageLayout>
    )
}