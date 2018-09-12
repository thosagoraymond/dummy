import React,{Component} from 'react';
console.disableYellowBox = ["Unable to symbolicate"];

import AppStackNavigator from './src/config/Navigation';

 class App extends Component {
  render() {
    return (
        <AppStackNavigator/>
    );
  }
}
export default App;
