
import { MyDropdownButton, MyDropdownButtonElementInterface } from "./components/MyDropdownButton"

export function getValuesForDropdownMenu(id: string, onClicked: (id: string) => any): MyDropdownButtonElementInterface[] {
    return [
        {
            id: "alma",
            onClick: onClicked,
            title: "alma"
        },
        {
            id: "korte",
            onClick: onClicked,
            title: "korte"
        },
        {
            id: "szolo",
            onClick: onClicked,
            title: "szolo"
        },
        {
            id: "bogyo",
            onClick: onClicked,
            title: "bogyo"
        }
    ]
}