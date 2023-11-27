import { Link, useNavigate } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { Button } from "react-bootstrap";

export function Homepage() {
    var navigate = useNavigate()
    return (
        <PageLayout title={"Egy átlagos autószerelő-műhely átlagos weboldala"}>
            <h1 className="homePageHeader">
                Üdvözöllek az átlagos weboldalunkon!
            </h1>
            <p className="homePageText">
                Itt az átlagos autószerelő-műhelyben a legfontosabb az átlagos vásárló lehető legnagyobb átlagos elégedettségi szintjét elérni, ezért hoztuk létre ezt az átlagos weboldalt, ahol az átlagos felhasználók a technólogia segítségével tudnak kommunikálni az átlagos autószerelőkkel. Átlagosan!
            </p>
            <Button variant="primary" className="homepageButton" size="lg" onClick={() => navigate("/login")}>
                Bejelentkezés
            </Button>

        </PageLayout>
    )
}