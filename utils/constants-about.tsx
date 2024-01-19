import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CodeBracketIcon,
  FaceSmileIcon,
  HandThumbUpIcon,
  HeartIcon,
  LifebuoyIcon,
  LightBulbIcon,
  MagnifyingGlassCircleIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { yearsOfExperience } from "./helpers";

export const START_DATE = new Date("January 2, 2018");
export const ABOUT_TAB_SIMPLE = "Simple";
export const ABOUT_TAB_DETAILED = "Detailed";
export const ABOUT_TAB_RPG = "RPG";
export const ABOUT_TABS = [
  ABOUT_TAB_SIMPLE,
  ABOUT_TAB_DETAILED,
  // ABOUT_TAB_RPG
];
export const ABOUT_CARDS = [
  {
    icon: <UserIcon className="h-6 w-6" />,
    header: "I think I'm:",
    list: [
      {
        icon: <PuzzlePieceIcon className="h-6 w-6" />,
        text: "Curious",
      },
      {
        icon: <MagnifyingGlassCircleIcon className="h-6 w-6" />,
        text: "Observant",
      },
      {
        icon: <FaceSmileIcon className="h-6 w-6" />,
        text: "Humorous",
      },
    ],
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    header: "Others say I'm:",
    list: [
      {
        icon: <LightBulbIcon className="h-6 w-6" />,
        text: "Smart",
      },
      {
        icon: <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />,
        text: "Soft-spoken",
      },
      {
        icon: <HeartIcon className="h-6 w-6" />,
        text: "Understanding",
      },
    ],
  },
  {
    icon: <HandThumbUpIcon className="h-6 w-6" />,
    header: "I like to:",
    list: [
      {
        icon: <CodeBracketIcon className="h-6 w-6" />,
        text: "Code",
      },
      {
        icon: <LifebuoyIcon className="h-6 w-6" />,
        text: "Kayak",
      },
      {
        icon: <BellIcon className="h-6 w-6" />,
        text: "Eat Ice Cream",
      },
    ],
  },
];

export const ABOUT_DETAILED_SUMMARY = (
  <>
    <p>
      I'm a full stack developer with over {yearsOfExperience()} years of
      experience and a background in accounting and nonprofit finance.
    </p>
    <p>
      In 2017, I decided to attend Fullstack Academy, and was offered my first
      role as a Software Engineer. I developed full stack applications and
      designed and implemented robotic process automation (RPA) solutions. I
      contributed to production applications built with Node.js, React,
      AngularJS/Angular, Oracle SQL and PostgreSQL, Azure Cloud Functions, and
      countless Node libraries. In addition to hands-on development, I
      contributed to the overall planning, design, and architecture of several
      of our applications.
    </p>
    <p>
      In 2022, I accepted a position at a university where I've immersed myself
      in the university's learning applications and 3rd party integrations. I was 
      responsible for the development and maintenance of over a dozen
      applications, from mini-games to quizzes.
    </p>
    <p>
      In 2023, I joined the enterprise team of a major consulting company. I'm 
      currently working with tools that streamline compliance and supplier risk 
      management.
    </p>
    <p>
      What I value most is being part of a diverse team in a role that is a good
      fit for my skills, with room to grow, learn, and make an impact.
    </p>
  </>
);
