import React from "react";
import { SvgProps } from "react-native-svg";

import Container from "@components/Container";
import { Text } from "@components/Text";
import { colors } from "@styles/colors";
import Touchable from "@components/Touchable";

interface ICard {
  Icon: Function;
  title: string;
  onPress: () => void;
}
const Card: React.FC<ICard> = ({ Icon, title, onPress }) => {
  return (
    <Touchable onPress={onPress}>
      <Container
        width={120}
        height={104}
        bgColor="white"
        borderRadius={4}
        shadow
        p={16}
      >
        <Icon color={colors.pink} />
        <Container mt={33}>
          <Text fontSize={14} fontWeight="bold">
            {title}
          </Text>
        </Container>
      </Container>
    </Touchable>
  );
};

export default Card;
