import { PageLayout } from "../components/PageLayout";

export function Homepage() {
    return (
        <PageLayout title={"Egy átlagos autószerelő-műhely átlagos weboldala"}>
            <h2>
                Üdvözöllek az átlagos weboldalunkon!
            </h2>
            <p>
                Itt az átlagos autószerelő-műhelyben a legfontosabb az átlagos vásárló lehető legnagyobb átlagos elégedettségi szintjét elérni, ezért hoztuk létre ezt az átlagos weboldalt, ahol az átlagos felhasználók a technólogia segítségével tudnak kommunikálni az átlagos autószerelőkkel. Átlagosan!
            </p>
            <button className="xxl">
                Bejelentkezés
            </button>
        </PageLayout>
    )
}