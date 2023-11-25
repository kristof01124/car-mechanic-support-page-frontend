interface ItemListInterface {
    onClick: (id: string) => void,
    IDs: string[]
}

export function ItemList(props: React.PropsWithChildren<ItemListInterface>) {
    return (
        <>
            {
                props.IDs.map(
                    (id: string) => (
                        <button onClick={() => props.onClick(id)}>{id}</button>
                    )
                )
            }
            {props.children}
        </>
    )
}