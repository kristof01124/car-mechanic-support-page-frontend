import { GetFeedbackDTO } from "../controller/api/FeedbackController"
import "./OrderFeedback.css"

interface OrderFeedbackInterface {
    feedback: GetFeedbackDTO
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