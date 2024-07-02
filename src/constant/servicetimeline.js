import E from "../assets/Images/E.svg";
import B from "../assets/Images/B.svg";
import P from "../assets/Images/P.svg";
import GradientColor from "../assets/Images/backgradient.png";
import Arrow from "../assets/Images/rightArrow.svg"
export const TimelineData = [
  {
    id: 1,
    title: 'Estimator',
    description: 'Leveraging state-of-the-art algorithms and cutting-edge advancements in natural language processing, our chatbots possess the ability to comprehend intricate contextual cues with remarkable accuracy. This enables them to engage in nuanced and personalized conversations that closely mimic the intricacies of human-like interactions.',
    items: ['On-Screen Take off', 'Estimate', 'Bid Proposal', 'Respond to Revisions', 'More'],
    gradient: `url(${GradientColor})`,
    img: E,
    Arrow:Arrow
  },
  {
    id: 2,
    title: 'Bid Coordinator',
    description: 'Leveraging state-of-the-art algorithms and cutting-edge advancements in natural language processing, our chatbots possess the ability to comprehend intricate contextual cues with remarkable accuracy. This enables them to engage in nuanced and personalized conversations that closely mimic the intricacies of human-like interactions.',
    items: ['On-Screen Take off', 'Estimate', 'Bid Proposal', 'Project Scouting', 'More'],
    gradient: `url(${GradientColor})`,
    img: B,
    Arrow:Arrow
  },
  {
    id: 3,
    title: 'Project Engineer',
    description: 'Leveraging state-of-the-art algorithms and cutting-edge advancements in natural language processing, our chatbots possess the ability to comprehend intricate contextual cues with remarkable accuracy. This enables them to engage in nuanced and personalized conversations that closely mimic the intricacies of human-like interactions.',
    items: ['Estimation for Purchase Order', 'Trade Specific Procurement', 'More'],
    gradient: `url(${GradientColor})`,
    img: P,
    Arrow:Arrow
  }
];
