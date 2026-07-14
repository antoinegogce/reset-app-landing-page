const SITE_URL = "https://www.getresetapp.com";
const CONTACT_EMAIL = "appreset@proton.me";

export function waitlistConfirmationEmail() {
  const subject = "Tu es sur la liste — RESET";

  const text = [
    "Merci d'avoir rejoint la liste d'attente RESET.",
    "",
    "On te préviendra quand l'app sera disponible sur Android.",
    "Un seul email, au bon moment. Zéro spam.",
    "",
    SITE_URL,
    "",
    `Des questions ? ${CONTACT_EMAIL}`,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin:0;padding:32px 16px;background-color:#232E3C;font-family:Arial,Helvetica,sans-serif;color:#F1ECE3;">
    <p style="font-size:15px;line-height:1.7;color:rgba(241,236,227,0.85);">Merci d'avoir rejoint la liste d'attente RESET.</p>
    <p style="font-size:15px;line-height:1.7;color:rgba(241,236,227,0.85);">On te préviendra quand l'app sera disponible sur Android. Un seul email, au bon moment.</p>
    <p style="font-size:13px;line-height:1.6;color:rgba(241,236,227,0.5);margin-top:24px;">
      <a href="${SITE_URL}" style="color:#F1ECE3;">getresetapp.com</a> &mdash; <a href="mailto:${CONTACT_EMAIL}" style="color:#F1ECE3;">${CONTACT_EMAIL}</a>
    </p>
  </body>
</html>`;

  return { subject, text, html };
}