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

storiesOf("Social Icons", module)
  .addDecorator((getStory) => (
    <ProviderContainer
      Component={() => (
        <Center w="full" h="full" bg="#303030" borderWidth="2px" py="30%">
          <Text {...styles.textProps}>
            interface IiconProps{" "}
            {`{
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
  .add("Facebook", () => (
    <ProviderContainer
      Component={() => <AkIcons.SocialIcons.Face {...styles.iconProps} />}
    />
  ))
  .add("Instagram", () => (
    <ProviderContainer
      Component={() => <AkIcons.SocialIcons.Insta {...styles.iconProps} />}
    />
  ))
  .add("WhatsApp", () => (
    <ProviderContainer
      Component={() => <AkIcons.SocialIcons.Whats {...styles.iconProps} />}
    />
  ));

//   .addDecorator((getStory) => <Center>{getStory()}</Center>)
