import PushNotification from "react-native-push-notification";


const clickNotification = (channel, title, msg) => {
	PushNotification.localNotification({
		channelId: channel,
		title: title,
		message: msg
	})
}
// }
export { clickNotification }