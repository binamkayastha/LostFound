import React, {Component, PropTypes} from 'react';

import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle, 
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput
} from 'framework7-react';

import * as firebase from 'firebase';


const FirebaseTestView= (props, context) => {
	return <h1>{props.helloWorld}</h1>;
}

const MainViews = (props, context) => {
	return (
		<Views>
			<View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
				{/* Navbar */}
				{context.framework7AppContext.theme.ios ? (
					<Navbar>
						<NavLeft>
							<Link icon="icon-bars" openPanel="left" />
						</NavLeft>
						<NavCenter sliding>Framework7</NavCenter>
						<NavRight>
							<Link icon="icon-bars" openPanel="right"></Link>
						</NavRight>
					</Navbar>
				) : null}
				{/* Pages */}
				<Pages>
					<Page>
						{context.framework7AppContext.theme.material ? (
							<Navbar>
								<NavLeft>
									<Link icon="icon-bars" openPanel="left" />
								</NavLeft>
								<NavCenter sliding>Lost & Found</NavCenter>
								<NavRight>
									<Link icon="icon-bars" openPanel="right"></Link>
								</NavRight>
							</Navbar>
						) : null}						
						<ContentBlockTitle>Welcome to my App</ContentBlockTitle>
						<ContentBlock inner>
              <p>At this point, Framework7, React, and Cordova are the frameworks being used</p>
              <p>What's left is a testing framework</p>
              <p>Below is an example component which is displaying the hello world text from the firebase healthcheck</p>
              <FirebaseTestView helloWorld={props.helloWorld}/>
              {/*<div> // This is for the scarf icon
                Icons made by
                <a href="http://www.freepik.com" title="Freepik"> Freepik </a> 
                from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by 
                <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a>
              </div>*/}
						</ContentBlock>
					</Page>
				</Pages>
			</View>
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};

class App extends Component {
	constructor() {
		super();
    this.state = {
      // Whatever is inside this is the state
      speed: "Loading..."
    }
	}

  // Data from database
  componentDidMount() {
      const rootRef = firebase.database().ref();
      const healthCheckRef = rootRef.child('healthCheck');

      healthCheckRef.child('helloWorld').on('value', snap => {
        this.setState({
          helloWorld: snap.val()
        })
      });
  }
	render() {
		return (
			<Framework7App themeType="material">
				<MainViews helloWorld={this.state.helloWorld} />
			</Framework7App>  
		);
	}

}
export default App;