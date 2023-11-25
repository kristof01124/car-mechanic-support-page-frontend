import "./OrderFeedback.css"

interface FeedbackData {
    title: string,
    start_time: string,
    end_time: string,
    comment: string,
    is_successful: boolean
}

interface OrderFeedbackInterface {
    feedback: FeedbackData
}
export function OrderFeedback(props: OrderFeedbackInterface) {
    return (
        <div className="OrderFeedbackLisItemBody">
            <h1>
                {props.feedback.title}
            </h1>
            <h2>
                Kezdése időpont: {props.feedback.start_time}, befejezés: {props.feedback.end_time}
            </h2>
            <p>
                {props.feedback.comment}
            </p>
            <p>
                {props.feedback.is_successful ? "Kész" : "Folyamatban"}
            </p>
        </div>
    )
}