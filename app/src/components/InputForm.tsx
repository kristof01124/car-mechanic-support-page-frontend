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
        <>
            {
                props.titles.map(
                    function (value) {
                        data[value.title] = ""
                        return (
                            <div>
                                <InputFormElement onKeyDown={(val) => { data[value.title] = val }} inputType={value.inputType} title={value.title} />
                            </div>
                        )
                    }
                )
            }
            <button onClick={() => { props.onSubmit(data) }}> Submit </button>
        </>
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
            <p>{props.title}</p>
            <input onKeyDown={(value: any) => props.onKeyDown(inputRef.current?.value)} type={props.inputType} name="name" ref={inputRef} />
        </>
    )
}