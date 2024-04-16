import { SidebarChildItem, SidebarItem } from "../../types/admin/sidebar";
import { GoHome } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";

const child = (
  href: SidebarChildItem["href"],
  label: SidebarChildItem["label"]
) => ({
  href: href,
  label: label,
});

const item = (
  label: SidebarItem["label"],
  href: SidebarItem["href"],
  icon: SidebarItem["icon"],
  ...childs: SidebarItem["childs"]
) => ({
  label: label,
  href: href,
  icon: icon,
  childs: childs.map(({ href, label }: SidebarChildItem) => child(href, label)),
});

const ADMIN_SIDEBAR_DATA = [
  item("Home", "/admin/home", GoHome),
  item("User", "/admin/users", FaRegUserCircle ),
];

export { ADMIN_SIDEBAR_DATA };
