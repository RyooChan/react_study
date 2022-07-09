import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요.",
    },
    {
        id: 2,
        message: "반가워요.",
    },
    {
        id: 3,
        message: "잘있어요.",
    },
    {
        id: 4,
        message: "다시 만나요.",
    },
]

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],   // 앞으로 사용할 데이터를 빈 배열로 넣어 state 초기화
        };
    }

    // 미리 만들어진 알림 배열인 reservedNotifications의 배열을 가져와서 state에 있는 notifacations 배열에 넣고 업데이트 하는 부분이다.
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                // state업데이트를 위한 setState함수 사용
                this.setState({
                    notifications: notifications,
                });
            } else{
                // upmount시켜주기 위해 알림이 끝나면 notifications배열을 비운다. 이를 setState함수를 사용하여 state를 업데이트해준다.
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification 
                            key = {notification.id}
                            id = {notification.id}
                            message={notification.message} 
                        />
                    )
                })}
            </div>
        );
    }
}

export default NotificationList;