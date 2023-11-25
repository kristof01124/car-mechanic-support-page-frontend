import "./ViewList.css"

// TODO: export constants
var editButtonText: string = "Módosít"

interface ViewListElementInterface {
    name: string,
    id: string,
    value: any,
}

function ViewListElement(props: React.PropsWithChildren<ViewListElementInterface>) {
    return (
        <div className="ViewListElementBody">
            <div>{props.name}</div>
            <div>{props.value}</div>
            {props.children}
        </div>
    )
}

interface ViewListInterface {
    onClicked: (id: string) => any,
    elements: ViewListElementInterface[]
}

export function ViewList(props: ViewListInterface) {
    return (
        <>
            {
                props.elements.map(
                    (value) => (
                        <ViewListElement name={value.name} id={value.id} value={value.value}>
                            <button onClick={() => props.onClicked(value.id)}>{editButtonText}</button>
                        </ViewListElement>
                    )
                )
            }
        </>
    )
}