import { Image,Button } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props})=>(
 <Button
  title='Skip'
  {...props}
  />
);

const Next=({...props})=>(
  <Button 
    title='Next'
    {...props}
  />
);

const Done=({...props})=>(
  <Button 
    title='Done'
    {...props}
  />
);

const OnBoardingUI = ({navigation}) => {
  return (
    <Onboarding
     SkipButtonComponent={Skip}
     NextButtonComponent={Next}
     DoneButtonComponent={Done}
    onSkip={()=> navigation.replace("Tasks")}
    onDone={()=> navigation.navigate("Tasks")}
  pages={[

    {
      backgroundColor: '#64ACAB',
      image: <Image source={require("../assets/img3.png")} style={{height:350,width:300,marginTop:40}}/>,
      title: 'To-Do List',
      subtitle: 'With millions of books to users, Organize your work and life, finally',
      subTitleStyles:{marginTop:20},
      titleStyles:{marginTop:10, fontWeight: 'bold'}
    },
    {
      backgroundColor: '#DCD7D6',
      image:<Image source={require("../assets/adaptive-icon.png")} style={{height:350,width:300,marginTop:40}}/>,
      title: 'Learning and Understanding',
      subtitle: 'Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.',
      subTitleStyles:{marginTop:10},
      titleStyles:{marginTop:-10, fontWeight: 'bold'}
    },
    {
      backgroundColor: '#1D3849',
      image:<Image source={require("../assets/img4.png")}  style={{height:350,width:300,marginTop:40}}/>,
      title: 'Interactions and Fun',
      subtitle: 'With so many intelluctuals worldwide,you will feels no shorter than a friend while interacting with them.Fun will continue with our excellent menu of games.',
      subTitleStyles:{marginTop:20},
      titleStyles:{marginTop:0, fontWeight: 'bold'}
    },
  ]}
/>
  )
}

export default OnBoardingUI; 