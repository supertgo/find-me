import { Dispatch, ReactNode, SetStateAction } from 'react'
import { Dialog } from 'components/Dialog/Dialog';
import { Button } from 'components/Button/Button';

export type BaseModalProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
  title: string
  children: ReactNode
  trigger?: ReactNode
  confirmButtonText?: string
  isConfirmButtonDisabled?: boolean
  cancelButtonText?: string
  confirmHandler?: () => void
  actionOnClose?: () => void
}

export const BaseModal = ({
  open,
  setOpen,
  title,
  children,
  trigger,
  confirmButtonText,
  isConfirmButtonDisabled,
  confirmHandler,
  cancelButtonText,
  actionOnClose,
}: BaseModalProps) => {

  return (
    <Dialog.Root
      open={open}
      onOpenChange={() => {
        actionOnClose && actionOnClose()
        setOpen((prev) => !prev)
      }}
    >
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>

            <Dialog.Description>{children}</Dialog.Description>

            <Dialog.Footer>
              {cancelButtonText && (
                <Dialog.Close asChild>
                  <Button>
                    <span>{cancelButtonText}</span>
                  </Button>
                </Dialog.Close>
              )}
              {confirmButtonText && (
                <Button
                  onClick={confirmHandler}
                  disabled={isConfirmButtonDisabled}
                >
                  <span>{confirmButtonText}</span>
                </Button>
              )}
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
