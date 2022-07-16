import { Colors, Theme } from "Common/colors";
import { ButtonHeight, ButtonPadding } from "Common/constants";
import { Size, Variant } from "Common/enums";
import { DefaultComponentProps, HTMLComponentProps } from "Common/types";
import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from "react";
import { Loading } from "./Loading";

export interface IButtonProps extends HTMLComponentProps<HTMLButtonElement> {
  full?: boolean;
  disabled?: boolean;
  inProgress?: boolean;

  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<IButtonProps> = ({
  disabled = false,
  full = false,
  inProgress = false,
  size = Size.MD,
  variant = Variant.PRIMARY,
  htmlProps,
  children,
  onClick,
}: IButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: Theme.primary.string(),
        height: ButtonHeight[size],
        minWidth: 56,
        padding: `0 ${ButtonPadding[size]}px`,
      }}
      onClick={onClick}
    >
      {inProgress ? (
        <Loading size={8} gap={2} color={Colors.white} />
      ) : (
        children
      )}
    </button>
  );
};
