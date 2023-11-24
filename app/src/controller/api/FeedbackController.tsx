export interface CreateFeedbackDTO {
    title: string,
    start_time: string,
    end_time: string,
    comment: string,
    is_successful: boolean
}

export interface GetFeedbackDTO extends CreateFeedbackDTO {
    feedback_id: number
}