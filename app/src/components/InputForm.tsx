import { Children, useRef } from "react";
import "./InputForm.css"
import { MyDropdownButton } from "./MyDropdownButton";
import { getValuesForDropdownMenu } from "../Controller";

interface InputFormDataProps {
    title: string,
    inputType: string,
    id: string
}

interface InputFormProps {
    title: string,
    titles: InputFormDataProps[]
    onSubmit: (values: Object) => any
}

export function InputForm(props: React.PropsWithChildren<InputFormProps>) {
    var data: { [key: string]: any } = {};
    return (
        <div className="input_form_label_body">
            <h1 className="input_form_title">{props.title}</h1>
            {
                props.titles.map(
                    function (value: any) {
                        data[value.id] = ""
                        return (
                            <InputFormElement id={value.id} onKeyDown={(val: any) => { data[value.id] = val }} inputType={value.inputType} title={value.title} />
                        )
                    }
                )
            }
            {props.children}
            <button className="input_form_submit_buttonn xxl" onClick={() => { props.onSubmit(data) }}> Submit </button>
        </div>
    )
}

interface InputFormElementProps {
    title: string,
    inputType: string,
    onKeyDown: (value: any) => any;
    id: string
};

function InputFormElement(props: React.PropsWithChildren<InputFormElementProps>) {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    if (props.inputType == "dropdown") {
        return (
            <>
                <p className="input_form_label">{props.title}</p>
                <MyDropdownButton id={props.id} onClick={props.onKeyDown} getListOfElements={getValuesForDropdownMenu} />
            </>
        )
    }
    if (props.inputType == "textarea") {
        return (
            <>
                <p className="input_form_label">{props.title}</p>
                <textarea rows={10} onKeyUp={(value: any) => props.onKeyDown(textAreaRef.current?.value)} ref={textAreaRef} />
            </>
        )
    }
    return (
        <>
            <p className="input_form_label">{props.title}</p>
            <input className="input_form_input" onKeyUp={(value: any) => props.onKeyDown(inputRef.current?.value)} type={props.inputType} name="name" ref={inputRef} />
        </>
    )
}