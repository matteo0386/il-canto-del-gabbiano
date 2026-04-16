const WHATSAPP_NUMBER = "393923048053";
// TODO: verificare il prefisso internazionale. Il brief locale indica 3923048053.

const form = document.querySelector("#whatsapp-form");
const statusBox = document.querySelector("#form-status");

const fields = {
  nome: document.querySelector("#nome"),
  cognome: document.querySelector("#cognome"),
  email: document.querySelector("#email"),
  telefono: document.querySelector("#telefono"),
  messaggio: document.querySelector("#messaggio"),
};

const setFieldError = (name, message) => {
  const field = fields[name];
  const error = document.querySelector(`[data-error-for="${name}"]`);

  if (!field || !error) return;

  field.setAttribute("aria-invalid", message ? "true" : "false");
  error.textContent = message;
};

const getCleanValue = (field) => field.value.trim().replace(/\s+/g, " ");

const validateForm = () => {
  const values = {
    nome: getCleanValue(fields.nome),
    cognome: getCleanValue(fields.cognome),
    email: getCleanValue(fields.email),
    telefono: getCleanValue(fields.telefono),
    messaggio: fields.messaggio.value.trim(),
  };

  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phonePattern = /^[+()0-9\s.-]{7,}$/;

  if (!values.nome) errors.nome = "Inserisci il tuo nome.";
  if (!values.cognome) errors.cognome = "Inserisci il tuo cognome.";
  if (!emailPattern.test(values.email)) errors.email = "Inserisci un'email valida.";
  if (!phonePattern.test(values.telefono)) errors.telefono = "Inserisci un telefono valido.";

  Object.keys(fields).forEach((name) => setFieldError(name, errors[name] || ""));

  return { values, errors };
};

const buildWhatsAppMessage = (values) => {
  const message = values.messaggio || "Nessuna nota aggiuntiva.";

  return [
    `Ciao, sono ${values.nome} ${values.cognome}.`,
    "Ti contatto dalla landing dell'evento.",
    `Email: ${values.email}`,
    `Telefono: ${values.telefono}`,
    `Messaggio: ${message}`,
    "Vorrei ricevere informazioni sul laboratorio/residenza artistica di teatro con alloggio dall'11 al 17 maggio 2026.",
  ].join("\n");
};

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { values, errors } = validateForm();
    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      statusBox.textContent = "Controlla i campi evidenziati e riprova.";
      const firstInvalidField = Object.keys(errors)[0];
      fields[firstInvalidField]?.focus();
      return;
    }

    statusBox.textContent = "";
    const encodedMessage = encodeURIComponent(buildWhatsAppMessage(values));
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!whatsappWindow) {
      window.location.href = whatsappUrl;
    }
  });

  Object.values(fields).forEach((field) => {
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") {
        validateForm();
      }
    });
  });
}
