import { Button } from "@/components/button"
import React from "react"

import { View, Text, Modal, ModalProps } from "react-native"

import { s } from "./style"
import { CameraView } from "expo-camera"

interface Props extends ModalProps {
  closeModal: () => void
}

export function QrCodeModal({ ...rest }: Props) {
  return (
    <Modal {...rest} style={s.container}>
      <CameraView style={{ flex: 1 }} />
      <Button style={s.button} onPress={() => rest.closeModal()}>
        <Button.Title>Voltar</Button.Title>
      </Button>
    </Modal>
  )
}
