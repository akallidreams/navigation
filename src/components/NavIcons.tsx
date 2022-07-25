import { Icon } from "native-base";
import { Mask, Path } from "react-native-svg";
import { IIconProps } from "./types";

export const ProfileIcon = (props: IIconProps) => {
  return (
    <Icon size={props.size} viewBox="0 0 30 30">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 0C13.4177 0 11.871 0.469192 10.5554 1.34824C9.23984 2.22729 8.21446 3.47672 7.60896 4.93853C7.00346 6.40034 6.84504 8.00887 7.15372 9.56072C7.4624 11.1126 8.22432 12.538 9.34314 13.6569C10.462 14.7757 11.8874 15.5376 13.4393 15.8463C14.9911 16.155 16.5997 15.9965 18.0615 15.391C19.5233 14.7855 20.7727 13.7602 21.6518 12.4446C22.5308 11.129 23 9.58225 23 8C23 5.87827 22.1571 3.84344 20.6569 2.34315C19.1566 0.842855 17.1217 0 15 0ZM15 2C16.1867 2 17.3467 2.35189 18.3334 3.01118C19.3201 3.67047 20.0892 4.60754 20.5433 5.7039C20.9974 6.80026 21.1162 8.00666 20.8847 9.17054C20.6532 10.3344 20.0818 11.4035 19.2426 12.2426C18.4035 13.0818 17.3344 13.6532 16.1705 13.8847C15.0067 14.1162 13.8003 13.9974 12.7039 13.5433C11.6075 13.0892 10.6705 12.3201 10.0112 11.3334C9.35189 10.3467 9 9.18669 9 8C9 6.4087 9.63214 4.88258 10.7574 3.75736C11.8826 2.63214 13.4087 2 15 2Z"
        fill={props.color || "grey"}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 18.2002C9.343 18.2002 4.442 19.3752 2 21.0202C1.43735 21.3274 0.959958 21.7698 0.610825 22.3075C0.261692 22.8451 0.0517818 23.4612 0 24.1002C0.0517818 24.7392 0.261692 25.3552 0.610825 25.8929C0.959958 26.4306 1.43735 26.8729 2 27.1802C4.442 28.8252 9.343 30.0002 15 30.0002C20.657 30.0002 25.558 28.8252 28 27.1802C28.5627 26.8729 29.04 26.4306 29.3892 25.8929C29.7383 25.3552 29.9482 24.7392 30 24.1002C29.9482 23.4612 29.7383 22.8451 29.3892 22.3075C29.04 21.7698 28.5627 21.3274 28 21.0202C25.558 19.3752 20.657 18.2002 15 18.2002ZM15 20.2002C18.7152 20.081 22.4149 20.7309 25.867 22.1092C26.494 22.3836 27.0676 22.7669 27.561 23.2412C27.6969 23.3394 27.8075 23.4685 27.8838 23.6179C27.9602 23.7672 27.9999 23.9325 27.9999 24.1002C27.9999 24.2679 27.9602 24.4332 27.8838 24.5825C27.8075 24.7318 27.6969 24.8609 27.561 24.9592C27.0676 25.4335 26.494 25.8168 25.867 26.0912C22.4149 27.4695 18.7152 28.1194 15 28.0002C11.2848 28.1194 7.5851 27.4695 4.133 26.0912C3.50596 25.8168 2.93245 25.4335 2.439 24.9592C2.3031 24.8609 2.19246 24.7318 2.11615 24.5825C2.03985 24.4332 2.00006 24.2679 2.00006 24.1002C2.00006 23.9325 2.03985 23.7672 2.11615 23.6179C2.19246 23.4685 2.3031 23.3394 2.439 23.2412C2.93245 22.7669 3.50596 22.3836 4.133 22.1092C7.5851 20.7309 11.2848 20.081 15 20.2002Z"
        fill={props.color || "grey"}
      />
    </Icon>
  );
};

export const ProofIcon = (props: IIconProps) => {
  return (
    <Icon size={props.size} viewBox="0 0 34 40">
      <Path
        d="M29.4445 16.381H17.8889V4.61905H4.55557V35.381H29.4445V16.381ZM33 39H1V1H21.6667L33 12.5357V39ZM21.4445 5.75V12.7619H28.3333L21.4445 5.75ZM10.7778 33.5714V26.3333H13.4445C14.9173 26.3333 16.1112 27.0961 16.1112 28.5952C16.1112 30.0943 14.9173 30.8571 13.4445 30.8571H12.5556V33.5714H10.7778ZM13.4445 29.0476C13.9354 29.0476 14.3334 29.0949 14.3334 28.5952C14.3334 28.0955 13.9354 28.1429 13.4445 28.1429H12.5556V29.0476H13.4445ZM23.2223 33.5714V26.3333H27.6667V28.1429H25.0001V29.0476H26.7778V30.8571H25.0001V33.5714H23.2223ZM17 26.3333H19.6667C21.1395 26.3333 22.3334 27.5485 22.3334 29.0476V30.8571C22.3334 32.3562 21.1395 33.5714 19.6667 33.5714H17V26.3333ZM20.5556 30.8571V29.0476C20.5556 28.5479 20.1577 28.1429 19.6667 28.1429H18.7778V31.7619H19.6667C20.1577 31.7619 20.5556 31.3568 20.5556 30.8571Z"
        fill={props.color || "grey"}
        stroke={props.color || "grey"}
        stroke-width="2"
      />
      <Path
        d="M14.7305 29.9258H13.2656V29.082H14.7305C14.9701 29.082 15.1641 29.043 15.3125 28.9648C15.4635 28.8841 15.5742 28.7747 15.6445 28.6367C15.7148 28.4961 15.75 28.3359 15.75 28.1562C15.75 27.9818 15.7148 27.819 15.6445 27.668C15.5742 27.5169 15.4635 27.3945 15.3125 27.3008C15.1641 27.207 14.9701 27.1602 14.7305 27.1602H13.6172V32H12.543V26.3125H14.7305C15.1732 26.3125 15.5508 26.3919 15.8633 26.5508C16.1784 26.707 16.418 26.9245 16.582 27.2031C16.7487 27.4792 16.832 27.7943 16.832 28.1484C16.832 28.5156 16.7487 28.832 16.582 29.0977C16.418 29.3633 16.1784 29.5677 15.8633 29.7109C15.5508 29.8542 15.1732 29.9258 14.7305 29.9258ZM19.375 32H18.1484L18.1562 31.1562H19.375C19.7057 31.1562 19.9831 31.0833 20.207 30.9375C20.431 30.7891 20.6003 30.5768 20.7148 30.3008C20.8294 30.0221 20.8867 29.6888 20.8867 29.3008V29.0078C20.8867 28.7083 20.8542 28.444 20.7891 28.2148C20.724 27.9857 20.6276 27.793 20.5 27.6367C20.375 27.4805 20.2201 27.362 20.0352 27.2812C19.8503 27.2005 19.638 27.1602 19.3984 27.1602H18.125V26.3125H19.3984C19.7786 26.3125 20.125 26.3763 20.4375 26.5039C20.7526 26.6315 21.0247 26.8151 21.2539 27.0547C21.4857 27.2917 21.6628 27.5755 21.7852 27.9062C21.9102 28.237 21.9727 28.6068 21.9727 29.0156V29.3008C21.9727 29.707 21.9102 30.0768 21.7852 30.4102C21.6628 30.7409 21.4857 31.0247 21.2539 31.2617C21.0247 31.4987 20.7513 31.681 20.4336 31.8086C20.1159 31.9362 19.763 32 19.375 32ZM18.75 26.3125V32H17.6758V26.3125H18.75ZM23.9609 26.3125V32H22.8867V26.3125H23.9609ZM26.2539 28.7695V29.6172H23.6797V28.7695H26.2539ZM26.5547 26.3125V27.1602H23.6797V26.3125H26.5547Z"
        fill={props.color || "grey"}
      />
    </Icon>
  );
};

export const PolicyIcon = (props: IIconProps) => {
  return (
    <Icon size={props.size} viewBox="0 0 34 35">
      <Path
        d="M25.4974 16.0943C25.4986 16.0769 25.5 16.0594 25.5 16.0417V6.49763C25.5 2.67167 22.588 0 18.4167 0H15.5833C11.4127 0 8.5 2.67167 8.5 6.49763V16.0417C8.5 16.0594 8.50136 16.0768 8.50261 16.0943C6.10221 16.4482 4.25 18.5787 4.25 21.1458V29.8958C4.25 32.7097 6.47417 35 9.20833 35H24.7917C27.5252 35 29.75 32.7097 29.75 29.8958V21.1458C29.75 18.5787 27.8978 16.4482 25.4974 16.0943ZM9.91667 6.49763C9.91667 3.03555 12.8542 1.45833 15.5833 1.45833H18.4167C21.1466 1.45833 24.0833 3.03555 24.0833 6.49763V16.0417H9.91667V6.49763ZM28.3333 29.8958C28.3333 31.9061 26.7445 33.5417 24.7917 33.5417H9.20833C7.25549 33.5417 5.66667 31.9061 5.66667 29.8958V21.1458C5.66667 19.1355 7.25549 17.5 9.20833 17.5H24.7917C26.7445 17.5 28.3333 19.1355 28.3333 21.1458V29.8958Z"
        fill={props.color || "grey"}
      />
      <Path
        d="M17 19.6875C15.0472 19.6875 13.4583 21.323 13.4583 23.3333C13.4583 24.4731 13.9925 25.5507 14.875 26.2347V29.1667C14.875 30.3728 15.8284 31.3542 17 31.3542C18.1716 31.3542 19.125 30.3728 19.125 29.1667V26.2347C20.0075 25.55 20.5417 24.4731 20.5417 23.3333C20.5417 21.323 18.9528 19.6875 17 19.6875ZM18.0603 25.2153C17.8422 25.345 17.7083 25.5864 17.7083 25.8453V29.1667C17.7083 29.5692 17.3903 29.8958 17 29.8958C16.6097 29.8958 16.2917 29.5692 16.2917 29.1667V25.8453C16.2917 25.5864 16.1578 25.3465 15.9397 25.2153C15.2731 24.8157 14.875 24.1121 14.875 23.3333C14.875 22.1272 15.8284 21.1458 17 21.1458C18.1716 21.1458 19.125 22.1272 19.125 23.3333C19.125 24.1121 18.7269 24.8157 18.0603 25.2153Z"
        fill={props.color || "grey"}
      />
    </Icon>
  );
};

export const TermsIcon = (props: IIconProps) => {
  return (
    <Icon size={props.size} viewBox="0 0 32 30">
      <Path
        d="M5.09091 13.75H26.9091C28.248 13.75 29.3333 14.8693 29.3333 16.25V18.75C29.3333 20.1307 28.248 21.25 26.9091 21.25H5.09091C3.75204 21.25 2.66667 20.1307 2.66667 18.75V16.25C2.66667 14.8693 3.75204 13.75 5.09091 13.75ZM5.33333 16.25V18.75H26.6667V16.25H5.33333ZM5.09091 3.75H26.9091C28.248 3.75 29.3333 4.86929 29.3333 6.25V8.75C29.3333 10.1307 28.248 11.25 26.9091 11.25H5.09091C3.75204 11.25 2.66667 10.1307 2.66667 8.75V6.25C2.66667 4.86929 3.75204 3.75 5.09091 3.75ZM5.33333 6.25V8.75H26.6667V6.25H5.33333ZM2.66667 23.75H18.6667V26.25H2.66667V23.75Z"
        fill={props.color || "grey"}
        stroke={props.color || "grey"}
      />
    </Icon>
  );
};

export const AccountIcon = (props: IIconProps) => {
  return (
    <Icon size={props.size} viewBox="0 0 22 24">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 0C9.83965 0 8.70539 0.375353 7.74062 1.07859C6.77586 1.78184 6.02391 2.78138 5.57988 3.95083C5.13584 5.12027 5.01966 6.4071 5.24603 7.64858C5.4724 8.89006 6.03114 10.0304 6.85161 10.9255C7.67208 11.8205 8.71742 12.4301 9.85544 12.677C10.9935 12.924 12.1731 12.7972 13.245 12.3128C14.317 11.8284 15.2333 11.0081 15.8779 9.95565C16.5226 8.90318 16.8666 7.6658 16.8666 6.4C16.8666 4.70261 16.2485 3.07475 15.1483 1.87452C14.0481 0.674284 12.5559 0 11 0V0ZM11 1.6C11.8702 1.6 12.7209 1.88152 13.4445 2.40895C14.1681 2.93638 14.732 3.68603 15.065 4.56312C15.3981 5.4402 15.4852 6.40532 15.3154 7.33643C15.1457 8.26754 14.7266 9.12282 14.1112 9.79411C13.4959 10.4654 12.7119 10.9226 11.8584 11.1078C11.0049 11.293 10.1202 11.1979 9.31616 10.8346C8.51217 10.4713 7.82498 9.85609 7.3415 9.06674C6.85803 8.27738 6.59997 7.34935 6.59997 6.4C6.59997 5.12696 7.06354 3.90606 7.8887 3.00589C8.71386 2.10571 9.83302 1.6 11 1.6V1.6Z"
        fill={props.color || "grey"}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 14.5601C6.85153 14.5601 3.25747 15.5001 1.46667 16.8161C1.05406 17.0619 0.703969 17.4158 0.447938 17.8459C0.191907 18.276 0.0379733 18.7689 0 19.2801C0.0379733 19.7912 0.191907 20.2841 0.447938 20.7142C0.703969 21.1444 1.05406 21.4983 1.46667 21.7441C3.25747 23.0601 6.85153 24.0001 11 24.0001C15.1485 24.0001 18.7425 23.0601 20.5333 21.7441C20.9459 21.4983 21.296 21.1444 21.5521 20.7142C21.8081 20.2841 21.962 19.7912 22 19.2801C21.962 18.7689 21.8081 18.276 21.5521 17.8459C21.296 17.4158 20.9459 17.0619 20.5333 16.8161C18.7425 15.5001 15.1485 14.5601 11 14.5601ZM11 16.1601C13.7245 16.0647 16.4376 16.5846 18.9691 17.6873C19.429 17.9068 19.8495 18.2134 20.2114 18.5929C20.3111 18.6715 20.3922 18.7747 20.4482 18.8942C20.5041 19.0137 20.5333 19.1459 20.5333 19.2801C20.5333 19.4142 20.5041 19.5465 20.4482 19.6659C20.3922 19.7854 20.3111 19.8887 20.2114 19.9673C19.8495 20.3467 19.429 20.6533 18.9691 20.8729C16.4376 21.9755 13.7245 22.4955 11 22.4001C8.27554 22.4955 5.56241 21.9755 3.03087 20.8729C2.57104 20.6533 2.15046 20.3467 1.7886 19.9673C1.68894 19.8887 1.6078 19.7854 1.55185 19.6659C1.49589 19.5465 1.46671 19.4142 1.46671 19.2801C1.46671 19.1459 1.49589 19.0137 1.55185 18.8942C1.6078 18.7747 1.68894 18.6715 1.7886 18.5929C2.15046 18.2134 2.57104 17.9068 3.03087 17.6873C5.56241 16.5846 8.27554 16.0647 11 16.1601Z"
        fill={props.color || "grey"}
      />
    </Icon>
  );
};

export const ThermsIcon = (props: IIconProps) => {
  return (
    <Icon size={props.size} viewBox="0 0 22 24">
      <Path
        d="M2.01521 7.11847H17.9848C18.4641 7.11847 18.8545 6.85012 19.1064 6.50454C19.3588 6.15828 19.5 5.70445 19.5 5.22571V2.39465C19.5 1.91544 19.3589 1.46121 19.1066 1.11462C18.8548 0.768725 18.4643 0.5 17.9848 0.5H2.01521C1.53567 0.5 1.14524 0.768725 0.893434 1.11462C0.641132 1.46121 0.5 1.91544 0.5 2.39465V5.22571C0.5 5.70447 0.64123 6.15832 0.893611 6.50457C1.1455 6.85016 1.53592 7.11847 2.01521 7.11847ZM2.45307 2.8072H17.5469V4.81127H2.45307V2.8072Z"
        fill={props.color || "grey"}
        stroke={props.color || "grey"}
      />
      <Path
        d="M2.01521 14.7555H17.9848C18.464 14.7555 18.8544 14.4873 19.1063 14.1418C19.3588 13.7956 19.5 13.3418 19.5 12.8631V10.0297C19.5 9.55099 19.3588 9.09715 19.1064 8.75089C18.8545 8.40531 18.4641 8.13696 17.9848 8.13696H2.01521C1.5359 8.13696 1.14549 8.40531 0.893606 8.75089C0.641234 9.09715 0.5 9.55099 0.5 10.0297V12.8631C0.5 13.3418 0.641239 13.7956 0.893652 14.1418C1.14559 14.4873 1.536 14.7555 2.01521 14.7555ZM2.45307 10.4442H17.5469V12.4483H2.45307V10.4442Z"
        fill={props.color || "grey"}
        stroke={props.color || "grey"}
      />
      <Path
        d="M8.49631 19.5001H17.0263C17.3567 19.5001 17.6126 19.3153 17.7672 19.1032C17.9222 18.8906 18.0028 18.6214 18.0028 18.3465C18.0028 18.0715 17.9222 17.8023 17.7672 17.5898C17.6126 17.3776 17.3567 17.1929 17.0263 17.1929H8.49631C8.16587 17.1929 7.91001 17.3776 7.75535 17.5898C7.60036 17.8023 7.51978 18.0715 7.51978 18.3465C7.51978 18.6214 7.60036 18.8906 7.75535 19.1032C7.91001 19.3153 8.16587 19.5001 8.49631 19.5001Z"
        fill={props.color || "grey"}
        stroke={props.color || "grey"}
      />
    </Icon>
  );
};

export const LogoutIcon = (props: IIconProps) => {
  return (
    <Icon size={props.size} viewBox="0 0 22 24">
      <Mask id="path-1-inside-1_88_7" fill={props.color || "grey"}>
        <Path d="M6 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H6" />
      </Mask>
      <Path
        d="M6 19.2C6.66274 19.2 7.2 18.6627 7.2 18C7.2 17.3373 6.66274 16.8 6 16.8V19.2ZM0 16H-1.2H0ZM2 0V-1.2V0ZM6 1.2C6.66274 1.2 7.2 0.662742 7.2 0C7.2 -0.662742 6.66274 -1.2 6 -1.2V1.2ZM6 16.8H2V19.2H6V16.8ZM2 16.8C1.78783 16.8 1.58434 16.7157 1.43431 16.5657L-0.262742 18.2627C0.337374 18.8629 1.15131 19.2 2 19.2V16.8ZM1.43431 16.5657C1.28429 16.4157 1.2 16.2122 1.2 16H-1.2C-1.2 16.8487 -0.862858 17.6626 -0.262742 18.2627L1.43431 16.5657ZM1.2 16V2H-1.2V16H1.2ZM1.2 2C1.2 1.78783 1.28429 1.58434 1.43431 1.43431L-0.262742 -0.262742C-0.862858 0.337375 -1.2 1.15131 -1.2 2H1.2ZM1.43431 1.43431C1.58434 1.28429 1.78783 1.2 2 1.2V-1.2C1.15131 -1.2 0.337375 -0.862858 -0.262742 -0.262742L1.43431 1.43431ZM2 1.2H6V-1.2H2V1.2Z"
        fill={props.color || "grey"}
        mask="url(#path-1-inside-1_88_7)"
      />
      <Path
        d="M13 14L18 9L13 4"
        stroke={props.color || "grey"}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18 9H6"
        stroke={props.color || "grey"}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
};

export const CloseIcon = (props: IIconProps) => {
  return (
    <Icon size={props.size} viewBox="0 0 22 22">
      <Path
        d="M2.50983 0.430617C1.93568 -0.143539 1.00478 -0.143539 0.430625 0.430617C-0.143542 1.00477 -0.143542 1.93568 0.430625 2.50984L8.9208 11L0.430713 19.4902C-0.143453 20.0643 -0.143453 20.9953 0.430713 21.5694C1.00487 22.1435 1.93577 22.1435 2.50992 21.5694L11 13.0792L19.4901 21.5694C20.0642 22.1435 20.9952 22.1435 21.5693 21.5694C22.1434 20.9953 22.1434 20.0643 21.5693 19.4902L13.0792 11L21.5693 2.50984C22.1436 1.93568 22.1436 1.00477 21.5693 0.430617C20.9952 -0.143539 20.0644 -0.143539 19.4901 0.430617L11 8.92084L2.50983 0.430617Z"
        fill={props.color || "grey"}
      />
    </Icon>
  );
};

export const HomeIcon = (props: IIconProps) => {
  return (
    <Icon size={props.size} viewBox="0 0 23 23">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.6453 2.66652C12.4464 1.61903 10.5536 1.61903 9.35466 2.66652L2.98341 8.23315C2.82731 8.36954 2.72231 8.5472 2.68329 8.74096C1.92017 12.5302 1.86384 16.4094 2.51667 20.2156L2.67162 21.1191H6.77062V13.3305C6.77062 12.8111 7.23304 12.3901 7.80347 12.3901H15.1965C15.767 12.3901 16.2294 12.8111 16.2294 13.3305V21.1191H20.3284L20.4833 20.2156C21.1362 16.4094 21.0798 12.5302 20.3167 8.74096C20.2777 8.5472 20.1727 8.36954 20.0166 8.23315L13.6453 2.66652ZM7.92444 1.30936C9.92259 -0.436452 13.0774 -0.436452 15.0756 1.30936L21.4468 6.87599C21.9158 7.28577 22.2313 7.81956 22.3485 8.40171C23.1535 12.3988 23.2129 16.4908 22.5243 20.5059L22.2754 21.9573C22.1724 22.5575 21.6046 23 20.9374 23H15.1965C14.6261 23 14.1637 22.5789 14.1637 22.0595V14.271H8.83632V22.0595C8.83632 22.5789 8.3739 23 7.80347 23H2.06256C1.39535 23 0.827579 22.5575 0.72463 21.9573L0.475696 20.5059C-0.21294 16.4908 -0.15352 12.3988 0.651458 8.40171C0.768699 7.81956 1.08418 7.28577 1.55319 6.87599L7.92444 1.30936Z"
        fill={props.color || "grey"}
      />
    </Icon>
  );
};

export const MenuIcon = (props: IIconProps) => {
  return (
    <Icon size={props.size} viewBox="0 0 18 13">
      <Path
        d="M1.16954 0.750035L1.16954 0.750084H1.17655H16.511V0.750133L16.518 0.750035C16.5653 0.749373 16.6121 0.758037 16.6558 0.775411C16.6994 0.792783 16.7389 0.818449 16.7719 0.850678C16.8049 0.882898 16.8308 0.921026 16.8484 0.962713C16.866 1.00439 16.875 1.04894 16.875 1.09382C16.875 1.13871 16.866 1.18326 16.8484 1.22493C16.8308 1.26662 16.8049 1.30475 16.7719 1.33697C16.7389 1.3692 16.6994 1.39486 16.6558 1.41223C16.6121 1.42961 16.5653 1.43827 16.518 1.43761V1.43756H16.511H1.17655V1.43751L1.16954 1.43761C1.12223 1.43827 1.07536 1.42961 1.03171 1.41223C0.98806 1.39486 0.948649 1.3692 0.915644 1.33697C0.882648 1.30475 0.856714 1.26662 0.839105 1.22493C0.8215 1.18326 0.8125 1.1387 0.8125 1.09382C0.8125 1.04894 0.8215 1.00439 0.839105 0.962713C0.856714 0.921025 0.882648 0.882898 0.915644 0.850678C0.948649 0.818448 0.98806 0.792783 1.03171 0.775411C1.07536 0.758037 1.12223 0.749373 1.16954 0.750035ZM1.16954 5.81246L1.16954 5.81251H1.17655H16.511V5.81256L16.518 5.81246C16.5653 5.8118 16.6121 5.82046 16.6558 5.83784C16.6994 5.85521 16.7389 5.88088 16.7719 5.91311C16.8049 5.94533 16.8308 5.98345 16.8484 6.02514C16.866 6.06681 16.875 6.11136 16.875 6.15625C16.875 6.20114 16.866 6.24569 16.8484 6.28736C16.8308 6.32905 16.8049 6.36717 16.7719 6.39939C16.7389 6.43162 16.6994 6.45729 16.6558 6.47466C16.6121 6.49204 16.5653 6.5007 16.518 6.50004V6.49999H16.511H1.17655V6.49994L1.16954 6.50004C1.12223 6.5007 1.07536 6.49204 1.03171 6.47466C0.988061 6.45729 0.94865 6.43162 0.915644 6.39939C0.882648 6.36717 0.856714 6.32905 0.839105 6.28736C0.8215 6.24568 0.8125 6.20113 0.8125 6.15625C0.8125 6.11137 0.8215 6.06682 0.839105 6.02514C0.856714 5.98345 0.882649 5.94532 0.915644 5.91311C0.948649 5.88088 0.988059 5.85521 1.03171 5.83784C1.07536 5.82046 1.12223 5.8118 1.16954 5.81246ZM1.16954 10.8749L1.16954 10.8749H1.17655H16.511V10.875L16.518 10.8749C16.5653 10.8742 16.6121 10.8829 16.6558 10.9003C16.6994 10.9176 16.7389 10.9433 16.7719 10.9755C16.8049 11.0078 16.8308 11.0459 16.8484 11.0876C16.866 11.1292 16.875 11.1738 16.875 11.2187C16.875 11.2636 16.866 11.3081 16.8484 11.3498C16.8308 11.3915 16.8049 11.4296 16.7719 11.4618C16.7389 11.4941 16.6994 11.5197 16.6558 11.5371C16.6121 11.5545 16.5653 11.5631 16.518 11.5625V11.5624H16.511H1.17655V11.5624L1.16954 11.5625C1.12224 11.5631 1.07537 11.5545 1.03171 11.5371C0.988058 11.5197 0.948648 11.4941 0.915644 11.4618C0.882647 11.4296 0.856714 11.3915 0.839105 11.3498C0.8215 11.3081 0.8125 11.2636 0.8125 11.2187C0.8125 11.1738 0.8215 11.1292 0.839105 11.0876C0.856714 11.0459 0.882649 11.0078 0.915644 10.9755C0.948648 10.9433 0.988058 10.9176 1.03171 10.9003C1.07536 10.8829 1.12223 10.8742 1.16954 10.8749Z"
        fill={props.color || "grey"}
        stroke={props.color || "grey"}
      />
    </Icon>
  );
};

export const LibIcon = (props: IIconProps) => {
  return (
    <Icon size={props.size} viewBox="0 0 32 32">
      <Path
        d="M25.9306 3H8.97589C7.28042 3 5.98389 4.3 5.98389 6C5.98389 7.7 7.28042 9 8.97589 9H25.9306V29"
        stroke={props.color || "grey"}
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M25.9306 29H8.97589C7.28042 29 5.98389 27.7 5.98389 26V6"
        stroke={props.color || "grey"}
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M25.9307 6H8.97607"
        stroke={props.color || "grey"}
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.9707 9V21L13.9627 20L16.9547 21V9"
        stroke={props.color || "grey"}
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
};
