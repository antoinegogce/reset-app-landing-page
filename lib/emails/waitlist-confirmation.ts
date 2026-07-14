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
    <title>${subject}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#232E3C;font-family:Arial,Helvetica,sans-serif;color:#F1ECE3;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#232E3C;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:520px;background-color:#2a3647;border:1px solid rgba(241,236,227,0.08);border-radius:16px;">
            <tr>
              <td style="padding:32px 28px;">
                <p style="margin:0 0 12px;font-family:monospace;font-size:11px;letter-spacing:0.45em;text-transform:uppercase;color:#F1ECE3;">RESET</p>
                <h1 style="margin:0 0 16px;font-size:28px;font-weight:300;line-height:1.15;color:#F1ECE3;">Tu es sur la liste.</h1>
                <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:rgba(241,236,227,0.75);">
                  Merci d'avoir rejoint la liste d'attente. On te préviendra quand RESET sera disponible sur Android.
                </p>
                <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:rgba(241,236,227,0.75);">
                  Un seul email, au bon moment. Zéro spam.
                </p>
                <a href="${SITE_URL}" style="display:inline-block;padding:12px 18px;border-radius:14px;background-color:#F1ECE3;color:#232E3C;font-size:14px;font-weight:600;text-decoration:none;">
                  Voir le site
                </a>
                <p style="margin:28px 0 0;font-size:13px;line-height:1.6;color:rgba(241,236,227,0.55);">
                  Des questions ? <a href="mailto:${CONTACT_EMAIL}" style="color:#F1ECE3;">${CONTACT_EMAIL}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, text, html };
}