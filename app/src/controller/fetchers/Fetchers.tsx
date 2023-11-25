import React from "react";
import { GetUserDto, UserController } from "../api/UserController";
import { OrdersPage } from "../../views/OrdersPage";
import { CarController, GetCarDTO } from "../api/CarController";
import { useParams } from 'react-router-dom';
import { WaitingPage } from "../../views/WaitingPage";
import { OrderPage } from "../../views/OrderPage";
import { GetFeedbackDTO } from "../api/FeedbackController";
import { GetOrderDTO, OrderController } from "../api/OrderController";
import { currentUser } from "../session/session";
import { NewOrderPage } from "../../views/NewOrderPage";
import { CarsPage } from "../../views/CarsPage";
import { CarPage } from "../../views/CarPage";
import { NewCarPage } from "../../views/NewCarPage";
import { UserPage } from "../../views/UserPage";

export function FetchOrdersForUser() {
    const [data, updateData] = React.useState()
    var orderIds: number[] = [];
    UserController.getUserById(currentUser.user_id.toString())
        .then((value) => { updateData((value as any)); return value })
        .then((user: GetUserDto) => user.ownedCars
            ?.forEach((car: GetCarDTO) => car.relatedOrders
                .forEach((order) => orderIds.push(order.order_id))))
    return (data == undefined ? <WaitingPage /> :
        <OrdersPage IDs={orderIds} />
    )
}

export function FetchOrderData() {
    const { id } = useParams();
    const [data, updateData] = React.useState<GetOrderDTO>()
    OrderController.getOrderById(id ?? "")
        .then((value: GetOrderDTO) => updateData(value))
    return (data == undefined ? <WaitingPage /> :
        <OrderPage isMechanic={(currentUser.user_role ?? "") == "MECHANIC"} orderData={
            {
                severity: data.severity,
                description: data.description,
                approximatePosition: data.approximate_position,
                feedback: {
                    title: data.relatedFeedback.title,
                    startTime: data.relatedFeedback.start_time,
                    endTime: data.relatedFeedback.end_time,
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
    const [data, updateData] = React.useState()
    var carIds: number[] = [];
    var userID = currentUser.user_id.toString()
    UserController.getUserById(userID)
        .then((value) => { updateData((value as any)); return value })
        .then((user: GetUserDto) => user.ownedCars
            ?.forEach((car: GetCarDTO) => carIds.push(car.car_id)))
    return (data == undefined ? <WaitingPage /> :
        <CarsPage IDs={carIds} />
    )
}

export function FetchCarData() {
    const { id } = useParams()
    const [data, updateData] = React.useState<GetCarDTO>()
    CarController.getCarById(id ?? "").then((value) => updateData(value))
    return data == undefined ? <WaitingPage /> :
        <CarPage carData={
            {
                brand: data.brand,
                type: data.type,
                licensePlate: data.license_plate,
                serialNumber: data.serial_number
            }
        } />
}

export function createCar() {
    return <NewCarPage userID={currentUser.user_id} />
}

export function editUserData() {
    return <UserPage userData={
        {
            password: currentUser.password,
            email: currentUser.email_address,
            firstName: currentUser.first_name,
            lastName: currentUser.last_name,
            dateOfBirth: currentUser.date_of_birth,
            userRole: currentUser.user_role
        }
    } />
}