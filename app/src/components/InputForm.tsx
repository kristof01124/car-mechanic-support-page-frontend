import { Children, useRef } from "react";

interface InputFormDataProps {
    title: string,
    inputType: string
}

interface InputFormProps {
    titles: InputFormDataProps[]
    onSubmit: (values: Object) => any
}

export function InputForm(props: React.PropsWithChildren<InputFormProps>) {
    var data: { [key: string]: any } = {};
    return (
        <div className="input_form_label_body">
            {
                props.titles.map(
                    function (value: any) {
                        data[value.title] = ""
                        return (
                            <InputFormElement onKeyDown={(val: any) => { data[value.title] = val }} inputType={value.inputType} title={value.title} />
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
};

function InputFormElement(props: React.PropsWithChildren<InputFormElementProps>) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    return (
        <>
            <p className="input_form_label">{props.title}</p>
            <input className="input_form_input" onKeyUp={(value: any) => props.onKeyDown(inputRef.current?.value)} type={props.inputType} name="name" ref={inputRef} />
        </>
    )
}