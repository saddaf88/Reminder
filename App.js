import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { notification } from './src/notification'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	clickForNotification = () => {
		console.log("Clicking for notification")
		notification.configure();
		notification.createChannel("9802222");
		notification.clickNotification("9802222", "test", "My 1st notification")
	}

	render() {
		return (
			<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
				<Button
					title="Click for notification"
					onPress={this.clickForNotification}
				/>
			</View>
		);
	}
}

export default App;