import React, { FC } from "react";
import { clsx } from "clsx";

import "./Button.scss";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "fluid";

const sizeMap: Record<ButtonSize, "sm" | "md" | "lg" | "xl" | "xxl"> = {
  xs: "sm",
  sm: "sm",
  md: "md",
  lg: "md",
  fluid: "md",
};

interface Props {
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "stroke";
  size?: ButtonSize;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isLoading?: boolean;
}

const Button: FC<Props> = ({
  children,
  onClick,
  variant = "contained",
  size = "md",
  disabled = false,
  type = "button",
  isLoading = false,
}) => {
  // const withIcon = typeof iconSrc === "string";
  return (
    <button
      className={clsx("button")}
      disabled={disabled || isLoading}
      data-variant={variant}
      data-size={size}
      data-testid="button-component"
      type={type}
      onClick={onClick}
    >
      {/* {isLoading && (
        <div className={s.loading}>
          <Spinner size={sizeMap[size]} />
        </div>
      )} */}

      {/* {withIcon && !isLoading && (
        <Icon src={iconSrc} alt={String(children)} size="sm" />
      )} */}

      <span style={{ visibility: isLoading ? "hidden" : "visible" }}>
        {children}
      </span>
    </button>
  );
};

export default Button;
