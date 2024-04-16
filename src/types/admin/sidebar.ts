import { IconType } from "react-icons/lib";

type SidebarChildItem = {
  href: string;
  label: string;
};

type SidebarItem = {
  label: string;
  href: string;
  icon: React.FC | IconType;
  childs: SidebarChildItem[];
};

type Filter = {
  limit?: number;
  query?: string;
  candidate_name?: string;
  search?: string;
};

type StatusBoxType = 'default' | 'public';

export type { SidebarChildItem, SidebarItem, Filter, StatusBoxType };
