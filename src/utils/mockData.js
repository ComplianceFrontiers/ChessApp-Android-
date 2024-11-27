import OnBoardingImg1 from "../assets/onboardingImages/Pawn.png";
import OnBoardingImg2 from "../assets/onboardingImages/Knight.png";
import OnBoardingImg3 from "../assets/onboardingImages/Bishop.png";
import OnBoardingImg4 from "../assets/onboardingImages/Rook.png";
import OnBoardingImg5 from "../assets/onboardingImages/Queen.png";
import OnBoardingImg6 from "../assets/onboardingImages/king.png";
import Google from "../assets/svg/google.svg";
import Apple from "../assets/svg/apple.svg";
import MailIcon from "../assets/svg/mailIcon.svg";

// Hometab icons
import SearchIcon from "../assets/svg/searchIcon.svg";
import NotificationIcon from "../components/notificationicon/NotificationIcon";
import SettingsIcon from "../assets/svg/settingsIcon.svg";

import BlenderIcon from "../assets/svg/blenderIcon.svg";
import ImprovementIcon from "../assets/svg/improvementIcon.svg";

//Notification Page Data
import Icon1 from "../assets/courses/chessforschools/1.png";
import Icon2 from "../assets/courses/chessforschools/2.png";
import Icon3 from "../assets/courses/chessforschools/3.png";
import Icon4 from "../assets/courses/chessforschools/4.png";
import Icon5 from "../assets/courses/chessforschools/5.png";
import Icon6 from "../assets/courses/chessforschools/6.png";

import CreditCardIcon from "../assets/svg/creditCardIcon.svg";
import AccountIcon from "../assets/svg/accountIcon.svg";

// ProfileIcons
import EditProfile from "../assets/svg/editProfile.svg";
import PaymentIcon from "../assets/svg/paymentIcon.svg";
import Notifications from "../assets/svg/notifications.svg";
import SecurityIcon from "../assets/svg/securityIcon.svg";
import LanguageIcon from "../assets/svg/languageIcon.svg";
import DarkModeIcon from "../assets/svg/darkModeIcon.svg";
import TermsIcon from "../assets/svg/termsIcon.svg";
import HelpIcon from "../assets/svg/helpIcon.svg";
import InviteIcon from "../assets/svg/inviteIcon.svg";
import LogoutIcon from "../assets/svg/logoutIcon.svg";
import LessonsIcon from "../components/lessonsIcon/LessonsIcon";
import MobileIcon from "../components/mobileIcon/MobileIcon";
import BeginnerIcon from "../components/beginnerIcon/BeginnerIcon";
import AudioIcon from "../components/audioIcon/AudioIcon";
export const notificationDataToday = [
  {
    id: 1,
    title: "Pawn (Absolute Beginners)",
    icon: Icon1,
    para: "Lorem ipsum dolor sit amet, consectetu",
    level: "Level 1",
  },
  {
    id: 2,
    title: "Knight (Novice Players)",
    icon: Icon2,
    para: "Lorem ipsum dolor sit amet, consectetu",
    level: "Level 2",
  },
  {
    id: 3,
    title: "Bishop (Intermediate Players)",
    icon: Icon3,
    para: "Lorem ipsum dolor sit amet, consectetu",
    level: "Level 3",
  },{
    id: 4,
    title: "Rook (Advanced Players)",
    icon: Icon4,
    para: "Lorem ipsum dolor sit amet, consectetu",
    level: "Level 4",
  },
  {
    id: 5,
    title: "Queen (Expert Players)",
    icon: Icon5,
    para: "Lorem ipsum dolor sit amet, consectetu",
    level: "Level 5",
  },
  {
    id: 6,
    title: "King (Mastery Level)",
    icon: Icon6,
    para: "Lorem ipsum dolor sit amet, consectetu",
    level: "Level 6",
  }
];


export const OnBoardingData = [
  {
    id: 1,
    image: OnBoardingImg1,
    title: "Online Learning",
    para: "We Provide Classes Online Classes and Pre Recorded Leactures.!",
  },
  {
    id: 2,
    image: OnBoardingImg2,
    title: "Learn at Anytime",
    para: "Booked or Same the Lectures for Future, Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    image: OnBoardingImg3,

    title: "Learn Any Sphere You Like",
    para: "More than 50 courses for various and in demand jobs & skills in one piece",
  },
  // {
  //   id: 4,
  //   image: OnBoardingImg4,
  //   title: "Online Learning",
  //   para: "We Provide Classes Online Classes and Pre Recorded Leactures.!",
  // },
  // {
  //   id: 5,
  //   image: OnBoardingImg5,
  //   title: "Learn at Anytime",
  //   para: "Booked or Same the Lectures for Future, Lorem ipsum dolor sit amet.",
  // },
  // {
  //   id: 6,
  //   image: OnBoardingImg6,

  //   title: "Learn Any Sphere You Like",
  //   para: "More than 50 courses for various and in demand jobs & skills in one piece",
  // },
];

export const signInData = [
  { id: 1, icon: <Google />, title: "Continue with Email" },
  // { id: 2, icon: <Apple />, title: "Continue with Apple" },
];

export const singinTextInput = [
  { id: 1, icon: "email", placeholder: " Email" }
  // {
  //   id: 2,
  //   icon: "lock",
  //   placeholder: " Password",
  //   securetext: true,
  //   rightIcon: "eye",
  // },
];
export const singUpTextInput = [
  { id: 1, icon: "account", placeholder: " Username" },
  { id: 2, icon: "phone", placeholder: " Phone Number", type: "numeric" },
];

export const fillProfileData = [
  { id: 1, placeholder: "Name", icon: "account" },
  { id: 2, placeholder: "Email", icon: "email" },
  { id: 3, placeholder: "Phone", icon: "phone" },
  { id: 4, placeholder: "School", icon: "school" },
  { id: 5, placeholder: "Grade", icon: "grade" },
];

export const gradeData = [
  { id: 1, grade: "K1" },
  { id: 2, grade: "K2" },
  { id: 3, grade: "K3" },
  { id: 4, grade: "K4" },
  { id: 5, grade: "K5" },
  { id: 6, grade: "K6" },
  { id: 7, grade: "K7" },
  { id: 8, grade: "Other" },
];

export const forgotPassData = [
  {
    id: 1,
    title: "Email",
    para: "felicia.reid@example.com",
    icon: <MailIcon />,
  },
  { id: 2, title: "SMS", para: "(907) 555-0101", icon: <MailIcon /> },
];

export const newPasswordData = [
  { id: 1, placeholder: "New Password", secure: true },
  { id: 2, placeholder: "Confirm Password", secure: true },
];

export const tabsData = [
  { id: 1, title: "Learder Board" },
  { id: 2, title: "Home" },
  { id: 3, title: "Support" },
];

export const hometabPorfileHeader = [
  { id: 1, icon: <SearchIcon /> },
  { id: 2, icon: <NotificationIcon /> },
  { id: 3, icon: <SettingsIcon /> },
];

export const homeSliderData = [
  { id: 1, image: require("../assets/images/homesliderIMG.png") },
  { id: 2, image: require("../assets/images/homesliderIMG.png") },
  { id: 3, image: require("../assets/images/homesliderIMG.png") },
  { id: 4, image: require("../assets/images/homesliderIMG.png") },
];

export const homeTabCategories = [
  { id: 1, title: "UI/UX", image: require("../assets/images/UX.png") },
  { id: 2, title: "HTML", image: require("../assets/images/HTMLIMG.png") },
  { id: 3, title: "Python", image: require("../assets/images/PythonIMG.png") },
  { id: 4, title: "CSS", image: require("../assets/images/CSS.png") },
  { id: 5, title: "Java", image: require("../assets/images/javaIMG.png") },
];

export const popularCategoriesTab = [
  { id: 1, title: "All" },
  { id: 2, title: "Graphic Design" },
  { id: 3, title: "3D Design" },
  { id: 4, title: "Art" },
];

export const popularCoursesAllTab = [
  {
    id: 1,
    image: require("../assets/images/advertisementIMG.png"),
    category: "UI/ UX Design",
    title: "Advertisement Designing",
    price: "400",
    rating: "4.2",
    std: "12580",
  },
  {
    id: 2,
    image: require("../assets/images/advertisementIMG.png"),
    category: "Graphic Design",
    title: "Graphic Design Advanced",
    price: "850",
    rating: "4.2",
    std: "12580",
  },
];


export const processCarousalTab = [
  {
    id: 1,
    title: "Blender Training Courses - Full Lifetime Access",
    icon: <BlenderIcon />,
    lesson: "Lesson 3",
  },
  {
    id: 2,
    title: "Improve your singging skill with Emma",
    icon: <ImprovementIcon />,
    lesson: "Lesson 3",
  },
  {
    id: 3,
    title: "Blender Training Courses - Full Lifetime Access",
    icon: <BlenderIcon />,
    lesson: "Lesson 3",
  },
];

export const mentorsData = [
  {
    id: 1,
    title: "Annette",
    designation: "UI/UX Designer",
    image: require("../assets/images/mentor1.png"),
  },
  {
    id: 2,
    title: "Cody",
    designation: "Full stack developer",
    image: require("../assets/images/mentor2.png"),
  },
  {
    id: 3,
    title: "Jenny ",
    designation: "Python developer",
    image: require("../assets/images/mentor3.png"),
  },
  {
    id: 4,
    title: "Marvin",
    designation: "Graphic designer",
    image: require("../assets/images/mentor4.png"),
  },
  {
    id: 5,
    title: "Annette",
    designation: "UI UX Designer",
    image: require("../assets/images/mentor5.png"),
  },
  {
    id: 6,
    title: "Esther",
    designation: "SEO & Marketing",
    image: require("../assets/images/mentor6.png"),
  },
];

export const popularCoursesDetail = [
  // {
  //   id: 1,
  //   image: require("../assets/images/uiuxIMG.png"),
  //   category: "Online Courses",
  //   title: "Online Courses",
  //   price: "400",
  //   rating: "4.2",
  //   std: "12580",
  // },
  // {
  //   id: 2,
  //   image: require("../assets/images/graphicDesignIMG.png"),
  //   category: "Tournments",
  //   title: "Tournments",
  //   price: "850",
  //   rating: "4.2",
  //   std: "12580",
  // },
  {
    id: 3,
    image: require("../assets/images/graphicDesignIMG.png"),
    category: "Online Course",
    title: "Basics of Chess",
    price: "850",
    rating: "4.2",
    std: "12580",
  },
//   {
//     id: 4,
//     image: require("../assets/images/seoIMG.png"),
//     category: "Chess Club",
//     title: "Chess Club",
//     price: "850",
//     rating: "4.2",
//     std: "12580",
//   },
//   {
//     id: 5,
//     image: require("../assets/images/seoIMG.png"),
//     category: "Online Store",
//     title: "Online Store",
//     price: "850",
//     rating: "4.2",
//     std: "12580",
//   },
// ];

// export const checkoutCourse = [
//   {
//     id: 1,
//     image: require("../assets/images/uiuxIMG.png"),
//     category: "UI/ UX Design",
//     title: "Basics & UI flow",
//     price: "400",
//     rating: "4.2",
//     std: "12580",
//   },
];

export const searchTabs = [
  { id: 1, title: "Courses" },
  { id: 2, title: "Mentors" },
];

export const filterSubcategoryData = [
  { id: 1, title: "Graphic Design" },
  { id: 2, title: "UI UX Design" },
  { id: 3, title: "SEO & Marketing" },
  { id: 4, title: "Web Development" },
  { id: 5, title: "Full Stack developer" },
];

export const filterSubcategoryLevelsData = [
  { id: 1, title: "All Levels" },
  { id: 2, title: "Beginners" },
  { id: 3, title: "Intermediate" },
  { id: 4, title: "Expert" },
];

export const filterSubcategoryPaymentData = [
  { id: 1, title: "Paid" },
  { id: 2, title: "Free" },
];

export const whatYouGetData = [
  { id: 1, title: "25 Lessons", icon: <LessonsIcon /> },
  { id: 2, title: "Access Mobile, Desktop & TV", icon: <MobileIcon /> },
  { id: 3, title: "Beginner Level", icon: <BeginnerIcon /> },
  { id: 4, title: "Audio Book", icon: <AudioIcon /> },
  { id: 5, title: "Lifetime Access", icon: <BeginnerIcon /> },
  { id: 6, title: "100 Quizzes", icon: <AudioIcon /> },
  { id: 7, title: "Certificate of Completion", icon: <LessonsIcon /> },
];

export const reviewsData = [
  {
    id: 1,
    name: "Will",
    image: require("../assets/images/mentor3.png"),
    review:
      "This course has been very useful. Mentor was well spoken totally loved it.",
    likes: "579",
    rating: "4.5",
    posted: "2 Weeks Ago",
  },
  {
    id: 2,
    name: "Will",
    image: require("../assets/images/mentor5.png"),
    review:
      "This course has been very useful. Mentor was well spoken totally loved it.",
    likes: "579",
    rating: "4.5",
    posted: "2 Weeks Ago",
  },
];

export const curriculumData = [
  { id: 1, title: "The Chessboard", duration: "15", url: "coursedetails/modules/level1/introduction/11" },
  { id: 2, title: "Introduction To Pieces", duration: "10", url: "coursedetails/modules/level1/introductionToPieces/31" },
  { id: 3, title: "Arrangement Of Pieces", duration: "15", url: "coursedetails/modules/level1/arrangementOfPieces/41" },
  { id: 4, title: "Special Moves", duration: "10", url: "coursedetails/modules/level1/specialMoves/51" },
  { id: 5, title: "Winning In Chess", duration: "15", url: "coursedetails/modules/level1/winningInChess/61" },
  { id: 6, title: "Piece Exchange", duration: "10", url: "coursedetails/modules/level1/pieceExchange/71" },
  { id: 7, title: "3 Stages Of Chess", duration: "15", url: "coursedetails/modules/level1/stagesOfChess/81" },
  { id: 8, title: "Chess Notations", duration: "10", url: "coursedetails/modules/level1/chessNotations/91" },
  { id: 9, title: "Chess Game", duration: "10", url: "coursedetails/modules/level1/chessGame/10" },
];

export const notificationDataYesterday1 = [
  {
    id: 1,
    title: "Credit Card Connected.!",
    icon: <CreditCardIcon />,
    para: "Lorem ipsum dolor sit amet, consectetu",
  },
];

export const notificationDataYesterday2 = [
  {
    id: 1,
    title: "Account Setup Successful.!",
    icon: <AccountIcon />,
    para: "Lorem ipsum dolor sit amet, consectetu",
  },
];

export const mentorDetailsData = [
  { id: 1, number: "26", text: "Courses" },
  { id: 2, number: "15800", text: "Students" },
  { id: 3, number: "8750", text: "Ratings" },
];

export const myCoursesData1 = [
  {
    id: 1,
    title: "theChessboard",
    showntitle:"The Chessboard",
    duration: "15",
    url: "coursedetails/modules/level1/introduction/11",
    submodules: [
      { id: "1.1", title: "1.1 Introduction", url: "coursedetails/modules/level1/introduction/11" },
      { id: "1.2", title: "1.2 Board Set-up", url: "coursedetails/modules/level1/theChessboard/21" },
      { id: "1.3", title: "1.3 Letters & Numbers", url: "coursedetails/modules/level1/theChessboard/22" },
      { id: "1.4", title: "1.4 Understanding ‘File’", url: "coursedetails/modules/level1/theChessboard/23" },
      { id: "1.5", title: "1.5 Understanding ‘Rank’", url: "coursedetails/modules/level1/theChessboard/24" },
      { id: "1.6", title: "1.6 Understanding ‘Diagonals’", url: "coursedetails/modules/level1/theChessboard/25" },
      { id: "1.7", title: "1.7 Name of the Squares", url: "coursedetails/modules/level1/theChessboard/26" },
    ],
  },
  {
    id: 2,
    title: "introductionToPieces",
    showntitle: "Introduction To Pieces",
    duration: "10",
    url: "coursedetails/modules/level1/introductionToPieces/31",
    submodules: [
      { id: "2.1", title: "2.1 Know the pieces", url: "coursedetails/modules/level1/introductionToPieces/31" },
      { id: "2.2", title: "2.2 ‘Major’ and ‘Minor’ Pieces", url: "coursedetails/modules/level1/introductionToPieces/32" },
      { id: "2.3", title: "2.3 Understanding the ‘King’", url: "coursedetails/modules/level1/introductionToPieces/33" },
      { id: "2.4", title: "2.4 Understanding the ‘Bishop’", url: "coursedetails/modules/level1/introductionToPieces/34" },
      { id: "2.5", title: "2.5 Understanding the ‘Rook’", url: "coursedetails/modules/level1/introductionToPieces/35" },
      { id: "2.6", title: "2.6 Understanding the ‘Knight’", url: "coursedetails/modules/level1/introductionToPieces/36" },
      { id: "2.7", title: "2.7 Understanding the ‘Pawn’", url: "coursedetails/modules/level1/introductionToPieces/37" },
      { id: "2.8", title: "2.8 Understanding the ‘Queen’", url: "coursedetails/modules/level1/introductionToPieces/38" },
    ],
  },
  {
    id: 3,
    title: "ArrangnmentOfPieces",
    showntitle: "Arrangement Of Pieces",
    duration: "15",
    url: "coursedetails/modules/level1/arrangementOfPieces/41",
    submodules: [
      { id: "3.1", title: "3.1 Light Side", url: "coursedetails/modules/level1/ArrangnmentOfPieces/41" },
      { id: "3.2", title: "3.2 Dark Side", url: "coursedetails/modules/level1/ArrangnmentOfPieces/42" },
    ],
  },
  {
    id: 4,
    title: "specialMoves",
    showntitle: "Special Moves",
    duration: "10",
    url: "coursedetails/modules/level1/specialMoves/51",
    submodules: [
      { id: "4.1", title: "4.1 Castling", url: "coursedetails/modules/level1/specialMoves/51" },
      { id: "4.2", title: "4.2 Promotion", url: "coursedetails/modules/level1/specialMoves/52" },
      { id: "4.3", title: "4.3 En-passant", url: "coursedetails/modules/level1/specialMoves/53" },
    ],
  },
  {
    id: 5,
    title: "winningInChess",
    showntitle: "Winning In Chess",
    duration: "15",
    url: "coursedetails/modules/level1/winningInChess/61",
    submodules: [
      { id: "5.1", title: "5.1 Checkmate", url: "coursedetails/modules/level1/winningInChess/61" },
      { id: "5.2", title: "5.2 Checks", url: "coursedetails/modules/level1/winningInChess/62" },
      { id: "5.3", title: "5.3 Stalemate", url: "coursedetails/modules/level1/winningInChess/63" },
      { id: "5.4", title: "5.4 Attack & Defense", url: "coursedetails/modules/level1/winningInChess/64" },
      { id: "5.5", title: "5.5 Capture", url: "coursedetails/modules/level1/winningInChess/65" },
      { id: "5.6", title: "5.6 Draw", url: "coursedetails/modules/level1/winningInChess/66" },
    ],
  },
  {
    id: 6,
    title: "understandingPieceExchanges",
    showntitle: "Piece Exchange",
    duration: "10",
    url: "coursedetails/modules/level1/pieceExchange/71",
    submodules: [
      { id: "6.1", title: "6.1 Fair Trade", url: "coursedetails/modules/level1/understandingPieceExchanges/71" },
      { id: "6.2", title: "6.2 Exchange Up", url: "coursedetails/modules/level1/understandingPieceExchanges/72" },
      { id: "6.3", title: "6.3 Exchange Down", url: "coursedetails/modules/level1/understandingPieceExchanges/73" },
      { id: "6.4", title: "6.4 Material Up", url: "coursedetails/modules/level1/understandingPieceExchanges/74" },
      { id: "6.5", title: "6.5 Material Down", url: "coursedetails/modules/level1/understandingPieceExchanges/75" },
    ],
  },
  {
    id: 7,
    title: "stagesOfTheGame",
    showntitle: "3 Stages Of Chess",
    duration: "15",
    url: "coursedetails/modules/level1/stagesOfChess/81",
    submodules: [
      { id: "7.1", title: "7.1 Opening", url: "coursedetails/modules/level1/stagesOfTheGame/81" },
      { id: "7.2", title: "7.2 Middlegame", url: "coursedetails/modules/level1/stagesOfTheGame/82" },
      { id: "7.3", title: "7.3 Endgame", url: "coursedetails/modules/level1/stagesOfTheGame/83" },
    ],
  },
  {
    id: 8,
    title: "notation",
    showntitle: "Chess Notations",
    duration: "10",
    url: "coursedetails/modules/level1/chessNotations/91",
    submodules: [
      { id: "8.1", title: "8.1 Notation", url: "coursedetails/modules/level1/notation/91" },
    ],
  },
  {
    id: 9,
    title: "chessGame",
    showntitle: "Chess Game",
    duration: "10",
    url: "coursedetails/modules/level1/chessGame/101",
    submodules: [
      { id: "9.1", title: "9.1 Chess Game", url: "coursedetails/modules/level1/chessGame/101" },
    ],
  },
];


export const myCoursesData2 = [
  { id: 1, title: "Take a Look Graphic De..", duration: "15" },
  { id: 2, title: "Working with Graphic De..", duration: "10" },
  { id: 3, title: "Working with Frame & Lay..", duration: "10" },
  { id: 4, title: "Working with Frame & Lay..", duration: "10" },
];

export const messageData = [
  {
    id: 1,
    title: "Annette",
    message: "Hi, Good Evening Bro.!",
    image: require("../assets/images/mentor1.png"),
    time: "14:59",
    unread: "03",
  },
  {
    id: 2,
    title: "Cody",
    message: "Hi, Good Evening Bro.!",
    image: require("../assets/images/mentor2.png"),
    time: "14:59",
    unread: "03",
  },
  {
    id: 3,
    title: "Jenny ",
    message: "Hi, Good Evening Bro.!",
    image: require("../assets/images/mentor3.png"),
    time: "14:59",
  },
  {
    id: 4,
    title: "Marvin",
    message: "Hi, Good Evening Bro.!",
    image: require("../assets/images/mentor4.png"),
    time: "14:59",
  },
  {
    id: 5,
    title: "Annette",
    message: "Hi, Good Evening Bro.!",
    image: require("../assets/images/mentor5.png"),
    time: "14:59",
    unread: "03",
  },
  {
    id: 6,
    title: "Esther",
    message: "Hi, Good Evening Bro.!",
    image: require("../assets/images/mentor6.png"),
    time: "14:59",
  },
];

export const callsData = [
  {
    id: 1,
    title: "Annette",
    message: "Hi, Good Evening Bro.!",
    image: require("../assets/images/mentor1.png"),
    date: "Dec 05, 2023",
    incoming: true,
    callHistory: "Incoming",
  },
  {
    id: 2,
    title: "Cody",
    message: "Hi, Good Evening Bro.!",
    image: require("../assets/images/mentor2.png"),
    date: "Dec 05, 2023",
    outgoing: true,
    callHistory: "Outgoing",
  },
  {
    id: 3,
    title: "Jenny ",
    message: "Hi, Good Evening Bro.!",
    image: require("../assets/images/mentor3.png"),
    date: "Dec 05, 2023",
    missed: true,
    callHistory: "Missed",
  },
  {
    id: 4,
    title: "Marvin",
    message: "Hi, Good Evening Bro.!",
    image: require("../assets/images/mentor4.png"),
    date: "Dec 05, 2023",
    missed: true,
    callHistory: "Missed",
  },
  {
    id: 5,
    title: "Annette",
    message: "Hi, Good Evening Bro.!",
    image: require("../assets/images/mentor5.png"),
    date: "Dec 05, 2023",
    incoming: true,
    callHistory: "Incoming",
  },
  {
    id: 6,
    title: "Esther",
    message: "Hi, Good Evening Bro.!",
    image: require("../assets/images/mentor6.png"),
    date: "Dec 05, 2023",
    outgoing: true,
    callHistory: "Outgoing",
  },
];

export const profileData = [
  { id: 1, title: "Edit Profile", icon: <EditProfile />, screen: "edit-profile" },
  { id: 2, title: "Payment Option", icon: <PaymentIcon />, screen: "addcard" },
  {
    id: 3,
    title: "Notifications",
    icon: <Notifications />,
    screen: "notifcations",
  },
  { id: 4, title: "Security", icon: <SecurityIcon /> },
  {
    id: 5,
    title: "Language",
    icon: <LanguageIcon />,
    lang: "English (US)",
    screen: "language",
  },
  { id: 6, title: "Dark Mode", icon: <DarkModeIcon />, screen: "darkmode" },
  {
    id: 7,
    title: "Terms & Conditions",
    icon: <TermsIcon />,
    screen: "termsnconditions",
  },
  { id: 8, title: "Help Center", icon: <HelpIcon /> },
  {
    id: 9,
    title: "Intive Friends",
    icon: <InviteIcon />,
    screen: "invitefriends",
  },
  {
    id: 10,
    title: "Logout",
    icon: <LogoutIcon />,
    action: "logout", // Add an action for logout
  },
];


export const profileLanguageData = [
  { id: 1, language: "English (US)" },
  { id: 2, language: "English (UK)" },
];

export const allLanguages = [
  { id: 1, language: "English (US)" },
  { id: 2, language: "Arabic" },
  { id: 3, language: "Hindi" },
  { id: 4, language: "Bengali" },
  { id: 5, language: "Deutsch" },
  { id: 6, language: "Italian" },
  { id: 7, language: "Korean" },
  { id: 8, language: "Francais" },
];

export const cardDetails = [
  { id: 1, title: "Card Name*", placeholder: "Dianne Russell" },
  { id: 2, title: "Card Number*", placeholder: "****  **65  8765  3456" },
  { id: 3, title: "Expiry Date*", placeholder: "12/28" },
  { id: 4, title: "CVV*", placeholder: "***" },
];

export const inviteData = [
  {
    id: 1,
    title: "Annette",
    number: "(684) 555-0102",
    image: require("../assets/images/mentor1.png"),
  },
  {
    id: 2,
    title: "Cody",
    number: "(684) 555-0102",
    image: require("../assets/images/mentor2.png"),
  },
  {
    id: 3,
    title: "Jenny ",
    number: "(684) 555-0102",
    image: require("../assets/images/mentor3.png"),
  },
  {
    id: 4,
    title: "Marvin",
    number: "(684) 555-0102",
    image: require("../assets/images/mentor4.png"),
  },
  {
    id: 5,
    title: "Floyd",
    number: "(684) 555-0102",
    image: require("../assets/images/mentor5.png"),
  },
  {
    id: 6,
    title: "Esther",
    number: "(684) 555-0102",
    image: require("../assets/images/mentor6.png"),
  },
];
