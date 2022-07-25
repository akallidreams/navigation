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

storiesOf("Extra Icons", module)
  .addDecorator((getStory) => (
    <ProviderContainer
      Component={() => (
        <Center w="full" h="full" bg={styles.bg} borderWidth="2px" py="30%">
          <Text {...styles.textProps}>
            interface IIconProps{" "}
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
  .add("Check", () => (
    <ProviderContainer
      Component={() => <AkIcons.ExtraIcons.CheckIcon {...styles.iconProps} />}
    />
  ));

//   .addDecorator((getStory) => <Center>{getStory()}</Center>)
