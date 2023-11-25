import { Dropdown } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";
import React from "react";

import "./MyDropdownButton.css"

interface MyDropdownButtonInterface {
    id: string,
    onClick: (id: string) => any,
    listOfElements?: MyDropdownButtonElementInterface[]
    initialValue?: any
}

export interface MyDropdownButtonElementInterface {
    id: string,
    title: string,
}

export function MyDropdownButton(props: MyDropdownButtonInterface) {
    var [label, setLabel] = React.useState("");
    return (
        <Dropdown value={props.initialValue} className="test" label={label} dismissOnClick={true}>
            {
                props.listOfElements?.map((value) => (
                    <DropdownItem onClick={
                        () => {
                            setLabel(value.title);
                            props.onClick(value.id);
                        }
                    }>
                        {value.title}
                    </DropdownItem>))
            }
        </Dropdown>
    )
}