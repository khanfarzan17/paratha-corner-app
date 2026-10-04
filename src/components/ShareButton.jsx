import { useState } from "react";
import { Icon } from "./Icons";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function share() {
    const data = {
      title: "PARATHA CORNER",
      text: "Fresh • Hot • Homemade parathas",
      url: "https://paratha-corner-blr.netlify.app",
    };
    try {
      if (navigator.share) return await navigator.share(data);
      await navigator.clipboard.writeText(data.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* user cancelled */
    }
  }

  return (
    <button type="button" className="btn ghost" onClick={share}>
      <Icon name="share" size={20} /> {copied ? "Link copied" : "Share"}
    </button>
  );
}
