import "./OrderFeedbackList.css"

interface OrderFeedbackListInterface {
    feedbacks: OrderFeedbackListemInterface[]
}

export function OrderFeedbackList(props: OrderFeedbackListInterface) {
    return (
        <>
            {props.feedbacks.map(
                (value) => {
                    return (
                        <OrderFeedbackListem title={value.title} start_time={value.start_time} end_time={value.end_time} comment={value.comment} />
                    )
                }
            )}
        </>
    )
}

interface OrderFeedbackListemInterface {
    title: string,
    start_time: string,
    end_time: string,
    comment: string
}

function OrderFeedbackListem(props: OrderFeedbackListemInterface) {
    return (
        <div className="OrderFeedbackLisItemBody">
            <h1>
                {props.title}
            </h1>
            <h2>
                Kezdése időpont: {props.start_time}, befejezés: {props.end_time}
            </h2>
            <p>
                {props.comment}
            </p>
        </div>
    )
}