import "./NavigationBar.css"

interface NavigationBarElementInterface {
    title: string,
    id: string,
    onPressed: (id: string) => any
}

interface NavigationBarInterface {
    elements: NavigationBarElementInterface[]
}

export function NavigationBar(props: NavigationBarInterface) {
    return (
        <div className="NavigationBarBody">
            {
                props.elements.map(
                    (value) => (
                        <button onClick={() => value.onPressed(value.id)}>
                            {value.title}
                        </button>
                    )
                )
            }
        </div>
    )
}