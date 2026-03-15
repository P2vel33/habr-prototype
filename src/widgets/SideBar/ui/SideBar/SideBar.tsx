import { useState } from "react";
import cls from "./SideBar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/widgets/ThemeSwither";
import { LangSwitcher } from "@/widgets/LangSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div
        className={classNames(cls.switchers, {
          [cls["switchers-collapsed"]]: collapsed,
        })}
      >
        <ThemeSwitcher />
        <LangSwitcher className={classNames("", { [cls.lang]: !collapsed })} />
      </div>
    </div>
  );
};
