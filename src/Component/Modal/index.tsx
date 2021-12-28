import React from "react";
import Modal from "react-modal";
import { Container, Text } from "..";

interface Styles {
  content?: React.CSSProperties | undefined;
  overlay?: React.CSSProperties | undefined;
}

interface Classes {
  base: string;
  afterOpen: string;
  beforeClose: string;
}

interface Aria {
  /** Defines a string value that labels the current element. */
  labelledby?: string | undefined;
  /** Identifies the element (or elements) that describes the object. */
  describedby?: string | undefined;
  /** Indicates whether an element is modal when displayed. */
  modal?: boolean | "false" | "true" | undefined;
}

/** Describes overlay and content element references passed to onAfterOpen function */
interface OnAfterOpenCallbackOptions {
  /** overlay element reference */
  overlayEl: Element;
  /** content element reference */
  contentEl: HTMLDivElement;
}

/** Describes unction that will be run after the modal has opened */
interface OnAfterOpenCallback {
  (obj?: OnAfterOpenCallbackOptions): void;
}

interface props {
  children?: React.ReactNode;
  isOpen: boolean;
  style?: Styles | undefined;
  portalClassName?: string | undefined;
  bodyOpenClassName?: string | null | undefined;
  htmlOpenClassName?: string | null | undefined;
  className?: string | Classes | undefined;
  overlayClassName?: string | Classes | undefined;
  appElement?:
    | HTMLElement
    | HTMLElement[]
    | HTMLCollection
    | NodeList
    | undefined;
  onAfterOpen?: OnAfterOpenCallback | undefined;
  onAfterClose?(): void;
  onRequestClose?(event: React.MouseEvent | React.KeyboardEvent): void;
  closeTimeoutMS?: number | undefined;
  ariaHideApp?: boolean | undefined;
  shouldFocusAfterRender?: boolean | undefined;
  shouldCloseOnOverlayClick?: boolean | undefined;
  shouldCloseOnEsc?: boolean | undefined;
  shouldReturnFocusAfterClose?: boolean | undefined;
  preventScroll?: boolean | undefined;
  parentSelector?(): HTMLElement;
  aria?: Aria | undefined;
  data?: any;
  role?: string | null | undefined;
  contentLabel?: string | undefined;
  contentRef?: ((instance: HTMLDivElement) => void) | undefined;
  overlayRef?: ((instance: HTMLDivElement) => void) | undefined;
  overlayElement?:
    | ((
        props: React.ComponentPropsWithRef<"div">,
        contentEl: React.ReactElement
      ) => React.ReactElement)
    | undefined;
  contentElement?:
    | ((
        props: React.ComponentPropsWithRef<"div">,
        children: React.ReactNode
      ) => React.ReactElement)
    | undefined;
  testId?: string | undefined;
  id?: string | undefined;
}

const ModalComponent: React.FC<props> = (props) => {
  
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      style={props.style}
      overlayClassName={props.overlayClassName}
    >
      {props.children}
    </Modal>
  );
};

export default ModalComponent;