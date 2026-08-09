import {
  LayoutDashboard,
  GraduationCap,
  Cloud,
  MonitorSmartphone,
  CalendarClock,
  Smartphone,
  Fingerprint,
  UserRoundCheck,
  Bitcoin,
  FileText,
} from "lucide-react";

// Icon keys are stored as strings on the project data so that module stays
// serializable and free of React imports; the mapping to components lives here.
export const ENTERPRISE_ICONS = {
  cms: FileText,
  lms: GraduationCap,
  cloud: Cloud,
  monitor: MonitorSmartphone,
  meeting: CalendarClock,
  mdm: Smartphone,
  attendance: Fingerprint,
  visitor: UserRoundCheck,
  crypto: Bitcoin,
  dashboard: LayoutDashboard,
  default: LayoutDashboard,
};
