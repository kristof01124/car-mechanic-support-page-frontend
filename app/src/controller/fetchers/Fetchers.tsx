import React, { useState } from "react";
import { GetUserDto, UserController } from "../api/UserController";
import { OrdersPage } from "../../views/OrdersPage";
import { CarController, GetCarDTO } from "../api/CarController";
import { Navigate, useParams } from 'react-router-dom';
import { WaitingPage } from "../../views/WaitingPage";
import { OrderPage } from "../../views/OrderPage";
import { GetOrderDTO, OrderController } from "../api/OrderController";
import { getCurrentUser } from "../session/session";
import { NewOrderPage } from "../../views/NewOrderPage";
import { CarsPage } from "../../views/CarsPage";
import { CarPage } from "../../views/CarPage";
import { NewCarPage } from "../../views/NewCarPage";
import { UserPage } from "../../views/UserPage";
import { FeedbackController } from "../api/FeedbackController";

export function FetchOrdersForUser() {
    var [orders, updateOrders] = useState<GetOrderDTO[]>()
    var data = getCurrentUser()
    if (orders == undefined) {
        if (data.user_role?.toString() == "MECHANIC") {
            OrderController.getAllOrders().then((value) => updateOrders(value))
        }
        else {
            updateOrders(data.ownedCars
                .map((value) => value.relatedOrders)
                .reduce((previousValue, currentValue) => previousValue.concat(currentValue), []))
        }
    }
    return (orders == undefined ? <WaitingPage /> :
        <OrdersPage IDs={orders.map((order) => order.order_id)} />
    )
}

export function FetchOrderData() {
    const { id } = useParams();
    const [data, updateData] = React.useState<GetOrderDTO>()
    if (data == undefined) {
        OrderController.getOrderById(id ?? "")
            .then(async (value: GetOrderDTO) => {
                if (value.relatedFeedback == undefined) {
                    await FeedbackController.createNewFeedback(value.order_id.toString(), {
                        title: "",
                        start_time: Date.now().toString(),
                        end_time: null,
                        comment: "Comment for order:" + value.order_id.toString(),
                        is_successful: false
                    })
                }
                updateData(await OrderController.getOrderById(id ?? ""))
            })
    }
    return (data == undefined ? <WaitingPage /> :
        <OrderPage isMechanic={(getCurrentUser().user_role ?? "") == "MECHANIC"} feedbackId={data.relatedFeedback.feedback_id.toString() ?? ""} orderId={id ?? ""} orderData={
            {
                severity: data.severity,
                description: data.description,
                approximatePosition: data.approximate_position,
                feedback: {
                    title: data.relatedFeedback.title,
                    startTime: data.relatedFeedback.start_time ?? "",
                    endTime: data.relatedFeedback.end_time ?? "",
                    comment: data.relatedFeedback.comment,
                    isSuccesful: data.relatedFeedback.is_successful
                }
            }
        } />
    )
}

export function CreateOrder() {
    return (
        <NewOrderPage />
    )
}
export function FetchCarsForUser() {
    const [data, updateData] = React.useState<GetUserDto>()
    var carLicensePlates: string[] = [];
    var userID = getCurrentUser().user_id.toString()
    if (data == undefined) {
        UserController.getUserById(userID)
            .then((value) => { updateData(value); return value })
    }
    else {
        data.ownedCars?.forEach((value) => carLicensePlates.push(value.license_plate))
    }
    return (data == undefined ? <WaitingPage /> :
        <CarsPage licensePlates={carLicensePlates} />
    )
}

export function FetchCarData() {
    const { id } = useParams()
    const [data, updateData] = React.useState<GetCarDTO>()
    if (data == undefined) {
        CarController.getCarById(id ?? "").then((value) => updateData(value))
    }
    return data == undefined ? <WaitingPage /> :
        <CarPage carId={id ?? ""} carData={
            {
                brand: data.brand,
                type: data.type,
                licensePlate: data.license_plate,
                serialNumber: data.serial_number
            }
        } />
}

export function CreateCar() {
    return <NewCarPage userID={getCurrentUser().user_id} />
}

export function EditUserData() {
    return <UserPage userData={
        {
            password: getCurrentUser().password,
            email: getCurrentUser().email_address,
            firstName: getCurrentUser().first_name,
            lastName: getCurrentUser().last_name,
            dateOfBirth: getCurrentUser().date_of_birth,
            userRole: getCurrentUser().user_role ?? ""
        }
    } />
}