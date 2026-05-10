import { getNavigation, getSiteBrand, getCtaButton } from "@/lib/supabase/queries";
import { ClientNavbar } from "./client-navbar";

export async function Navbar() {
  const navLinks = await getNavigation();
  const siteBrand = await getSiteBrand();
  const ctaButton = await getCtaButton();

  return <ClientNavbar navLinks={navLinks} siteBrand={siteBrand} ctaButton={ctaButton} />;
}
