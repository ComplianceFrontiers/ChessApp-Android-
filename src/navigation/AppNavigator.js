import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import SignIn from "../screens/signin/SignIn";
import LetsSingup from "../screens/letsSingUp/LetsSingup";
import FillProfile from "../screens/fillprofile/FillProfile";
import CreatePin from "../screens/createpin/CreatePin";
import ForgotPassword from "../screens/forgotpassword/ForgotPassword";
import EnterCode from "../screens/entercode/EnterCode";
import NewPassword from "../screens/newpassword/NewPassword";
import Tab from "../screens/tab/Tab";
import Categories from "../screens/categories/Categories";
import Home from "../screens/home/Home";
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

import Level1Wic from "../screens/coursedetails/modules/level1/winningInChess/61/61"
import Level1Wic2 from "../screens/coursedetails/modules/level1/winningInChess/62/62"
import Level1Wic3 from "../screens/coursedetails/modules/level1/winningInChess/63/63"
import Level1Wic4 from "../screens/coursedetails/modules/level1/winningInChess/64/64"
import Level1Wic5 from "../screens/coursedetails/modules/level1/winningInChess/65/65"
import Level1Wic6 from "../screens/coursedetails/modules/level1/winningInChess/66/66"

import Level1Upe from "../screens/coursedetails/modules/level1/understandingPieceExchanges/71/71"
import Level1Upe2 from "../screens/coursedetails/modules/level1/understandingPieceExchanges/72/72"
import Level1Upe3 from "../screens/coursedetails/modules/level1/understandingPieceExchanges/73/73"
import Level1Upe4 from "../screens/coursedetails/modules/level1/understandingPieceExchanges/74/74"
import Level1Upe5 from "../screens/coursedetails/modules/level1/understandingPieceExchanges/75/75"

import Level1Sotg from "../screens/coursedetails/modules/level1/stagesOfTheGame/81/81"
import Level1Sotg2 from "../screens/coursedetails/modules/level1/stagesOfTheGame/82/82"
import Level1Sotg3 from "../screens/coursedetails/modules/level1/stagesOfTheGame/83/83"

import Level1no from "../screens/coursedetails/modules/level1/notation/91/91"

import Level1Tcg from "../screens/coursedetails/modules/level1/chessGame/101/101"

import CourseComplete from "../screens/certificate/CourseComplete";
import Support from "../screens/support/support";
import LearderBoard from "../screens/learderboard/learderboard";
import PersonalMessageScreen from "../screens/personalmessagescreen/PersonalMessageScreen";
import CallingScreen from "../screens/callingscreen/CallingScreen";
import CertificateDownload from "../screens/certificatedownload/CertificateDownload";
import Profile from "../screens/profile/Profile";
import LanguageScreen from "../screens/language/LanguageScreen";
import AddNewCard from "../screens/addnewcard/AddNewCard";
import TermsNConditions from "../screens/terms&conditions/TermsNConditions";
import InviteFriends from "../screens/invitefriends/InviteFriends";
import DarkMode from "../screens/darkmode/DarkMode";
import EditProfile from "../screens/editProfile/EditProfile";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [initialRoute, setInitialRoute] = useState(null); // Default as null to indicate loading

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        console.log(email)
        if (email) {
          setInitialRoute('home'); // User has onboarded, go to SignIn
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
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="fillprofile" component={FillProfile} />
      <Stack.Screen name="createpin" component={CreatePin} />
      <Stack.Screen name="forgotpassword" component={ForgotPassword} />
      <Stack.Screen name="entercode" component={EnterCode} />
      <Stack.Screen name="newpassword" component={NewPassword} />
      <Stack.Screen name="tab" component={Tab} />
      <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen name="home" component={Home} />
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

      <Stack.Screen name="coursedetails/modules/level1/winningInChess/61" component={Level1Wic} />
      <Stack.Screen name="coursedetails/modules/level1/winningInChess/62" component={Level1Wic2} />
      <Stack.Screen name="coursedetails/modules/level1/winningInChess/63" component={Level1Wic3} />
      <Stack.Screen name="coursedetails/modules/level1/winningInChess/64" component={Level1Wic4} />
      <Stack.Screen name="coursedetails/modules/level1/winningInChess/65" component={Level1Wic5} />
      <Stack.Screen name="coursedetails/modules/level1/winningInChess/66" component={Level1Wic6} />

      <Stack.Screen name="coursedetails/modules/level1/understandingPieceExchanges/71" component={Level1Upe} />
      <Stack.Screen name="coursedetails/modules/level1/understandingPieceExchanges/72" component={Level1Upe2} />
      <Stack.Screen name="coursedetails/modules/level1/understandingPieceExchanges/73" component={Level1Upe3} />
      <Stack.Screen name="coursedetails/modules/level1/understandingPieceExchanges/74" component={Level1Upe4} />
      <Stack.Screen name="coursedetails/modules/level1/understandingPieceExchanges/75" component={Level1Upe5} />

      <Stack.Screen name="coursedetails/modules/level1/stagesOfTheGame/81" component={Level1Sotg} />
      <Stack.Screen name="coursedetails/modules/level1/stagesOfTheGame/82" component={Level1Sotg2} />
      <Stack.Screen name="coursedetails/modules/level1/stagesOfTheGame/83" component={Level1Sotg3} />

      <Stack.Screen name="coursedetails/modules/level1/notation/91" component={Level1no} />

      <Stack.Screen name="coursedetails/modules/level1/chessGame/101" component={Level1Tcg} />



      <Stack.Screen name="certificate" component={CourseComplete} />
      <Stack.Screen name="support" component={Support} />
      <Stack.Screen name="learderboard" component={LearderBoard} />

      
      <Stack.Screen name="personalmessage" component={PersonalMessageScreen} />
      <Stack.Screen name="callingscreen" component={CallingScreen} />
      <Stack.Screen
        name="certificatedownload"
        component={CertificateDownload}
      />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="edit-profile" component={EditProfile} />
      <Stack.Screen name="language" component={LanguageScreen} />
      <Stack.Screen name="addcard" component={AddNewCard} />
      <Stack.Screen name="termsnconditions" component={TermsNConditions} />
      <Stack.Screen name="invitefriends" component={InviteFriends} />
      <Stack.Screen name="darkmode" component={DarkMode} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
