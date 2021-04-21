import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { clickNotification, showScheduledNotification } from './src/notification'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	clickForNotification = () => {
		console.log("Clicking for notification")
		clickNotification("980022", "test", "My 1st notification")
	}

	clickForScheduleNotification = () => {
		console.log("Scheduling a notification");
		showScheduledNotification('980022', 'sche notify', 'This is a schedule notififcation');
	}

	render() {
		return (
			<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
				<Button
					title="Click for notification"
					onPress={this.clickForNotification}
				/>

				<Button
					title="Click for scheduling a notification"
					onPress={this.clickForScheduleNotification}
				/>
			</View>
		);
	}
}

export default App;