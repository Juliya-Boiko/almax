import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MobileHidden = styled.div`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }

  svg {
    margin: 0 0 0 20px;
  }
`;

export const Logo:React.FC = () => {
  return (
    <LogoContainer>
      <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.2444 24.1445C26.5958 24.9832 22.7215 23.252 21.017 19.7842L15.8201 9.21439L11.7529 0.940941C12.6674 0.339667 13.7568 0 14.8989 0H16.668C17.8346 0 18.9451 0.346649 19.8788 0.960144C20.0854 1.09531 20.2815 1.2442 20.4691 1.40381L20.4832 1.41603C21.0559 1.91156 21.534 2.52331 21.8793 3.22534L22.6307 4.75384L31.1994 22.1846C31.5949 22.9903 31.1255 23.9435 30.2444 24.1445Z" fill="#4F4F4F"/>
        <path d="M22.6305 4.75359L22.4515 4.75084C19.6996 4.71044 17.1828 6.28059 16.0337 8.75502L15.8204 9.21439L10.625 19.7842C8.92085 23.252 5.04799 24.9832 1.3977 24.1445C0.514996 23.9435 0.0454134 22.9886 0.441395 22.1843L9.79474 3.15925C10.2449 2.24424 10.928 1.48511 11.753 0.940941C12.6674 0.339667 13.7568 0 14.8989 0H16.6681C17.8346 0 18.9452 0.346649 19.8788 0.960144L20.4691 1.40381L20.4832 1.41603C21.0559 1.91156 21.5341 2.52331 21.8794 3.22534L22.6305 4.75359Z" fill="#111111"/>
        <path d="M15.8203 24.3813C17.7304 24.3813 19.2788 22.8493 19.2788 20.9595C19.2788 19.0696 17.7304 17.5376 15.8203 17.5376C13.9102 17.5376 12.3618 19.0696 12.3618 20.9595C12.3618 22.8493 13.9102 24.3813 15.8203 24.3813Z" fill="#111111"/>
      </svg>
      <MobileHidden>
        <svg width="54" height="11" viewBox="0 0 54 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.94397 11.0002L4.63997 0.990234H7.62197L11.332 11.0002H8.22397L7.73397 9.53024H4.34597L3.85597 11.0002H0.94397ZM5.66197 5.55423L5.00397 7.51423H7.07597L6.44597 5.55423L6.06797 4.26623H6.03997C5.89997 4.79823 5.77397 5.22757 5.66197 5.55423Z" fill="#333333"/>
          <path d="M12.3032 11.0002V0.990234H15.2292V8.49423H19.5132V11.0002H12.3032Z" fill="#333333"/>
          <path d="M20.7076 11.0002V0.990234H24.5156L26.0556 6.59023H26.0836L27.6236 0.990234H31.4596V11.0002H28.8136V4.72823H28.7856L27.1196 11.0002H24.9776L23.3116 4.72823H23.2836V11.0002H20.7076Z" fill="#333333"/>
          <path d="M32.4188 11.0002L36.1148 0.990234H39.0968L42.8068 11.0002H39.6988L39.2088 9.53024H35.8208L35.3308 11.0002H32.4188ZM37.1368 5.55423L36.4788 7.51423H38.5508L37.9208 5.55423L37.5428 4.26623H37.5148C37.3748 4.79823 37.2488 5.22757 37.1368 5.55423Z" fill="#333333"/>
          <path d="M43.2848 11.0002L46.6868 5.73623L43.5928 0.990234H46.9668L48.5208 3.66423H48.5488L50.1308 0.990234H53.3088L50.2988 5.70823L53.6308 11.0002H50.1448L48.4228 7.87823H48.3948L46.5748 11.0002H43.2848Z" fill="#333333"/>
        </svg>
        <svg width="91" height="14" viewBox="0 0 91 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.834 10.1742H4.326C5.48333 10.1742 6.342 9.8149 6.902 9.09624C7.47133 8.36824 7.756 7.34623 7.756 6.03023C7.756 3.2209 6.64533 1.81623 4.424 1.81623H1.834V10.1742ZM0.895996 11.0002V0.990234H4.452C5.88 0.990234 6.94866 1.4429 7.658 2.34823C8.37666 3.25357 8.736 4.4809 8.736 6.03023C8.736 7.5609 8.36266 8.77423 7.616 9.67023C6.87866 10.5569 5.79133 11.0002 4.354 11.0002H0.895996Z" fill="#111111"/>
          <path d="M13.3862 11.1822C12.3315 11.1822 11.5055 10.8322 10.9082 10.1322C10.3109 9.4229 10.0122 8.50823 10.0122 7.38824C10.0122 6.2869 10.3155 5.38157 10.9222 4.67223C11.5289 3.95357 12.3269 3.59423 13.3162 3.59423C13.8762 3.59423 14.3615 3.70157 14.7722 3.91623C15.1922 4.1309 15.5189 4.42957 15.7522 4.81223C15.9855 5.1949 16.1535 5.6149 16.2562 6.07223C16.3682 6.52023 16.4242 7.01023 16.4242 7.54223H10.9082C10.9269 8.4009 11.1462 9.1009 11.5662 9.64223C11.9862 10.1742 12.5929 10.4402 13.3862 10.4402C14.4875 10.4402 15.1922 9.8989 15.5002 8.81623H16.3402C16.1815 9.54423 15.8455 10.1229 15.3322 10.5522C14.8282 10.9722 14.1795 11.1822 13.3862 11.1822ZM10.9222 6.85623H15.5142C15.4955 6.10023 15.2995 5.4889 14.9262 5.02223C14.5622 4.54623 14.0255 4.30823 13.3162 4.30823C12.6162 4.30823 12.0609 4.54157 11.6502 5.00823C11.2489 5.4749 11.0062 6.0909 10.9222 6.85623Z" fill="#111111"/>
          <path d="M20.4536 11.1962C19.5202 11.1962 18.7969 10.9722 18.2836 10.5242C17.7796 10.0762 17.5042 9.48357 17.4576 8.74623H18.3396C18.4609 9.8849 19.1702 10.4542 20.4676 10.4542C21.0556 10.4542 21.5082 10.3282 21.8256 10.0762C22.1429 9.82423 22.3016 9.48357 22.3016 9.05423C22.3016 8.66223 22.1662 8.3729 21.8956 8.18624C21.6342 7.99957 21.1256 7.82223 20.3696 7.65423C19.9309 7.55157 19.5809 7.45824 19.3196 7.37424C19.0582 7.29024 18.7876 7.17357 18.5076 7.02423C18.2369 6.86557 18.0362 6.66957 17.9056 6.43623C17.7842 6.19357 17.7236 5.90423 17.7236 5.56823C17.7236 4.9709 17.9569 4.4949 18.4236 4.14023C18.8902 3.78557 19.4969 3.60823 20.2436 3.60823C21.8489 3.60823 22.7449 4.32223 22.9316 5.75023H22.0636C21.9609 4.79823 21.3542 4.32223 20.2436 4.32223C19.7022 4.32223 19.2916 4.43423 19.0116 4.65823C18.7316 4.88223 18.5916 5.17157 18.5916 5.52623C18.5916 5.9089 18.7409 6.18423 19.0396 6.35223C19.3382 6.5109 19.8796 6.68357 20.6636 6.87023C21.5222 7.04757 22.1522 7.28557 22.5536 7.58423C22.9642 7.87357 23.1696 8.3589 23.1696 9.04024C23.1696 9.69357 22.9222 10.2162 22.4276 10.6082C21.9422 11.0002 21.2842 11.1962 20.4536 11.1962Z" fill="#111111"/>
          <path d="M24.684 11.0002V3.76223H25.552V11.0002H24.684ZM24.684 2.22223V0.990234H25.552V2.22223H24.684Z" fill="#111111"/>
          <path d="M30.2692 13.5342C29.4105 13.5342 28.7292 13.3569 28.2252 13.0022C27.7212 12.6569 27.4365 12.2042 27.3712 11.6442H28.2112C28.3512 12.4282 29.0279 12.8202 30.2412 12.8202C30.9972 12.8202 31.5619 12.6382 31.9352 12.2742C32.3179 11.9102 32.5092 11.4016 32.5092 10.7482V9.60023H32.4672C31.9165 10.4402 31.1512 10.8602 30.1712 10.8602C29.2285 10.8602 28.4725 10.5289 27.9032 9.86623C27.3432 9.19423 27.0632 8.32157 27.0632 7.24823C27.0632 6.1189 27.3619 5.23223 27.9592 4.58823C28.5565 3.9349 29.2939 3.60823 30.1712 3.60823C31.1885 3.60823 31.9539 4.0329 32.4672 4.88223H32.5092V3.76223H33.3632V10.7202C33.3632 11.5229 33.1392 12.1716 32.6912 12.6662C32.1405 13.2449 31.3332 13.5342 30.2692 13.5342ZM30.2132 10.1322C30.9972 10.1322 31.5852 9.87557 31.9772 9.36223C32.3692 8.83957 32.5652 8.13023 32.5652 7.23423C32.5652 6.34757 32.3645 5.6429 31.9632 5.12023C31.5712 4.59757 30.9925 4.33623 30.2272 4.33623C29.5179 4.33623 28.9625 4.60223 28.5612 5.13423C28.1599 5.6569 27.9592 6.36623 27.9592 7.26223C27.9592 8.1209 28.1505 8.81623 28.5332 9.34823C28.9159 9.8709 29.4759 10.1322 30.2132 10.1322Z" fill="#111111"/>
          <path d="M35.244 11.0002V3.76223H36.112V4.86823H36.14C36.7093 4.02823 37.5167 3.60823 38.562 3.60823C39.2527 3.60823 39.808 3.8089 40.228 4.21023C40.6573 4.60223 40.872 5.1529 40.872 5.86223V11.0002H40.004V5.94623C40.004 4.88223 39.4533 4.35023 38.352 4.35023C37.7267 4.35023 37.1947 4.54623 36.756 4.93823C36.3267 5.33023 36.112 5.82023 36.112 6.40823V11.0002H35.244Z" fill="#111111"/>
          <path d="M44.6008 11.0002L48.3808 0.990234H49.4448L53.2528 11.0002H52.2448L51.0828 7.85023H46.7288L45.5528 11.0002H44.6008ZM47.0088 7.08023H50.8028L49.4308 3.34223L48.9268 1.88623H48.8988C48.7215 2.45557 48.5582 2.9409 48.4088 3.34223L47.0088 7.08023Z" fill="#111111"/>
          <path d="M57.0644 13.5342C56.2058 13.5342 55.5244 13.3569 55.0204 13.0022C54.5164 12.6569 54.2318 12.2042 54.1664 11.6442H55.0064C55.1464 12.4282 55.8231 12.8202 57.0364 12.8202C57.7924 12.8202 58.3571 12.6382 58.7304 12.2742C59.1131 11.9102 59.3044 11.4016 59.3044 10.7482V9.60023H59.2624C58.7118 10.4402 57.9464 10.8602 56.9664 10.8602C56.0238 10.8602 55.2678 10.5289 54.6984 9.86623C54.1384 9.19423 53.8584 8.32157 53.8584 7.24823C53.8584 6.1189 54.1571 5.23223 54.7544 4.58823C55.3518 3.9349 56.0891 3.60823 56.9664 3.60823C57.9838 3.60823 58.7491 4.0329 59.2624 4.88223H59.3044V3.76223H60.1584V10.7202C60.1584 11.5229 59.9344 12.1716 59.4864 12.6662C58.9358 13.2449 58.1284 13.5342 57.0644 13.5342ZM57.0084 10.1322C57.7924 10.1322 58.3804 9.87557 58.7724 9.36223C59.1644 8.83957 59.3604 8.13023 59.3604 7.23423C59.3604 6.34757 59.1598 5.6429 58.7584 5.12023C58.3664 4.59757 57.7878 4.33623 57.0224 4.33623C56.3131 4.33623 55.7578 4.60223 55.3564 5.13423C54.9551 5.6569 54.7544 6.36623 54.7544 7.26223C54.7544 8.1209 54.9458 8.81623 55.3284 9.34823C55.7111 9.8709 56.2711 10.1322 57.0084 10.1322Z" fill="#111111"/>
          <path d="M65.0352 11.1822C63.9806 11.1822 63.1546 10.8322 62.5572 10.1322C61.9599 9.4229 61.6612 8.50823 61.6612 7.38824C61.6612 6.2869 61.9646 5.38157 62.5712 4.67223C63.1779 3.95357 63.9759 3.59423 64.9652 3.59423C65.5252 3.59423 66.0106 3.70157 66.4212 3.91623C66.8412 4.1309 67.1679 4.42957 67.4012 4.81223C67.6346 5.1949 67.8026 5.6149 67.9052 6.07223C68.0172 6.52023 68.0732 7.01023 68.0732 7.54223H62.5572C62.5759 8.4009 62.7952 9.1009 63.2152 9.64223C63.6352 10.1742 64.2419 10.4402 65.0352 10.4402C66.1366 10.4402 66.8412 9.8989 67.1492 8.81623H67.9892C67.8306 9.54423 67.4946 10.1229 66.9812 10.5522C66.4772 10.9722 65.8286 11.1822 65.0352 11.1822ZM62.5712 6.85623H67.1632C67.1446 6.10023 66.9486 5.4889 66.5752 5.02223C66.2112 4.54623 65.6746 4.30823 64.9652 4.30823C64.2652 4.30823 63.7099 4.54157 63.2992 5.00823C62.8979 5.4749 62.6552 6.0909 62.5712 6.85623Z" fill="#111111"/>
          <path d="M69.5686 11.0002V3.76223H70.4366V4.86823H70.4646C71.034 4.02823 71.8413 3.60823 72.8866 3.60823C73.5773 3.60823 74.1326 3.8089 74.5526 4.21023C74.9819 4.60223 75.1966 5.1529 75.1966 5.86223V11.0002H74.3286V5.94623C74.3286 4.88223 73.7779 4.35023 72.6766 4.35023C72.0513 4.35023 71.5193 4.54623 71.0806 4.93823C70.6513 5.33023 70.4366 5.82023 70.4366 6.40823V11.0002H69.5686Z" fill="#111111"/>
          <path d="M79.928 11.1822C78.9013 11.1822 78.094 10.8276 77.506 10.1182C76.9273 9.4089 76.638 8.4989 76.638 7.38824C76.638 6.27757 76.932 5.36757 77.52 4.65823C78.108 3.9489 78.9153 3.59423 79.942 3.59423C80.7446 3.59423 81.398 3.80423 81.902 4.22423C82.4153 4.6349 82.7326 5.2089 82.854 5.94623H81.986C81.7713 4.86357 81.09 4.32223 79.942 4.32223C79.1486 4.32223 78.5466 4.61157 78.136 5.19023C77.7346 5.75957 77.534 6.49224 77.534 7.38824C77.534 8.28424 77.7346 9.0169 78.136 9.58624C78.5466 10.1556 79.144 10.4402 79.928 10.4402C80.5346 10.4402 81.0246 10.2676 81.398 9.92223C81.7713 9.56757 81.9953 9.09623 82.07 8.50823H82.896C82.812 9.3389 82.5086 9.99224 81.986 10.4682C81.4633 10.9442 80.7773 11.1822 79.928 11.1822Z" fill="#111111"/>
          <path d="M85.0689 13.3942C84.8169 13.3942 84.5696 13.3569 84.3269 13.2822V12.5122H84.3689C84.5649 12.5776 84.7842 12.6102 85.0269 12.6102C85.5963 12.6102 85.9976 12.2836 86.2309 11.6302L86.4689 10.9862L83.6829 3.76223H84.6069L86.3429 8.43823L86.9169 10.0902H86.9449C87.1502 9.4369 87.3322 8.88623 87.4909 8.43823L89.1569 3.76223H90.0529L87.0709 11.7562C86.8376 12.3816 86.5669 12.8109 86.2589 13.0442C85.9603 13.2776 85.5636 13.3942 85.0689 13.3942Z" fill="#111111"/>
        </svg>
      </MobileHidden>
    </LogoContainer>
  );
};