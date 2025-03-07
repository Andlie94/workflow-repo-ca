import { register } from "../../api/auth/register.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import MESSAGES from "../../constants/messages.js";

async function handleRegisterSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const messageContainer = document.querySelector("#message-container");

  messageContainer.innerHTML = "";

  const formData = new FormData(form);
  const profile = Object.fromEntries(formData.entries());

  try {
    await register(profile);
    displayMessage(
      messageContainer,
      "success",
      MESSAGES.en.registrationSuccess,
    );
    form.reset();
  } catch (error) {
    displayMessage(messageContainer, "error", error.message);
  }
}

export function registerFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", handleRegisterSubmit);
  }
}
