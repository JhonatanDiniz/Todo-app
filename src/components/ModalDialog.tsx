import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react"

interface ModalDialogProps {
  textButton: string | ReactNode
  styleClass?: string
  titleModal: string
  children: ReactNode
}

export default function ModalDialog({textButton, styleClass, titleModal, children}: ModalDialogProps){
  return(
    <Dialog>
      <DialogTrigger asChild className={styleClass}>{textButton}</DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{titleModal}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}