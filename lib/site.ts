export const siteMeta = {
  owner: "Tong Pan",
  title: "Tong Pan | Digital Garden OS",
  description: "A digital garden of writing, maps, and experiments.",
  url: "https://toto-p.me"
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/trails", label: "Trails" },
  { href: "/garden", label: "Garden" }
];

export const nowItems = [
  "Shaping a long-lived personal system where markdown stays the source of truth.",
  "Collecting map fragments, walking notes, and route ideas into more readable trail logs.",
  "Using short public notes as a way to think before a project becomes coherent."
];

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}
