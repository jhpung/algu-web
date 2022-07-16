import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Size, Variant } from "./enums";

export interface DefaultComponentProps {
  size?: Size;
  variant?: Variant;

  children?: React.ReactNode;
}

export interface HTMLComponentProps<ElementType extends HTMLElement>
  extends DefaultComponentProps {
  htmlProps?: DetailedHTMLProps<HTMLAttributes<ElementType>, ElementType>;
}
