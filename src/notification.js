import PushNotification from "react-native-push-notification";


const clickNotification = (channel, title, msg) => {
	PushNotification.localNotification({
		channelId: channel,
		title: title,
		message: msg
	})
}

const showScheduledNotification = (channel, title, msg) => {
	PushNotification.localNotificationSchedule({
		channelId: channel,
		title: title,
		message: msg, // (required)
		date: new Date(Date.now() + 30 * 1000), // in 60 secs
		allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
	});

}

export { clickNotification, showScheduledNotification }