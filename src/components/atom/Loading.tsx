import Color from "color";
import { Colors, Theme } from "Common/colors";
import { Size, Variant } from "Common/enums";
import { DefaultComponentProps, HTMLComponentProps } from "Common/types";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

export interface ILoadingProps extends HTMLComponentProps<HTMLDivElement> {
  size: number;
  gap: number;
  loading?: boolean;
  color?: Color;
}

export const Loading: React.FC<ILoadingProps> = ({
  loading = true,
  size = 8,
  gap = 4,
  variant = Variant.PRIMARY,
  color = Theme.primary,
  htmlProps,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap,
      }}
      {...htmlProps}
    >
      <LoadingDot size={size} color={color} />
      <LoadingDot size={size} color={color} delay={0.2} />
      <LoadingDot size={size} color={color} delay={0.4} />
    </div>
  );
};

interface LoadingDotProps {
  size?: number;
  delay?: number;
  color?: Color;
}

export const LoadingDot: React.FC<LoadingDotProps> = ({
  size,
  color = Theme.primary,
  delay = 0,
}) => {
  return (
    <motion.div
      style={{
        height: size,
        width: size,
        backgroundColor: color.string(),
        borderRadius: 20,
      }}
      transition={{
        delay,
        type: "spring",
        repeatType: "reverse",
        repeat: Infinity,
      }}
      initial={{ y: -4 }}
      animate={{ y: 4, opacity: 0.9 }}
    />
  );
};
