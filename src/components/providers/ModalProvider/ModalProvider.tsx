import Container from "@components/Container";
import { Text } from "@components/Text";
import Touchable from "@components/Touchable";
import React, { createContext, useContext, useMemo, useState } from "react";
import Modal from "react-native-modal";

const ModalContext = createContext({
  showModal: ({ title, description }: IModal) => {},
  hideModal: () => {},
});

interface IModal {
  title: string;
  description: string;
}

const ModalProvider: React.FC = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const showModal = ({ title, description }: IModal) => {
    setTitle(title);
    setDescription(description);
    setIsVisible(true);
  };

  const hideModal = () => {
    setTitle("");
    setDescription("");
    setIsVisible(false);
  };

  const defaultContext = useMemo(
    () => ({
      showModal,
      hideModal,
    }),
    [showModal, hideModal]
  );

  return (
    <ModalContext.Provider value={defaultContext}>
      <Modal isVisible={isVisible}>
        <Container
          justifyContent="center"
          alignSelf="center"
          bgColor="white"
          borderRadius={20}
          p={20}
        >
          <Text fontSize={18} fontWeight="bold" textAlign="center">
            {title}
          </Text>
          <Text fontSize={14} textAlign="center" mt={12}>
            {description}
          </Text>
          <Touchable onPress={hideModal}>
            <Container
              bgColor="pink"
              borderRadius={4}
              p={12}
              mt={20}
              mh={40}
              alignItems="center"
            >
              <Text color="white" fontWeight="bold">
                Ok, entendi
              </Text>
            </Container>
          </Touchable>
        </Container>
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
