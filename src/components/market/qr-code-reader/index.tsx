import React, { useRef } from "react"

import { Modal, ModalProps } from "react-native"

import { CameraView } from "expo-camera"

import { s } from "./style"
import { Button } from "@/components/button"

interface Props extends ModalProps {
  closeModal: () => void
}

export function QrCodeModal({ ...rest }: Props) {
  const qrCodeRef = useRef(false)

  return (
    <Modal {...rest} style={s.container}>
      <CameraView
        style={{ flex: 1 }}
        facing="back"
        onBarcodeScanned={({ data }) => {
          if (data && !qrCodeRef.current) {
            qrCodeRef.current = true
            setTimeout(() => console.log(data), 500)
          }
        }}
      />

      <Button style={s.button} onPress={() => rest.closeModal()}>
        <Button.Title>Voltar</Button.Title>
      </Button>
    </Modal>
  )
}
