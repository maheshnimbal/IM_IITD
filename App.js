import React from 'react';
import Providers from './navigation';
import Toast from 'react-native-toast-message';

console.disableYellowBox = true;

export default function App() {
  return(
//   <>
//       {/* ... */}
//       <Toast ref={(ref) => Toast.setRef(ref)} />
//     </>
  <Providers />);
}