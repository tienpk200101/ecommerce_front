import React from "react";

type ChildrenWithProps = {
  children?: React.ReactNode;
} & React.HTMLProps<HTMLElement>;

type WithChildren<T = {}> = T & { children?: React.ReactNode };

export type { ChildrenWithProps, WithChildren };
