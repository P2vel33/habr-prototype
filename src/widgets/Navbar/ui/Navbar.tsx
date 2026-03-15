import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwither";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className || ""])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to={"/"} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink to={"/about"}>О сайте</AppLink>
      </div>
    </div>
  );
};
