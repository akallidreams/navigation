import { storiesOf } from "@storybook/react-native";
import { AkIcons } from "../../index";
import { Center, Link, NativeBaseProvider, Text } from "native-base";
import { styles } from "./styles";

const ProviderContainer = ({ Component }) => (
  <NativeBaseProvider>
    <Center h="full" w="full">
      <Component />
    </Center>
  </NativeBaseProvider>
);

storiesOf("Navigation Icons", module)
  .addDecorator((getStory) => (
    <ProviderContainer
      Component={() => (
        <Center w="full" h="full" bg={styles.bg} borderWidth="2px" py="30%">
          <Text {...styles.textProps}>
            {`interface iconProps {
              size?: string;
              color?: string;
              }`}
          </Text>
          {getStory()}
          <Link
            _text={{ ...styles.textProps }}
            href="https://www.figma.com/files/project/57125856/Akalli?fuid=1089570626196579450"
          >
            Acess our FIGMA
          </Link>
        </Center>
      )}
    />
  ))
  .add("Account", () => (
    <ProviderContainer
      Component={() => <AkIcons.NavIcons.AccountIcon {...styles.iconProps} />}
    />
  ))
  .add("Close", () => (
    <ProviderContainer
      Component={() => <AkIcons.NavIcons.CloseIcon {...styles.iconProps} />}
    />
  ))
  .add("Home", () => (
    <ProviderContainer
      Component={() => <AkIcons.NavIcons.HomeIcon {...styles.iconProps} />}
    />
  ))
  .add("Library", () => (
    <ProviderContainer
      Component={() => <AkIcons.NavIcons.LibIcon {...styles.iconProps} />}
    />
  ))
  .add("Logout", () => (
    <ProviderContainer
      Component={() => <AkIcons.NavIcons.LogoutIcon {...styles.iconProps} />}
    />
  ))
  .add("Menu", () => (
    <ProviderContainer
      Component={() => <AkIcons.NavIcons.MenuIcon {...styles.iconProps} />}
    />
  ))
  .add("Policy", () => (
    <ProviderContainer
      Component={() => <AkIcons.NavIcons.PolicyIcon {...styles.iconProps} />}
    />
  ))
  .add("Profile", () => (
    <ProviderContainer
      Component={() => <AkIcons.NavIcons.ProfileIcon {...styles.iconProps} />}
    />
  ))
  .add("Proof", () => (
    <ProviderContainer
      Component={() => <AkIcons.NavIcons.ProofIcon {...styles.iconProps} />}
    />
  ))
  .add("Terms", () => (
    <ProviderContainer
      Component={() => <AkIcons.NavIcons.TermsIcon {...styles.iconProps} />}
    />
  ));

//   .addDecorator((getStory) => <Center>{getStory()}</Center>)
