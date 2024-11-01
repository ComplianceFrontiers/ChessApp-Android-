import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignUpScreen from "../screens/signup/SignUpScreen";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import SignIn from "../screens/signin/SignIn";
import LetsSingup from "../screens/letsSingUp/LetsSingup";
import FillProfile from "../screens/fillprofile/FillProfile";
import CreatePin from "../screens/createpin/CreatePin";
import ForgotPassword from "../screens/forgotpassword/ForgotPassword";
import EnterCode from "../screens/entercode/EnterCode";
import NewPassword from "../screens/newpassword/NewPassword";
import TabScreens from "../screens/tabscreens/TabScreens";
import Categories from "../screens/categories/Categories";
import PopularCourses from "../screens/popularcourses/PopularCourses";
import TopMentors from "../screens/topmentors/TopMentors";
import SearchScreen from "../screens/searchscreen/SearchScreen";
import FilterScreen from "../screens/filerScreen/FilterScreen";
import CourseDetails from "../screens/coursedetails/CourseDetails";
import Notifications from "../screens/notificationsScreen/Notifications";
import MentorDetails from "../screens/mentordetails/MentorDetails";
import CheckOut from "../screens/checkout/CheckOut";
import Confirmation from "../screens/confirmation/Confirmation";
import MyCourses from "../screens/mycourses/MyCourses";
import Level1In from "../screens/coursedetails/modules/level1/introduction/11/11"
import Level1ch from "../screens/coursedetails/modules/level1/theChessboard/21/21"
import Level1ch2 from "../screens/coursedetails/modules/level1/theChessboard/22/22"
import Level1ch3 from "../screens/coursedetails/modules/level1/theChessboard/23/23"
import Level1ch4 from "../screens/coursedetails/modules/level1/theChessboard/24/24"
import Level1ch5 from "../screens/coursedetails/modules/level1/theChessboard/25/25"
import Level1ch6 from "../screens/coursedetails/modules/level1/theChessboard/26/26"

import Level1Itp from "../screens/coursedetails/modules/level1/introductionToPieces/31/31"
import Level1Itp2 from "../screens/coursedetails/modules/level1/introductionToPieces/32/32"
import Level1Itp3 from "../screens/coursedetails/modules/level1/introductionToPieces/33/33"
import Level1Itp4 from "../screens/coursedetails/modules/level1/introductionToPieces/34/34"
import Level1Itp5 from "../screens/coursedetails/modules/level1/introductionToPieces/35/35"
import Level1Itp6 from "../screens/coursedetails/modules/level1/introductionToPieces/36/36"
import Level1Itp7 from "../screens/coursedetails/modules/level1/introductionToPieces/37/37"
import Level1Itp8 from "../screens/coursedetails/modules/level1/introductionToPieces/38/38"

import Level1Aop from "../screens/coursedetails/modules/level1/arrangementOfPieces/41/41"
import Level1Aop2 from "../screens/coursedetails/modules/level1/arrangementOfPieces/42/42"
import Level1Sm from "../screens/coursedetails/modules/level1/specialMoves/51/51"
import Level1Sm2 from "../screens/coursedetails/modules/level1/specialMoves/52/52"
import Level1Sm3 from "../screens/coursedetails/modules/level1/specialMoves/53/53"
import CourseComplete from "../screens/certificate/CourseComplete";
import MessageScreen from "../screens/message/MessageScreen";
import PersonalMessageScreen from "../screens/personalmessagescreen/PersonalMessageScreen";
import CallingScreen from "../screens/callingscreen/CallingScreen";
import CertificateDownload from "../screens/certificatedownload/CertificateDownload";
import Profile from "../screens/profile/Profile";
import LanguageScreen from "../screens/language/LanguageScreen";
import AddNewCard from "../screens/addnewcard/AddNewCard";
import TermsNConditions from "../screens/terms&conditions/TermsNConditions";
import InviteFriends from "../screens/invitefriends/InviteFriends";
import DarkMode from "../screens/darkmode/DarkMode";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [initialRoute, setInitialRoute] = useState(null); // Default as null to indicate loading

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        console.log(email)
        if (email) {
          setInitialRoute('tabscreens'); // User has onboarded, go to SignIn
        } else {
          setInitialRoute('onboarding'); // User hasn't onboarded, go to Onboarding
        }
      } catch (error) {
        console.error("Error checking onboarding status:", error);
        setInitialRoute('onboarding'); // Fallback in case of error
      }
      console.log(initialRoute)
    };

    checkOnboardingStatus();
  }, []);

  // Don't render anything until the initial route is determined
  if (!initialRoute) {
    return null; // Alternatively, return a loading screen here
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRoute}
    >
      <Stack.Screen name="onboarding" component={OnboardingScreen} />
      <Stack.Screen name="signup" component={SignUpScreen} />
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="letssignUp" component={LetsSingup} />
      <Stack.Screen name="fillprofile" component={FillProfile} />
      <Stack.Screen name="createpin" component={CreatePin} />
      <Stack.Screen name="forgotpassword" component={ForgotPassword} />
      <Stack.Screen name="entercode" component={EnterCode} />
      <Stack.Screen name="newpassword" component={NewPassword} />
      <Stack.Screen name="tabscreens" component={TabScreens} />
      <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen name="popularcourses" component={PopularCourses} />
      <Stack.Screen name="topmentors" component={TopMentors} />
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="filterscreen" component={FilterScreen} />
      <Stack.Screen name="coursedetails" component={CourseDetails} />
      <Stack.Screen name="notifcations" component={Notifications} />
      <Stack.Screen name="mentordetails" component={MentorDetails} />
      <Stack.Screen name="checkout" component={CheckOut} />
      <Stack.Screen name="confirmation" component={Confirmation} />
      <Stack.Screen name="mycourses" component={MyCourses} />
      <Stack.Screen name="coursedetails/modules/level1/introduction/11" component={Level1In} />
      <Stack.Screen name="coursedetails/modules/level1/theChessboard/21" component={Level1ch} />
      <Stack.Screen name="coursedetails/modules/level1/theChessboard/22" component={Level1ch2} />
      <Stack.Screen name="coursedetails/modules/level1/theChessboard/23" component={Level1ch3} />
      <Stack.Screen name="coursedetails/modules/level1/theChessboard/24" component={Level1ch4} />
      <Stack.Screen name="coursedetails/modules/level1/theChessboard/25" component={Level1ch5} />
      <Stack.Screen name="coursedetails/modules/level1/theChessboard/26" component={Level1ch6} />
      <Stack.Screen name="coursedetails/modules/level1/introductionToPieces/31" component={Level1Itp} />
      <Stack.Screen name="coursedetails/modules/level1/introductionToPieces/32" component={Level1Itp2} />
      <Stack.Screen name="coursedetails/modules/level1/introductionToPieces/33" component={Level1Itp3} />
      <Stack.Screen name="coursedetails/modules/level1/introductionToPieces/34" component={Level1Itp4} />
      <Stack.Screen name="coursedetails/modules/level1/introductionToPieces/35" component={Level1Itp5} />
      <Stack.Screen name="coursedetails/modules/level1/introductionToPieces/36" component={Level1Itp6} />
      <Stack.Screen name="coursedetails/modules/level1/introductionToPieces/37" component={Level1Itp7} />
      <Stack.Screen name="coursedetails/modules/level1/introductionToPieces/38" component={Level1Itp8} />

      <Stack.Screen name="coursedetails/modules/level1/arrangementOfPieces/41" component={Level1Aop} />
      <Stack.Screen name="coursedetails/modules/level1/arrangementOfPieces/42" component={Level1Aop2} />

      <Stack.Screen name="coursedetails/modules/level1/specialMoves/51" component={Level1Sm} />
      <Stack.Screen name="coursedetails/modules/level1/specialMoves/52" component={Level1Sm2} />
      <Stack.Screen name="coursedetails/modules/level1/specialMoves/53" component={Level1Sm3} />
      <Stack.Screen name="certificate" component={CourseComplete} />
      <Stack.Screen name="message" component={MessageScreen} />
      <Stack.Screen name="personalmessage" component={PersonalMessageScreen} />
      <Stack.Screen name="callingscreen" component={CallingScreen} />
      <Stack.Screen
        name="certificatedownload"
        component={CertificateDownload}
      />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="language" component={LanguageScreen} />
      <Stack.Screen name="addcard" component={AddNewCard} />
      <Stack.Screen name="termsnconditions" component={TermsNConditions} />
      <Stack.Screen name="invitefriends" component={InviteFriends} />
      <Stack.Screen name="darkmode" component={DarkMode} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
