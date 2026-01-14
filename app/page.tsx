"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Container } from "./components/Container";
import { Divider } from "./components/Divider";
import { SectionHeading } from "./components/SectionHeading";
import { IconChart, IconLock, IconNfc, IconQr, IconUsers } from "./components/icons";

export default function Home() {
  // TODO: Décommenter quand l'app sera disponible sur le Play Store
  // const PLAY_STORE_URL =
  //   "https://play.google.com/store/apps/details?id=TODO_REPLACE_ME";
  const CONTACT_EMAIL = "contact@reset.app";

  return <Landing CONTACT_EMAIL={CONTACT_EMAIL} />;
}

function Landing({
  CONTACT_EMAIL,
}: {
  CONTACT_EMAIL: string;
}) {
  const nav = useMemo(
    () => [
      { href: "#produit", label: "Produit" },
      { href: "#comment", label: "Comment ça marche" },
      { href: "#fonctionnalites", label: "Fonctionnalités" },
      { href: "#social", label: "Social" },
      { href: "#confiance", label: "Confiance" },
      { href: "#faq", label: "FAQ" },
    ],
    [],
  );

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-[rgba(0,0,0,0.06)] bg-[rgba(250,250,250,0.72)] backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="#top"
              className="text-[12px] font-medium tracking-[0.45em] text-[var(--reset-black)]"
              aria-label="RESET — accueil"
            >
              RESET
            </a>
            <nav className="hidden items-center gap-5 text-[13px] text-[var(--reset-gray-700)] md:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-[var(--reset-black)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="primary" size="md" href="#waitlist">
              Rejoindre la liste d'attente
            </Button>
            {/* TODO: Décommenter quand l'app sera disponible
            <Button variant="primary" size="md" href={PLAY_STORE_URL}>
              Télécharger
            </Button>
            */}
          </div>
        </Container>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="pt-16 sm:pt-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3">
                  <Badge>Android</Badge>
                  <Badge>Smart Lock</Badge>
                  <Badge>NFC</Badge>
                </div>
                <h1 className="mt-5 text-[44px] font-[300] leading-[1.05] tracking-[-0.03em] text-[var(--reset-black)] sm:text-[58px]">
                  Reprends le contrôle.
                </h1>
                <p className="mt-5 max-w-xl text-[18px] leading-8 text-[var(--reset-gray-700)]">
                  <span className="text-[var(--reset-black)]">
                    RESET bloque les apps qui te grignotent du temps
                  </span>{" "}
                  — et te laisse déverrouiller temporairement, volontairement, via NFC.
                  <br />
                  <span className="text-[var(--reset-gray-accent)]">
                    Moins de friction mentale. Plus de choix.
                  </span>
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="#waitlist">Rejoindre la liste d'attente</Button>
                  {/* TODO: Décommenter quand l'app sera disponible
                  <Button href={PLAY_STORE_URL}>Télécharger RESET</Button>
                  */}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-[14px] font-medium text-[var(--reset-gray-accent)] underline decoration-[rgba(0,0,0,0.16)] underline-offset-4 hover:text-[var(--reset-black)]"
                  >
                    Contacter
                  </a>
                </div>
                <p className="mt-6 text-[13px] leading-6 text-[var(--reset-gray-accent)]">
                  Permissions expliquées en toute transparence (accès à l’usage, overlay, NFC).
                </p>
              </div>

              <div className="lg:col-span-6">
                <ProductMock />
              </div>
            </div>
          </Container>
        </section>

        <section id="produit" className="pt-20 sm:pt-24">
          <Container>
            <SectionHeading
              eyebrow="PRODUIT"
              title="Un cadre clair. Une sortie volontaire."
              description="Smart Lock pour bloquer, NFC pour déverrouiller en sessions, stats pour voir, et un social minimal pour tenir le cap."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <Card className="p-7">
                <div className="flex items-start gap-4">
                  <IconLock className="mt-0.5 text-[var(--reset-black)]" />
                  <div>
                    <div className="text-[16px] font-medium text-[var(--reset-black)]">
                      Smart Lock (3 modes)
                    </div>
                    <p className="mt-2 text-[14px] leading-7 text-[var(--reset-gray-700)]">
                      Blocage total, quota quotidien, ou plages horaires — app par app.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-7">
                <div className="flex items-start gap-4">
                  <IconNfc className="mt-0.5 text-[var(--reset-black)]" />
                  <div>
                    <div className="text-[16px] font-medium text-[var(--reset-black)]">
                      Déverrouillage temporaire via NFC
                    </div>
                    <p className="mt-2 text-[14px] leading-7 text-[var(--reset-gray-700)]">
                      Une exception devient une session: volontaire, limitée, tracée.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-7">
                <div className="flex items-start gap-4">
                  <IconChart className="mt-0.5 text-[var(--reset-black)]" />
                  <div>
                    <div className="text-[16px] font-medium text-[var(--reset-black)]">
                      Statistiques 7/30 jours
                    </div>
                    <p className="mt-2 text-[14px] leading-7 text-[var(--reset-gray-700)]">
                      Sessions, minutes déverrouillées, moyenne, et tendances lisibles.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-7">
                <div className="flex items-start gap-4">
                  <IconUsers className="mt-0.5 text-[var(--reset-black)]" />
                  <div>
                    <div className="text-[16px] font-medium text-[var(--reset-black)]">
                      Motivation sociale, sans bruit
                    </div>
                    <p className="mt-2 text-[14px] leading-7 text-[var(--reset-gray-700)]">
                      Profil @resetTag, QR, contacts, demandes d’amis, duels.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </Container>
        </section>

        {/* HOW IT WORKS */}
        <section id="comment" className="pt-20 sm:pt-24">
          <Container>
            <SectionHeading
              eyebrow="COMMENT ÇA MARCHE"
              title="Trois étapes. Zéro culpabilisation."
              description="Tu définis le cadre, tu choisis tes exceptions, et tu observes ce qui change."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              <Step
                n="01"
                title="Définis tes règles (Smart Lock)"
                text="Choisis tes apps et le type de blocage: total, quota quotidien, ou plages horaires. Ajoute des apps autorisées (ex: Spotify)."
              />
              <Step
                n="02"
                title="Déverrouille si tu le décides"
                text="Quand une app est bloquée, l’écran “Application bloquée” apparaît. Pour une exception, démarre une session de déverrouillage via scan NFC."
              />
              <Step
                n="03"
                title="Observe et tiens le cap"
                text="Suis tes sessions, tes minutes déverrouillées et les tendances 7/30 jours. Besoin d’un cadre? QR, contacts et duels."
              />
            </div>
          </Container>
        </section>

        {/* FEATURES */}
        <section id="fonctionnalites" className="pt-20 sm:pt-24">
          <Container>
            <SectionHeading
              eyebrow="FONCTIONNALITÉS"
              title="Tout ce qu’il faut. Rien de trop."
              description="Chaque pièce du produit sert un objectif: rendre le choix plus simple."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Feature
                title="Smart Lock, à ta mesure"
                detail="Blocage total, quota quotidien, ou plages horaires — par app."
                icon={<IconLock />}
              />
              <Feature
                title="Déverrouillage NFC (sessions)"
                detail="Une exception devient une session temporaire, volontaire, puis retour au cadre."
                icon={<IconNfc />}
              />
              <Feature
                title="Écran “Application bloquée” apaisant"
                detail="Quand ça bloque, c’est clair. Et tu peux ouvrir des apps autorisées."
                icon={<IconLock />}
              />
              <Feature
                title="Tableau de bord simple"
                detail="Gère tes apps bloquées et tes apps autorisées, en un endroit."
                icon={<IconUsers />}
              />
              <Feature
                title="Stats utiles, pas culpabilisantes"
                detail="Sessions, minutes déverrouillées, moyenne, graphiques 7/30 jours."
                icon={<IconChart />}
              />
              <Feature
                title="Social = motivation, pas distraction"
                detail="Profil @resetTag, QR, contacts, demandes d’amis, duels."
                icon={<IconQr />}
              />
            </div>
          </Container>
        </section>

        {/* SOCIAL */}
        <section id="social" className="pt-20 sm:pt-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="SOCIAL"
                  title="Rester aligné, à plusieurs."
                  description="Pas un réseau social. Un engagement partagé — simple, discret, utile."
                />
                <div className="mt-7 flex flex-wrap gap-2">
                  <Badge>QR</Badge>
                  <Badge>Contacts</Badge>
                  <Badge>Demandes d’amis</Badge>
                  <Badge>Duels</Badge>
                </div>
                <p className="mt-7 text-[16px] leading-7 text-[var(--reset-gray-700)]">
                  Crée ton <span className="text-[var(--reset-black)]">@resetTag</span>{" "}
                  pour rendre ton intention simple à partager. Ajoute des contacts, accepte des
                  demandes, et lance des duels quand tu veux un cadre léger — sans bruit.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="p-6">
                    <IconQr className="text-[var(--reset-black)]" />
                    <div className="mt-4 text-[15px] font-medium text-[var(--reset-black)]">
                      QR rapide
                    </div>
                    <p className="mt-2 text-[13px] leading-6 text-[var(--reset-gray-700)]">
                      Un scan. Un lien. C’est tout.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <IconUsers className="text-[var(--reset-black)]" />
                    <div className="mt-4 text-[15px] font-medium text-[var(--reset-black)]">
                      Contacts & demandes
                    </div>
                    <p className="mt-2 text-[13px] leading-6 text-[var(--reset-gray-700)]">
                      Tu choisis qui te suit, quand.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <IconLock className="text-[var(--reset-black)]" />
                    <div className="mt-4 text-[15px] font-medium text-[var(--reset-black)]">
                      Duels
                    </div>
                    <p className="mt-2 text-[13px] leading-6 text-[var(--reset-gray-700)]">
                      Motivation douce, pas pression.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* TRUST */}
        <section id="confiance" className="pt-20 sm:pt-24">
          <Container>
            <SectionHeading
              eyebrow="CONFIANCE"
              title="Clair sur ce que RESET fait — et pourquoi."
              description="Sobriété, transparence, et langage simple sur les permissions Android."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <Card className="p-7">
                <div className="text-[16px] font-medium text-[var(--reset-black)]">
                  Confidentialité, sans promesses marketing
                </div>
                <p className="mt-3 text-[14px] leading-7 text-[var(--reset-gray-700)]">
                  RESET est pensé pour rester calme: pas d’intrusion inutile. Les données visibles
                  dans l’app (règles, sessions, stats) servent d’abord à te donner de la clarté.
                </p>
                <p className="mt-3 text-[14px] leading-7 text-[var(--reset-gray-700)]">
                  Les fonctions sociales (profil/contacts/duels) nécessitent certaines informations
                  pour fonctionner — et elles sont présentées clairement dans l’app.
                </p>
              </Card>
              <Card className="p-7">
                <div className="text-[16px] font-medium text-[var(--reset-black)]">
                  Permissions Android, expliquées
                </div>
                <ul className="mt-4 space-y-3 text-[14px] leading-7 text-[var(--reset-gray-700)]">
                  <li>
                    <span className="text-[var(--reset-black)]">
                      Statistiques d’utilisation
                    </span>
                    : appliquer Smart Lock et afficher tes stats.
                  </li>
                  <li>
                    <span className="text-[var(--reset-black)]">
                      Afficher par-dessus d’autres apps (overlay)
                    </span>
                    : afficher “Application bloquée” au bon moment.
                  </li>
                  <li>
                    <span className="text-[var(--reset-black)]">NFC</span>: démarrer une session de
                    déverrouillage via scan.
                  </li>
                  <li>
                    <span className="text-[var(--reset-black)]">Caméra (QR)</span>: scanner un QR
                    pour ajouter un contact / lancer un duel (si utilisé).
                  </li>
                </ul>
              </Card>
            </div>
          </Container>
        </section>

        {/* WAITLIST + CTA */}
        <section id="waitlist" className="pt-20 sm:pt-24">
          <Container>
            <Card className="overflow-hidden">
              <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0))] p-8 sm:p-10">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <div className="text-[12px] font-medium tracking-[0.18em] text-[var(--reset-gray-accent)]">
                      CONVERSION
                    </div>
                    <h3 className="mt-2 text-[28px] font-[300] leading-[1.15] tracking-[-0.02em] text-[var(--reset-black)]">
                      Un cadre premium, dans une app calme.
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[var(--reset-gray-700)]">
                      Télécharge RESET, rejoins la liste, ou écris-nous. Zéro spam. Réponse rapide.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {/* TODO: Décommenter quand l'app sera disponible
                      <Button href={PLAY_STORE_URL}>Télécharger</Button>
                      */}
                      <Button variant="secondary" href={`mailto:${CONTACT_EMAIL}`}>
                        Contacter
                      </Button>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <WaitlistForm />
                  </div>
                </div>
              </div>
            </Card>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="pt-20 pb-24 sm:pt-24 sm:pb-28">
          <Container>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, réponses."
              description="Direct, simple, sans surpromesse."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <Faq
                q="Est-ce que je peux contourner le blocage ?"
                a="RESET est conçu pour rendre le contournement moins automatique et plus conscient (écran de blocage + déverrouillage en session). L’objectif: te remettre face à un choix, pas te piéger."
              />
              <Faq
                q="Le NFC est-il obligatoire ?"
                a="Non: le blocage Smart Lock fonctionne sans NFC. Le NFC sert à déverrouiller temporairement via des sessions, de façon volontaire."
              />
              <Faq
                q="Quelles apps puis-je autoriser ?"
                a="Celles que tu veux garder accessibles même quand le reste est bloqué: musique, navigation, messagerie essentielle… Tu définis ta liste d’apps autorisées."
              />
              <Faq
                q="Quelles données sont stockées ?"
                a="Les éléments nécessaires au produit: tes règles (apps bloquées/autorisées), tes sessions et tes statistiques. Pour le social, ton profil @resetTag et les éléments liés (contacts/QR) sont utilisés pour permettre ces fonctions."
              />
              <Faq
                q="Ça marche sans internet ?"
                a="Les fonctions de blocage, NFC et stats peuvent fonctionner localement. Les fonctions sociales (contacts/demandes/duels) peuvent nécessiter une connexion selon l’usage."
              />
              <Faq q="Android requis ?" a="Oui. RESET est une app Android." />
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-[rgba(0,0,0,0.06)] bg-[rgba(250,250,250,0.6)]">
        <Container className="py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-[12px] font-medium tracking-[0.45em] text-[var(--reset-black)]">
                RESET
              </div>
              <div className="mt-2 text-[13px] text-[var(--reset-gray-accent)]">
                Reprends le contrôle.
              </div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[var(--reset-gray-accent)]">
              <a className="hover:text-[var(--reset-black)]" href={`mailto:${CONTACT_EMAIL}`}>
                Contact
              </a>
              <a className="hover:text-[var(--reset-black)]" href="#confiance">
                Confidentialité
              </a>
              <a className="hover:text-[var(--reset-black)]" href="#faq">
                FAQ
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <Card className="p-7">
      <div className="text-[12px] font-medium tracking-[0.22em] text-[var(--reset-gray-accent)]">
        {n}
      </div>
      <div className="mt-3 text-[16px] font-medium text-[var(--reset-black)]">{title}</div>
      <p className="mt-2 text-[14px] leading-7 text-[var(--reset-gray-700)]">{text}</p>
    </Card>
  );
}

function Feature({
  title,
  detail,
  icon,
}: {
  title: string;
  detail: string;
  icon: ReactNode;
}) {
  return (
    <Card className="p-7">
      <div className="flex items-start gap-4">
        <div className="mt-0.5 text-[var(--reset-black)]">{icon}</div>
        <div>
          <div className="text-[16px] font-medium text-[var(--reset-black)]">{title}</div>
          <p className="mt-2 text-[14px] leading-7 text-[var(--reset-gray-700)]">{detail}</p>
        </div>
      </div>
    </Card>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <Card className="p-0">
      <details className="group p-7">
        <summary className="cursor-pointer list-none text-[15px] font-medium text-[var(--reset-black)]">
          <div className="flex items-center justify-between gap-6">
            <span>{q}</span>
            <span className="text-[var(--reset-gray-accent)] transition-transform group-open:rotate-45">
              +
            </span>
          </div>
        </summary>
        <Divider className="my-5" />
        <p className="text-[14px] leading-7 text-[var(--reset-gray-700)]">{a}</p>
      </details>
    </Card>
  );
}

function ProductMock() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <Badge>Application bloquée</Badge>
          <IconLock className="text-[var(--reset-black)]" />
        </div>
        <div className="mt-5 rounded-[var(--reset-radius-md)] border border-[var(--reset-gray-100)] bg-[var(--reset-offwhite)] p-4">
          <div className="text-[14px] font-medium text-[var(--reset-black)]">Instagram</div>
          <div className="mt-1 text-[12px] text-[var(--reset-gray-accent)]">
            Smart Lock — quota atteint
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>Apps autorisées</Badge>
            <Badge>Spotify</Badge>
            <Badge>Maps</Badge>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <Badge tone="success">Déverrouiller</Badge>
          <Badge tone="danger">Reverrouiller</Badge>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <Badge>Scan NFC</Badge>
          <IconNfc className="text-[var(--reset-black)]" />
        </div>
        <div className="mt-5 rounded-[var(--reset-radius-md)] border border-[var(--reset-gray-100)] bg-[var(--reset-offwhite)] p-4">
          <div className="text-[14px] font-medium text-[var(--reset-black)]">Session de déverrouillage</div>
          <div className="mt-1 text-[12px] text-[var(--reset-gray-accent)]">
            10 minutes — volontaire, temporaire
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-[rgba(0,0,0,0.08)]">
            <div className="h-2 w-[62%] rounded-full bg-[rgba(0,0,0,0.22)]" />
          </div>
        </div>
        <div className="mt-5 text-[12px] text-[var(--reset-gray-accent)]">
          Un geste physique pour faire une exception.
        </div>
      </Card>

      <Card className="p-6 sm:col-span-2">
        <div className="flex items-center justify-between">
          <Badge>Stats 7/30 jours</Badge>
          <IconChart className="text-[var(--reset-black)]" />
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <Metric label="Sessions" value="12" />
          <Metric label="Minutes déverrouillées" value="84" />
          <Metric label="Moyenne" value="7 min" />
        </div>
        <div className="mt-5 flex items-end justify-between gap-2 rounded-[var(--reset-radius-md)] border border-[var(--reset-gray-100)] bg-[var(--reset-offwhite)] p-4">
          {["30", "44", "26", "52", "38", "60", "40"].map((h, i) => (
            <div
              key={i}
              className="w-full rounded-[10px] bg-[rgba(0,0,0,0.16)]"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--reset-radius-md)] border border-[var(--reset-gray-100)] bg-[var(--reset-white)] p-4">
      <div className="text-[12px] text-[var(--reset-gray-accent)]">{label}</div>
      <div className="mt-2 text-[18px] font-medium text-[var(--reset-black)]">{value}</div>
    </div>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error ?? "Impossible d’enregistrer l’email.");
        return;
      }

      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
      setError("Erreur réseau. Réessaie dans un instant.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[var(--reset-radius-lg)] border border-[var(--reset-gray-100)] bg-[var(--reset-white)] p-6">
      <div className="text-[15px] font-medium text-[var(--reset-black)]">Rejoindre la liste</div>
      <p className="mt-2 text-[13px] leading-6 text-[var(--reset-gray-700)]">
        Un email. Une seule utilité: te prévenir. Zéro spam.
      </p>
      <label className="mt-5 block">
        <span className="sr-only">Email</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="ton@email.com"
          className="h-11 w-full rounded-[var(--reset-radius-md)] border border-[var(--reset-gray-100)] bg-[var(--reset-offwhite)] px-4 text-[14px] text-[var(--reset-black)] placeholder:text-[var(--reset-gray-accent)]"
        />
      </label>
      <div className="mt-4 flex items-center gap-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-11 flex-1 rounded-[var(--reset-radius-md)] bg-[var(--reset-black)] text-[14px] font-medium text-[var(--reset-white)] transition-colors hover:bg-[#101010] disabled:opacity-60"
        >
          {status === "loading" ? "Envoi…" : "Rejoindre"}
        </button>
        <a
          href="#faq"
          className="h-11 shrink-0 rounded-[var(--reset-radius-md)] border border-[var(--reset-gray-100)] px-4 text-[14px] font-medium text-[var(--reset-gray-accent)] hover:bg-[rgba(0,0,0,0.03)] hover:text-[var(--reset-black)]"
        >
          Lire la FAQ
        </a>
      </div>
      {status === "ok" ? (
        <p className="mt-4 text-[13px] leading-6 text-[var(--reset-green)]">
          OK — tu es sur la liste.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 text-[13px] leading-6 text-[var(--reset-red)]">{error}</p>
      ) : null}
    </form>
  );
}
