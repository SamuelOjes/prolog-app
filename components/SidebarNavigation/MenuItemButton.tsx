import React from "react";
import { Button } from "@components/Button";
import { ListItem, Anchor, Icon } from "./MenuItemLink";

type MenuItemProps = {
  className?: string;
  text: string;
  iconSrc: string;
  onClick: () => void;
  isCollapsed: boolean;
};

export function MenuItemButton({
  className,
  text,
  onClick,
  iconSrc,
  isCollapsed,
}: MenuItemProps) {
  return (
    <ListItem className={className}>
      <Anchor as={Button} onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Icon src={iconSrc} alt={`${text} icon`} /> {!isCollapsed && text}
      </Anchor>
    </ListItem>
  );
}
