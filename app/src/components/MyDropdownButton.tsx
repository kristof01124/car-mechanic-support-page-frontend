import { Dropdown } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";
import React from "react";
import { parseJsonSourceFileConfigFileContent } from "typescript";

import "./MyDropdownButton.css"

interface MyDropdownButtonInterface {
    id: string,
    onClick: (id: string) => any,
    getListOfElements: (id: string, onClick: (id: string) => any) => MyDropdownButtonElementInterface[]
}

export interface MyDropdownButtonElementInterface {
    id: string,
    onClick: (id: string) => any,
    title: string,
}

export function MyDropdownButton(props: MyDropdownButtonInterface) {
    var elements = props.getListOfElements(props.id, props.onClick);
    var [label, setLabel] = React.useState("");
    return (
        <Dropdown className="test" label={label} dismissOnClick={true}>
            {
                elements.map((value) => (
                    <DropdownItem onClick={
                        () => {
                            setLabel(value.title);
                            value.onClick(value.id);
                        }
                    }>
                        {value.title}
                    </DropdownItem>))
            }
        </Dropdown>
    )
}