import { JsxExpression } from "typescript"
import { MyDropdownButtonElementInterface } from "./MyDropdownButton"
import { useState } from "react"
import { InputForm } from "./InputForm"

interface ObjectEditorInterface {
    title: string,
    parameters: ObjectEditorItemInterface[]
    onChange: (obj: any) => void
}

interface ObjectEditorItemInterface {
    id: string,
    title: string,
    inputType: string,
    isChangable: boolean,
    value: any
    valueConverter?: (object: any) => any
    dropDownElements?: MyDropdownButtonElementInterface[]
}

export function ObjectEditor(props: ObjectEditorInterface) {
    const [editing, setEditing] = useState(false)
    if (!editing) {
        return (
            <>
                <h1 className="ObjectEditorTitle">{props.title}</h1>
                <button className="ObjecEditorModifyButton" onClick={() => setEditing(true)}>Módosít</button>
                {props.parameters.map((value => {
                    if (value.inputType == "textarea") {
                        return (
                            <div className="ObjectEditorItemBody">
                                <p className="ObjectEditorLargeItemTitle">{value.title}</p>
                                <p className="ObjectEditorLargeItemValue">{value.valueConverter?.(value.value) ?? value.value.toString()}</p>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="ObjectEditorItemBody">
                                <span className="ObjectEditorItemTitle">{value.title}</span>
                                <span className="ObjectEditorItemValue">{value.valueConverter?.(value.value) ?? value.value.toString()}</span>
                            </div>
                        )
                    }
                }))}
            </>
        )
    }
    else {
        return (
            <>
                <button className="ObjecEditorBackButton" onClick={() => setEditing(false)}>Vissza</button>
                <InputForm title={props.title} onSubmit={props.onChange} inputFormElements={props.parameters.filter((parameter) => parameter.isChangable).map((parameter) => {
                    return {
                        title: parameter.title,
                        inputType: parameter.inputType,
                        id: parameter.id,
                        dropDownElements: parameter.dropDownElements,
                        initalValue: parameter.value
                    }
                })} />
            </>
        )
    }

}

