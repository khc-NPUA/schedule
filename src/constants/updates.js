// images
import panel7Img from '../assets/img/updates/panel7.png';
import themesZImg from '../assets/img/updates/themes-z.png';
import panel6Img from '../assets/img/updates/panel-6.png';
import themeMatrixImg from '../assets/img/updates/theme-matrix.png'
import themeGoldBlackImg from '../assets/img/updates/theme-goldblack.png'
import panel5Img from '../assets/img/updates/panel-5.png'
import panel4Img from '../assets/img/updates/panel-4.png'
import panel3Img from '../assets/img/updates/panel-3.png'
import themesImg from '../assets/img/updates/themes.png';
import theme3Img from '../assets/img/updates/theme-3.png';
import lessonCardImg from '../assets/img/updates/lesson-card.png';
import weekComponentImg from '../assets/img/updates/week-component.png';
import theme2Img from '../assets/img/updates/theme-2.png';
import themeImg from '../assets/img/updates/theme.png';
import lessonCard2Img from '../assets/img/updates/lesson-card-2.png';

const lastUpdateAt = "2026-04-26T20:02:29.668Z"

export const listTypes = {
  text: "text",
  img: "img",
};

const updates = {
  lastUpdateAt,
  versions: [
    {
      version: "1.14.0",
      list: [
        [listTypes.text, "Տեղափոխվել է նոր դոմեյն"],
        [listTypes.text, "Հնարավորություն տեսնել թարմացումների պատմությունը"],
      ],
    },
    {
      version: "1.13.0",
      list: [
        [listTypes.text, "Ցուցադրել localStorage-ի տվյալները"],
      ],
    },
    {
      version: "1.12.0",
      list: [
        [listTypes.text, "Կարգավորումների բաժինը բաժանվել է էջերի"],
        [listTypes.text, "Թարմացվել են ակտիվ օրվա ոճերը"],
        [listTypes.text, "Թարմացվել են թեմաների ակցենտների գույնները"],
        [listTypes.text, "Փոխվել են toggle-ի ոճերը"],
      ],
    },
    {
      version: "1.11.0",
      list: [
        [listTypes.text, "Էջերի անունները header-ում"],
      ],
    },
    {
      version: "1.10.0",
      list: [
        [listTypes.text, "Տվյալների կարգավորման ֆունկցիա"],
      ],
    },
    {
      version: "1.9.0",
      list: [
        [listTypes.text, "Նոր կարգավորում՝ ցույց տալ լսարանի համարը"],
      ],
    },
    {
      version: "1.8.0",
      list: [
        [listTypes.text, "Լավացված UI/UX նավիգացիայի համար"],
        [listTypes.img, panel7Img],
      ],
    },
    {
      version: "1.7.0",
      list: [
        [listTypes.text, "Նոր թեմա՝ Testet"],
        [listTypes.text, "Նոր թեմա՝ Сyber Slate"],
        [listTypes.img, themesZImg],
      ],
    },
    {
      version: "1.6.0",
      list: [
        [listTypes.text, "Նոր էջ՝ Events"],
      ],
    },
    {
      version: "1.5.0",
      list: [
        [listTypes.text, "Նոր UI/UX՝ նավիգացիայի համար"],
        [listTypes.img, panel6Img],
      ],
    },
    {
      version: "1.4.1",
      list: [
        [listTypes.text, "Նոր թեմա՝ Matrix"],
        [listTypes.img, themeMatrixImg],
      ],
    },
    {
      version: "1.4.0",
      list: [
        [listTypes.text, "Theme-ում ավելացվել է card preview-ի աջ գիծ"],
      ],
    },
    {
      version: "1.3.0",
      list: [
        [listTypes.text, "Նոր թեմա՝ Gold & Black"],
        [listTypes.img, themeGoldBlackImg],
      ],
    },
    {
      version: "1.2.0",
      list: [
        [listTypes.text, "Նոր UI նավիգացիայի համար"],
        [listTypes.img, panel5Img],
      ],
    },
    {
      version: "1.1.0",
      list: [
        [listTypes.text, "Նոր էջ՝ Կարգավորումներ"],
        [listTypes.img, panel4Img],
      ],
    },
    {
      version: "1.0.0",
      list: [
        [listTypes.text, "ՌԵԼԻԶ ՏԱՐԲԵՐԱԿ"],
        [listTypes.text, "Նոր UI/UX նավիգացիայի համար"],
        [listTypes.img, panel3Img],
      ],
    },
    {
      version: "0.3.4",
      list: [
        [listTypes.text, "Նոր էջ՝ Թեմաներ"],
        [listTypes.img, themesImg],
      ],
    },
    {
      version: "0.3.3",
      list: [
        [listTypes.text, "Նոր թեմա՝ Glass"],
        [listTypes.img, theme3Img],
      ],
    },
    {
      version: "0.3.2",
      list: [
        [listTypes.text, "bug fix"],
        [listTypes.text, "Space թեմայի background-ը փոխվել է"],
        [listTypes.text, "Հեռացվել են ավարտված դասերը"],
      ],
    },
    {
      version: "0.3.1",
      list: [
        [listTypes.text, "Ավելացվել է համարիչ/հայտարարի button-ներ"],
        [listTypes.text, "Դասացուցակի թարմացում"],
      ],
    },
    {
      version: "0.3.0",
      list: [
        [listTypes.text, "Թարգմանվել է հայերեն"],
        [listTypes.text, "Նոր UI/UX Lesson  կոմպոնենտի համար"],
        [listTypes.img, lessonCard2Img],
      ],
    },
    {
      version: "0.2.3",
      list: [
        [listTypes.text, "Նոր UI/UX Lesson կոմպոնենտի համար"],
        [listTypes.img, lessonCardImg],
      ],
    },
    {
      version: "0.2.2",
      list: [
        [listTypes.text, "Ավելացվել են իրական դասեր"],
      ],
    },
    {
      version: "0.2.1",
      list: [
        [listTypes.text, "Բետա նամակի թարմացված ոճեր"],
      ],
    },
    {
      version: "0.2.0",
      list: [
        [listTypes.text, "Նոր UI/UX բոլոր button-ների համար"],
        [listTypes.text, "Ամբողջ շաբաթվա դասացուցակ"],
        [listTypes.text, "Նոր թեմաներ"],
        [listTypes.img, weekComponentImg],
        [listTypes.img, theme2Img],
      ],
    },
    {
      version: "0.1.0",
      list: [
        [listTypes.text, "Պրոեկտի հիմնական տեսք"],
        [listTypes.text, "Թեմա ընտրելու մենյու"],
        [listTypes.img, themeImg],
      ],
    },
  ],
};

export default updates;
